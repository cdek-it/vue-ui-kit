const css = ({ dt }: { dt: (token: string) => string }) => `

.p-menu.p-component {
  padding: ${dt('menu.extend.paddingY')} ${dt('menu.extend.paddingX')};
}

.p-menu .p-menu-item-content .p-menu-item-link {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.250')};
}

.p-menu .p-menu-item-content .menu-item-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('menu.extend.extItem.caption.gap')};
}

.p-menu .p-menu-item-content .menu-item-caption {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  color: ${dt('menu.colorScheme.light.extend.extItem.caption.color')};
}

.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover,
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-link,
.p-menu .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-label {
  color: ${dt('menu.colorScheme.light.item.color')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content,
.p-menu .p-menu-item.p-focus > .p-menu-item-content {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-link,
.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-label,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-link,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-label {
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked > .p-menu-item-content .p-menu-item-icon,
.p-menu .p-menu-item.p-focus > .p-menu-item-content .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover {
  background: ${dt('menu.extend.extItem.activeBackground')};
  color: ${dt('menu.extend.extItem.activeColor')};
}

.p-menu .p-menu-item.p-menuitem-checked:not(.p-disabled) > .p-menu-item-content:hover .p-menu-item-icon {
  color: ${dt('menu.colorScheme.light.extend.extItem.icon.activeColor')};
}

.p-menu .p-menu-submenu-label {
  text-transform: uppercase;
  font-size: ${dt('fonts.fontSize.sm')};
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: ${dt('fonts.lineHeight.250')};
}
`;

export default css;
