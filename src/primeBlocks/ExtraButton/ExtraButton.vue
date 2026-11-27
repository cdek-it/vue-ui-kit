<script setup lang="ts">
import { computed } from 'vue';
import Button, { type ButtonSlots } from 'primevue/button';
import { IconLoader2 } from '@tabler/icons-vue';
import type { ExtraButtonProps } from './types';

const props = withDefaults(defineProps<ExtraButtonProps>(), {
  iconPosition: 'left',
  variant: 'primary',
  severity: 'base',
  size: 'base',
  fluid: undefined,
});

defineSlots<ButtonSlots>();

const primeSeverity = computed(() => {
  if (props.severity === 'warning') {
    return 'warn';
  }
  if (props.severity !== 'base') {
    return props.severity;
  }
  if (props.variant === 'secondary') {
    return 'secondary';
  }
  if (props.variant === 'tertiary') {
    return 'contrast';
  }
  return undefined;
});
</script>

<template>
  <Button
    class="extra-button"
    :class="{ 'extra-button--xlg': size === 'xlarge' }"
    :label="label"
    :icon="icon"
    :icon-pos="iconPosition"
    :variant="variant === 'text' || variant === 'link' ? variant : undefined"
    :severity="primeSeverity"
    :size="size === 'small' || size === 'large' ? size : undefined"
    :rounded="rounded"
    :fluid="fluid"
    :disabled="disabled || loading"
    :loading="loading"
    :aria-busy="loading || undefined"
  >
    <template v-if="$slots.default" #default="scope">
      <slot v-bind="scope" />
    </template>
    <template v-if="$slots.icon" #icon="scope">
      <slot name="icon" v-bind="scope" />
    </template>
    <template #loadingicon="scope">
      <slot name="loadingicon" v-bind="scope">
        <IconLoader2
          v-bind="scope"
          class="extra-button__spinner"
          aria-hidden="true"
        />
      </slot>
    </template>
  </Button>
</template>

<style scoped>
/* Шрифт для текста кнопки */
.extra-button.p-button.p-component :deep(.p-button-label) {
  font-family: var(--p-fonts-font-family-heading);
}

/* Размеры иконок для разных размеров кнопок */
.extra-button.p-button {
  --extra-button-icon-size: var(--p-button-icon-size-md);
}

.extra-button.p-button.p-button-sm {
  --extra-button-icon-size: var(--p-button-icon-size-sm);
}

.extra-button.p-button:is(.p-button-lg, .extra-button--xlg) {
  --extra-button-icon-size: var(--p-button-icon-size-lg);
}

.extra-button.p-button :deep(.p-button-icon) {
  font-size: var(--extra-button-icon-size);
}

/* Match the Tabler loader and icon dimensions used in the design. */
.extra-button .extra-button__spinner {
  inline-size: var(--extra-button-icon-size);
  block-size: var(--extra-button-icon-size);
  flex-shrink: 0;
  animation: extra-button-spin 1s linear infinite;
}

@keyframes extra-button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Стили для disabled и loading кнопок */
.extra-button.p-button:is(.p-disabled, :disabled, .p-button-loading) {
  mix-blend-mode: inherit;
  opacity: var(--p-effects-opacity-100);
  color: var(--p-button-disabled-color);
  background: var(--p-button-disabled-background);
  border-color: var(--p-button-disabled-background);
}

/* Text and link retain their transparent surface when disabled or loading. */
.extra-button.p-button:is(.p-button-text, .p-button-link):is(
    .p-disabled,
    :disabled,
    .p-button-loading
  ) {
  background: transparent;
  border-color: transparent;
}

.extra-button.p-button-text:is(
    .p-button-success,
    .p-button-info,
    .p-button-warn,
    .p-button-danger
  ):is(:disabled, .p-button-loading) {
  background: var(--p-button-disabled-background);
}

/* Prime uses the primary focus shadow for base text and link buttons. */
.extra-button.p-button:is(.p-button-text, .p-button-link):not(
    [data-p-severity]
  ):focus-visible {
  box-shadow: 0 0 0 var(--p-button-ext-focus-ring-width)
      var(--p-button-ext-focus-ring-border-color),
    0 0 0 var(--p-button-ext-focus-ring-ring-width)
      var(--p-button-ext-focus-ring-neutral-color);
}

/* Design conflict DTC-BUTTON-001: Figma dark text/link bind to fg/default,
   while the exported button aliases resolve to inverse foregrounds. */
.theme-prime-dark .extra-button.p-button-text:not([data-p-severity], :disabled),
.theme-prime-dark
  .extra-button.p-button-link:not([data-p-severity], :disabled) {
  color: var(--p-color-fg-default);
}

.theme-prime-dark
  .extra-button.p-button-link:not([data-p-severity], :disabled):hover {
  color: var(--p-color-fg-hover);
}

.theme-prime-dark
  .extra-button.p-button-link:not([data-p-severity], :disabled):active {
  color: var(--p-color-fg-muted);
}
/* End design conflict DTC-BUTTON-001 */

/* Design conflict DTC-BUTTON-002: base text hover/active use the transparent
   extText surface in Figma instead of the exported hover/active fills. */
.extra-button.p-button-text:not([data-p-severity], :disabled):is(
    :hover,
    :active
  ) {
  background: var(--p-button-ext-text-background);
}
/* End design conflict DTC-BUTTON-002 */

.extra-button.p-button-text:not([data-p-severity], :disabled):focus-visible {
  background: var(--p-button-ext-text-focus-background);
}

.extra-button.p-button-link:not([data-p-severity], :disabled):focus-visible {
  background: var(--p-button-ext-link-focus-background);
}

/* Design conflict DTC-BUTTON-003: dark primary uses the brand hover/active
   surface in Figma. Its exported component aliases reference success. */
.theme-prime-dark
  .extra-button.p-button:not(
    [data-p-severity],
    .p-button-text,
    .p-button-link,
    :disabled
  ):hover {
  background: var(--p-color-bg-brand-strong-hover);
}

.theme-prime-dark
  .extra-button.p-button:not(
    [data-p-severity],
    .p-button-text,
    .p-button-link,
    :disabled
  ):active {
  background: var(--p-color-bg-brand-strong-active);
}
/* End design conflict DTC-BUTTON-003 */

/* Design conflict DTC-BUTTON-004: dark secondary uses neutral strong surfaces
   and inverse text in Figma. The export uses canvas surfaces and regular text. */
.theme-prime-dark .extra-button.p-button-secondary:not(:disabled) {
  background: var(--p-color-bg-neutral-strong-default);
  color: var(--p-color-fg-inverse-default);
}

.theme-prime-dark .extra-button.p-button-secondary:not(:disabled):hover {
  background: var(--p-color-bg-neutral-strong-hover);
  color: var(--p-color-fg-inverse-hover);
}

.theme-prime-dark .extra-button.p-button-secondary:not(:disabled):active {
  background: var(--p-color-bg-neutral-strong-active);
  color: var(--p-color-fg-inverse-active);
}
/* End design conflict DTC-BUTTON-004 */

/* Design conflict DTC-BUTTON-005: dark tertiary uses canvas default-state
   surfaces and fg/default in Figma instead of neutral strong/inverse aliases. */
.theme-prime-dark .extra-button.p-button-contrast:not(:disabled) {
  background: var(--p-color-bg-surface-canvas-hover);
  color: var(--p-color-fg-default);
}

.theme-prime-dark .extra-button.p-button-contrast:not(:disabled):hover {
  background: var(--p-color-bg-surface-canvas-active);
}

.theme-prime-dark .extra-button.p-button-contrast:not(:disabled):active {
  background: var(--p-button-contrast-active-background);
}
/* End design conflict DTC-BUTTON-005 */

/* Design conflict DTC-BUTTON-006: dark filled success uses status surfaces. */
.theme-prime-dark
  .extra-button.p-button-success:not(
    .p-button-text,
    .p-button-link,
    .p-button-loading,
    :disabled,
    :active
  ) {
  background: var(--p-color-bg-status-success-strong-default);
}

.theme-prime-dark
  .extra-button.p-button-success:not(
    .p-button-text,
    .p-button-link,
    .p-button-loading,
    :disabled,
    :active
  ):hover {
  background: var(--p-color-bg-status-success-strong-hover);
}
/* End design conflict DTC-BUTTON-006 */

/* Отступы для link кнопок */
.extra-button.p-button-link.p-button {
  border-width: 0;
  padding: var(--p-button-ext-link-padding-y) var(--p-button-ext-link-padding-x);
}

.extra-button.p-button-link.p-button:not(.p-button-fluid):not(
    .p-button-icon-only
  ) {
  width: max-content;
}

.extra-button.p-button.p-button-link:not(:disabled):hover
  :deep(.p-button-label) {
  text-decoration: none;
}

/* Размеры для icon-only link кнопок */
.extra-button.p-button-link.p-button-icon-only {
  width: var(--p-button-ext-link-base-icon-only-width);
  height: var(--p-button-ext-link-base-icon-only-width);
}

.extra-button.p-button-link.p-button-icon-only.p-button-sm {
  width: var(--p-button-ext-link-sm-icon-only-width);
  height: var(--p-button-ext-link-sm-icon-only-width);
}

.extra-button.p-button-link.p-button-icon-only.p-button-lg {
  width: var(--p-button-ext-link-lg-icon-only-width);
  height: var(--p-button-ext-link-lg-icon-only-width);
}

/* Высота строки для кнопок */
.extra-button.p-button-sm {
  line-height: var(--p-fonts-line-height-300);
}

.extra-button.p-button:is(.p-button-lg, .extra-button--xlg) {
  line-height: var(--p-fonts-line-height-500);
}

/* Keep Prime's zero gap for icon-only buttons and its centering pseudo-element. */
.extra-button.p-button:is(.p-button-lg, .extra-button--xlg):not(
    .p-button-icon-only
  ) {
  gap: var(--p-button-ext-lg-gap);
}

.extra-button.extra-button--xlg.p-button {
  font-size: var(--p-button-lg-font-size);
  line-height: var(--p-fonts-line-height-550);
}

/* Скругление углов для кнопок large и xlg (кроме rounded) */
.extra-button.p-button:is(.p-button-lg, .extra-button--xlg):not(
    .p-button-rounded
  ) {
  border-radius: var(--p-button-ext-lg-border-radius);
}

.extra-button.extra-button--xlg.p-button:not(.p-button-rounded) {
  border-radius: var(--p-button-ext-xlg-border-radius);
}

/* Отступы и размер шрифта для lg кнопки */
.extra-button.p-button-lg.p-button:not(.p-button-icon-only):not(
    .p-button-link
  ) {
  min-height: var(--p-button-ext-lg-height);
}

/* Отступы и размер шрифта для xlg кнопки */
.extra-button.extra-button--xlg.p-button:not(.p-button-icon-only):not(
    .p-button-link
  ) {
  padding: var(--p-button-ext-xlg-padding-y) var(--p-button-ext-xlg-padding-x);
  min-height: var(--p-button-ext-xlg-height);
}

.extra-button.p-button-link.extra-button--xlg.p-button-icon-only {
  width: var(--p-button-ext-link-xlg-icon-only-width);
  height: var(--p-button-ext-link-xlg-icon-only-width);
}

.extra-button.extra-button--xlg.p-button-icon-only:not(.p-button-link) {
  width: var(--p-button-ext-xlg-icon-only-width);
  height: var(--p-button-ext-xlg-icon-only-width);
}
</style>
