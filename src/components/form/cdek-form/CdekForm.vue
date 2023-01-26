<script lang="ts" setup>
import { provide, reactive, ref, onMounted } from 'vue';

const cdekForm = ref<null | HTMLElement>(null);

type FieldsT = { [key: string]: string | boolean };
type ErrorsT = FieldsT;

const fields: FieldsT = reactive({});
const errors: ErrorsT = reactive({});

const mounted = ref(false);

provide('cdekFormFields', fields);
provide('cdekFormErrors', errors);
provide('cdekFormRef', cdekForm);
provide('cdekFormMounted', mounted);

const addListenerOnForm = (eventName: string, callback: Function) => {
  cdekForm.value?.addEventListener(
    eventName,
    (e: any) => {
      e.stopPropagation();
      callback(e.detail);
    },
    false
  );
};

const registerField = ({
  name,
  initialValue,
}: {
  name: string;
  initialValue: string | boolean;
}) => {
  fields[name] = initialValue;
};

const changeField = ({
  name,
  newValue,
}: {
  name: string;
  newValue: string | boolean;
}) => {
  fields[name] = newValue;
};

const validateField = ({
  name,
  validOrError,
}: {
  name: string;
  validOrError: boolean | string;
}) => {
  errors[name] = validOrError;
};

onMounted(() => {
  addListenerOnForm('register-field', registerField);
  addListenerOnForm('validate-field', validateField);
  addListenerOnForm('change-field', changeField);
  mounted.value = true;
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
