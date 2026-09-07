<script setup lang="ts">
import type { Component } from 'vue';
import { PanelMenu, type PanelMenuProps } from 'primevue';
import type { PanelMenuSlots } from 'primevue/panelmenu';
import PBlockMenuItem from '../PBlockMenuItem/PBlockMenuItem.vue';

interface IPBlockPanelMenu extends PanelMenuProps {
  itemAs?: string | Component;
}

type PanelMenuItemSlotProps = Parameters<
  NonNullable<PanelMenuSlots['item']>
>[0];

function getItemAttrs(
  slotProps: PanelMenuItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<IPBlockPanelMenu>();
</script>

<template>
  <PanelMenu v-bind="$props">
    <template #item="slotProps">
      <slot name="item" v-bind="slotProps">
        <PBlockMenuItem
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
        </PBlockMenuItem>
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

<style lang="scss" scoped></style>
