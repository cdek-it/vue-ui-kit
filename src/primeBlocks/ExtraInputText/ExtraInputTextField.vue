<script setup lang="ts">
import { computed } from 'vue';
import { IconField, InputIcon, InputText } from 'primevue';
import { IconX } from '@tabler/icons-vue';
import { useAttrs } from 'vue';
import type { ExtraInputTextSize } from './types';

const props = defineProps<{
  modelValue?: string;
  clearable?: boolean;
  size?: ExtraInputTextSize;
  fluid?: boolean;
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
  emit('update:modelValue', '');
  emit('value-change', '');
};
</script>

<template>
  <IconField
    class="extra-inputtext"
    :class="{
      'extra-inputtext--fluid': fluid,
      'extra-inputtext--xlg': props.size === 'xlg',
    }"
  >
    <InputText
      v-bind="attrs"
      :modelValue="props.modelValue"
      :fluid="props.fluid"
      :size="primeSize"
      @update:modelValue="onUpdateModelValue($event as string)"
    />
    <InputIcon
      v-show="props.clearable && props.modelValue"
      class="extra-inputtext__icon"
      @click.stop="onClear"
    >
      <slot name="clear-icon">
        <IconX size="1rem" />
      </slot>
    </InputIcon>
  </IconField>
</template>

<style scoped lang="scss">
.extra-inputtext {
  width: fit-content;

  :deep(.p-inputtext) {
    width: 100%;
    border-width: var(--p-inputtext-border-width);
    line-height: var(--p-fonts-line-height-250);
  }

  :deep(.p-inputtext:disabled) {
    background: var(--p-inputtext-disabled-background);
    color: var(--p-inputtext-disabled-color);
  }

  :deep(.p-inputtext:enabled:read-only) {
    background: var(--p-inputtext-readonly-background);
    color: var(--p-inputtext-color);
  }

  :deep(.p-inputtext:enabled:focus) {
    box-shadow: 0 0 0 var(--p-inputtext-focus-ring-width)
      var(--p-inputtext-focus-ring-color);
  }

  :deep(.p-inputtext.p-invalid:focus) {
    border-color: var(--p-inputtext-invalid-border-color);
    box-shadow: 0 0 0 var(--p-inputtext-focus-ring-width)
      var(--p-focus-ring-extend-invalid, var(--p-inputtext-focus-ring-color));
  }

  :deep(.p-inputicon) {
    font-size: var(--p-inputtext-icon-size);
    width: var(--p-inputtext-icon-size);
    height: var(--p-inputtext-icon-size);
  }

  &--fluid {
    width: 100%;
  }

  &--xlg {
    :deep(.p-inputtext) {
      font-size: var(--p-inputtext-ext-xlg-font-size);
      padding: var(--p-inputtext-ext-xlg-padding-y)
        var(--p-inputtext-ext-xlg-padding-x);
    }
  }

  &__icon {
    cursor: pointer;
    z-index: 1;
  }
}
</style>
