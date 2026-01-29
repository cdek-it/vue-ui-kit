const css = ({ dt }: { dt: (token: string) => string }) => `
/* Menu base styles */
.p-menu.p-component {
  padding: ${dt('menu.extend.paddingY')} ${dt('menu.extend.paddingX')};
}

/* Menu item link */
.p-menu .p-menu-item-content .p-menu-item-link {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Menu item with caption - column layout */
.p-menu .p-menu-item-content .menu-item-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('menu.extend.extItem.caption.gap')};
}

/* Menu item caption */
.p-menu .p-menu-item-content .menu-item-caption {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  color: ${dt('menu.colorScheme.light.extend.extItem.caption.color')};
}

/* Hover state for regular menu items */
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover,
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-link,
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-label {
  color: ${dt('menu.colorScheme.light.item.color')};
}

/* Active/Checked/Focus state - background and text color */
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content,
.p-menu .p-menu-item.p-focus > .p-menu-item-content {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

/* Active/Checked/Focus state - link and label color */
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-link,
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-label,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-link,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-label {
  color: ${dt('menu.extend.extItem.activeColor')};
}

/* Active/Checked/Focus state - icon color */
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-icon,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

/* Active/Checked hover state */
.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
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
