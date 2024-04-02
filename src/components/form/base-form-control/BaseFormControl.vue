<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { inject, computed, reactive, watch } from 'vue';

import { FormServiceKey } from '../services/FormService';
import type FormService from '../services/FormService';
import type { RulesT } from '../services/types';

import BaseInput from '../../base-input/BaseInput.vue';
import BaseAutocomplete from '../../base-autocomplete/BaseAutocomplete.vue';

const props = withDefaults(
  defineProps<{
    /**
     * Под таким именем свойства результат придет в событии `submit` от `CdekForm`
     */
    name: string;
    /**
     * Правила валидации, подробнее описано в [Validation](/?path=/docs/form-cdekform-validation--page) и в [GlobalValidators](/?path=/docs/form-cdekform-globalvalidators--page)
     */
    rules?: RulesT;
    /**
     * - `text` CdekInput
     * - `number` CdekInput с `type="number"`
     * - `autocomplete` CdekAutocomplete
     * - `slot` Кастомный компонент, подробнее в описании `default` slot
     */
    type?: 'text' | 'number' | 'autocomplete' | 'slot';
    /**
     * Чтобы повесить класс на родительский `div`, используйте это свойство
     *
     * Чтобы класс был на самом элементе (т.е. на `CdekInput` и т.д.), используйте просто `class`
     */
    className?: string;
    /**
     * Начальное значение
     */
    initialValue?: string;
  }>(),
  { type: 'text', className: '', initialValue: '' }
);

const formService = inject(FormServiceKey) as FormService;
const fieldService = reactive(
  formService.getFieldService(props.name, props.rules)
);
fieldService.init(props.initialValue);

watch(
  () => props.rules,
  (newValue) => {
    fieldService.updateValidators(newValue);
  },
  { deep: true }
);

const value = computed({
  get() {
    return fieldService.value || '';
  },
  set(newValue) {
    fieldService.change(newValue);
  },
});

const changeValue = (newValue: string) => {
  value.value = newValue;
};

const element = computed(() => {
  if (props.type === 'autocomplete') {
    return BaseAutocomplete;
  }

  if (['text', 'number'].includes(props.type)) {
    return BaseInput;
  }

  return null;
});

defineExpose({
  changeValue,
});
</script>

<template>
  <div :class="className">
    <template v-if="element">
      <!-- type="number" передается только для BaseInput -->
      <component
        :is="element"
        :type="type === 'number' ? 'number' : undefined"
        v-model="value"
        :valid-res="fieldService.error"
        v-bind="$attrs"
      >
        <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
          <!-- @slot если `type !== 'slot'`, то все слоты передаются в дочерний компонент -->
          <slot :name="slot" v-bind="scope" />
        </template>
      </component>
    </template>

    <template v-else>
      <!--
        @slot Если `type="slot"` или не найден подходящий элемент, то передаем в slot `value`, `changeValue` и `validRes` для кастомной обработки.
      -->
      <slot
        :value="value"
        :change-value="changeValue"
        :valid-res="fieldService.error"
      />
    </template>
  </div>
</template>
