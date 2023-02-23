<script lang="ts" setup>
import { inject, computed, reactive } from 'vue';

import { FormServiceKey } from '@/components/form/services/FormService';
import type FormService from '@/components/form/services/FormService';
import type { RulesT } from '@/components/form/services/types';

const props = defineProps<{
  name: string;
  rules?: RulesT;
}>();

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

const showError = computed(() => typeof fieldService.error === 'string');
</script>

<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input v-model="value" :id="name" />
    <div v-if="showError">{{ fieldService.error }}</div>
  </div>
</template>
