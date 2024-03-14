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
    /**
     * Стиль, либо с фоном, либо с линией сбоку
     */
    style?: 'surface' | 'line';
  }>(),
  { type: 'attention', style: 'surface' }
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
  <div
    :class="[
      $style['prefix-alert'],
      $style[`prefix-alert--${type}`],
      $style[`prefix-alert_${style}`],
    ]"
  >
    <div :class="$style['prefix-alert__title']">
      <!-- @slot для заголовка, если не нужна иконка, либо нужна кастомная иконка -->
      <slot name="header"><component :is="currentIcon" /> {{ title }}</slot>
    </div>
    <div :class="$style['prefix-alert__content']">
      <!-- @slot для контента -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped module>
.prefix-alert {
  --background-color: transparent;
  --line-color: transparent;

  &--attention {
    --background-color: #{$Surface_Attention};
    --line-color: #{$Attention};
  }

  &--positive {
    --background-color: #{$Surface_Access};
    --line-color: #{$Success};
  }

  &--negative {
    --background-color: #{$Surface_Error};
    --line-color: #{$Error};
  }

  &--info {
    --background-color: #{$Surface_Neutral};
    --line-color: #{$Secondary_70};
  }

  &_surface {
    padding: 12px 12px 12px 16px;
    border-radius: 8px;
    background: var(--background-color);
  }

  &_line {
    $padding-block: 4px;
    $padding-inline: 8px;

    padding: $padding-block $padding-inline $padding-block
      calc(#{$padding-inline} + 16px);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: $padding-block;
      bottom: $padding-block;
      left: $padding-inline;
      width: 2px;
      background: var(--line-color);
    }
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
