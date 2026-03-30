const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для Select */
.p-select {
  width: 100%;
  border-width: ${dt('select.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Readonly состояние */
.p-select.p-readonly {
  background: ${dt('select.extend.readonlyBackground')};
  pointer-events: none;
}

/* Совместимость с FloatLabel variant="in" */
.p-floatlabel-in .p-select .p-select-label {
  padding-block-start: ${dt('floatlabel.in.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.in.input.paddingBottom')};
}

/* Стили для иконок */
:is(.p-select-dropdown .p-select-dropdown-icon, .p-select-clear-icon, .p-select-loading-icon) {
  font-size: ${dt('select.extend.iconSize')};
  width: ${dt('select.extend.iconSize')};
  height: ${dt('select.extend.iconSize')};
}
`;

export default css;
