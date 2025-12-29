const css = ({ dt }: { dt: (token: string) => string }) => `
/* When label contains caption, make it a column layout */
.p-menubar .p-menubar-item-label:has(.p-menubar-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('menubar.extend.extItem.caption.gap')};
}

/* Menubar item caption (additional text below label) */
.p-menubar .p-menubar-item-caption {
  color: ${dt('menubar.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
}

/* Active/Checked state */
.p-menubar .p-menubar-item.p-menuitem-checked > .p-menubar-item-content {
  background: ${dt('menubar.extend.extItem.activeBackground')};
  color: ${dt('menubar.extend.extItem.activeColor')};
}

.p-menubar .p-menubar-item.p-menuitem-checked > .p-menubar-item-content .p-menubar-item-link {
  color: ${dt('menubar.extend.extItem.activeColor')};
}

.p-menubar .p-menubar-item.p-menuitem-checked > .p-menubar-item-content .p-menubar-item-icon {
  color: ${dt('menubar.extend.extItem.icon.activeColor')};
}

/* Active hover state */
.p-menubar .p-menubar-item.p-menuitem-checked:not(.p-disabled) > .p-menubar-item-content:hover {
  background: ${dt('menubar.extend.extItem.activeBackground')};
  color: ${dt('menubar.extend.extItem.activeColor')};
}

.p-menubar .p-menubar-item.p-menuitem-checked:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
  color: ${dt('menubar.extend.extItem.icon.activeColor')};
}

/* Submenu label */
.p-menubar .p-menubar-submenu-label {
  text-transform: uppercase;
  font-size: ${dt('fonts.fontSize.sm')};
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: ${dt('fonts.lineHeight.none')};
}

/* Hover state for item icon */
.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
  color: ${dt('menubar.item.icon.activeColor')};
}

/* Hover state for submenu icon */
.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
  color: ${dt('menubar.submenuIcon.activeColor')};
}
`;

export default css;
