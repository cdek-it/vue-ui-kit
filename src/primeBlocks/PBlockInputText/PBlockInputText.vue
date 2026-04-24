<script setup lang="ts">
import { type InputTextProps, IconField, InputIcon, InputText } from 'primevue';
import { IconX } from '@tabler/icons-vue';
import { computed } from 'vue';

interface PBlockInputTextProps extends /* @vue-ignore */ InputTextProps {
  showClear?: boolean;
  size?: 'small' | 'large' | 'xlarge';
}

const props = withDefaults(defineProps<PBlockInputTextProps>(), {
  showClear: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'value-change', value: string): void;
}>();

const inputTextProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { showClear, size, ...rest } = props;
  return {
    ...rest,
    size: size === 'xlarge' ? undefined : size,
  };
});

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
  <IconField class="p-block-inputtext" :class="{ 'p-fluid': fluid }">
    <InputText
      v-bind="inputTextProps"
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
