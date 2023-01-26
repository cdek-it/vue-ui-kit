<script lang="ts" setup>
import { CdekHeadline } from '@/components/cdek-headline';

const props = withDefaults(
  defineProps<{
    headline?: string;
    withoutPaddings?: boolean;
  }>(),
  { headline: '' }
);
</script>

<template>
  <div
    class="cdek-widget"
    :class="{ 'cdek-widget_without-paddings': withoutPaddings }"
  >
    <CdekHeadline v-if="headline" size="4" class="cdek-widget__title">{{
      headline
    }}</CdekHeadline>
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
