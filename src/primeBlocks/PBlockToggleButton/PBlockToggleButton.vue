<script setup lang="ts">
import { ToggleButton, type ToggleButtonProps } from 'primevue';

interface IPBlockToggleButton extends ToggleButtonProps {
  baseIcon?: string;
  baseLabel?: string;
}

const props = defineProps<IPBlockToggleButton>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'value-change', value: boolean): void;
  (e: 'change', event: Event): void;
  (e: 'focus', event: Event): void;
  (e: 'blur', event: Event): void;
}>();

const onUpdateModelValue = (value: boolean) => {
  emit('update:modelValue', value);
};

const onChange = (value: Event) => {
  emit('change', value);
};

const onFocus = (value: Event) => {
  emit('focus', value);
};

const onBlur = (value: Event) => {
  emit('blur', value);
};

const onValueChange = (value: boolean) => {
  emit('value-change', value);
};
</script>

<template>
  <ToggleButton
    v-bind="props"
    :on-icon="onIcon || baseIcon"
    :off-icon="offIcon || baseIcon"
    :on-label="onLabel || baseLabel"
    :off-label="offLabel || baseLabel"
    @update:modelValue="onUpdateModelValue"
    @change="onChange"
    @focus="onFocus"
    @blur="onBlur"
    @value-change="onValueChange"
  >
    <slot />
    <template #icon>
      <slot name="icon" />
    </template>
  </ToggleButton>
</template>
