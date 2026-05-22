<script setup lang="ts">
import type { Component } from 'vue';
import { Menubar, type MenubarProps } from 'primevue';
import type { MenubarSlots } from 'primevue/menubar';
import PBlockMenuItem from '../PBlockMenuItem/PBlockMenuItem.vue';

interface IPBlockMenubar extends MenubarProps {
  itemAs?: string | Component;
}

type MenubarItemSlotProps = Parameters<NonNullable<MenubarSlots['item']>>[0];

function getItemAttrs(
  slotProps: MenubarItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<IPBlockMenubar>();

defineOptions({ inheritAttrs: false });
</script>

<template>
  <Menubar v-bind="{ ...$props, ...$attrs }">
    <template v-if="$slots.start" #start>
      <slot name="start" />
    </template>
    <template v-if="$slots.end" #end>
      <slot name="end" />
    </template>
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
    <template v-if="$slots.button" #button="slotProps">
      <slot name="button" v-bind="slotProps" />
    </template>
    <template #buttonicon>
      <slot name="buttonicon">
        <span class="ti ti-menu-2" />
      </slot>
    </template>
  </Menubar>
</template>

<style lang="scss"></style>
