const css = ({ dt }: { dt: (token: string) => string }) => `

.p-menubar-submenu-icon,
.p-menubar-item-icon,
.p-block-menuitem-icon {
  font-size: ${dt('menubar.extend.iconSize')};
}

.p-menubar-item-label,
.p-block-menuitem-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

.p-block-menuitem-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: ${dt('menubar.item.padding')};
  gap: ${dt('menubar.item.gap')};
  border-radius: ${dt('menubar.item.borderRadius')};
  cursor: pointer;
}

.p-block-menuitem-description {
  font-size: ${dt('fonts.fontSize.sm')};
  color: ${dt('menubar.extend.extItem.caption.color')};
}

.p-block-menuitem-caption {
  display: flex;
  flex-direction: column;
  gap: ${dt('menubar.extend.extItem.caption.gap')};
}

.p-menubar-submenu-label {
  padding: ${dt('menubar.extend.extSubmenuLabel.padding')};
  font-weight: ${dt('menubar.extend.extSubmenuLabel.fontWeight')};
  background: ${dt('menubar.extend.extSubmenuLabel.background')};
  color: ${dt('menubar.extend.extSubmenuLabel.color')};
}

`;

export default css;
