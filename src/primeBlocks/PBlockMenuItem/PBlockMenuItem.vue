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
      <small v-if="description" class="p-block-menuitem-description">
        {{ description }}
      </small>
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

<style lang="scss" scoped>
.p-block-menuitem-link {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  padding: var(--p-block-menuitem-padding, 0.5rem 0.75rem);
  gap: var(--p-block-menuitem-gap, 0.5rem);
  border-radius: var(--p-block-menuitem-border-radius, 0.5rem);
  cursor: pointer;
}

.p-block-menuitem-icon,
.p-block-menuitem-submenu-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: inherit;
  font-size: var(--p-block-menuitem-icon-size, 1.25rem);
}

.p-block-menuitem-caption {
  display: flex;
  flex-direction: column;
  gap: var(--p-block-menuitem-caption-gap, 0);
  flex: 1 1 auto;
  min-width: 0;
}

.p-block-menuitem-label {
  font-size: var(--p-block-menuitem-label-font-size, inherit);
  font-weight: var(--p-block-menuitem-label-font-weight, inherit);
}

.p-block-menuitem-description {
  font-size: var(--p-block-menuitem-description-font-size, 0.875rem);
  color: var(--p-block-menuitem-description-color, inherit);
}

.p-block-menuitem-submenu-icon {
  margin-left: auto;
}
</style>
