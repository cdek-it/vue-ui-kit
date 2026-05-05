<script setup lang="ts">
import { Badge } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';

export interface IPBlockMenuItem {
  item: MenuItem & {
    description?: string;
    badge?: string;
  };
  actionProps?: Record<string, unknown>;
  hasSubmenu?: boolean;
}

defineProps<IPBlockMenuItem>();
</script>

<template>
  <a v-bind="actionProps" class="p-menuitem-link">
    <span v-if="item.icon" :class="['p-menuitem-icon', item.icon]" />
    <div class="p-menuitem-caption">
      <span class="p-menuitem-label">{{ item.label }}</span>
      <small v-if="item.description" class="p-menuitem-caption-text">{{
        item.description
      }}</small>
    </div>
    <Badge v-if="item.badge" :value="item.badge" />
    <span
      v-if="hasSubmenu"
      class="p-menuitem-submenu-icon ti ti-chevron-right"
    />
  </a>
</template>

<style lang="scss">
.p-menuitem-caption {
  display: flex;
  flex-direction: column;
}
</style>
