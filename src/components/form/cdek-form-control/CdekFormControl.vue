<script lang="ts" setup>
import { onMounted, inject, computed, ref } from 'vue';

import { FormServiceKey } from '@/components/form/FormService';

const props = defineProps<{
  name: string;
  rules?: RulesT;
}>();

const fieldService = inject(FormServiceKey)?.getFieldService(props.name);

type RuleValidator = (val: string) => boolean | string;
type RulesObjectT = {
  [key: string]: boolean | string | RuleValidator;
};
type RulesT = string | RulesObjectT;

onMounted(() => {
  fieldService?.register('');
  fieldService?.validate(getErrorKey(validateValue('')));
});

const error = ref<null | true | string>(null);

type ValidateResultT = true | { key: string; message?: string };
const validateValue = (value: string): ValidateResultT => {
  if (!props.rules) {
    return true;
  }

  for (const key of Object.getOwnPropertyNames(props.rules)) {
    const validOrError = (props.rules as any)[key](value);

    if (typeof validOrError === 'string') {
      return { key, message: validOrError };
    }

    if (!validOrError) {
      return { key };
    }
  }

  return true;
};

const getErrorMessage = (error: ValidateResultT) => {
  if (typeof error === 'boolean') {
    return error;
  }

  return error?.message || error.key;
};

const getErrorKey = (error: ValidateResultT) => {
  if (typeof error === 'boolean') {
    return error;
  }

  return error.key;
};

const value = computed({
  get() {
    return fieldService?.value || '';
  },
  set(newValue) {
    fieldService?.change(newValue);
    const errorObj = validateValue(newValue);
    error.value = getErrorMessage(errorObj);
    fieldService?.validate(getErrorKey(errorObj));
  },
});

const showError = computed(() => typeof error.value === 'string');
</script>

<template>
  <div>
    <label :for="name">{{ name }}</label>
    <input v-model="value" :id="name" />
    <div v-if="showError">{{ error }}</div>
  </div>
</template>
