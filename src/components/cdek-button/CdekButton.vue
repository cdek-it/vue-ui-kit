<script lang="ts" setup>
import { computed } from 'vue';
import CdekSpinner from '../cdek-spinner/CdekSpinner.vue';

const props = withDefaults(
  defineProps<{
    theme?: 'primary' | 'secondary' | 'outline' | 'ghost';
    width?: 'auto' | 'content';
    small?: boolean;
    disabled?: boolean;
    loading?: boolean;
  }>(),
  { width: 'auto', theme: 'primary' }
);

const themeClass = computed(() => {
  return props.theme ? ' ' + props.theme : '';
});
const isSmallClass = computed(() => {
  return props.small ? ' small' : '';
});
const isDisabledClass = computed(() => {
  return props.disabled ? ' disabled' : '';
});
const widthClass = computed(() => {
  return props.width === 'content' ? '' : ' width-auto';
});
const spinnerColor = computed(() => {
  if (
    props.theme === 'secondary' ||
    props.theme === 'outline' ||
    props.theme === 'ghost'
  ) {
    return 'green';
  } else {
    return 'white';
  }
});
</script>

<template>
  <div :class="'cdek-button-container' + widthClass">
    <div :class="'cdek-button' + themeClass + isSmallClass + isDisabledClass">
      <CdekSpinner :color="spinnerColor" v-if="loading" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek-button-container {
  display: inline-block;
}
.width-auto {
  display: block;
}
.cdek-button {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  height: 48px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  @include button-1;

  &:hover:not(.disabled) {
    background: $Primary_Button_Hover;
    border-color: $Primary_Button_Hover;
    color: $Peak;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  }
  &:active:not(.disabled) {
    background: $Primary_Active;
    border-color: $Primary_Active;
    color: $Peak;
    border-radius: 10px;
  }
}
.small {
  height: 36px;
}
.primary {
  background: $Primary;
  color: $Peak;
  border-radius: 10px;
}
.secondary {
  background: $Secondary_Button;
  color: $Primary;
  border-radius: 10px;
}
.outline {
  background: transparent;
  color: $Primary;
  border: 1px solid $Primary;
  border-radius: 10px;
}
.ghost {
  background: transparent;
  color: $Primary;
}
.disabled {
  background: $Button_Disable;
  color: $Peak;
  border: none;
  border-radius: 10px;
  cursor: not-allowed;
}
</style>
