const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для Select */
.p-select {
  width: 100%;
  border-width: ${dt('select.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Стили для readonly состояния */
.p-select.p-readonly {
  background: ${dt('select.extend.readonlyBackground')};
  pointer-events: none;
}

.p-select.p-readonly .p-select-label {
  color: ${dt('select.extend.readonlyColor')};
}

.p-select.p-readonly .p-select-dropdown {
  opacity: ${dt('select.extend.readonlyIconOpacity')};
}

/* Размер XLarge для Select */
.p-select-xlg {
  font-size: ${dt('select.extend.extXlg.fontSize')};
}

.p-select-xlg .p-select-label {
  padding-inline: ${dt('select.extend.extXlg.paddingX')};
  padding-block: ${dt('select.extend.extXlg.paddingY')};
}

/* Совместимость XLarge с FloatLabel */
.p-floatlabel-in .p-select-xlg .p-select-label {
  padding-block-start: ${dt('floatlabel.inside.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.inside.input.paddingBottom')};
}

/* Стили для иконок */
.p-select-dropdown .p-select-dropdown-icon,
.p-select-clear-icon,
.p-select-loading-icon {
  font-size: ${dt('select.extend.iconSize')};
  width: ${dt('select.extend.iconSize')};
  height: ${dt('select.extend.iconSize')};
}
`;

export default css;
