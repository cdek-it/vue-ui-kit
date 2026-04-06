<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const model = defineModel<string>({ default: '' });

defineProps<{
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  invalid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
}>();
</script>

<template>
  <IconField style="width: 100%">
    <InputText
      v-model="model"
      :invalid="invalid"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      style="width: 100%"
      :class="{ 'p-inputtext-xlg': size === 'xlarge' }"
      :size="size === 'xlarge' || size === 'medium' || !size ? undefined : size"
    />
    <InputIcon
      v-show="model"
      style="cursor: pointer; z-index: 1"
      @click.stop="model = ''"
    >
      <i class="ti ti-x" />
    </InputIcon>
  </IconField>
</template>
