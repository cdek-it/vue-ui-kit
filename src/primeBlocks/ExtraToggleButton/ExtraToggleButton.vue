<script setup lang="ts">
import { ToggleButton } from 'primevue';
import { computed } from 'vue';
import type { ToggleButtonSlots } from 'primevue/togglebutton';
import type { ExtraToggleButtonProps } from './types';

const props = withDefaults(defineProps<ExtraToggleButtonProps>(), {
  size: 'base',
  iconPos: 'left',
  iconOnly: false,
});

defineSlots<ToggleButtonSlots>();

const primeSize = computed(() => {
  if (props.size === 'small') {
    return 'small';
  }
  if (props.size === 'large' || props.size === 'xlarge') {
    return 'large';
  }
  return undefined;
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const onUpdateModelValue = (value: boolean) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <ToggleButton
    class="extra-togglebutton"
    :class="{
      'extra-togglebutton--icon-right': iconPos === 'right',
      'extra-togglebutton--icon-only': iconOnly,
      'extra-togglebutton--xlg': size === 'xlarge',
    }"
    :size="primeSize"
    :disabled="disabled"
    :aria-label="
      ariaLabel ?? (iconOnly ? baseLabel ?? onLabel ?? offLabel : undefined)
    "
    :on-icon="onIcon ?? baseIcon"
    :off-icon="offIcon ?? baseIcon"
    :on-label="onLabel ?? baseLabel"
    :off-label="offLabel ?? baseLabel"
    :modelValue="modelValue"
    @update:modelValue="onUpdateModelValue"
  >
    <template v-if="$slots.default" #default>
      <slot />
    </template>
    <template
      v-if="$slots.icon || onIcon || offIcon || baseIcon"
      #icon="slotProps"
    >
      <span
        :class="[slotProps.class, 'extra-togglebutton__icon']"
        aria-hidden="true"
      >
        <slot name="icon" v-bind="slotProps">
          <i
            :class="slotProps.value ? onIcon ?? baseIcon : offIcon ?? baseIcon"
          />
        </slot>
      </span>
    </template>
  </ToggleButton>
</template>

<style scoped>
.extra-togglebutton {
  --extra-togglebutton-icon-size: var(--p-togglebutton-icon-size-md);
  font-family: var(--p-fonts-font-family-heading);
  /* Prime hardcodes the base font size and inherits line-height. */
  font-size: var(--p-fonts-font-size-300);
  line-height: var(--p-fonts-line-height-500);
}

/* Design conflict DTC-001 (recorded in the audit chat): the exported
   disabled component color uses inverse.muted in dark; the design binds muted.
   Keep the export intact and adapt only the disabled wrapper foreground. */
.extra-togglebutton:disabled,
.extra-togglebutton:disabled :deep(.p-togglebutton-icon) {
  color: var(--p-color-fg-muted);
}

/* Prime's unchecked hover omits the existing component border token. */
.extra-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
  border-color: var(--p-togglebutton-hover-border-color);
}

/* Prime excludes checked buttons from hover and uses an elevation focus shadow. */
.extra-togglebutton.p-togglebutton-checked:not(:disabled):hover {
  background: var(--p-togglebutton-checked-hover-background);
  border-color: var(--p-togglebutton-checked-hover-border-color);
  color: var(--p-togglebutton-checked-hover-color);
}

.extra-togglebutton.p-togglebutton-checked:not(:disabled):hover
  :deep(.p-togglebutton-icon) {
  color: var(--p-togglebutton-checked-hover-color);
}

.extra-togglebutton:focus-visible {
  /* Figma represents the focus boundary with effects, not a layout border. */
  border-width: 0;
  /* Prime already reads focusRing.shadow; keep that component token authoritative. */
}

.extra-togglebutton.p-togglebutton-sm {
  --extra-togglebutton-icon-size: var(--p-togglebutton-icon-size-sm);
  /* Component sm/lg font-size tokens still win over the base wrapper rule. */
  font-size: var(--p-togglebutton-sm-font-size);
  line-height: var(--p-fonts-line-height-300);
}

.extra-togglebutton.p-togglebutton-lg {
  --extra-togglebutton-icon-size: var(--p-togglebutton-icon-size-lg);
  font-size: var(--p-togglebutton-lg-font-size);
}

/* Prime reads the base gap for every size; lg/xlg have an exported ext gap. */
.extra-togglebutton.p-togglebutton-lg :deep(.p-togglebutton-content) {
  gap: var(--p-togglebutton-ext-gap);
}

.extra-togglebutton--xlg {
  line-height: var(--p-fonts-line-height-550);
  padding: var(--p-togglebutton-ext-xlg-padding);
}

.extra-togglebutton__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--extra-togglebutton-icon-size);
  height: var(--extra-togglebutton-icon-size);
  font-size: var(--extra-togglebutton-icon-size);
  line-height: 1;
}

.extra-togglebutton--icon-right .extra-togglebutton__icon {
  order: 1;
}

.extra-togglebutton--icon-only {
  width: var(--p-togglebutton-icon-only-width);
  aspect-ratio: 1;
  padding: 0;
}

.extra-togglebutton--icon-only :deep(.p-togglebutton-label) {
  display: none;
}

.extra-togglebutton--icon-only.p-togglebutton-sm {
  width: var(--p-togglebutton-ext-sm-icon-only-width);
}

.extra-togglebutton--icon-only.p-togglebutton-lg {
  width: var(--p-togglebutton-ext-lg-icon-only-width);
}

.extra-togglebutton--icon-only.extra-togglebutton--xlg {
  width: var(--p-togglebutton-ext-xlg-icon-only-width);
}

/* Design conflict DTC-004: named prototype hover/focus curves and exit duration. */
.extra-togglebutton {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-out;
}

.extra-togglebutton:not(:disabled):is(:hover, :focus-visible) {
  transition-duration: var(--p-togglebutton-transition-duration);
  transition-timing-function: ease-in-out;
}
</style>
