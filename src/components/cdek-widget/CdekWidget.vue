<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import CdekHeadline from '../cdek-headline/CdekHeadline.vue';

const props = withDefaults(
  defineProps<{
    headline?: string;
    withoutPaddings?: boolean;
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
    :class="{ 'cdek-widget_without-paddings': withoutPaddings }"
  >
    <CdekHeadline v-if="showHeader" size="4" class="cdek-widget__title">
      <slot name="header">{{ headline }}</slot>
    </CdekHeadline>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.cdek-widget {
  @include body-1;

  background: $Peak;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 32px;
  box-sizing: border-box;

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

  &__title {
    margin-bottom: 24px;

    @include media-xs {
      font-size: 18px;
      line-height: 26px;
    }
  }
}
</style>
