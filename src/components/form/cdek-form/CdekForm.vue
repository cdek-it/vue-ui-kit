<script lang="ts" setup>
import { provide, reactive, ref } from 'vue';

import { useForm } from '@/components/form/useForm';
import type {
  RegisterCallback,
  ValidateCallback,
  ChangeCallback,
} from '@/components/form/useForm';

type FieldsT = { [key: string]: string | boolean };
type ErrorsT = FieldsT;

const fields: FieldsT = reactive({});
const errors: ErrorsT = reactive({});

provide('cdekFormFields', fields);
provide('cdekFormErrors', errors);

const registerField: RegisterCallback = ({ name, initialValue }) => {
  fields[name] = initialValue;
};

const changeField: ChangeCallback = ({ name, newValue }) => {
  fields[name] = newValue;
};

const validateField: ValidateCallback = ({ name, validOrError }) => {
  errors[name] = validOrError;
};

const cdekForm = ref<null | HTMLElement>(null);

useForm(cdekForm, {
  'change-field': changeField,
  'register-field': registerField,
  'validate-field': validateField,
});

const emit = defineEmits<{
  (e: 'submit', values: FieldsT): void;
  (e: 'submitError', errors: ErrorsT): void;
}>();

const submit = () => {
  for (const key of Object.getOwnPropertyNames(errors)) {
    if (typeof errors[key] === 'string') {
      emit('submitError', errors);
      return;
    }
  }

  emit('submit', fields);
};
</script>

<template>
  <form @submit.prevent="submit" ref="cdekForm">
    <slot />
  </form>
</template>
