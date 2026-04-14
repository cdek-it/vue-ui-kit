<script setup lang="ts">
import { TieredMenu } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';

defineProps<{
  model: MenuItem[];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TieredMenu :model="model" v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
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
  font-size: var(--p-tieredmenu-extend-icon-size);
}

.p-tieredmenu-overlay {
  border: var(--p-border-width-100) solid
    var(--p-tieredmenu-extend-ext-submenu-border-color);
  background: var(--p-tieredmenu-extend-ext-submenu-background);
}

.p-tieredmenu .p-tieredmenu-submenu {
  border: var(--p-border-width-100) solid
    var(--p-tieredmenu-extend-ext-submenu-border-color);
  background: var(--p-tieredmenu-extend-ext-submenu-background);
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
  gap: var(--p-tieredmenu-extend-ext-item-caption-gap);
}

.p-tieredmenu-item-caption-text {
  color: var(--p-tieredmenu-extend-ext-item-caption-color);
  font-size: var(--p-fonts-font-size-xs);
}
</style>
