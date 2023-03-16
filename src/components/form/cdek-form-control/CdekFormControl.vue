<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { inject, computed, reactive } from 'vue';

import { FormServiceKey } from '../services/FormService';
import type FormService from '../services/FormService';
import type { RulesT } from '../services/types';

import { CdekInput } from '../../cdek-input';

const props = withDefaults(
  defineProps<{
    name: string;
    rules?: RulesT;
    type?: 'text';
  }>(),
  { type: 'text' }
);

const formService = inject(FormServiceKey) as FormService;
const fieldService = reactive(
  formService.getFieldService(props.name, props.rules)
);
fieldService.init();

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
  <div>
    <CdekInput
      v-model="value"
      :valid-res="fieldService.error"
      v-bind="$attrs"
    />
  </div>
</template>
