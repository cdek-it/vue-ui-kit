<script setup lang="ts">
import { TieredMenu, type TieredMenuProps } from 'primevue';

interface IPBlockTieredMenu extends TieredMenuProps {}

defineProps<IPBlockTieredMenu>();

const emit = defineEmits<{
  (e: 'focus', event: Event): void;
  (e: 'blur', event: Event): void;
  (e: 'show'): void;
  (e: 'hide'): void;
  (e: 'before-show'): void;
  (e: 'before-hide'): void;
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TieredMenu
    v-bind="{ ...$props, ...$attrs }"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
    @show="emit('show')"
    @hide="emit('hide')"
    @before-show="emit('before-show')"
    @before-hide="emit('before-hide')"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </TieredMenu>
</template>

<style lang="scss" scoped>
.p-tieredmenu.p-component .p-tieredmenu-item.p-disabled {
  border-radius: calc(var(--p-tieredmenu-item-border-radius));
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
  color: var(--p-tieredmenu-item-icon-active-color);
}

.p-tieredmenu.p-component .p-disabled .p-tieredmenu-item-icon {
  color: var(--p-form-disabled-color);
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
  font-size: var(--p-fonts-font-size-200);
}

.p-tieredmenu .p-tieredmenu-separator {
  border-color: var(--p-tieredmenu-separator-border-color);
}
</style>
