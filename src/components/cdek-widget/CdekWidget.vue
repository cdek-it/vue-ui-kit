<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import CdekHeadline from '../cdek-headline/CdekHeadline.vue';
import CdekSpinner from '../cdek-spinner/CdekSpinner.vue';

const props = withDefaults(
  defineProps<{
    headline?: string;
    withoutPaddings?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  { headline: '' }
);

const slots = useSlots();

const showHeader = computed(() => {
  return Boolean(props.headline || slots['header']);
});
</script>

<template>
  <div
    class="cdek-widget"
    :class="{
      'cdek-widget_without-paddings': withoutPaddings,
      'cdek-widget_loading': loading,
      'cdek-widget_disabled': disabled,
    }"
  >
    <CdekHeadline v-if="showHeader" size="4" class="cdek-widget__title">
      <slot name="header">{{ headline }}</slot>
    </CdekHeadline>

    <slot />

    <div v-if="loading" class="cdek-widget__spinner">
      <CdekSpinner size="medium" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek-widget {
  $radius: 12px;

  @include body-1;

  background: $Peak;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: $radius;
  padding: 32px;
  box-sizing: border-box;
  position: relative;

  @include media-xs {
    @include body-2;

    padding: 16px;
  }

  &_without-paddings {
    padding: 0;

    @include media-xs {
      padding: 0;
    }
  }

  &_loading {
    user-select: none;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $Peak_80;
      border-radius: $radius;
      z-index: 1;
    }
  }

  &_disabled {
    opacity: 0.6;
    pointer-events: none;
    user-select: none;
  }

  &__title {
    margin-bottom: 24px;

    @include media-xs {
      font-size: 18px;
      line-height: 26px;
    }
  }

  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
  }
}
</style>
