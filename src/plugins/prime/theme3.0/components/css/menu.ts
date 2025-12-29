const css = ({ dt }: { dt: (token: string) => string }) => `
/* Menu base styles */
.p-menu.p-component {
  padding: ${dt('menu.extend.paddingY')} ${dt('menu.extend.paddingX')};
}

/* When label contains caption, make it a column layout */
.p-menu .p-menu-item-label:has(.p-menu-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('menu.extend.extItem.caption.gap')};
}

/* Menu item caption (additional text below label) */
.p-menu .p-menu-item-caption {
  color: ${dt('menu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
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
  color: ${dt('menu.extend.extItem.icon.activeColor')};
}

/* Active hover state */
.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {
  color: ${dt('menu.extend.extItem.icon.activeColor')};
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
