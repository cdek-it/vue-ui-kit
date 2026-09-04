<script setup lang="ts">
import { computed } from 'vue';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-vue';
import { Badge } from 'primevue';
import type { ExtraMenuItemProps } from './types';

const props = defineProps<ExtraMenuItemProps>();

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
    class="extra-menuitem-link"
  >
    <span v-if="icon || $slots.itemicon" class="extra-menuitem-icon">
      <slot name="itemicon" v-bind="{ item: props }">
        <span v-if="icon" :class="icon" />
      </slot>
    </span>
    <div class="extra-menuitem-caption">
      <span class="extra-menuitem-label">{{ label }}</span>
      <small v-if="description" class="extra-menuitem-description">
        {{ description }}
      </small>
    </div>
    <Badge v-if="badge" :value="badge" />
    <span v-if="hasSubmenu" class="extra-menuitem-submenu-icon">
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
.extra-menuitem-link {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  padding: var(--p-navigation-item-padding, 0.5rem 0.75rem);
  gap: var(--p-navigation-item-gap, 0.5rem);
  border-radius: var(--p-navigation-item-border-radius, 0.5rem);
  cursor: pointer;
}

.extra-menuitem-link:active {
  background: var(
    --p-navigation-item-active-background,
    var(--p-navigation-item-focus-background, transparent)
  );
  color: var(--p-navigation-item-active-color, inherit);
}

.extra-menuitem-icon,
.extra-menuitem-submenu-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: inherit;
  font-size: var(--p-navigation-item-icon-size, 1.25rem);
}

.extra-menuitem-caption {
  display: flex;
  flex-direction: column;
  gap: var(--p-navigation-item-caption-gap, 0);
  flex: 1 1 auto;
  min-width: 0;
}

.extra-menuitem-label {
  font-size: var(--p-navigation-item-label-font-size, inherit);
  font-weight: var(--p-navigation-item-label-font-weight, inherit);
}

.extra-menuitem-description {
  font-size: var(--p-navigation-item-description-font-size, 0.875rem);
  color: var(--p-navigation-item-description-color, inherit);
}

.extra-menuitem-submenu-icon {
  margin-left: auto;
}
</style>
