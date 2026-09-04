<script setup lang="ts">
import { IconMenu2 } from '@tabler/icons-vue';
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
  <Menubar v-bind="$props">
    <template v-if="$slots.start" #start>
      <slot name="start" />
    </template>
    <template v-if="$slots.end" #end>
      <slot name="end" />
    </template>
    <template #item="slotProps">
      <slot name="item" v-bind="slotProps">
        <ExtraMenuItem
          v-bind="getItemAttrs(slotProps)"
          :as="itemAs"
          :root="slotProps.root"
        >
          <template v-if="$slots.itemicon" #itemicon="itemiconProps">
            <slot name="itemicon" v-bind="itemiconProps" />
          </template>
          <template v-if="$slots.submenuicon" #submenuicon="submenuIconProps">
            <slot name="submenuicon" v-bind="submenuIconProps" />
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
:deep(.p-menubar .p-menubar-submenu-icon),
:deep(.p-menubar .p-menubar-item-icon) {
  font-size: var(--p-menubar-extend-icon-size);
}

:deep(.p-menubar .p-menubar-item-link.extra-menuitem-link) {
  --p-navigation-item-padding: var(--p-menubar-item-padding);
  --p-navigation-item-gap: var(--p-menubar-item-gap);
  --p-navigation-item-border-radius: var(--p-menubar-item-border-radius);
  --p-navigation-item-icon-size: var(--p-menubar-extend-icon-size);
  --p-navigation-item-label-font-size: var(--p-fonts-font-size-300);
  --p-navigation-item-label-font-weight: var(--p-fonts-font-weight-regular);
  --p-navigation-item-caption-gap: var(--p-menubar-extend-ext-item-caption-gap);
  --p-navigation-item-description-font-size: var(--p-fonts-font-size-200);
  --p-navigation-item-description-color: var(
    --p-menubar-extend-ext-item-caption-color
  );
}

:deep(.p-menubar-item.p-menubar-item-active > .p-menubar-item-content),
:deep(.p-menubar-item.p-menubar-item-active.p-focus > .p-menubar-item-content) {
  color: var(--p-menubar-item-active-color);
  background: var(--p-menubar-item-active-background);
}

:deep(.p-menubar .p-menubar-submenu-label) {
  padding: var(--p-menubar-extend-ext-submenu-label-padding);
  font-weight: var(--p-menubar-extend-ext-submenu-label-font-weight);
  background: var(--p-menubar-extend-ext-submenu-label-background);
  color: var(--p-menubar-extend-ext-submenu-label-color);
}
</style>
