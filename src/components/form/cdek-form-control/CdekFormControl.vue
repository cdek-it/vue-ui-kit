<script lang="ts" setup>
import { onMounted, inject, computed } from 'vue';

const values = inject<{ [key: string]: string }>('cdekFormFields');

const props = defineProps<{
  emitOnForm: (type: string, ...args: [string, string]) => void;
  name: string;
}>();

onMounted(() => {
  props.emitOnForm?.('register', props.name, '');
});

const value = computed({
  get() {
    return values?.[props.name] || '';
  },
  set(newVal) {
    props.emitOnForm('change', props.name, newVal);
  },
});
</script>

<template>
  <label :for="name">{{ name }}</label>
  <input v-model="value" :id="name" />
</template>
