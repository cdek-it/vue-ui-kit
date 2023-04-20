<script lang="ts" setup>
import { provide, reactive } from 'vue';

import FormService, { FormServiceKey } from '../services/FormService';
import type { FieldsT, ErrorsT } from '../services/types';

const formService = reactive(new FormService());
provide(FormServiceKey, formService);

const emit = defineEmits<{
  (e: 'submit', values: FieldsT): void;
  (e: 'submitError', errors: ErrorsT): void;
}>();

type SubmitResponse = {
  isValid: boolean;
  errors?: ErrorsT;
  values?: FieldsT;
};

const submit: () => SubmitResponse = () => {
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

const triggerSubmit = () => {
  return submit();
};

defineExpose({
  triggerSubmit,
});
</script>

<template>
  <form @submit.prevent="submit" ref="cdekForm">
    <slot />
  </form>
</template>
