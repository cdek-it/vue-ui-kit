<script setup lang="ts">
import { computed } from 'vue';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-vue';
import { Badge } from 'primevue';
import type { ExtraMenuItemProps } from './types';

defineOptions({ inheritAttrs: false });

const props = defineProps<ExtraMenuItemProps>();

// A standalone item has no Prime parent to suppress disabled actions.
function onDisabledInteraction(event: Event) {
  if (!props.disabled) {
    return;
  }
  if (event instanceof KeyboardEvent && !['Enter', ' '].includes(event.key)) {
    return;
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}

const hasSubmenu = computed(
  () => Array.isArray(props.items) && props.items.length > 0
);
</script>

<template>
  <component
    :is="as ?? 'a'"
    v-bind="$attrs"
    :href="disabled ? undefined : url"
    :target="target"
    class="extra-menuitem-link"
    :class="{ 'extra-menuitem-link--disabled': disabled }"
    :disabled="as === 'button' ? disabled : undefined"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : $attrs.tabindex"
    @click.capture="onDisabledInteraction"
    @keydown.capture="onDisabledInteraction"
  >
    <span v-if="icon || $slots.itemicon" class="extra-menuitem-icon">
      <slot name="itemicon" v-bind="{ item: props }">
        <span v-if="icon" :class="icon" />
      </slot>
    </span>
    <div class="extra-menuitem-caption">
      <span class="extra-menuitem-label">{{ label }}</span>
      <small v-if="description" class="extra-menuitem-description">
        {{ description }}
      </small>
    </div>
    <Badge v-if="badge" :value="badge" />
    <span v-if="hasSubmenu" class="extra-menuitem-submenu-icon">
      <slot name="submenuicon" v-bind="{ item: props, root }">
        <component
          :is="root ? IconChevronDown : IconChevronRight"
          class="extra-menuitem-chevron"
        />
      </slot>
    </span>
  </component>
</template>

<style lang="scss" scoped>
.extra-menuitem-link {
  font-family: var(--extra-menuitem-font-family, inherit);
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  padding: var(
    --extra-menuitem-padding,
    var(--p-dimension-space-200) var(--p-dimension-space-400)
  );
  gap: var(--extra-menuitem-gap, var(--p-dimension-space-200));
  border-radius: var(
    --extra-menuitem-border-radius,
    var(--p-dimension-border-radius-200)
  );
  cursor: pointer;
}

.extra-menuitem-link--disabled {
  cursor: default;
  pointer-events: none;
}

/* Prime already dims disabled ancestors in composite menus. */
.extra-menuitem-link--disabled:not(.p-disabled *) {
  opacity: var(--p-effects-opacity-60);
}

// Composite menus supply their component state tokens; standalone items use
// semantic hover/pressed colors because there is no Prime MenuItem component.
.extra-menuitem-link:not(.extra-menuitem-link--disabled):hover {
  background: var(
    --extra-menuitem-focus-background,
    var(--p-color-bg-neutral-weak-default)
  );
  color: var(--extra-menuitem-focus-color, inherit);
}

.extra-menuitem-link:not(.extra-menuitem-link--disabled):active {
  background: var(
    --extra-menuitem-pressed-background,
    var(--p-color-bg-neutral-strong-hover)
  );
  color: var(--extra-menuitem-active-color, var(--p-color-fg-on-fill-default));
}

.extra-menuitem-icon,
.extra-menuitem-submenu-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: inherit;
  font-size: var(--extra-menuitem-icon-size, 1.25rem);
}

.extra-menuitem-caption {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: var(--extra-menuitem-caption-gap, 0);
  flex: 1 1 auto;
  min-width: var(--extra-menuitem-caption-min-width, 0);
}

.extra-menuitem-label {
  font-family: inherit;
  font-size: var(--extra-menuitem-label-font-size, inherit);
  font-weight: var(--extra-menuitem-label-font-weight, inherit);
  line-height: var(--extra-menuitem-label-line-height, inherit);
}

.extra-menuitem-description {
  font-family: var(--extra-menuitem-description-font-family, inherit);
  font-size: var(--extra-menuitem-description-font-size, 0.875rem);
  line-height: var(--extra-menuitem-description-line-height, inherit);
  color: var(--extra-menuitem-description-color, inherit);
}

.extra-menuitem-chevron {
  width: 1em;
  height: 1em;
}

.extra-menuitem-submenu-icon {
  // Caption flex growth keeps the postfix aligned; contexts may narrow its gap.
  margin-inline-start: calc(
    var(
        --extra-menuitem-submenu-gap,
        var(--extra-menuitem-gap, var(--p-dimension-space-200))
      ) - var(--extra-menuitem-gap, var(--p-dimension-space-200))
  );
}
// Design conflict DTC-002 (recorded in the audit chat): standalone Figma
// still binds legacy Theme/Spacing/PT Sans. These exact dimensions/family and
// theme-independent colors have no equivalent token in the current export.
// Explicit parent context also survives teleport. Ancestor roots cover custom
// item slots that render their own ExtraMenuItem without forwarding classes.
.extra-menuitem-link:not(.extra-menuitem-link--composite):not(
    .extra-megamenu *,
    .extra-menubar *,
    .extra-panelmenu *
  ) {
  --extra-menuitem-padding: 0.4375rem 0.65625rem;
  --extra-menuitem-gap: 0.4375rem;
  --extra-menuitem-border-radius: 0.4375rem;
  --extra-menuitem-icon-size: 1.09375rem;
  --extra-menuitem-label-font-size: var(--p-fonts-font-size-200);
  --extra-menuitem-label-line-height: var(--p-fonts-line-height-300);
  --extra-menuitem-caption-gap: 0.21875rem;
  --extra-menuitem-description-font-family: var(--p-fonts-font-family-heading);
  --extra-menuitem-description-font-size: 0.65625rem;
  --extra-menuitem-description-line-height: var(--p-fonts-line-height-250);
  --extra-menuitem-description-color: rgb(0 0 0 / 60%);
  --extra-menuitem-focus-background: #f0f0f1;
  --extra-menuitem-focus-color: #181a1f;
  font-family: 'PT Sans', sans-serif;
  font-size: var(--p-fonts-font-size-200);
  line-height: var(--p-fonts-line-height-300);
  color: #181a1f;
  border: 0;
  background: transparent;

  // The standalone skin is later than the shared hover rule; keep its state
  // more specific than its transparent default background.
  &:not(.extra-menuitem-link--disabled):hover {
    background: var(--extra-menuitem-focus-background);
    color: var(--extra-menuitem-focus-color);
  }

  &:has(.extra-menuitem-description) {
    --extra-menuitem-border-radius: 0.65625rem;
  }

  .extra-menuitem-icon,
  .extra-menuitem-submenu-icon {
    line-height: 1;
  }

  &.extra-menuitem-link--disabled {
    background: #e2e2e4;
    box-shadow: inset 0 0 0 var(--p-dimension-border-width-100) #a2a5a9;
  }
}
</style>
