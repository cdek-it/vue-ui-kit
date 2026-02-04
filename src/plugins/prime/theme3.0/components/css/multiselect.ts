const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили */
.p-multiselect {
  width: ${dt('multiselect.extend.width')};
  border-width: ${dt('multiselect.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Состояния */
.p-multiselect[readonly] {
  background: ${dt('multiselect.extend.readonlyBackground')};
  cursor: default;
  pointer-events: none;
}

/* Размеры */
.p-multiselect-xlg {
  font-size: ${dt('multiselect.extend.extXlg.fontSize')};
  min-height: ${dt('controls.iconOnly.5xlg')};
}

/* Иконки */
.p-multiselect-clear-icon {
  margin-left: ${dt('multiselect.root.sm.paddingY')};
}

/* Чипы */
.p-multiselect .p-chip:has(.p-chip-remove-icon) {
  padding-inline-end: ${dt('chip.root.paddingX')};
}
`;

export default css;
