<script setup lang="ts">
import { TieredMenu } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';

defineProps<{
  model: MenuItem[];
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TieredMenu :model="model" v-bind="$attrs" />
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
</style>
