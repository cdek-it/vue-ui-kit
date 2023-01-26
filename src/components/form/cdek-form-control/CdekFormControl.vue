<script lang="ts" setup>
import { onMounted, inject, computed, ref, watch } from 'vue';
import type { Ref } from 'vue';

const values = inject<{ [key: string]: string | boolean }>('cdekFormFields');
const cdekForm = inject<Ref<null | HTMLElement>>('cdekFormRef');
const cdekFormMounted = inject<Ref<boolean>>('cdekFormMounted');

type RuleValidator = (val: string) => boolean | string;
type RulesObjectT = {
  [key: string]: boolean | string | RuleValidator;
};
type RulesT = string | RulesObjectT;

const props = defineProps<{
  name: string;
  rules?: RulesT;
}>();

let cdekFormQueue: Function[] = [];

const triggerEventOnForm = (eventName: string, detail: object) => {
  const callback = () => {
    const event = new CustomEvent(eventName, { detail });
    cdekForm?.value?.dispatchEvent(event);
  };

  if (cdekFormMounted?.value) {
    callback();
  } else {
    cdekFormQueue.push(callback);
  }
};

watch(
  () => cdekFormMounted?.value,
  () => {
    for (const callback of cdekFormQueue) {
      callback();
    }
    cdekFormQueue = [];
  }
);

onMounted(() => {
  triggerEventOnForm('register-field', { name: props.name, initialValue: '' });
  triggerEventOnForm('validate-field', {
    name: props.name,
    validOrError: getErrorKey(validateValue('')),
  });
});

const error = ref<null | boolean | string>(null);

type ValidateResultT = boolean | { key: string; message?: string };
const validateValue = (value: string | boolean): ValidateResultT => {
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
    return values?.[props.name] || '';
  },
  set(newValue) {
    triggerEventOnForm('change-field', { name: props.name, newValue });
    const errorObj = validateValue(newValue);
    error.value = getErrorMessage(errorObj);
    triggerEventOnForm('validate-field', {
      name: props.name,
      validOrError: getErrorKey(errorObj),
    });
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
