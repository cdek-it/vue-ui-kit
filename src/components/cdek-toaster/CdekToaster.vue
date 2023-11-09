<script lang="ts" setup>
import { computed } from 'vue';

import { CdekButton } from '../cdek-button';

import CrossIcon from './svg/cross.svg?component';
import InfoIcon from './svg/info.svg?component';
import CheckInCircleIcon from './svg/check-in-circle.svg?component';
import WarningIcon from './svg/warning.svg?component';

export type ToasterProps = {
  type?: 'info' | 'success' | 'error';
  /**
   * Заголовок
   */
  title: string;
  /**
   * Описание
   */
  text?: string;
  /**
   * Настройки кнопки, можно задать текст, действие
   *
   * button.loading включит спиннер
   */
  button?: {
    text: string;
    action?: () => void;
    loading?: boolean;
  };
  /**
   * Компонент иконки, при передаче будет показан он, иначе дефолтная иконка
   */
  icon?: any;
  /**
   * Чтобы не показывать иконку вообще, передайте withoutIcon
   */
  withoutIcon?: boolean;
};

const props = withDefaults(defineProps<ToasterProps>(), { type: 'info' });

const defaultIcons = {
  info: InfoIcon,
  success: CheckInCircleIcon,
  error: WarningIcon,
};

const defaultIcon = computed(() => {
  return defaultIcons[props.type];
});
</script>

<template>
  <div class="toast" :class="[type]">
    <button @click="$emit('close-toast')" class="toast__close">
      <CrossIcon />
    </button>

    <div class="toast__main">
      <template v-if="!withoutIcon">
        <component v-if="icon" :is="icon" class="toast__icon" />
        <component v-else :is="defaultIcon" class="toast__icon" />
      </template>

      <div class="toast__content">
        <p class="toast__title">
          {{ title }}
        </p>
        <p v-if="text" class="toast__text">
          {{ text }}
        </p>
      </div>
    </div>
    <CdekButton
      v-if="button"
      @click.stop="button?.action"
      theme="toaster"
      small
      :loading="button.loading"
      >{{ button.text }}</CdekButton
    >
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.toast {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 10px 10px 12px;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-sizing: border-box;
  width: 100%;
  max-width: 328px;
  &.info {
    background: $Bottom_66;
    box-shadow: 0px 8px 12px -5px $Tertiary_30;
  }
  &.success {
    background: $Success_70;
    box-shadow: 0px 8px 12px -5px $Success_30;
  }
  &.error {
    background: $Error_70;
    box-shadow: 0px 8px 12px -5px $Error_30;
  }

  &__main {
    display: flex;
    width: 100%;
    padding-right: 34px;
  }

  &__icon {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }

  &__content {
    @include body-2;

    margin-left: 4px;
    margin-top: 2px;
    width: 240px;
  }

  &__title {
    color: $Peak;
  }

  &__text {
    margin-top: 4px;
    color: $Peak_80;
  }

  &__close {
    position: absolute;
    border: unset;
    background: unset;
    cursor: pointer;
    padding: 0;
    right: 10px;
    width: 24px;
    height: 24px;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
