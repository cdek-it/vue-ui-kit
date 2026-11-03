<script setup lang="ts">
import { IconChevronRight, IconMenu2 } from '@tabler/icons-vue';
import { Menubar } from 'primevue';
import type { MenubarSlots } from 'primevue/menubar';
import ExtraMenuItem from '../ExtraMenuItem/ExtraMenuItem.vue';
import type { ExtraMenubarProps } from './types';

type MenubarItemSlotProps = Parameters<NonNullable<MenubarSlots['item']>>[0];

function getItemAttrs(
  slotProps: MenubarItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<ExtraMenubarProps>();
</script>

<template>
  <Menubar v-bind="$props" class="extra-menubar">
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
          :root="slotProps.root"
        >
          <template v-if="$slots.itemicon" #itemicon="itemiconProps">
            <slot name="itemicon" v-bind="itemiconProps" />
          </template>
          <template #submenuicon="submenuIconProps">
            <slot name="submenuicon" v-bind="submenuIconProps">
              <IconChevronRight class="extra-menubar__submenu-icon" />
            </slot>
          </template>
        </ExtraMenuItem>
      </slot>
    </template>
    <template v-if="$slots.itemicon" #itemicon="slotProps">
      <slot name="itemicon" v-bind="slotProps" />
    </template>
    <template v-if="$slots.button" #button="slotProps">
      <slot name="button" v-bind="slotProps" />
    </template>
    <template #buttonicon>
      <slot name="buttonicon">
        <IconMenu2 size="1.125rem" />
      </slot>
    </template>
  </Menubar>
</template>

<style lang="scss" scoped>
.extra-menubar :deep(.p-menubar-submenu) {
  // An outside Figma stroke must not add 1px to the content inset.
  border-width: 0;
  outline: var(--p-dimension-border-width-100) solid
    var(--p-menubar-submenu-border-color);
}

.extra-menubar :deep(.extra-menubar__submenu-icon) {
  width: var(--p-menubar-icon-size);
  height: var(--p-menubar-icon-size);
}

.extra-menubar :deep(.p-menubar-submenu-icon),
.extra-menubar :deep(.p-menubar-item-icon) {
  font-size: var(--p-menubar-icon-size);
}

// Prime owns the animated state surface; keep the child link transparent.
.extra-menubar :deep(.p-menubar-item-link.extra-menuitem-link) {
  --extra-menuitem-padding: var(--p-menubar-item-padding);
  --extra-menuitem-gap: var(--p-menubar-item-gap);
  --extra-menuitem-border-radius: var(--p-menubar-item-border-radius);
  --extra-menuitem-focus-background: transparent;
  --extra-menuitem-pressed-background: transparent;
  --extra-menuitem-focus-color: inherit;
  --extra-menuitem-active-color: var(--p-menubar-item-active-color);
  --extra-menuitem-icon-size: var(--p-menubar-icon-size);
  --extra-menuitem-label-font-size: var(--p-fonts-font-size-300);
  --extra-menuitem-label-line-height: var(--p-fonts-line-height-300);
  --extra-menuitem-label-font-weight: var(--p-fonts-font-weight-regular);
  --extra-menuitem-caption-gap: var(--p-menubar-ext-item-caption-gap);
  --extra-menuitem-description-font-size: var(--p-fonts-font-size-100);
  --extra-menuitem-description-line-height: var(--p-fonts-line-height-250);
  --extra-menuitem-description-color: var(--p-menubar-ext-item-caption-color);
}

.extra-menubar
  :deep(.p-menubar-item.p-menubar-item-active > .p-menubar-item-content),
.extra-menubar
  :deep(
    .p-menubar-item.p-menubar-item-active.p-focus > .p-menubar-item-content
  ) {
  color: var(--p-menubar-item-active-color);
  background: var(--p-menubar-item-active-background);
}

// Root postfix has a smaller optical gap than the leading icon/text pair.
.extra-menubar
  :deep(
    .p-menubar-root-list
      > .p-menubar-item
      > .p-menubar-item-content
      > .extra-menuitem-link
  ) {
  --extra-menuitem-submenu-gap: var(--p-dimension-space-150);
}

.extra-menubar :deep(.p-menubar-submenu-label) {
  padding: var(--p-menubar-ext-submenu-label-padding);
  font-weight: var(--p-menubar-ext-submenu-label-font-weight);
  background: var(--p-menubar-ext-submenu-label-background);
  color: var(--p-menubar-ext-submenu-label-color);
}

.extra-menubar
  :deep(
    .p-menubar-item:not(.p-disabled)
      > .p-menubar-item-content:has(> .extra-menuitem-link:active)
  ) {
  background: var(--p-menubar-ext-item-pressed-background);
  color: var(--p-menubar-item-active-color);
}

// Design conflict DTC-004: the prototype has distinct enter/leave timing.
.extra-menubar :deep(.p-menubar-item-content) {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-menubar :deep(.p-menubar-item.p-focus > .p-menubar-item-content),
.extra-menubar
  :deep(.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover) {
  transition-duration: var(--p-menubar-transition-duration);
  transition-timing-function: ease-out;
}
</style>
