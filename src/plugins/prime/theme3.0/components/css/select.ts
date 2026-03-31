const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для Select */
.p-select.p-component {
  width: 100%;
  border-width: ${dt('select.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Readonly состояние */
.p-select.p-component[readonly] {
  background: ${dt('select.extend.readonlyBackground')};
  border-color: ${dt('select.root.borderColor')};
  color: ${dt('select.root.color')};
  cursor: default;
  pointer-events: none;
}

/* Цвет иконок в состоянии readonly */
.p-select.p-component[readonly] :is(.p-select-dropdown .p-select-dropdown-icon, .p-select-clear-icon) {
  color: ${dt('select.root.placeholderColor')};
}

/* Размер XLarge */
.p-select.p-component.p-select-xlg .p-select-label {
  font-size: ${dt('select.extend.extXlg.fontSize')};
  padding-block: ${dt('inputtext.extend.extXlg.paddingY')};
  padding-inline: ${dt('inputtext.extend.extXlg.paddingX')};
}

/* Совместимость с FloatLabel variant="in" */
.p-floatlabel-in .p-select.p-component .p-select-label {
  padding-block-start: ${dt('floatlabel.in.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.in.input.paddingBottom')};
}

/* Стили для иконок */
.p-select.p-component :is(.p-select-dropdown .p-select-dropdown-icon, .p-select-clear-icon, .p-select-loading-icon) {
  font-size: ${dt('select.extend.iconSize')};
  width: ${dt('select.extend.iconSize')};
  height: ${dt('select.extend.iconSize')};
  color: ${dt('select.root.placeholderColor')};
}
`;

export default css;
