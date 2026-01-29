const css = ({ dt }: { dt: (token: string) => string }) => `

.p-megamenu-mobile-active .p-megamenu-root-list {
border-radius: ${dt('megamenu.root.borderRadius')};
}


.p-megamenu-submenu-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}

.p-megamenu-item-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}

.p-megamenu-item-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

/* Состояния для option (аналогично Menu) */
.p-megamenu-item.p-focus > .p-megamenu-item-content {
  background: ${dt('megamenu.item.focusBackground')};
  color: ${dt('megamenu.item.focusColor')};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon,
.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
  color: ${dt('megamenu.item.icon.focusColor')};
}

.p-megamenu-item-active > .p-megamenu-item-content {
  background: ${dt('megamenu.item.activeBackground')};
  color: ${dt('megamenu.item.activeColor')};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon,
.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
  color: ${dt('megamenu.item.icon.activeColor')};
}

/* Caption для submenu items */
.p-megamenu-submenu-label {
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: ${dt('megamenu.extend.extItem.caption.gap')};
}

.p-megamenu-item-caption {
  font-size: ${dt('fonts.fontSize.sm')};
  color: ${dt('megamenu.extend.extItem.caption.color')};
  line-height: 1.2;
}

/* Mobile button */
.p-megamenu-mobile-button {
  width: ${dt('megamenu.mobileButton.size')};
  height: ${dt('megamenu.mobileButton.size')};
  border-radius: ${dt('megamenu.mobileButton.borderRadius')};
}

.p-megamenu-mobile-button-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}
`;

export default css;
