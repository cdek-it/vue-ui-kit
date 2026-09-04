<script setup lang="ts">
import { ToggleButton } from 'primevue';
import type { ExtraToggleButtonProps } from './types';

defineProps<ExtraToggleButtonProps>();

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
