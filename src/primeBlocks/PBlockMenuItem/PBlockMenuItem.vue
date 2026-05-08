<script setup lang="ts">
import { computed } from 'vue';
import { Badge } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';
import type { Component } from 'vue';

export interface IPBlockMenuItem extends MenuItem {
  description?: string;
  badge?: string;
  as?: string | Component;
}

const props = defineProps<IPBlockMenuItem>();

const hasSubmenu = computed(
  () => Array.isArray(props.items) && props.items.length > 0
);
</script>

<template>
  <component :is="as ?? 'a'" v-bind="$attrs" class="p-block-menuitem-link">
    <span v-if="icon" :class="['p-block-menuitem-icon', icon]" />
    <div class="p-block-menuitem-caption">
      <span class="p-block-menuitem-label">{{ label }}</span>
      <small v-if="description" class="p-block-menuitem-description">{{
        description
      }}</small>
    </div>
    <Badge v-if="badge" :value="badge" />
    <span
      v-if="hasSubmenu"
      class="p-block-menuitem-submenu-icon ti ti-chevron-right"
    />
  </component>
</template>

<style lang="scss" scoped>
.p-block-menuitem-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.5rem;
}

.p-block-menuitem-caption {
  display: flex;
  flex-direction: column;
}
</style>
