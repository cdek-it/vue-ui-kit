<script setup lang="ts">
import { Toast, type ToastEvent, type ToastProps } from 'primevue';

interface IPBlockToast extends ToastProps {}

defineProps<IPBlockToast>();

const emit = defineEmits<{
  (e: 'close', event: ToastEvent): void;
  (e: 'life-end', event: ToastEvent): void;
}>();
</script>

<template>
  <Toast
    v-bind="{ ...$props, ...$attrs }"
    @close="emit('close', $event)"
    @lifeEnd="emit('life-end', $event)"
  >
    <template v-if="$slots.container" #container="slotProps">
      <slot name="container" v-bind="slotProps || {}" />
    </template>
    <template v-if="$slots.message" #message="slotProps">
      <slot name="message" v-bind="slotProps" />
    </template>
    <template v-else #message="slotProps">
      <div class="p-toast-accent-line"></div>
      <i :class="`p-icon p-toast-message-icon ti ${slotProps.message.icon}`" />
      <div class="p-toast-message-text">
        <span class="p-toast-summary">
          {{ slotProps.message.summary }}
        </span>
        <div class="p-toast-detail">
          {{ slotProps.message.detail }}
        </div>
      </div>
    </template>
    <template v-if="$slots.messageicon" #messageicon>
      <slot name="messageicon" />
    </template>
    <template v-if="$slots.closeicon" #closeicon>
      <slot name="closeicon" />
    </template>
  </Toast>
</template>
