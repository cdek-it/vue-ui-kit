<script lang="ts" setup>
import CrossIcon from './svg/cross.svg?component';
import { CdekButton } from '@/components/cdek-button';

const props = defineProps<{
  message: any;
}>();
</script>

<template>
  <div
    class="toast"
    :class="{
      info: message.type === 'info' || message.type === undefined,
      success: message.type === 'success',
      error: message.type === 'error',
    }"
  >
    <div class="header">
      <div class="message-container">
        <div v-if="message.icon" class="message-icon">
          <component :is="message.icon" />
        </div>
        <div class="message-content">
          <p class="message-title">
            {{ message.content.title }}
          </p>
          <p v-if="message.content.text" class="message-text">
            {{ message.content.text }}
          </p>
        </div>
      </div>
      <button @click="$emit('close')" class="cross-container">
        <CrossIcon />
      </button>
    </div>
    <CdekButton
      @click="message.button?.action"
      v-if="message.button"
      small
      theme="toaster"
      >{{ message.button.text }}</CdekButton
    >
    <!-- надо передавать loading -->
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

  & .header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    & .message-container {
      display: flex;

      & .message-icon {
        margin-right: 4px;
        width: 24px;
        height: 24px;
      }
      & .message-content {
        @include body-2;

        margin-left: 4px;
        margin-top: 2px;
        width: 240px;

        & .message-title {
          color: $Peak;
        }
        & .message-text {
          margin-top: 4px;
          color: $Peak_80;
        }
      }
    }
    & .cross-container {
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
}
</style>
