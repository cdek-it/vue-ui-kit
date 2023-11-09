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

import { CdekInput } from '../../cdek-input';
import { CdekAutocomplete } from '../../cdek-autocomplete/';

const props = withDefaults(
  defineProps<{
    name: string;
    rules?: RulesT;
    type?: 'text' | 'autocomplete';
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
    <CdekInput
      v-if="type === 'text'"
      v-model="value"
      :valid-res="fieldService.error"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </CdekInput>
    <CdekAutocomplete
      v-if="type === 'autocomplete'"
      v-model="value"
      :valid-res="fieldService.error"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </CdekAutocomplete>
  </div>
</template>
