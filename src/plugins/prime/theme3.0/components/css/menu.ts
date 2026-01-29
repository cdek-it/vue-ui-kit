const css = ({ dt }: { dt: (token: string) => string }) => `
/* Menu base styles */
.p-menu.p-component {
  padding: ${dt('menu.extend.paddingY')} ${dt('menu.extend.paddingX')};
}

/* Menu item - стили для пунктов меню */
.p-menu .p-menu-item-content .p-menu-item-link {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* When label contains caption, make it a column layout */
.p-menu .p-menu-item-content .menu-item-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('menu.extend.extItem.caption.gap')};
}

/* Menu item caption (additional text below label) */
.p-menu .p-menu-item-content .menu-item-caption {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: normal;
  color: ${dt('menu.colorScheme.light.extend.extItem.caption.color')};
}

/* Hover state for regular menu items */
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
  color: ${dt('menu.colorScheme.light.item.color')};
}

.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-link {
  color: ${dt('menu.colorScheme.light.item.color')};
}

.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-label {
  color: ${dt('menu.colorScheme.light.item.color')};
}

/* Active/Checked state */
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-link {
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-label {
  color: ${dt('menu.extend.extItem.activeColor')};
}

/* Active hover state */
.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

/* Focus state - override default focus styles with active styles */
.p-menu .p-menu-item.p-focus > .p-menu-item-content {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-link {
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-label {
  color: ${dt('menu.extend.extItem.activeColor')};
}

/* Submenu label */
.p-menu .p-menu-submenu-label {
  text-transform: uppercase;
  font-size: ${dt('fonts.fontSize.sm')};
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: ${dt('fonts.lineHeight.25')};
}
`;

export default css;
