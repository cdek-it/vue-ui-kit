<script setup lang="ts">
import { type InputTextProps, IconField, InputIcon, InputText } from 'primevue';

interface IPBlockInputTextClear extends InputTextProps {
  modelValue?: string;
}

const props = defineProps<IPBlockInputTextClear>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <IconField class="p-block-inputtext-clear">
    <InputText
      v-bind="props"
      @update:modelValue="emit('update:modelValue', $event as string)"
    />
    <InputIcon
      v-show="modelValue"
      class="p-block-inputtext-clear__icon"
      @click.stop="emit('update:modelValue', '')"
    >
      <i class="ti ti-x" />
    </InputIcon>
  </IconField>
</template>

<style scoped>
.p-block-inputtext-clear {
  width: 100%;
}

.p-block-inputtext-clear :deep(.p-inputtext) {
  width: 100%;
}

.p-block-inputtext-clear__icon {
  cursor: pointer;
  z-index: 1;
}
</style>
