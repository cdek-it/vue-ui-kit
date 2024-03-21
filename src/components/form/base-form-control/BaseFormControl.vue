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
    name: string;
    rules?: RulesT;
    type?: string;
    className?: string;
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
</script>

<template>
  <div :class="className">
    <BaseAutocomplete
      v-if="type === 'autocomplete'"
      v-model="value"
      :valid-res="fieldService.error"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </BaseAutocomplete>
    <BaseInput
      v-else
      v-model="value"
      :valid-res="fieldService.error"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </BaseInput>
  </div>
</template>
