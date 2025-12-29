const css = ({ dt }: { dt: (token: string) => string }) => `
/* When label contains caption, make it a column layout */
.p-megamenu .p-megamenu-item-label:has(.p-megamenu-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('megamenu.extend.extItem.caption.gap')};
}

/* MegaMenu item caption (additional text below label) */
.p-megamenu .p-megamenu-item-caption {
  color: ${dt('megamenu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
}

/* Active/Checked state */
.p-megamenu .p-megamenu-item.p-menuitem-checked > .p-megamenu-item-content {
  background: ${dt('megamenu.extend.extItem.activeBackground')};
  color: ${dt('megamenu.extend.extItem.activeColor')};
}

.p-megamenu .p-megamenu-item.p-menuitem-checked > .p-megamenu-item-content .p-megamenu-item-link {
  color: ${dt('megamenu.extend.extItem.activeColor')};
}

.p-megamenu .p-megamenu-item.p-menuitem-checked > .p-megamenu-item-content .p-megamenu-item-icon {
  color: ${dt('megamenu.extend.extItem.icon.activeColor')};
}

/* Active hover state */
.p-megamenu .p-megamenu-item.p-menuitem-checked:not(.p-disabled) > .p-megamenu-item-content:hover {
  background: ${dt('megamenu.extend.extItem.activeBackground')};
  color: ${dt('megamenu.extend.extItem.activeColor')};
}

.p-megamenu .p-megamenu-item.p-menuitem-checked:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
  color: ${dt('megamenu.extend.extItem.icon.activeColor')};
}
`;

export default css;
