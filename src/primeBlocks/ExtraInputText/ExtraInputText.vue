<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue';
import { IconAlertCircle, IconInfoCircle } from '@tabler/icons-vue';
import { FloatLabel } from 'primevue';
import ExtraInputTextField from './ExtraInputTextField.vue';
import type { ExtraInputTextProps } from './types';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<ExtraInputTextProps>(), {
  clearable: true,
  labelPosition: 'default',
});

const attrs = useAttrs();
const autoInputId = useId();

const isFloatLabel = computed(() => props.labelPosition === 'float');

const inputId = computed(() => {
  if (typeof attrs.id === 'string' && attrs.id) {
    return attrs.id;
  }

  return autoInputId;
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();
</script>

<template>
  <div
    class="extra-inputtext"
    :class="{
      'extra-inputtext--default-label': labelPosition === 'default',
    }"
  >
    <label
      v-if="labelPosition === 'default' && label"
      :for="inputId"
      class="extra-inputtext__label"
    >
      <span v-if="required" class="extra-inputtext__required">*</span
      >{{ label }}
      <span
        v-if="info"
        class="extra-inputtext__info"
        :title="info"
        :aria-label="info"
      >
        <IconInfoCircle class="extra-inputtext__info-icon" />
      </span>
    </label>

    <component
      :is="isFloatLabel ? FloatLabel : 'div'"
      v-bind="isFloatLabel ? { variant: 'in' } : {}"
      class="extra-inputtext__control"
    >
      <ExtraInputTextField
        v-bind="attrs"
        :id="inputId"
        :modelValue="modelValue"
        :placeholder="isFloatLabel && label ? undefined : placeholder"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :invalid="invalid"
        :required="required"
        :fluid="fluid"
        :size="size"
        :clearable="clearable"
        @update:modelValue="$emit('update:modelValue', $event)"
        @value-change="$emit('value-change', $event)"
      >
        <template #clear-icon>
          <slot name="clear-icon" />
        </template>
      </ExtraInputTextField>
      <label
        v-if="isFloatLabel"
        :for="inputId"
        class="extra-inputtext__float-label"
      >
        <span v-if="required" class="extra-inputtext__required">*</span
        >{{ label }}
      </label>
    </component>

    <div
      v-if="
        caption ||
        $slots.caption ||
        (info && (labelPosition !== 'default' || !label))
      "
      class="extra-inputtext__meta"
      :class="{ 'extra-inputtext__meta--invalid': invalid }"
    >
      <slot name="caption">
        <span v-if="caption" class="extra-inputtext__caption">
          <IconAlertCircle
            class="extra-inputtext__caption-icon"
            aria-hidden="true"
          />
          <span>{{ caption }}</span>
        </span>
      </slot>
      <span
        v-if="info && (labelPosition !== 'default' || !label)"
        class="extra-inputtext__info"
        :title="info"
        :aria-label="info"
      >
        <IconInfoCircle class="extra-inputtext__info-icon" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.extra-inputtext {
  &__control {
    width: 100%;
  }

  &--default-label {
    display: flex;
    flex-direction: column;
  }

  &__label {
    // Flex avoids an extra inline baseline pixel from the smaller required mark.
    display: flex;
    align-items: center;
    margin-bottom: var(--p-dimension-space-100);
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-200);
    color: var(--p-color-fg-default);
  }

  // Float text/radius have no variant-specific Prime token. Its visual height
  // excludes an extra border term; native text placement is adapted below.
  &__control.p-floatlabel-in :deep(.p-inputtext) {
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-200);
    border-radius: var(--p-dimension-border-radius-400);
    height: calc(
      var(--p-fonts-line-height-200) + var(--p-floatlabel-in-input-padding-top) +
        var(--p-floatlabel-in-input-padding-bottom)
    );
  }

  // Native input line-box centering differs from Figma layered text.
  &__control.p-floatlabel-in :deep(.p-inputtext) {
    padding-block-start: calc(
      var(--p-floatlabel-in-input-padding-top) - 2 *
        (var(--p-dimension-space-50) + var(--p-inputtext-border-width))
    );
  }

  &__control.p-floatlabel-in :deep(.p-iconfield.extra-inputtext) {
    --extra-inputtext-icon-size: var(--p-dimension-size-450);
  }

  &__float-label {
    // Label coordinates include the native control border and optical inset.
    translate: calc(-1 * var(--p-inputtext-border-width))
      calc(-1 * var(--p-dimension-space-50));
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-400);
  }

  // Keep invalid color after Prime's filled/focus label rules.
  &__control:has(.p-invalid) :deep(.extra-inputtext__float-label) {
    color: var(--p-floatlabel-invalid-color);
  }

  &__control:has(input.p-filled) :deep(.extra-inputtext__float-label),
  &__control:has(input:-webkit-autofill) :deep(.extra-inputtext__float-label) {
    font-family: var(--p-fonts-font-family-base);
    line-height: var(--p-fonts-line-height-200);
  }

  // Empty focus keeps the label centered; only a value activates the label.
  &__control:has(input:focus:not(.p-filled):not(:-webkit-autofill))
    :deep(.extra-inputtext__float-label) {
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--p-fonts-font-size-200);
    font-weight: var(--p-floatlabel-font-weight);
  }

  &__meta {
    margin-top: var(--p-dimension-space-100);
    // A block flex row has no anonymous baseline gap below FloatLabel.
    display: flex;
    align-items: center;
    gap: var(--p-dimension-space-100);
    color: var(--p-color-fg-muted);
    letter-spacing: var(--p-fonts-letter-spacing-200);
    font-size: var(--p-fonts-font-size-200);
    line-height: var(--p-fonts-line-height-200);
  }

  &__meta--invalid {
    color: var(--p-color-fg-status-danger-default);
  }

  // Caption wraps to the control width without contributing its own intrinsic
  // width to the field.
  & > .extra-inputtext__meta {
    width: 0;
    min-width: 100%;
  }

  // Keep the design's leading icon inside the fallback, so a slot replaces it.
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

.extra-inputtext__required {
  color: var(--p-color-fg-status-danger-default);
  margin-inline-end: var(--p-dimension-space-100);
  font-family: var(--p-fonts-font-family-base);
}
.extra-inputtext__label .extra-inputtext__required {
  font-size: var(--p-fonts-font-size-100);
}

.extra-inputtext__float-label .extra-inputtext__required {
  margin-inline-end: var(--p-dimension-space-50);
  color: var(--p-floatlabel-invalid-color);
}

// Design conflict DTC-004: keep the label's interaction timing with its field.
.extra-inputtext__float-label {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-inputtext__control:has(input:enabled:is(:hover, :focus):not(:read-only))
  :deep(.extra-inputtext__float-label) {
  transition-duration: var(--p-inputtext-transition-duration);
  transition-timing-function: ease-out;
}
</style>
