<script setup lang="ts">
import { IconChevronDown, IconChevronRight } from '@tabler/icons-vue';
import { PanelMenu } from 'primevue';
import type { PanelMenuSlots } from 'primevue/panelmenu';
import ExtraMenuItem from '../ExtraMenuItem/ExtraMenuItem.vue';
import type { ExtraPanelMenuProps } from './types';

type PanelMenuItemSlotProps = Parameters<
  NonNullable<PanelMenuSlots['item']>
>[0];

function getItemAttrs(
  slotProps: PanelMenuItemSlotProps
): Record<string, unknown> {
  return { ...slotProps.item, ...slotProps.props.action };
}

defineProps<ExtraPanelMenuProps>();
</script>

<template>
  <PanelMenu v-bind="$props" class="extra-panelmenu">
    <template #item="slotProps">
      <slot name="item" v-bind="slotProps">
        <ExtraMenuItem
          class="extra-menuitem-link--composite"
          v-bind="getItemAttrs(slotProps)"
          :as="itemAs"
          :root="slotProps.root"
        >
          <!-- Prime's headericon branch is bypassed by our item fallback. -->
          <template
            v-if="(slotProps.root && $slots.headericon) || $slots.itemicon"
            #itemicon="itemiconProps"
          >
            <slot
              v-if="slotProps.root && $slots.headericon"
              name="headericon"
              :item="slotProps.item"
              :class="['p-panelmenu-header-icon', slotProps.item.icon]"
            />
            <slot v-else name="itemicon" v-bind="itemiconProps" />
          </template>
          <template #submenuicon="submenuIconProps">
            <slot name="submenuicon" v-bind="submenuIconProps">
              <component
                :is="slotProps.active ? IconChevronDown : IconChevronRight"
                class="extra-panelmenu__submenu-icon"
              />
            </slot>
          </template>
        </ExtraMenuItem>
      </slot>
    </template>

    <template v-if="$slots.itemicon" #itemicon="slotProps">
      <slot name="itemicon" v-bind="slotProps" />
    </template>

    <template v-if="$slots.headericon" #headericon="slotProps">
      <slot name="headericon" v-bind="slotProps" />
    </template>

    <template v-if="$slots.submenuicon" #submenuicon="slotProps">
      <slot name="submenuicon" v-bind="slotProps" />
    </template>
  </PanelMenu>
</template>

<style lang="scss" scoped>
.extra-panelmenu :deep(.extra-panelmenu__submenu-icon) {
  width: var(--p-panelmenu-icon-size);
  height: var(--p-panelmenu-icon-size);
}

.extra-panelmenu {
  gap: var(--p-panelmenu-ext-panel-gap);
  // The design panel surrounds the whole list, not every Prime header.
  padding: var(--p-panelmenu-panel-padding);
  border-radius: var(--p-panelmenu-panel-border-radius);
}

.extra-panelmenu :deep(.p-panelmenu-panel) {
  padding: 0;
  // Transparent Prime panel borders must not add space between list rows.
  border-width: 0;
}

.extra-panelmenu :deep(.p-panelmenu-submenu) {
  // Figma's 24px inset includes the item's own 10px padding. Prime adds its
  // indent outside that padding; subtract the existing semantic inline inset.
  padding-inline-start: calc(
    var(--p-panelmenu-submenu-indent) - var(--p-dimension-space-300)
  );
}

.extra-panelmenu :deep(.p-panelmenu-header-content),
.extra-panelmenu :deep(.p-panelmenu-item-content) {
  font-size: var(--p-fonts-font-size-300);
}

.extra-panelmenu :deep(.p-panelmenu-submenu-icon) {
  font-size: var(--p-panelmenu-icon-size);
}

.extra-panelmenu
  :deep(.p-panelmenu-item[aria-expanded='true'] > .p-panelmenu-item-content),
.extra-panelmenu
  :deep(
    .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content
  ) {
  background: var(--p-panelmenu-ext-item-active-background);
  color: var(--p-panelmenu-ext-item-active-color);
}

.extra-panelmenu
  :deep(
    .p-panelmenu-item[aria-expanded='true']
      > .p-panelmenu-item-content
      :is(
        .p-panelmenu-item-link,
        .p-panelmenu-item-label,
        .p-panelmenu-item-icon,
        .p-panelmenu-header-icon,
        .p-panelmenu-submenu-icon
      )
  ),
.extra-panelmenu
  :deep(
    .p-panelmenu-header.p-panelmenu-header-active
      .p-panelmenu-header-content
      :is(
        .p-panelmenu-header-link,
        .p-panelmenu-header-label,
        .p-panelmenu-submenu-icon,
        .p-panelmenu-item-icon,
        .p-panelmenu-header-icon
      )
  ) {
  color: var(--p-panelmenu-ext-item-active-color);
}

// Prime owns the animated state surface; keep the child link transparent.
.extra-panelmenu :deep(.extra-menuitem-link) {
  --extra-menuitem-padding: var(--p-panelmenu-item-padding);
  --extra-menuitem-gap: var(--p-panelmenu-item-gap);
  --extra-menuitem-submenu-gap: var(--p-dimension-space-100);
  // Preserve the shortest unbroken caption instead of overlapping its postfix
  // in narrow panels; longer phrases can still wrap between words.
  --extra-menuitem-caption-min-width: min-content;
  --extra-menuitem-border-radius: var(--p-panelmenu-item-border-radius);
  --extra-menuitem-icon-size: var(--p-panelmenu-icon-size);
  --extra-menuitem-focus-background: transparent;
  --extra-menuitem-pressed-background: transparent;
  --extra-menuitem-focus-color: inherit;
  --extra-menuitem-active-color: var(--p-panelmenu-ext-item-active-color);
  --extra-menuitem-label-font-size: var(--p-fonts-font-size-300);
  --extra-menuitem-label-line-height: var(--p-fonts-line-height-300);
  --extra-menuitem-label-font-weight: var(--p-fonts-font-weight-regular);
  --extra-menuitem-caption-gap: var(--p-panelmenu-ext-item-caption-gap);
  --extra-menuitem-description-font-size: var(--p-fonts-font-size-100);
  --extra-menuitem-description-line-height: var(--p-fonts-line-height-250);
  --extra-menuitem-description-color: var(--p-panelmenu-ext-item-caption-color);
}

.extra-panelmenu :deep(.p-panelmenu-item-content),
.extra-panelmenu :deep(.p-panelmenu-header-content) {
  --extra-panelmenu-pressed-background: var(
    --p-panelmenu-ext-item-pressed-background
  );
}

// The nested template's pressed layer explicitly binds activeBackground.
.extra-panelmenu
  :deep(
    .p-panelmenu-submenu
      .p-panelmenu-item-content:has(.extra-menuitem-description)
  ) {
  --extra-panelmenu-pressed-background: var(
    --p-panelmenu-ext-item-active-background
  );
}

.extra-panelmenu
  :deep(
    .p-panelmenu-header:not(.p-disabled)
      > .p-panelmenu-header-content:has(> .extra-menuitem-link:active)
  ),
.extra-panelmenu
  :deep(
    .p-panelmenu-item:not(.p-disabled)
      > .p-panelmenu-item-content:has(> .extra-menuitem-link:active)
  ) {
  background: var(--extra-panelmenu-pressed-background);
  color: var(--p-panelmenu-ext-item-active-color);
}

// Design conflict DTC-004: the prototype has distinct enter/leave timing.
.extra-panelmenu :deep(.p-panelmenu-item-content),
.extra-panelmenu :deep(.p-panelmenu-header-content) {
  transition-duration: var(--p-effects-transition-duration-100);
  transition-timing-function: ease-in;
}

.extra-panelmenu :deep(.p-panelmenu-item.p-focus > .p-panelmenu-item-content),
.extra-panelmenu
  :deep(.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover),
.extra-panelmenu
  :deep(
    .p-panelmenu-header:not(.p-disabled):focus-visible
      > .p-panelmenu-header-content
  ),
.extra-panelmenu
  :deep(
    .p-panelmenu-header:not(.p-disabled) > .p-panelmenu-header-content:hover
  ) {
  transition-duration: var(--p-panelmenu-transition-duration);
  transition-timing-function: ease-out;
}
</style>
