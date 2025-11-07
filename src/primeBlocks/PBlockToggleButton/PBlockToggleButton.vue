<script setup lang="ts">
import { ToggleButton, type ToggleButtonProps } from 'primevue';

interface IPBlockToggleButton extends ToggleButtonProps {
  baseIcon?: string;
  baseLabel?: string;
  modelValue?: boolean;
}

defineProps<IPBlockToggleButton>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const onUpdateModelValue = (value: boolean) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <ToggleButton
    :on-icon="onIcon ?? baseIcon"
    :off-icon="offIcon ?? baseIcon"
    :on-label="onLabel ?? baseLabel"
    :off-label="offLabel ?? baseLabel"
    :modelValue="modelValue"
    @update:modelValue="onUpdateModelValue"
  >
    <slot />
    <template #icon>
      <slot name="icon" />
    </template>
  </ToggleButton>
</template>
