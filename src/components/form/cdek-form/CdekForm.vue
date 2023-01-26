<script lang="ts" setup>
import { provide, reactive } from 'vue';

const fields: { [key: string]: string } = reactive({});

provide('cdekFormFields', fields);

const registerField = (name: string, initialValue: string) => {
  fields[name] = initialValue;
};

const changeField = (name: string, newValue: string) => {
  fields[name] = newValue;
  console.log(fields);
};

const callbacks = {
  register: registerField,
  change: changeField,
};

const sendFormEvent = (
  type: 'register' | 'change',
  ...args: [string, string]
) => {
  callbacks[type](...args);
};

const emit = defineEmits<{
  (e: 'submit', values: { [key: string]: string }): void;
}>();

const submit = () => {
  emit('submit', fields);
};
</script>

<template>
  <form @submit.prevent="submit">
    <slot :sendFormEvent="sendFormEvent" />
  </form>
</template>
