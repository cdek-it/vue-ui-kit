<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
// @ts-ignore
import { vMaska } from 'maska'; // ругается на импорт, он нужен для работы директивы
import type {
  MaskType,
  MaskaDetail,
  MaskInputOptions,
  MaskTokens,
} from 'maska';
import BaseInput from '../base-input/BaseInput.vue';

const props = defineProps<{
  /**
   * `v-model` маскированное значение
   */
  modelValue?: string;
  /**
   * `data-maska` из библиотеки [maska](https://beholdr.github.io/maska/#/)
   */
  mask: MaskType;
  /**
   * `data-maska-tokens` из библиотеки [maska](https://beholdr.github.io/maska/#/)
   */
  tokens?: string | MaskTokens;
  /**
   * хук `preProcess` из библиотеки [maska](https://beholdr.github.io/maska/#/)
   */
  preProcess?: (val: string) => string;
  /**
   * хук `postProcess` из библиотеки [maska](https://beholdr.github.io/maska/#/)
   */
  postProcess?: (val: string) => string;
  /**
   * Тип инпута, отлавливаю `type="number"` дабы по другому его обработать из-за [issue](https://beholdr.github.io/maska/#/?id=known-issues) либы
   */
  type?: string;
}>();

const emit = defineEmits<{
  /**
   * `v-model` маскированное значение
   */
  (event: 'update:modelValue', value: string): void;
  /**
   * `v-model:unmasked` немаскированное значение
   */
  (event: 'update:unmasked', value: string): void;
  /**
   * `v-model:completed` завершен ли паттерн или нет
   */
  (event: 'update:completed', value: boolean): void;
  /**
   * Вызывается каждый раз, когда маска выполняется
   */
  (event: 'complete'): void;
}>();

const options = computed(() => {
  const maskOptions: MaskInputOptions = {
    mask: props.mask,
  };

  if (typeof props.tokens === 'object') {
    maskOptions.tokens = props.tokens;
  }

  props.preProcess && (maskOptions.preProcess = props.preProcess);
  props.postProcess && (maskOptions.postProcess = props.postProcess);

  return maskOptions;
});

const value = ref(props.modelValue || '');

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== value.value) {
      value.value = newValue || '';
    }
  }
);

const onMaska = (event: CustomEvent<MaskaDetail>) => {
  if (value.value !== event.detail.masked) {
    value.value = event.detail.masked;

    emit('update:modelValue', event.detail.masked);
    emit('update:unmasked', event.detail.unmasked);
    emit('update:completed', event.detail.completed);

    if (event.detail.completed) {
      emit('complete');
    }
  }
};

const inputType = computed(() => {
  if (props.type === 'number') {
    return {
      type: 'text',
      inputmode: 'numeric',
    };
  }

  if (props.type) {
    return {
      type: props.type,
    };
  }

  return {};
});
</script>

<template>
  <BaseInput
    :model-value="value"
    v-maska:[options]
    :data-maska-tokens="typeof tokens === 'string' ? tokens : undefined"
    @maska="onMaska"
    v-bind="inputType"
  >
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <!-- @slot можно передавать любые слоты, поддерживаемые `CdekInput` -->
      <slot :name="slot" v-bind="scope" />
    </template>
  </BaseInput>
</template>

<style lang="scss" scoped></style>
