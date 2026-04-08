const css = ({ dt }: { dt: (token: string) => string }) => `
/* Кнопки увеличения/уменьшения */
.p-inputnumber-button {
  border-width: ${dt('inputnumber.extend.borderWidth')};
}

.p-inputnumber-horizontal .p-inputnumber-button {
  min-height: ${dt('inputnumber.extend.extButton.height')};
}

/* Disabled состояние */
.p-inputnumber-horizontal:has(.p-inputnumber-input:disabled) .p-inputnumber-button {
  background: ${dt('inputtext.root.disabledBackground')};
  color: ${dt('inputtext.root.disabledColor')};
}

/* Размер XLarge для InputNumber */
.p-inputnumber-input[data-p~="xlarge"] {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
  padding: ${dt('inputtext.extend.extXlg.paddingY')} ${dt(
  'inputtext.extend.extXlg.paddingX'
)};
}
`;

export default css;
