const css = ({ dt }: { dt: (token: string) => string }) => `
/* TieredMenu base styles */
.p-tieredmenu.p-component {
  padding: ${dt('tieredmenu.extend.paddingY')} ${dt('tieredmenu.extend.paddingX')};
}

/* When label contains caption, make it a column layout */
.p-tieredmenu .p-tieredmenu-item-label:has(.p-tieredmenu-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('tieredmenu.extend.extItem.caption.gap')};
}

/* TieredMenu item caption (additional text below label) */
.p-tieredmenu .p-tieredmenu-item-caption {
  color: ${dt('tieredmenu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
}

/* Active/Checked state */
.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked > .p-tieredmenu-item-content {
  background: ${dt('tieredmenu.extend.extItem.activeBackground')};
  color: ${dt('tieredmenu.extend.extItem.activeColor')};
}

.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked > .p-tieredmenu-item-content .p-tieredmenu-item-link {
  color: ${dt('tieredmenu.extend.extItem.activeColor')};
}

.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
  color: ${dt('tieredmenu.extend.extItem.icon.activeColor')};
}

/* Active hover state */
.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked:not(.p-disabled) > .p-tieredmenu-item-content:hover {
  background: ${dt('tieredmenu.extend.extItem.activeBackground')};
  color: ${dt('tieredmenu.extend.extItem.activeColor')};
}

.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
  color: ${dt('tieredmenu.extend.extItem.icon.activeColor')};
}

/* Submenu overlay */
.p-tieredmenu .p-tieredmenu-overlay {
  border: 1px solid ${dt('tieredmenu.extend.extSubmenu.borderColor')};
}
`;

export default css;
