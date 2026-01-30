const css = ({ dt }: { dt: (token: string) => string }) => `

.p-panelmenu {
  gap: ${dt('panelmenu.extend.extPanel.gap')};
}

.p-panelmenu-panel {
  padding: ${dt('panelmenu.extend.extPanel.gap')};
}

.p-panelmenu-header-content {
  font-size: ${dt('fonts.fontSize.base')};
}

.p-panelmenu-submenu-icon {
  font-size: ${dt('panelmenu.extend.iconSize')};
}

.p-panelmenu-item-content {
  font-size: ${dt('fonts.fontSize.base')};
}

.p-panelmenu-item:not(:has(.p-panelmenu-submenu-icon)).p-menuitem-checked > .p-panelmenu-item-content .p-panelmenu-item-icon {
  color: ${dt('panelmenu.extend.extItem.icon.activeColor')};
}

.p-panelmenu-item:has(.p-panelmenu-submenu-icon).p-menuitem-checked > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
  color: ${dt('panelmenu.submenuIcon.color')};
}

.p-panelmenu-item-label:has(.p-panelmenu-item-caption) {
  display: flex;
  flex-direction: column;
  gap: ${dt('panelmenu.extend.extItem.caption.gap')};
}

.p-panelmenu-item-caption {
  color: ${dt('panelmenu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.sm')};
}
`;

export default css;
