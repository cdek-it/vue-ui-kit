const css = ({ dt }: { dt: (token: string) => string }) => `
/* PanelMenu base styles */
.p-panelmenu .p-panelmenu-panel {
  padding: ${dt('panelmenu.extend.extPanel.gap')};
}

/* When label contains caption, make it a column layout */
.p-panelmenu .p-panelmenu-item-label:has(.p-panelmenu-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('panelmenu.extend.extItem.caption.gap')};
}

/* PanelMenu item caption (additional text below label) */
.p-panelmenu .p-panelmenu-item-caption {
  color: ${dt('panelmenu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
}

/* Active/Checked state */
.p-panelmenu .p-panelmenu-item.p-menuitem-checked > .p-panelmenu-item-content {
  background: ${dt('panelmenu.extend.extItem.activeBackground')};
  color: ${dt('panelmenu.extend.extItem.activeColor')};
}

.p-panelmenu .p-panelmenu-item.p-menuitem-checked > .p-panelmenu-item-content .p-panelmenu-item-link {
  color: ${dt('panelmenu.extend.extItem.activeColor')};
}

.p-panelmenu .p-panelmenu-item.p-menuitem-checked > .p-panelmenu-item-content .p-panelmenu-item-icon {
  color: ${dt('panelmenu.extend.extItem.icon.activeColor')};
}

/* Active hover state */
.p-panelmenu .p-panelmenu-item.p-menuitem-checked:not(.p-disabled) > .p-panelmenu-item-content:hover {
  background: ${dt('panelmenu.extend.extItem.activeBackground')};
  color: ${dt('panelmenu.extend.extItem.activeColor')};
}

.p-panelmenu .p-panelmenu-item.p-menuitem-checked:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
  color: ${dt('panelmenu.extend.extItem.icon.activeColor')};
}
`;

export default css;
