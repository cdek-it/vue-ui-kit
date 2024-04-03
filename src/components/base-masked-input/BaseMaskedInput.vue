<script lang="ts" setup>
import { ref, watch } from 'vue';
import { vMaska, type MaskaDetail } from 'maska';
import BaseInput from '../base-input/BaseInput.vue';

const props = defineProps<{
  /**
   * `v-model` - маскированное значение, можно изменять с родителя
   */
  modelValue?: string;
  /**
   * `v-model:unmasked` - значение без маски, изменение с родителя не будет работать (вызывает лаги маски)
   */
  unmasked?: string;
  /**
   * `data-maska` из библиотеки [`maska`](https://beholdr.github.io/maska/#/)
   */
  mask: string;
}>();

const emit = defineEmits<{
  /**
   * `v-model`
   */
  (event: 'update:modelValue', value: string): void;
  /**
   * `v-model:unmasked`
   */
  (event: 'update:unmasked', value: string): void;
}>();

const value = ref(props.modelValue || props.unmasked || '');

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== value.value) {
      value.value = newValue || '';
    }
  }
);

const onMaska = (event: CustomEvent<MaskaDetail>) => {
  value.value = event.detail.masked;
  emit('update:modelValue', event.detail.masked);
  emit('update:unmasked', event.detail.unmasked);
};
</script>

<template>
  <BaseInput :model-value="value" v-maska :data-maska="mask" @maska="onMaska">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <!-- @slot можно передавать любые слоты, поддерживаемые `CdekInput` -->
      <slot :name="slot" v-bind="scope" />
    </template>
  </BaseInput>
</template>

<style lang="scss" scoped></style>
