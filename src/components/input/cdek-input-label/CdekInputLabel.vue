<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  label?: string;
  defaultPosition?: {
    top: string;
    left: string;
  };
  activePosition?: {
    top: string;
    left: string;
  };
}>();

const positionVars = computed(() => {
  let vars = {
    '--default-position-top': '50%',
    '--default-position-left': '20px',
    '--active-position-top': '0',
    '--active-position-left': '0',
  };

  if (props.defaultPosition) {
    vars = {
      ...vars,
      '--default-position-top': props.defaultPosition.top,
      '--default-position-left': props.defaultPosition.left,
    };
  }

  if (props.activePosition) {
    vars = {
      ...vars,
      '--active-position-top': props.activePosition.top,
      '--active-position-left': props.activePosition.left,
    };
  }

  return vars;
});
</script>

<template>
  <label :style="positionVars">
    <div>{{ label }}</div>
    <!-- высота label зависит от элемента/ов переданных в слот -->
    <slot />
  </label>
</template>
