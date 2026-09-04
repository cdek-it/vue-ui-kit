<script setup lang="ts">
import { Toast, type ToastEvent } from 'primevue';
import { ExtraToastMessageIcon } from './useExtraToast';
import type { ExtraToastProps } from './types';

import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertCircle,
} from '@tabler/icons-vue';

withDefaults(defineProps<ExtraToastProps>(), {
  width: 'md',
});

const emit = defineEmits<{
  (e: 'close', event: ToastEvent): void;
  (e: 'life-end', event: ToastEvent): void;
}>();
</script>

<template>
  <Toast
    v-bind="$attrs"
    :group="group"
    :position="position"
    :class="['extra-toast', `extra-toast--${width}`]"
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
        v-if="slotProps.message.icon === ExtraToastMessageIcon.success"
      />
      <IconInfoCircle
        v-else-if="slotProps.message.icon === ExtraToastMessageIcon.info"
      />
      <IconAlertTriangle
        v-else-if="slotProps.message.icon === ExtraToastMessageIcon.warn"
      />
      <IconAlertCircle
        v-else-if="slotProps.message.icon === ExtraToastMessageIcon.error"
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

<style scoped lang="scss">
:deep(.p-toast.extra-toast--sm),
:deep(.p-toast.extra-toast--sm .p-toast-message) {
  width: var(--p-messages-sm-width);
}

:deep(.p-toast.extra-toast--lg),
:deep(.p-toast.extra-toast--lg .p-toast-message) {
  width: var(--p-messages-lg-width);
}

:deep(.p-toast.extra-toast--xlg),
:deep(.p-toast.extra-toast--xlg .p-toast-message) {
  width: var(--p-messages-xlg-width);
}
</style>
