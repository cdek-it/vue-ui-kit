<script lang="ts" setup>
import { computed } from 'vue';
import BaseSpinner from '../base-spinner/BaseSpinner.vue';

const props = withDefaults(
  defineProps<{
    theme?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'toaster';
    /**
     * `'auto'` - Кнопка растягивается на всю доступную ширину
     *
     * `'content'` - Ширина кнопки определяется по контенту
     */
    width?: 'auto' | 'content';
    /**
     * `false` - Высота кнопки - 48px
     *
     * `true` - Высота кнопки - 36px
     */
    small?: boolean;
    disabled?: boolean;
    loading?: boolean;
    /**
     * `false` - Спиннер заменяет контент
     *
     * `true` - Спиннер располагается перед контентом
     */
    spinnerBefore?: boolean;
    /**
     * `false` - Размеры кнопки зависят от контента
     *
     * `true` - Размеры кнопки - 48х48px (36х36px если `small=true`)
     */
    icon?: boolean;
    /**
     * Кастомный тег для рендера
     */
    as?: string;
  }>(),
  { width: 'auto', theme: 'primary' }
);

const spinnerColor = computed(() => {
  if (
    props.theme === 'primary' ||
    props.theme === 'toaster' ||
    props.disabled
  ) {
    return 'white';
  }

  return 'green';
});
</script>

<template>
  <component
    :is="as || 'button'"
    :class="[
      $style['prefix-button'],
      {
        [$style[`${theme}-theme`]]: true,
        [$style['small']]: small,
        [$style['inline']]: width === 'content',
        [$style['icon']]: icon,
        [$style['disabled']]: disabled,
      },
    ]"
    type="button"
  >
    <BaseSpinner :color="spinnerColor" v-if="loading" />
    <slot v-if="!loading || spinnerBefore" />
  </component>
</template>

<style lang="scss" scoped module>
.prefix-button {
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

  &:hover:not(.disabled) {
    background: $Primary_Button_Hover;
    border-color: $Primary_Button_Hover;
    color: $Peak;

    &:deep(.spinner) {
      --spinner-color: #{$Peak};
    }
  }
  &:active:not(.disabled) {
    background: $Primary_Active;
    border-color: $Primary_Active;
    color: $Peak;

    &:deep(.spinner) {
      --spinner-color: #{$Peak};
    }
  }

  &.inline {
    width: auto;
  }

  &.small {
    height: 36px;
  }

  &.primary-theme {
    background: $Primary;
    color: $Peak;
  }

  &.secondary-theme {
    background: $Secondary_Button;
    color: $Primary;
  }

  &.outline-theme {
    background: transparent;
    color: $Primary;
    border: 1px solid $Primary;
  }

  &.ghost-theme {
    background: transparent;
    color: $Primary;
  }

  &.toaster-theme {
    background: $Peak_20;
    color: $Peak;

    &:hover:not(.disabled) {
      background: $Peak_40;
    }
    &:active:not(.disabled) {
      background: $Peak_60;
    }
  }

  &.icon {
    padding: 0;
    height: 48px;
    width: 48px;

    &.small {
      height: 36px;
      width: 36px;
    }
  }

  &.disabled {
    background: $Button_Disable;
    color: $Peak;
    border: none;
    pointer-events: none;
  }
}
</style>
