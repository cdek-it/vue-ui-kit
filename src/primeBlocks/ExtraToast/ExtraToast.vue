<script setup lang="ts">
import { Toast, type ToastEvent } from 'primevue';
import { ExtraToastMessageIcon } from './useExtraToast';
import type { ExtraToastProps } from './types';

import {
  IconCircleCheck,
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertCircle,
  IconX,
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
      <div class="extra-toast__accent-line"></div>
      <slot name="messageicon" class="p-toast-message-icon">
        <IconCircleCheck
          v-if="slotProps.message.icon === ExtraToastMessageIcon.success"
          class="p-toast-message-icon"
        />
        <IconInfoCircle
          v-else-if="slotProps.message.icon === ExtraToastMessageIcon.info"
          class="p-toast-message-icon"
        />
        <IconAlertTriangle
          v-else-if="slotProps.message.icon === ExtraToastMessageIcon.warn"
          class="p-toast-message-icon"
        />
        <IconAlertCircle
          v-else-if="slotProps.message.icon === ExtraToastMessageIcon.error"
          class="p-toast-message-icon"
        />
        <i
          v-else
          :class="`p-icon p-toast-message-icon ti ${slotProps.message.icon}`"
        />
      </slot>
      <div class="p-toast-message-text">
        <span class="p-toast-summary">
          {{ slotProps.message.summary }}
        </span>
        <div class="p-toast-detail">
          {{ slotProps.message.detail }}
        </div>
      </div>
    </template>
    <template #closeicon="slotProps">
      <slot name="closeicon" v-bind="slotProps">
        <!-- Figma uses Tabler ti-x; Prime's TimesIcon has a different path. -->
        <IconX :class="slotProps.class" />
      </slot>
    </template>
  </Toast>
</template>

<style scoped lang="scss">
:global(.p-toast.extra-toast--sm) {
  width: var(--p-dimension-size-1700);
}
:global(.p-toast.extra-toast--md) {
  width: var(--p-dimension-size-1900);
}
:global(.p-toast.extra-toast--lg) {
  width: var(--p-toast-width);
}
:global(.p-toast.extra-toast--xlg) {
  width: var(--p-dimension-size-2200);
}
// Teleported Toast does not retain the wrapper scoped context. Limit all
// viewport/scroll deltas to its own extra-toast root; keep Prime transitions.
:global(.p-toast.extra-toast) {
  --extra-toast-viewport-offset: var(--p-dimension-space-600);
  display: flex;
  flex-direction: column;
  max-block-size: calc(100dvh - 2 * var(--extra-toast-viewport-offset));
}
// Prime renders a div for TransitionGroup between the root and messages.
:global(.p-toast.extra-toast > div) {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  min-block-size: 0;
}
:global(.extra-toast .p-toast-message-content) {
  // Prime adds a border outside the design's content inset.
  margin: calc(-1 * var(--p-dimension-border-width-100));
  flex: 1 1 auto;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}
:global(.extra-toast .p-toast-message) {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  min-block-size: 0;
  overflow: hidden;
  position: relative;
}
:global(.extra-toast .p-toast-message:not(:has(> .p-toast-message-content))) {
  overflow-y: auto;
}
:global(.extra-toast .p-toast-message-info) {
  --extra-toast-accent-color: var(--p-toast-ext-info-color);
  --extra-toast-close-focus-background: var(
    --p-toast-ext-info-close-button-focus-background
  );
  --extra-toast-close-border-color: var(
    --p-toast-ext-info-close-button-border-color
  );
}
:global(.extra-toast .p-toast-message-success) {
  --extra-toast-accent-color: var(--p-toast-ext-success-color);
  --extra-toast-close-focus-background: var(
    --p-toast-ext-success-close-button-focus-background
  );
  --extra-toast-close-border-color: var(
    --p-toast-ext-success-close-button-border-color
  );
}
:global(.extra-toast .p-toast-message-warn) {
  --extra-toast-accent-color: var(--p-toast-ext-warn-color);
  --extra-toast-close-focus-background: var(
    --p-toast-ext-warn-close-button-focus-background
  );
  --extra-toast-close-border-color: var(
    --p-toast-ext-warn-close-button-border-color
  );
}
:global(.extra-toast .p-toast-message-error) {
  --extra-toast-accent-color: var(--p-toast-ext-error-color);
  --extra-toast-close-focus-background: var(
    --p-toast-ext-error-close-button-focus-background
  );
  --extra-toast-close-border-color: var(
    --p-toast-ext-error-close-button-border-color
  );
}
// Severity foreground/detail colors are supplied by Prime component tokens.
// Toast has font-size tokens but no line-height settings in the installed Prime.
:global(.extra-toast .p-toast-summary) {
  line-height: var(--p-fonts-line-height-400);
}
:global(.extra-toast .p-toast-detail) {
  line-height: var(--p-fonts-line-height-350);
}
:global(.extra-toast .p-toast-message-icon) {
  color: var(--extra-toast-accent-color);
}
:global(.extra-toast .p-toast-close-button) {
  color: var(--extra-toast-accent-color);
  border: var(--p-toast-ext-close-button-width) solid
    var(--extra-toast-close-border-color);
  margin: 0;
  right: 0;
}

// The four design severities replace the normal stroke with the focus ring.
// Keep its layout width so the icon remains centered in the same 32px button.
:global(
    .extra-toast
      :is(
        .p-toast-message-info,
        .p-toast-message-success,
        .p-toast-message-warn,
        .p-toast-message-error
      )
      .p-toast-close-button:focus-visible
  ) {
  border-color: transparent;
  background: var(--extra-toast-close-focus-background);
}
:global(.extra-toast .extra-toast__accent-line) {
  background: var(--extra-toast-accent-color);
  border-radius: var(--p-toast-border-radius) 0 0 var(--p-toast-border-radius);
  inset: 0 auto 0 0;
  position: absolute;
  width: var(--p-toast-ext-accent-line-width);
}
</style>
