<script lang="ts" setup>
import CrossIcon from './svg/cross.svg?component';
import { CdekButton } from '@/components/cdek-button';

const props = withDefaults(
  defineProps<{
    type?: 'info' | 'success' | 'error';
    title: string;
    text?: string;
    button?: {
      text: string;
      action: () => void;
      loading?: boolean;
    };
    icon?: any;
    withoutIcon?: boolean;
  }>(),
  { type: 'info' }
);
</script>

<template>
  <div
    class="toast"
    :class="{
      info: type === 'info',
      success: type === 'success',
      error: type === 'error',
    }"
  >
    <div class="toast__main">
      <div class="toast__message">
        <template v-if="!withoutIcon">
          <component v-if="icon" :is="icon" class="toast__icon" />
          <InfoIcon v-else-if="type === 'info'" />
          <CheckInCircleIcon v-else-if="type === 'success'" />
          <WarningIcon v-else-if="type === 'error'" />
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
      <button @click="$emit('close-toast')" class="toast__close">
        <CrossIcon />
      </button>
    </div>
    <CdekButton
      v-if="button"
      @click="button?.action"
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
  width: 328px;
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
    justify-content: space-between;
  }

  &__message {
    display: flex;
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
    border: unset;
    background: unset;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
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
