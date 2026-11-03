<script setup lang="ts">
import { computed } from 'vue';
import { IconField, InputText } from 'primevue';
import { IconX } from '@tabler/icons-vue';
import { useAttrs } from 'vue';
import type { ExtraInputTextSize } from './types';

const props = defineProps<{
  modelValue?: string;
  clearable?: boolean;
  size?: ExtraInputTextSize;
  fluid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}>();

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

const primeSize = computed<'small' | 'large' | undefined>(() => {
  if (props.size === 'sm') {
    return 'small';
  }

  if (props.size === 'lg') {
    return 'large';
  }

  return undefined;
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();

const onUpdateModelValue = (value: string) => {
  emit('update:modelValue', value);
  emit('value-change', value);
};

const onClear = () => {
  if (props.disabled || props.readonly) {
    return;
  }
  emit('update:modelValue', '');
  emit('value-change', '');
};
</script>

<template>
  <IconField
    class="extra-inputtext"
    :class="{
      'extra-inputtext--base': !props.size || props.size === 'base',
      'extra-inputtext--sm': props.size === 'sm',
      'extra-inputtext--lg': props.size === 'lg',
      'extra-inputtext--fluid': fluid,
      'extra-inputtext--xlg': props.size === 'xlg',
    }"
  >
    <InputText
      v-bind="attrs"
      :modelValue="props.modelValue"
      :fluid="props.fluid"
      :size="primeSize"
      :disabled="disabled"
      :readonly="readonly"
      @update:modelValue="onUpdateModelValue($event as string)"
    />
    <button
      v-if="props.clearable && props.modelValue && !disabled && !readonly"
      type="button"
      aria-label="Очистить поле"
      class="extra-inputtext__icon"
      @click.stop="onClear"
    >
      <slot name="clear-icon">
        <IconX class="extra-inputtext__clear-icon" />
      </slot>
    </button>
  </IconField>
</template>

<style scoped lang="scss">
.extra-inputtext {
  --extra-inputtext-icon-size: var(--p-inputtext-icon-size);
  --extra-inputtext-line-height: var(--p-sizing-base-form-line-height);
  --extra-inputtext-padding-y: var(--p-inputtext-padding-y);
  width: fit-content;

  :deep(.p-inputtext) {
    width: 100%;
    border-width: var(--p-inputtext-border-width);
    // Prime inherits line-height; native intrinsic metrics can also enlarge input.
    line-height: var(--extra-inputtext-line-height);
    height: calc(
      var(--extra-inputtext-line-height) + 2 * var(--extra-inputtext-padding-y) +
        2 * var(--p-inputtext-border-width)
    );
  }

  // Prime has no base typography tokens. Read the current export's base mode;
  // size-specific component tokens remain authoritative for sm, lg and xlg.
  &--base :deep(.p-inputtext) {
    font-size: var(--p-sizing-base-form-font-size);
  }

  &--sm {
    --extra-inputtext-icon-size: var(--p-sizing-small-form-icon-size);
    --extra-inputtext-line-height: var(--p-sizing-small-form-line-height);
    --extra-inputtext-padding-y: var(--p-inputtext-sm-padding-y);
  }

  &--lg {
    --extra-inputtext-icon-size: var(--p-sizing-large-form-icon-size);
    --extra-inputtext-line-height: var(--p-sizing-large-form-line-height);
    --extra-inputtext-padding-y: var(--p-inputtext-lg-padding-y);
  }

  // IconField reserves space for a generic icon; our clear button also needs
  // its own component inset and the semantic gap between text and icon.
  &.p-iconfield :deep(.p-inputtext:not(:last-child)) {
    padding-inline-end: calc(
      var(--p-inputtext-padding-x) + var(--extra-inputtext-icon-size) +
        var(--p-dimension-space-100)
    );
  }

  :deep(.p-inputtext:disabled) {
    background: var(--p-inputtext-disabled-background);
    color: var(--p-inputtext-disabled-color);
  }

  :deep(.p-inputtext:enabled:read-only) {
    background: var(--p-inputtext-readonly-background);
    color: var(--p-inputtext-color);
  }

  :deep(.p-inputtext:enabled:focus:not(.p-invalid):not(:read-only)) {
    box-shadow: 0 0 0 var(--p-inputtext-focus-ring-width)
      var(--p-inputtext-focus-ring-color);
  }

  // Prime has no invalid-ring token; use the existing semantic danger focus color.
  :deep(.p-inputtext.p-invalid:enabled) {
    box-shadow: 0 0 0 var(--p-inputtext-focus-ring-width)
      var(--p-color-border-status-danger-focus);
  }

  :deep(.p-inputtext.p-invalid:enabled:focus),
  :deep(.p-inputtext.p-invalid:enabled:hover) {
    border-color: var(--p-inputtext-invalid-border-color);
  }

  &--fluid {
    width: 100%;
  }

  &--xlg {
    --extra-inputtext-icon-size: var(--p-sizing-xlarge-form-icon-size);
    --extra-inputtext-line-height: var(--p-sizing-xlarge-form-line-height);
    --extra-inputtext-padding-y: var(--p-inputtext-ext-xlg-padding-y);
    :deep(.p-inputtext) {
      font-size: var(--p-inputtext-ext-xlg-font-size);
      padding: var(--p-inputtext-ext-xlg-padding-y)
        var(--p-inputtext-ext-xlg-padding-x);
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    // The absolute containing block is IconField, outside the native border.
    inset-inline-end: calc(
      var(--p-inputtext-padding-x) + var(--p-inputtext-border-width)
    );
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--extra-inputtext-icon-size);
    height: var(--extra-inputtext-icon-size);
    color: var(--p-inputtext-placeholder-color);
    line-height: 1;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    z-index: 1;
  }

  &__clear-icon {
    width: 100%;
    height: 100%;
  }
}

// Design conflict DTC-004: named prototype easing differs from theme curves.
.extra-inputtext :deep(.p-inputtext) {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-inputtext
  :deep(.p-inputtext:enabled:is(:hover, :focus):not(:read-only)) {
  transition-duration: var(--p-inputtext-transition-duration);
  transition-timing-function: ease-out;
}
</style>
