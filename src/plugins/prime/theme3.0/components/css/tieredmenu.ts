const css = ({ dt }: { dt: (token: string) => string }) => `

.p-tieredmenu-submenu-icon {
  font-size: ${dt('tieredmenu.extend.iconSize')};
}

.p-tieredmenu-overlay {
  border: ${dt('borderWidth.100')} solid ${dt(
  'tieredmenu.extend.extSubmenu.borderColor'
)};
  background: ${dt('tieredmenu.extend.extSubmenu.background')};
}

.p-tieredmenu .p-tieredmenu-submenu {
  border: ${dt('borderWidth.100')} solid ${dt(
  'tieredmenu.extend.extSubmenu.borderColor'
)};
  background: ${dt('tieredmenu.extend.extSubmenu.background')};
}

.p-tieredmenu.p-component .p-tieredmenu-item:not(.p-disabled).p-menuitem-checked > .p-tieredmenu-item-content {
  background: ${dt('tieredmenu.item.activeBackground')};
  color: ${dt('tieredmenu.item.activeColor')};
}

.p-tieredmenu.p-component .p-tieredmenu-item:not(.p-disabled).p-menuitem-checked > .p-tieredmenu-item-content:hover {
  background: ${dt('tieredmenu.item.activeBackground')};
  color: ${dt('tieredmenu.item.activeColor')};
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
