<script setup lang="ts">
import type { Component } from 'vue';
import { Menubar, type MenubarProps } from 'primevue';
import PBlockMenuItem from '../PBlockMenuItem/PBlockMenuItem.vue';

interface IPBlockMenubar extends MenubarProps {
  itemAs?: string | Component;
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
          v-bind="{ ...slotProps.item, ...slotProps.props.action }"
          :as="itemAs"
          :root="slotProps.root"
        />
      </slot>
    </template>
    <template #submenuicon="slotProps">
      <slot name="submenuicon" v-bind="slotProps">
        <span
          :class="slotProps.root ? 'ti ti-chevron-down' : 'ti ti-chevron-right'"
        />
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
