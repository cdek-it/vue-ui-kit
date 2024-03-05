<script lang="ts" setup>
import { computed } from 'vue';

import AlertTriangleIcon from './icons/alert-triangle.svg?component';
import CheckIcon from './icons/check.svg?component';
import BanIcon from './icons/ban.svg?component';
import InfoCircleIcon from './icons/info-circle.svg?component';

const props = withDefaults(
  defineProps<{
    /**
     * Заголовок алерта, используйте если хотите стоковую иконку
     */
    title?: string;
    /**
     * Тип алерта, отличается иконка и цвет фона
     */
    type?: 'negative' | 'positive' | 'attention' | 'info';
  }>(),
  { type: 'attention' }
);

const typesWithIcons = {
  negative: BanIcon,
  positive: CheckIcon,
  attention: AlertTriangleIcon,
  info: InfoCircleIcon,
};

const currentIcon = computed(() => typesWithIcons[props.type]);
</script>

<template>
  <div class="cdek-alert" :class="`cdek-alert--${type}`">
    <div class="cdek-alert__title">
      <!-- @slot для заголовка, если не нужна иконка, либо нужна кастомная иконка -->
      <slot name="header"><component :is="currentIcon" /> {{ title }}</slot>
    </div>
    <div class="cdek-alert__content">
      <!-- @slot для контента -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cdek-alert {
  --background-color: transparent;

  padding: 12px;
  border-radius: 8px;
  background: var(--background-color);

  &--attention {
    --background-color: #{$Surface_Attention};
  }

  &--positive {
    --background-color: #{$Surface_Access};
  }

  &--negative {
    --background-color: #{$Surface_Error};
  }

  &--info {
    --background-color: #{$Surface_Neutral};
  }

  &__title {
    @include title-small;

    letter-spacing: unset;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 4px;

    :deep(svg) {
      width: 20px;
      height: 20px;
    }
  }

  &__content {
    @include body-2;

    color: $Bottom_66;
  }
}
</style>
