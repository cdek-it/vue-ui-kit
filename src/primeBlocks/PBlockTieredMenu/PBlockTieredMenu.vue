<script setup lang="ts">
import { TieredMenu, type TieredMenuProps } from 'primevue';

interface IPBlockTieredMenu extends TieredMenuProps {}

defineProps<IPBlockTieredMenu>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TieredMenu v-bind="{ ...$props, ...$attrs }">
    <template #start>
      <slot name="start" />
    </template>
    <template #end>
      <slot name="end" />
    </template>
    <template #item="slotProps">
      <slot name="item" v-bind="slotProps" />
    </template>
    <template #submenuicon="slotProps">
      <slot name="submenuicon" v-bind="slotProps" />
    </template>
    <template #itemicon="slotProps">
      <slot name="itemicon" v-bind="slotProps" />
    </template>
  </TieredMenu>
</template>

<style>
.p-tieredmenu.p-component .p-tieredmenu-item.p-disabled {
  background: var(--p-button-disabled-disabled-button-bg);
  border-radius: calc(var(--p-menu-item-menuitem-border-radius));
  border: 1px solid var(--p-button-disabled-disabled-button-border-color);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item.p-disabled
  .p-tieredmenu-item-content
  > .p-tieredmenu-item-link {
  padding-top: calc(0.5rem - 1px);
  padding-bottom: calc(0.5rem - 1px);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item:not(.p-disabled).p-menuitem-checked
  > .p-tieredmenu-item-content
  .p-tieredmenu-item-icon {
  color: var(--p-menu-item-menuitem-active-icon-color);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item.p-menuitem-checked
  > .p-tieredmenu-item-content {
  background: var(--p-menu-item-menuitem-active-bg);
  color: var(--p-menu-item-menuitem-active-text-color);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item.p-menuitem-checked
  > .p-tieredmenu-item-content:hover {
  background: var(--p-menu-item-menuitem-active-hover-bg);
  color: var(--p-menu-item-menuitem-active-text-color);
}

.p-tieredmenu.p-component .p-disabled .p-tieredmenu-item-icon {
  color: var(--p-button-disabled-disabled-button-text-color);
}

.p-tieredmenu-submenu-icon {
  font-size: var(--p-tieredmenu-icon-size);
}

.p-tieredmenu-overlay {
  border: var(--p-border-width-100) solid
    var(--p-tieredmenu-ext-submenu-border-color);
  background: var(--p-tieredmenu-ext-submenu-background);
}

.p-tieredmenu .p-tieredmenu-submenu {
  border: var(--p-border-width-100) solid
    var(--p-tieredmenu-ext-submenu-border-color);
  background: var(--p-tieredmenu-ext-submenu-background);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item:not(.p-disabled).p-menuitem-checked
  > .p-tieredmenu-item-content {
  background: var(--p-tieredmenu-item-active-background);
  color: var(--p-tieredmenu-item-active-color);
}

.p-tieredmenu.p-component
  .p-tieredmenu-item:not(.p-disabled).p-menuitem-checked
  > .p-tieredmenu-item-content:hover {
  background: var(--p-tieredmenu-item-active-background);
  color: var(--p-tieredmenu-item-active-color);
}

.p-tieredmenu-item-caption {
  display: flex;
  flex-direction: column;
  gap: var(--p-tieredmenu-ext-item-caption-gap);
}

.p-tieredmenu-item-caption-text {
  color: var(--p-tieredmenu-ext-item-caption-color);
  font-size: var(--p-fonts-font-size-xs);
}
</style>
