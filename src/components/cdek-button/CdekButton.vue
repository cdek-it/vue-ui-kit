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
    spinnerBefore?: boolean;
  }>(),
  { width: 'auto', theme: 'primary' }
);

const spinnerColor = computed(() => {
  if (props.theme === 'primary' || props.disabled) {
    return 'white';
  }

  return 'green';
});
</script>

<template>
  <button
    class="cdek-button"
    :class="{
      [props.theme]: true,
      small: props.small,
      inline: props.width === 'content',
    }"
    :disabled="disabled"
  >
    <CdekSpinner :color="spinnerColor" v-if="loading" />
    <slot v-if="!loading || spinnerBefore" />
  </button>
</template>

<style lang="scss" scoped>
.cdek-button {
  @include button-1;

  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  height: 48px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border: unset;
  transition: all 0.2s ease-in-out;

  &:hover:not([disabled]) {
    background: $Primary_Button_Hover;
    border-color: $Primary_Button_Hover;
    color: $Peak;
  }
  &:active:not([disabled]) {
    background: $Primary_Active;
    border-color: $Primary_Active;
    color: $Peak;
  }

  &.inline {
    width: auto;
  }

  &.small {
    height: 36px;
  }

  &.primary {
    background: $Primary;
    color: $Peak;
  }

  &.secondary {
    background: $Secondary_Button;
    color: $Primary;
  }

  &.outline {
    background: transparent;
    color: $Primary;
    border: 1px solid $Primary;
  }

  &.ghost {
    background: transparent;
    color: $Primary;
  }

  &[disabled] {
    background: $Button_Disable;
    color: $Peak;
    border: none;
    pointer-events: none;
  }
}
</style>
