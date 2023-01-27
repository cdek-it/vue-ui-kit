<script lang="ts" setup>
import { provide, reactive } from 'vue';

import FormService, {
  FormServiceKey,
} from '@/components/form/services/FormService';
import type { FieldsT, ErrorsT } from '@/components/form/services/types';

const formService = reactive(new FormService());
provide(FormServiceKey, formService);

const emit = defineEmits<{
  (e: 'submit', values: FieldsT): void;
  (e: 'submitError', errors: ErrorsT): void;
}>();

const submit = () => {
  for (const key of Object.getOwnPropertyNames(formService.errors)) {
    if (typeof formService.errors[key] === 'string') {
      emit('submitError', { ...formService.errors });
      formService.triggerSubmit();
      return;
    }
  }

  emit('submit', { ...formService.fields });
};
</script>

<template>
  <form @submit.prevent="submit" ref="cdekForm">
    <slot />
  </form>
</template>
