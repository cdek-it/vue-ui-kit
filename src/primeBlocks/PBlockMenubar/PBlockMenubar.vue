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
          :item="slotProps.item"
          :as="itemAs"
          v-bind="slotProps.props.action"
        />
      </slot>
    </template>
    <template v-if="$slots.submenuicon" #submenuicon="slotProps">
      <slot name="submenuicon" v-bind="slotProps" />
    </template>
    <template v-if="$slots.itemicon" #itemicon="slotProps">
      <slot name="itemicon" v-bind="slotProps" />
    </template>
    <template v-if="$slots.button" #button="slotProps">
      <slot name="button" v-bind="slotProps" />
    </template>
    <template v-if="$slots.buttonicon" #buttonicon>
      <slot name="buttonicon" />
    </template>
  </Menubar>
</template>

<style lang="scss"></style>
