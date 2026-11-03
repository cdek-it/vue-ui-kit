<script setup lang="ts">
import { IconChevronRight, IconMenu2 } from '@tabler/icons-vue';
import { MegaMenu } from 'primevue';
import type { MegaMenuSlots } from 'primevue/megamenu';
import ExtraMenuItem from '../ExtraMenuItem/ExtraMenuItem.vue';
import type { ExtraMegaMenuProps } from './types';

type MegaMenuItemSlotProps = Parameters<NonNullable<MegaMenuSlots['item']>>[0];

function getItemAttrs(
  slotProps: MegaMenuItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<ExtraMegaMenuProps>();
</script>

<template>
  <MegaMenu v-bind="$props" class="extra-megamenu">
    <template v-if="$slots.start" #start>
      <slot name="start" />
    </template>
    <template v-if="$slots.end" #end>
      <slot name="end" />
    </template>
    <template #item="slotProps">
      <slot name="item" v-bind="slotProps">
        <ExtraMenuItem
          class="extra-menuitem-link--composite"
          v-bind="getItemAttrs(slotProps)"
          :as="itemAs"
          :root="false"
        >
          <template v-if="$slots.itemicon" #itemicon="itemiconProps">
            <slot name="itemicon" v-bind="itemiconProps" />
          </template>
          <template #submenuicon="submenuIconProps">
            <slot name="submenuicon" v-bind="submenuIconProps">
              <IconChevronRight class="extra-megamenu__submenu-icon" />
            </slot>
          </template>
        </ExtraMenuItem>
      </slot>
    </template>
    <template v-if="$slots.itemicon" #itemicon="slotProps">
      <slot name="itemicon" v-bind="slotProps" />
    </template>
    <template v-if="$slots.menubutton" #menubutton="slotProps">
      <slot name="menubutton" v-bind="slotProps" />
    </template>
    <template #menubuttonicon>
      <slot name="menubuttonicon">
        <IconMenu2 class="extra-megamenu__mobile-button-icon" />
      </slot>
    </template>
  </MegaMenu>
</template>

<style lang="scss" scoped>
.extra-megamenu.p-megamenu-vertical {
  // Design conflict DTC-005: the design binds size/1550 (182px), omitted from
  // the semantic export. Prime's hardcoded 200px prevents the 188px example.
  min-width: 11.375rem;
}

.extra-megamenu :deep(.p-megamenu-overlay) {
  // Submenu owns the 8px inset; don't add Prime's second overlay inset.
  padding: 0;
  min-width: 0;
  // Figma's stroke is outside the frame and must not shift its content.
  border-width: 0;
  outline: var(--p-dimension-border-width-100) solid
    var(--p-megamenu-overlay-border-color);
}

.extra-megamenu :deep(.p-megamenu-submenu) {
  // Prime hardcodes a 200px list minimum; the design submenu is HUG-sized.
  min-width: 0;
}

.extra-megamenu :deep(.p-megamenu-submenu-label:empty) {
  display: none;
}

.extra-megamenu :deep(.p-megamenu-submenu-label) {
  // Design conflict DTC-003 (recorded in the audit chat): the group layer
  // uses 12px/10px, while the exported label padding resolves to 8px/14px.
  padding: var(--p-dimension-space-350) var(--p-dimension-space-300);
  font-size: var(--p-fonts-font-size-300);
  line-height: var(--p-fonts-line-height-300);
}

.extra-megamenu :deep(.extra-megamenu__submenu-icon) {
  width: var(--p-megamenu-icon-size);
  height: var(--p-megamenu-icon-size);
}

.extra-megamenu :deep(.extra-megamenu__mobile-button-icon) {
  width: var(--p-megamenu-icon-size);
  height: var(--p-megamenu-icon-size);
}

.extra-megamenu :deep(.extra-menuitem-submenu-icon),
.extra-megamenu :deep(.extra-menuitem-icon),
.extra-megamenu :deep(.p-megamenu-mobile-button-icon) {
  font-size: var(--p-megamenu-icon-size);
}

// Prime applies baseItem to roots, but the design binds these to item radius.
.extra-megamenu
  :deep(.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content),
.extra-megamenu :deep(.p-megamenu-item-content) {
  border-radius: var(--p-megamenu-item-border-radius);
}

.extra-megamenu
  :deep(.p-megamenu-item.p-megamenu-item-active > .p-megamenu-item-content),
.extra-megamenu
  :deep(
    .p-megamenu-item.p-megamenu-item-active.p-focus > .p-megamenu-item-content
  ) {
  color: var(--p-megamenu-item-active-color);
  background: var(--p-megamenu-item-active-background);
}

// Prime owns the animated state surface; keep the child link transparent.
.extra-megamenu :deep(.p-megamenu-item-link.extra-menuitem-link) {
  --extra-menuitem-padding: var(--p-megamenu-item-padding);
  --extra-menuitem-gap: var(--p-megamenu-item-gap);
  --extra-menuitem-submenu-gap: var(--p-dimension-space-100);
  --extra-menuitem-border-radius: var(--p-megamenu-item-border-radius);
  --extra-menuitem-focus-background: transparent;
  --extra-menuitem-pressed-background: transparent;
  --extra-menuitem-focus-color: inherit;
  --extra-menuitem-active-color: var(--p-megamenu-item-active-color);
  --extra-menuitem-icon-size: var(--p-megamenu-icon-size);
  --extra-menuitem-label-font-size: var(--p-fonts-font-size-300);
  --extra-menuitem-label-line-height: var(--p-fonts-line-height-300);
  --extra-menuitem-label-font-weight: var(--p-fonts-font-weight-regular);
  --extra-menuitem-caption-gap: var(--p-megamenu-ext-item-caption-gap);
  --extra-menuitem-description-font-size: var(--p-fonts-font-size-100);
  --extra-menuitem-description-line-height: var(--p-fonts-line-height-250);
  --extra-menuitem-description-color: var(--p-megamenu-ext-item-caption-color);
}

.extra-megamenu :deep(.p-megamenu-mobile-button) {
  width: var(--p-megamenu-mobile-button-size);
  height: var(--p-megamenu-mobile-button-size);
  min-width: var(--p-megamenu-mobile-button-size);
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.extra-megamenu :deep(.p-megamenu-mobile-button-icon) {
  width: var(--p-megamenu-icon-size);
  height: var(--p-megamenu-icon-size);
}

.extra-megamenu
  :deep(
    .p-megamenu-item:not(.p-disabled)
      > .p-megamenu-item-content:has(> .extra-menuitem-link:active)
  ) {
  background: var(--p-megamenu-ext-item-pressed-background);
  color: var(--p-megamenu-item-active-color);
}

// DTC-004: Figma uses named ease-out on both hover edges (180ms).
.extra-megamenu :deep(.p-megamenu-item-content) {
  transition-timing-function: ease-out;
}
</style>
