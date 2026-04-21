const css = ({ dt }: { dt: (token: string) => string }) => `

.p-megamenu-submenu-icon,
.p-megamenu-item-icon {
  font-size: ${dt('megamenu.extend.iconSize')};
}

.p-megamenu-item-label {
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
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

/* Позиционирование оверлея от пункта для вертикального вида */
.p-megamenu.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
  left: 100%;
}
`;

export default css;
