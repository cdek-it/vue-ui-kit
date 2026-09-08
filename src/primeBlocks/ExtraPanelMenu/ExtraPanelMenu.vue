<script setup lang="ts">
import { PanelMenu } from 'primevue';
import type { PanelMenuSlots } from 'primevue/panelmenu';
import ExtraMenuItem from '../ExtraMenuItem/ExtraMenuItem.vue';
import type { ExtraPanelMenuProps } from './types';

type PanelMenuItemSlotProps = Parameters<
  NonNullable<PanelMenuSlots['item']>
>[0];

function getItemAttrs(
  slotProps: PanelMenuItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<ExtraPanelMenuProps>();
</script>

<template>
  <PanelMenu v-bind="$props">
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

    <template v-if="$slots.headericon" #headericon="slotProps">
      <slot name="headericon" v-bind="slotProps" />
    </template>

    <template v-if="$slots.submenuicon" #submenuicon="slotProps">
      <slot name="submenuicon" v-bind="slotProps" />
    </template>
  </PanelMenu>
</template>

<style lang="scss" scoped>
:deep(.p-panelmenu) {
  gap: var(--p-panelmenu-extend-ext-panel-gap);
}

:deep(.p-panelmenu-panel) {
  padding: var(--p-panelmenu-extend-ext-panel-gap);
}

:deep(.p-panelmenu-header-content),
:deep(.p-panelmenu-item-content) {
  font-size: var(--p-fonts-font-size-300);
}

:deep(.p-panelmenu-submenu-icon) {
  font-size: var(--p-panelmenu-extend-icon-size);
}

:deep(.p-panelmenu .p-panelmenu-item.p-focus > .p-panelmenu-item-content),
:deep(.p-panelmenu .p-panelmenu-header.p-focus .p-panelmenu-header-content) {
  background: var(--p-panelmenu-extend-ext-item-active-background);
  color: var(--p-panelmenu-extend-ext-item-active-color);
}

:deep(
    .p-panelmenu
      .p-panelmenu-item.p-focus
      > .p-panelmenu-item-content
      :is(
        .p-panelmenu-item-link,
        .p-panelmenu-item-label,
        .p-panelmenu-item-icon,
        .p-panelmenu-header-icon,
        .p-panelmenu-submenu-icon
      )
  ),
:deep(
    .p-panelmenu
      .p-panelmenu-header.p-focus
      .p-panelmenu-header-content
      :is(
        .p-panelmenu-header-link,
        .p-panelmenu-header-label,
        .p-panelmenu-submenu-icon,
        .p-panelmenu-item-icon,
        .p-panelmenu-header-icon
      )
  ) {
  color: var(--p-panelmenu-extend-ext-item-active-color);
}

:deep(
    .p-panelmenu
      .p-panelmenu-item.p-focus:not(.p-disabled)
      > .p-panelmenu-item-content:hover
  ),
:deep(
    .p-panelmenu .p-panelmenu-header.p-focus .p-panelmenu-header-content:hover
  ) {
  background: var(--p-panelmenu-item-focus-background);
  color: var(--p-panelmenu-item-focus-color);
}

:deep(
    .p-panelmenu
      .p-panelmenu-item.p-focus:not(.p-disabled)
      > .p-panelmenu-item-content:hover
      :is(.p-panelmenu-item-link, .p-panelmenu-item-label)
  ),
:deep(
    .p-panelmenu
      .p-panelmenu-header.p-focus
      .p-panelmenu-header-content:hover
      :is(.p-panelmenu-header-link, .p-panelmenu-header-label)
  ) {
  color: var(--p-panelmenu-item-focus-color);
}

:deep(
    .p-panelmenu
      .p-panelmenu-item.p-focus:not(.p-disabled)
      > .p-panelmenu-item-content:hover
      :is(.p-panelmenu-item-icon, .p-panelmenu-submenu-icon)
  ),
:deep(
    .p-panelmenu
      .p-panelmenu-header.p-focus
      .p-panelmenu-header-content:hover
      :is(.p-panelmenu-submenu-icon, .p-panelmenu-item-icon)
  ) {
  color: var(--p-panelmenu-item-icon-focus-color);
}

:deep(.p-panelmenu .p-panelmenu-item-link.extra-menuitem-link) {
  --p-navigation-item-caption-gap: var(
    --p-panelmenu-extend-ext-item-caption-gap
  );
  --p-navigation-item-description-font-size: var(--p-fonts-font-size-200);
  --p-navigation-item-description-color: var(
    --p-panelmenu-extend-ext-item-caption-color
  );
}
</style>
