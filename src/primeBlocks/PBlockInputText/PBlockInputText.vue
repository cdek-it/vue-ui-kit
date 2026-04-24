<script setup lang="ts">
import { type InputTextProps, IconField, InputIcon, InputText } from 'primevue';
import { IconX } from '@tabler/icons-vue';
import { useAttrs } from 'vue';

interface PBlockInputTextProps extends /* @vue-ignore */ InputTextProps {
  modelValue?: string;
  showClear?: boolean;
  size?: 'small' | 'large' | 'xlarge';
  fluid?: boolean;
}

const props = withDefaults(defineProps<PBlockInputTextProps>(), {
  showClear: true,
});

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

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
    class="p-block-inputtext"
    :class="{ 'p-block-inputtext--fluid': fluid }"
  >
    <InputText
      v-bind="attrs"
      :modelValue="modelValue"
      :fluid="fluid"
      :size="size === 'xlarge' ? undefined : size"
      :class="{ 'p-inputtext-xlg': size === 'xlarge' }"
      @update:modelValue="onUpdateModelValue($event as string)"
    />
    <InputIcon
      v-show="showClear && modelValue"
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
  :deep(.p-inputtext) {
    width: 100%;
  }

  &--fluid {
    width: 100%;
  }

  &__icon {
    cursor: pointer;
    z-index: 1;
  }
}
</style>
