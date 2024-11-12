<script lang="ts" setup>
import { provide, reactive, watch } from 'vue';

import FormService, { FormServiceKey } from '../services/FormService';
import type { FieldsT, ErrorsT } from '../services/types';
import type { FormSubmitResult, FormChangeResult } from './BaseForm.types';
import { trimForm } from './helpers';

const formService = reactive(new FormService());
provide(FormServiceKey, formService);

const props = defineProps<{
  trimBeforeSubmit: boolean;
}>();

const emit = defineEmits<{
  (e: 'submit', values: FieldsT): void;
  (e: 'submitError', errors: ErrorsT): void;
  (e: 'change', result: FormChangeResult): void;
}>();

const submit: () => FormSubmitResult = () => {
  if (!formService.getIsFormValid()) {
    const errorsObj = { ...formService.errors };
    emit('submitError', errorsObj);

    formService.showErrors();

    return { isValid: false, errors: errorsObj };
  }

  let valuesObj = { ...formService.fields };

  if (props.trimBeforeSubmit) {
    valuesObj = trimForm(valuesObj);
  }

  emit('submit', valuesObj);

  return { isValid: true, values: valuesObj };
};

const change = () => {
  const values = { ...formService.fields };
  const errors = { ...formService.errors };
  const isValid = formService.getIsFormValid();

  emit('change', { isValid, values, errors });
};

watch(() => formService.fields, change, { deep: true });

const triggerSubmit = <T = FieldsT>() => {
  return submit() as unknown as FormSubmitResult<T>;
};

const clearForm = () => {
  formService.clearForm();
};

defineExpose({
  triggerSubmit,
  clearForm,
});
</script>

<template>
  <form @submit.prevent="submit" @change="change">
    <slot />
  </form>
</template>
