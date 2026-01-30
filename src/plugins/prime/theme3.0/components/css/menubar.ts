const css = ({ dt }: { dt: (token: string) => string }) => `

/* Размеры иконок */
.p-menubar-submenu-icon,
.p-menubar-item-icon {
  font-size: ${dt('menubar.extend.iconSize')};
}

/* Типографика для label */
.p-menubar-item-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

/* Caption для submenu items */
.p-menubar-item-caption {
  font-size: ${dt('fonts.fontSize.sm')};
  color: ${dt('menubar.extend.extItem.caption.color')};
}

/* Submenu label */
.p-menubar-submenu-label {
  padding: ${dt('menubar.extend.extSubmenuLabel.padding')};
  font-weight: ${dt('menubar.extend.extSubmenuLabel.fontWeight')};
  background: ${dt('menubar.extend.extSubmenuLabel.background')};
  color: ${dt('menubar.extend.extSubmenuLabel.color')};
}

.p-menubar-mobile-button-icon {
  font-size: ${dt('menubar.extend.iconSize')};
}

`;

export default css;
