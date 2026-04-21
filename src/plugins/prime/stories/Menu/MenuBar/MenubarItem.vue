<script setup>
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
  <a v-bind="actionProps" class="p-menubar-item-link">
    <span v-if="item.icon" :class="['p-menubar-item-icon', item.icon]" />
    <div class="menubar-item-label">
      <span class="p-menubar-item-label">{{ item.label }}</span>
      <small v-if="item.description" class="menubar-item-caption">{{
        item.description
      }}</small>
    </div>
    <Badge v-if="item.badge" :value="item.badge" />
  </a>
</template>

<style scoped>
.menubar-item-label {
  display: flex;
  flex-direction: column;
  gap: var(--p-menubar-extend-ext-item-caption-gap);
}

.menubar-item-caption {
  font-size: var(--p-fonts-font-size-sm);
  color: var(--p-menubar-extend-ext-item-caption-color);
}
</style>
