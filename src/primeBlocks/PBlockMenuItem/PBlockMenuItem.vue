<script setup lang="ts">
import { computed } from 'vue';
import { Badge } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';
import type { Component } from 'vue';

export interface IPBlockMenuItem {
  item: MenuItem & {
    description?: string;
    badge?: string;
  };
  as?: string | Component;
}

const props = defineProps<IPBlockMenuItem>();

const hasSubmenu = computed(
  () => Array.isArray(props.item.items) && props.item.items.length > 0
);
</script>

<template>
  <component :is="as ?? 'a'" v-bind="$attrs" class="p-block-menuitem-link">
    <span v-if="item.icon" :class="['p-block-menuitem-icon', item.icon]" />
    <div class="p-block-menuitem-caption">
      <span class="p-block-menuitem-label">{{ item.label }}</span>
      <small v-if="item.description" class="p-block-menuitem-description">{{
        item.description
      }}</small>
    </div>
    <Badge v-if="item.badge" :value="item.badge" />
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
