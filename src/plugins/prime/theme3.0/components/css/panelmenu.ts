const css = ({ dt }: { dt: (token: string) => string }) => `

.p-panelmenu {
  gap: ${dt('panelmenu.extend.extPanel.gap')};
}
.p-panelmenu-panel {
  padding: ${dt('panelmenu.extend.extPanel.gap')};
}
.p-panelmenu-header-content,
.p-panelmenu-item-content {
  font-size: ${dt('fonts.fontSize.300')};
}
.p-panelmenu-submenu-icon {
  font-size: ${dt('panelmenu.extend.iconSize')};
}

/* --- Active & Focused States --- */
.p-panelmenu .p-panelmenu-item:is(.p-menuitem-checked, .p-focus) > .p-panelmenu-item-content,
.p-panelmenu .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content {
  background: ${dt('panelmenu.extend.extItem.activeBackground')};
  color: ${dt('panelmenu.extend.extItem.activeColor')};
}

.p-panelmenu .p-panelmenu-item:is(.p-menuitem-checked, .p-focus) > .p-panelmenu-item-content :is(.p-panelmenu-item-link, .p-panelmenu-item-label, .p-panelmenu-item-icon, .p-panelmenu-header-icon, .p-panelmenu-submenu-icon),
.p-panelmenu .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content :is(.p-panelmenu-header-link, .p-panelmenu-header-label, .p-panelmenu-submenu-icon, .p-panelmenu-item-icon, .p-panelmenu-header-icon) {
  color: ${dt('panelmenu.extend.extItem.activeColor')};
}

/* --- Hover on Active States --- */
.p-panelmenu .p-panelmenu-item.p-menuitem-checked:not(.p-disabled) > .p-panelmenu-item-content:hover,
.p-panelmenu .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content:hover {
  background: ${dt('panelmenu.item.focusBackground')};
  color: ${dt('panelmenu.item.focusColor')};
}

.p-panelmenu .p-panelmenu-item:is(.p-menuitem-checked:not(.p-disabled), .p-focus) > .p-panelmenu-item-content:hover :is(.p-panelmenu-item-link, .p-panelmenu-item-label),
.p-panelmenu .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content:hover :is(.p-panelmenu-header-link, .p-panelmenu-header-label) {
  color: ${dt('panelmenu.item.focusColor')};
}

.p-panelmenu .p-panelmenu-item.p-menuitem-checked:not(.p-disabled) > .p-panelmenu-item-content:hover :is(.p-panelmenu-item-icon, .p-panelmenu-submenu-icon),
.p-panelmenu .p-panelmenu-header.p-panelmenu-header-active .p-panelmenu-header-content:hover :is(.p-panelmenu-submenu-icon, .p-panelmenu-item-icon) {
  color: ${dt('panelmenu.item.icon.focusColor')};
}

/* --- Captions --- */
.p-panelmenu .panelmenu-item-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('panelmenu.extend.extItem.caption.gap')};
}

.p-panelmenu .panelmenu-item-caption {
  font-size: ${dt('fonts.fontSize.200')};
  line-height: ${dt('fonts.lineHeight.450')};
  color: ${dt('panelmenu.extend.extItem.caption.color')};
}
`;

export default css;
