const css = ({ dt }: { dt: (token: string) => string }) => `

.p-menubar-submenu-icon,
.p-menubar-item-icon {
  font-size: ${dt('menubar.extend.iconSize')};
}

.p-menubar-item-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

.p-menubar-submenu-label {
  padding: ${dt('menubar.extend.extSubmenuLabel.padding')};
  font-weight: ${dt('menubar.extend.extSubmenuLabel.fontWeight')};
  background: ${dt('menubar.extend.extSubmenuLabel.background')};
  color: ${dt('menubar.extend.extSubmenuLabel.color')};
}

`;

export default css;
