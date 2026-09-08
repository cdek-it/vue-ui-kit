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
  <MegaMenu v-bind="$props">
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
          :root="false"
        >
          <template v-if="$slots.itemicon" #itemicon="itemiconProps">
            <slot name="itemicon" v-bind="itemiconProps" />
          </template>
          <template #submenuicon="submenuIconProps">
            <slot name="submenuicon" v-bind="submenuIconProps">
              <IconChevronRight size="0.875rem" />
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
        <IconMenu2 size="0.875rem" />
      </slot>
    </template>
  </MegaMenu>
</template>

<style lang="scss" scoped>
:deep(.p-megamenu .extra-menuitem-submenu-icon),
:deep(.p-megamenu .extra-menuitem-icon),
:deep(.p-megamenu-mobile-button-icon) {
  font-size: var(--p-megamenu-extend-icon-size);
}

:deep(.p-megamenu .extra-menuitem-label) {
  font-size: var(--p-fonts-font-size-300);
  font-weight: var(--p-fonts-font-weight-regular);
}

:deep(.p-megamenu-item-content) {
  border-radius: var(--p-megamenu-item-border-radius);
}

:deep(.p-megamenu-item.p-megamenu-item-active > .p-megamenu-item-content),
:deep(
    .p-megamenu-item.p-megamenu-item-active.p-focus > .p-megamenu-item-content
  ) {
  color: var(--p-megamenu-item-active-color);
  background: var(--p-megamenu-item-active-background);
}

:deep(.p-megamenu .p-megamenu-item-link.extra-menuitem-link) {
  --p-navigation-item-padding: var(--p-megamenu-item-padding);
  --p-navigation-item-gap: var(--p-megamenu-item-gap);
  --p-navigation-item-border-radius: var(--p-megamenu-item-border-radius);
  --p-navigation-item-icon-size: 0.875rem;
  --p-navigation-item-label-font-size: var(--p-fonts-font-size-300);
  --p-navigation-item-label-font-weight: var(--p-fonts-font-weight-regular);
  --p-navigation-item-caption-gap: var(
    --p-megamenu-extend-ext-item-caption-gap
  );
  --p-navigation-item-description-font-size: var(--p-fonts-font-size-200);
  --p-navigation-item-description-color: var(
    --p-megamenu-extend-ext-item-caption-color
  );
}

:deep(.p-megamenu-mobile-button) {
  width: 1.75rem;
  height: 1.75rem;
  min-width: 1.75rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

:deep(.p-megamenu-mobile-button-icon) {
  width: 0.875rem;
  height: 0.875rem;
}
</style>
