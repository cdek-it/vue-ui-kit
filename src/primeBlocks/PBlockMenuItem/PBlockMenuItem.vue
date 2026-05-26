<script setup lang="ts">
import { computed } from 'vue';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-vue';
import { Badge } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';
import type { Component } from 'vue';

export interface IPBlockMenuItem extends MenuItem {
  description?: string;
  badge?: string;
  as?: string | Component;
  root?: boolean;
}

const props = defineProps<IPBlockMenuItem>();

const hasSubmenu = computed(
  () => Array.isArray(props.items) && props.items.length > 0
);
</script>

<template>
  <component
    :is="as ?? 'a'"
    v-bind="$attrs"
    :href="url"
    :target="target"
    class="p-block-menuitem-link"
  >
    <span v-if="icon || $slots.itemicon" class="p-block-menuitem-icon">
      <slot name="itemicon" v-bind="{ item: props }">
        <span v-if="icon" :class="icon" />
      </slot>
    </span>
    <div class="p-block-menuitem-caption">
      <span class="p-block-menuitem-label">{{ label }}</span>
      <small v-if="description" class="p-block-menuitem-description">{{
        description
      }}</small>
    </div>
    <Badge v-if="badge" :value="badge" />
    <span v-if="hasSubmenu" class="p-block-menuitem-submenu-icon">
      <slot name="submenuicon" v-bind="{ item: props, root }">
        <component
          :is="root ? IconChevronDown : IconChevronRight"
          size="1.25rem"
        />
      </slot>
    </span>
  </component>
</template>

<style lang="scss" scoped></style>
