<script setup lang="ts">
import { Badge } from 'primevue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
  actionProps: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <a v-bind="actionProps" class="p-megamenu-item-link">
    <span v-if="item.icon" :class="['p-megamenu-item-icon', item.icon]" />
    <div class="megamenu-item-label">
      <span class="p-megamenu-item-label">{{ item.label }}</span>
      <small v-if="item.description" class="megamenu-item-caption">{{
        item.description
      }}</small>
    </div>
    <Badge v-if="item.badge" :value="item.badge" />
    <span
      v-if="item.items"
      class="p-megamenu-submenu-icon ti ti-chevron-down"
    />
  </a>
</template>

<style scoped>
.megamenu-item-label {
  display: flex;
  flex-direction: column;
  gap: var(--p-megamenu-extend-ext-item-caption-gap);
}

.megamenu-item-caption {
  font-size: var(--p-fonts-font-size-sm);
  color: var(--p-megamenu-extend-ext-item-caption-color);
}
</style>
