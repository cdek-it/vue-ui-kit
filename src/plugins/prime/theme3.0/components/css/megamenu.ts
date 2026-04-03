const css = ({ dt }: { dt: (token: string) => string }) => `

.p-megamenu-submenu-icon,
.p-megamenu-item-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}

.p-megamenu-item-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

.p-megamenu .megamenu-item-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('megamenu.extend.extItem.caption.gap')};
}

.p-megamenu .megamenu-item-caption {
  font-size: ${dt('fonts.fontSize.sm')};
  color: ${dt('megamenu.extend.extItem.caption.color')};
}

.p-megamenu-mobile-button-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}


/* Размер ширины панели по контенту и позиционирование для активных пунктов горизонтального вида от начала пункта меню */
.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay,
.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
  min-width: fit-content;
  left: unset;
}
`;

export default css;
