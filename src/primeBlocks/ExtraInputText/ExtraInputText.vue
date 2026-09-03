<script setup lang="ts">
import { type InputTextProps, FloatLabel } from 'primevue';
import ExtraInputTextField from './ExtraInputTextField.vue';

interface ExtraInputTextProps extends /* @vue-ignore */ InputTextProps {
  modelValue?: string;
  showClear?: boolean;
  hasFloatlabel?: boolean;
  label?: string;
  required?: boolean;
  size?: 'small' | 'large' | 'xlarge';
  fluid?: boolean;
}

withDefaults(defineProps<ExtraInputTextProps>(), {
  showClear: true,
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();
</script>

<template>
  <FloatLabel v-if="hasFloatlabel" variant="in">
    <ExtraInputTextField
      :id="label"
      :modelValue="modelValue"
      :showClear="showClear"
      :size="size"
      :fluid="fluid"
      variant="filled"
      v-bind="$attrs"
      @update:modelValue="$emit('update:modelValue', $event)"
      @value-change="$emit('value-change', $event)"
    >
      <template #clear-icon>
        <slot name="clear-icon" />
      </template>
    </ExtraInputTextField>
    <label :for="label">
      {{ label
      }}<span v-if="required" class="p-block-inputtext__required">*</span>
    </label>
  </FloatLabel>

  <ExtraInputTextField
    v-else
    :modelValue="modelValue"
    :showClear="showClear"
    :size="size"
    :fluid="fluid"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
    @value-change="$emit('value-change', $event)"
  >
    <template #clear-icon>
      <slot name="clear-icon" />
    </template>
  </ExtraInputTextField>
</template>

<style scoped lang="scss">
.p-block-inputtext__required {
  color: var(--p-red-500);
  margin-left: var(--p-spacing-1x);
}
</style>
