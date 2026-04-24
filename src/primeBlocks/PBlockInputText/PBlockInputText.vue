<script setup lang="ts">
import { IconField, InputIcon, InputText } from 'primevue';
import { IconX } from '@tabler/icons-vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    clearable?: boolean;
    size?: 'small' | 'large' | 'xlarge';
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
  <IconField class="p-block-inputtext">
    <InputText
      :modelValue="modelValue"
      :invalid="invalid"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :variant="variant"
      :fluid="fluid"
      :size="size === 'xlarge' ? undefined : size"
      :class="{ 'p-inputtext-xlg': size === 'xlarge' }"
      @update:modelValue="onUpdateModelValue($event as string)"
    />
    <InputIcon
      v-if="clearable && modelValue"
      class="p-block-inputtext__icon"
      @click.stop="onClear"
    >
      <slot name="clear-icon">
        <IconX :size="14" />
      </slot>
    </InputIcon>
  </IconField>
</template>

<style scoped lang="scss">
.p-block-inputtext {
  width: 100%;

  :deep(.p-inputtext) {
    width: 100%;
  }

  &__icon {
    cursor: pointer;
    z-index: 1;
  }
}
</style>
