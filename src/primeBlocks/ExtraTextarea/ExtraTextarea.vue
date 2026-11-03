<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue';
import { IconAlertCircle, IconInfoCircle, IconX } from '@tabler/icons-vue';
import { FloatLabel, Textarea } from 'primevue';
import type { ExtraTextareaProps } from './types';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ExtraTextareaProps>(), {
  labelPosition: 'default',
  resize: 'none',
});

const attrs = useAttrs();
const autoTextareaId = useId();

const isFloatLabel = computed(() => props.labelPosition === 'float');
const isDefaultLabel = computed(() => props.labelPosition === 'default');

const textareaId = computed(() =>
  typeof attrs.id === 'string' && attrs.id ? attrs.id : autoTextareaId
);

const primeSize = computed<'small' | 'large' | undefined>(() => {
  if (props.size === 'sm') {
    return 'small';
  }

  if (props.size === 'lg') {
    return 'large';
  }

  return undefined;
});

const resizeClass = computed(() => {
  if (props.resize === 'none') {
    return 'extra-textarea--resize-none';
  }
  if (props.resize === 'vertical') {
    return 'extra-textarea--resize-vertical';
  }
  return null;
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();

const onClear = () => {
  if (!props.disabled && !props.readonly) {
    onUpdateModelValue('');
  }
};

const onUpdateModelValue = (value: string) => {
  emit('update:modelValue', value);
  emit('value-change', value);
};
</script>

<template>
  <div
    class="extra-textarea"
    :class="[
      { 'extra-textarea--default-label': isDefaultLabel },
      { 'extra-textarea--float': isFloatLabel },
      { 'extra-textarea--clearable': clearable },
      { 'extra-textarea--base': !size || size === 'base' },
      { 'extra-textarea--sm': size === 'sm' },
      { 'extra-textarea--lg': size === 'lg' },
      resizeClass,
    ]"
  >
    <label
      v-if="isDefaultLabel && label"
      :for="textareaId"
      class="extra-textarea__label"
    >
      <span v-if="required" class="extra-textarea__required">*</span>{{ label }}
      <span
        v-if="info"
        class="extra-textarea__info"
        :title="info"
        :aria-label="info"
      >
        <IconInfoCircle class="extra-textarea__info-icon" />
      </span>
    </label>

    <component
      :is="isFloatLabel ? FloatLabel : 'div'"
      v-bind="isFloatLabel ? { variant: 'in' } : {}"
      class="extra-textarea__control"
    >
      <Textarea
        v-bind="attrs"
        :id="textareaId"
        :modelValue="modelValue"
        :placeholder="isFloatLabel && label ? undefined : placeholder"
        :rows="rows"
        :cols="cols"
        :disabled="disabled"
        :readonly="readonly"
        :invalid="invalid"
        :required="required"
        :fluid="fluid"
        :size="primeSize"
        :autoResize="autoResize"
        @update:modelValue="onUpdateModelValue($event as string)"
      />
      <label
        v-if="isFloatLabel"
        :for="textareaId"
        class="extra-textarea__float-label"
      >
        <span v-if="required" class="extra-textarea__required">*</span
        >{{ label }}
      </label>
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        aria-label="Очистить поле"
        class="extra-textarea__clear"
        @mousedown.prevent
        @click.stop="onClear"
      >
        <slot name="clear-icon"
          ><IconX class="extra-textarea__clear-icon"
        /></slot>
      </button>
    </component>

    <div
      v-if="caption || $slots.caption || (info && (!isDefaultLabel || !label))"
      class="extra-textarea__meta"
    >
      <slot name="caption">
        <span
          v-if="caption"
          class="extra-textarea__caption"
          :class="{ 'extra-textarea__caption--danger': invalid }"
        >
          <IconAlertCircle
            class="extra-textarea__caption-icon"
            aria-hidden="true"
          />
          <span>{{ caption }}</span>
        </span>
      </slot>
      <span
        v-if="info && (!isDefaultLabel || !label)"
        class="extra-textarea__info"
        :title="info"
        :aria-label="info"
      >
        <IconInfoCircle class="extra-textarea__info-icon" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.extra-textarea {
  --extra-textarea-icon-size: var(--p-textarea-icon-size);
  --extra-textarea-padding-x: var(--p-textarea-padding-x);
  --extra-textarea-padding-y: var(--p-textarea-padding-y);
  &__control {
    position: relative;
    width: 100%;

    :deep(.p-textarea) {
      // Native inline baseline space must not enlarge the control/caption gap.
      display: block;
      min-height: var(--p-textarea-min-height);
      width: 100%;
    }

    :deep(.p-textarea:enabled:read-only) {
      background: var(--p-textarea-readonly-background);
    }

    :deep(.p-textarea::placeholder) {
      color: var(--p-textarea-placeholder-color);
    }

    :deep(.p-textarea.p-invalid::placeholder) {
      color: var(--p-textarea-invalid-placeholder-color);
    }

    :deep(.p-textarea:enabled:focus:not(.p-invalid):not(:read-only)) {
      box-shadow: 0 0 0 var(--p-textarea-focus-ring-width)
        var(--p-textarea-focus-ring-color);
    }

    // Prime has no invalid-ring token; use the semantic danger focus color.
    :deep(.p-textarea.p-invalid:enabled) {
      box-shadow: 0 0 0 var(--p-textarea-focus-ring-width)
        var(--p-color-border-status-danger-focus);
    }

    :deep(.p-textarea.p-invalid:enabled:focus),
    :deep(.p-textarea.p-invalid:enabled:hover) {
      border-color: var(--p-textarea-invalid-border-color);
    }
  }

  // Prime Textarea has no clear action. Reserve its inset even while empty.
  &--clearable :deep(.p-textarea) {
    padding-inline-end: calc(
      var(--extra-textarea-padding-x) + var(--extra-textarea-icon-size) +
        var(--p-dimension-space-100)
    );
  }

  // Prime has no size-specific clear-icon setting; follow the sizing mode.
  &--sm {
    --extra-textarea-icon-size: var(--p-sizing-small-form-icon-size);
    --extra-textarea-padding-x: var(--p-textarea-sm-padding-x);
    --extra-textarea-padding-y: var(--p-textarea-sm-padding-y);
  }

  &--lg {
    --extra-textarea-icon-size: var(--p-sizing-large-form-icon-size);
    --extra-textarea-padding-x: var(--p-textarea-lg-padding-x);
    --extra-textarea-padding-y: var(--p-textarea-lg-padding-y);
  }

  &__clear {
    position: absolute;
    top: calc(
      var(--extra-textarea-padding-y) + var(--p-dimension-border-width-100)
    );
    inset-inline-end: calc(
      var(--extra-textarea-padding-x) + var(--p-dimension-border-width-100)
    );
    width: var(--extra-textarea-icon-size);
    height: var(--extra-textarea-icon-size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--p-textarea-placeholder-color);
    cursor: pointer;
  }

  &__clear-icon {
    width: 100%;
    height: 100%;
  }

  // Prime has no base typography tokens; use the current export sizing mode.
  &--base :deep(.p-textarea) {
    font-size: var(--p-sizing-base-form-font-size);
    line-height: var(--p-sizing-base-form-line-height);
  }

  // Prime has no size-specific line-height setting; keep native rows/autoResize.
  &--sm :deep(.p-textarea) {
    line-height: var(--p-sizing-small-form-line-height);
  }

  &--lg :deep(.p-textarea) {
    line-height: var(--p-sizing-large-form-line-height);
  }

  &--default-label {
    display: flex;
    flex-direction: column;
    gap: var(--p-dimension-space-100);
  }

  // The column gap already separates the control and caption.
  &--default-label &__meta {
    margin-top: 0;
  }

  &--resize-none :deep(.p-textarea) {
    resize: none;
  }

  &--resize-vertical :deep(.p-textarea) {
    resize: vertical;
  }

  &__label {
    display: flex;
    align-items: center;
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-200);
    color: var(--p-color-fg-default);
  }

  // Native textarea includes its border in the layered float layout. The caret
  // is taller than the 16px line box, so the text keeps a 2px clearance below
  // the floated label to stop the caret from touching it.
  &__control.p-floatlabel-in :deep(.p-textarea) {
    padding-block-start: calc(
      var(--p-floatlabel-in-input-padding-top) - var(--p-dimension-space-50)
    );
  }

  // DS-005: the filled readonly example includes a fixed 46px input frame.
  // No 86px sizing token exists; preserve larger native rows/autoResize instead
  // of fixing the control height or changing the shared 80px component minimum.
  &--float :deep(.p-textarea.p-filled[readonly]) {
    min-height: max(var(--p-textarea-min-height), 5.375rem);
  }

  &__float-label {
    translate: calc(-1 * var(--p-dimension-border-width-100))
      calc(
        -1 * (var(--p-dimension-space-50) + var(--p-dimension-border-width-100))
      );
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-400);
  }

  // Keep invalid color after Prime's filled/focus label rules.
  &__control:has(.p-invalid) :deep(.extra-textarea__float-label) {
    color: var(--p-floatlabel-invalid-color);
  }

  // The label floats on focus as well as on a value (Prime's own rule), so the
  // floated typography must not depend on the filled state alone.
  &__control:has(textarea.p-filled) :deep(.extra-textarea__float-label),
  &__control:has(textarea:focus) :deep(.extra-textarea__float-label),
  &__control:has(textarea:-webkit-autofill)
    :deep(.extra-textarea__float-label) {
    font-family: var(--p-fonts-font-family-heading);
    line-height: var(--p-fonts-line-height-200);
  }

  &__meta {
    margin-top: var(--p-dimension-space-100);
    display: flex;
    align-items: flex-start;
    gap: var(--p-dimension-space-50);
    color: var(--p-color-fg-muted);
    letter-spacing: var(--p-fonts-letter-spacing-200);
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-200);
  }

  // Caption must wrap within the control instead of widening the native field.
  & > .extra-textarea__meta {
    width: 0;
    min-width: 100%;
  }

  &__caption--danger {
    color: var(--p-color-fg-status-danger-default);
  }

  // A custom caption slot owns its complete content, including its icons.
  &__caption {
    display: flex;
    align-items: flex-start;
    gap: var(--p-dimension-space-50);
    min-width: 0;
  }

  &__caption-icon {
    flex-shrink: 0;
    width: var(--p-dimension-size-400);
    height: var(--p-dimension-size-400);
  }

  &__info {
    display: inline-flex;
    align-items: center;
    cursor: help;
    flex-shrink: 0;
    color: var(--p-color-fg-muted);
  }

  &__label &__info {
    margin-inline-start: var(--p-dimension-space-100);
  }

  &__info-icon {
    width: var(--p-dimension-size-400);
    height: var(--p-dimension-size-400);
  }
}

.extra-textarea__required {
  color: var(--p-color-fg-status-danger-default);
  margin-inline-end: var(--p-dimension-space-100);
  font-family: var(--p-fonts-font-family-base);
}
.extra-textarea__label .extra-textarea__required {
  font-size: var(--p-fonts-font-size-100);
}

.extra-textarea__float-label .extra-textarea__required {
  margin-inline-end: var(--p-dimension-space-50);
  color: var(--p-floatlabel-invalid-color);
  // Filled FloatLabel uses TT Fellows; the empty label remains Noto Sans.
  font-family: inherit;
}

// Design conflict DTC-004: named prototype easing differs from theme curves.
.extra-textarea :deep(.p-textarea) {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-textarea :deep(.p-textarea:enabled:is(:hover, :focus):not(:read-only)) {
  transition-duration: var(--p-textarea-transition-duration);
  transition-timing-function: ease-out;
}

// Design conflict DTC-004: keep the label's interaction timing with its field.
.extra-textarea__float-label {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-textarea__control:has(
    textarea:enabled:is(:hover, :focus):not(:read-only)
  )
  :deep(.extra-textarea__float-label) {
  transition-duration: var(--p-textarea-transition-duration);
  transition-timing-function: ease-out;
}
</style>
