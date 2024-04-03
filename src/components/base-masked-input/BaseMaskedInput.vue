<script lang="ts" setup>
import { computed } from 'vue';
import { vMaska } from 'maska';
import BaseInput from '../base-input/BaseInput.vue';

const props = defineProps<{
  modelValue: string;
  mask: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <BaseInput v-maska v-model="value" :data-maska="mask">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </BaseInput>
</template>

<style lang="scss" scoped></style>
