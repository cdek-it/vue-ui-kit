<script setup lang="ts">
import { Toast, type ToastEvent, type ToastProps } from 'primevue';
import { PBlockToastMessageIcon } from './usePBlockToast';

import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertCircle,
} from '@tabler/icons-vue';

interface IPBlockToast extends ToastProps {
  width?: 'sm' | 'md' | 'lg' | 'xlg';
}

withDefaults(defineProps<IPBlockToast>(), {
  width: 'md',
});

const emit = defineEmits<{
  (e: 'close', event: ToastEvent): void;
  (e: 'life-end', event: ToastEvent): void;
}>();
</script>

<template>
  <Toast
    v-bind="{ ...$props, ...$attrs }"
    :class="`p-toast-${width}`"
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
      <IconCircleCheck
        v-if="slotProps.message.icon === PBlockToastMessageIcon.success"
      />
      <IconInfoCircle
        v-else-if="slotProps.message.icon === PBlockToastMessageIcon.info"
      />
      <IconAlertTriangle
        v-else-if="slotProps.message.icon === PBlockToastMessageIcon.warn"
      />
      <IconAlertCircle
        v-else-if="slotProps.message.icon === PBlockToastMessageIcon.error"
      />
      <i
        v-else
        :class="`p-icon p-toast-message-icon ti ${slotProps.message.icon}`"
      />
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
