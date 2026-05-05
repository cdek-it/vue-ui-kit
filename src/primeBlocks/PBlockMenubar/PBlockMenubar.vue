<script setup lang="ts">
import { Menubar, type MenubarProps } from 'primevue';

interface IPBlockMenubar extends MenubarProps {}

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
    <template v-if="$slots.item" #item="slotProps">
      <slot name="item" v-bind="slotProps" />
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
