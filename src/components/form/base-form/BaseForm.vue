<script lang="ts" setup>
import { provide, reactive } from 'vue';

import FormService, { FormServiceKey } from '../services/FormService';
import type { FieldsT, ErrorsT } from '../services/types';
import type { FormSubmitResult } from './BaseForm.types';

const formService = reactive(new FormService());
provide(FormServiceKey, formService);

const emit = defineEmits<{
  (e: 'submit', values: FieldsT): void;
  (e: 'submitError', errors: ErrorsT): void;
}>();

const submit: () => FormSubmitResult = () => {
  for (const key of Object.getOwnPropertyNames(formService.errors)) {
    if (typeof formService.errors[key] === 'string') {
      const errorsObj = { ...formService.errors };
      emit('submitError', errorsObj);

      formService.triggerSubmit();
      return { isValid: false, errors: errorsObj };
    }
  }

  const valuesObj = { ...formService.fields };
  emit('submit', valuesObj);
  return { isValid: true, values: valuesObj };
};

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
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>
