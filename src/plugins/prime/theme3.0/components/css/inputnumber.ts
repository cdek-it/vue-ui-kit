const css = ({ dt }: { dt: (token: string) => string }) => `

/* Кнопки увеличения/уменьшения */
.p-inputnumber-button {
  border-width: ${dt('inputnumber.extend.borderWidth')};
}

/* Высота кнопок */
.p-inputnumber-horizontal .p-inputnumber-button {
  min-height: ${dt('inputnumber.extend.extButton.height')};
}

/* Иконки внутри кнопок */
.p-inputnumber-button .p-icon {
  width: ${dt('inputnumber.extend.extButton.iconSize')};
  height: ${dt('inputnumber.extend.extButton.iconSize')};
}

/* Disabled состояние для кнопок */
.p-inputnumber-horizontal:has(.p-inputnumber-input:disabled) .p-inputnumber-button {
  background: ${dt('inputtext.root.disabledBackground')};
  color: ${dt('inputtext.root.disabledColor')};
}
`;

export default css;
