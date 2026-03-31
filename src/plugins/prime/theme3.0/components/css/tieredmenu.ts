const css = ({ dt }: { dt: (token: string) => string }) => `

.p-tieredmenu-submenu-icon {
  font-size: ${dt('tieredmenu.extend.iconSize')};
}

.p-tieredmenu-overlay {
  border: 1px solid ${dt('tieredmenu.extend.extSubmenu.borderColor')};
  background: ${dt('tieredmenu.extend.extSubmenu.background')};
}

.p-tieredmenu .p-tieredmenu-submenu {
  border: 1px solid ${dt('tieredmenu.submenu.borderColor')};
  background: ${dt('tieredmenu.submenu.background')};
}

.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked > .p-tieredmenu-item-content {
  background: ${dt('tieredmenu.item.activeBackground')} !important;
  color: ${dt('tieredmenu.item.activeColor')} !important;
}

.p-tieredmenu .p-tieredmenu-item.p-menuitem-checked > .p-tieredmenu-item-content:hover {
  background: ${dt('tieredmenu.item.activeBackground')} !important;
  color: ${dt('tieredmenu.item.activeColor')} !important;
}

.p-tieredmenu-item-caption {
  display: flex;
  flex-direction: column;
  gap: ${dt('tieredmenu.extend.extItem.caption.gap')};
}

.p-tieredmenu-item-caption-text {
  color: ${dt('tieredmenu.extend.extItem.caption.color')};
  font-size: ${dt('fonts.fontSize.xs')};
}
`;

export default css;
