<script setup lang="ts">
import { IconField, InputIcon, InputText } from 'primevue';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    clearable?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    variant?: 'outlined' | 'filled';
    fluid?: boolean;
  }>(),
  {
    clearable: true,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <IconField v-if="clearable" class="p-block-inputtext">
    <InputText
      :modelValue="modelValue"
      :invalid="invalid"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :variant="variant"
      :fluid="fluid"
      @update:modelValue="emit('update:modelValue', $event as string)"
    />
    <InputIcon
      v-show="modelValue"
      class="p-block-inputtext__icon"
      @click.stop="emit('update:modelValue', '')"
    >
      <i class="ti ti-x" />
    </InputIcon>
  </IconField>
  <InputText
    v-else
    :modelValue="modelValue"
    :invalid="invalid"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    :variant="variant"
    :fluid="fluid"
    @update:modelValue="emit('update:modelValue', $event as string)"
  />
</template>

<style scoped>
.p-block-inputtext {
  width: 100%;
}

.p-block-inputtext :deep(.p-inputtext) {
  width: 100%;
}

.p-block-inputtext__icon {
  cursor: pointer;
  z-index: 1;
}
</style>
