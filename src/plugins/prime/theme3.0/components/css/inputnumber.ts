const css = ({ dt }: { dt: (token: string) => string }) => `
/* Кнопки увеличения/уменьшения */
.p-inputnumber-button {
  border-width: ${dt('inputnumber.extend.borderWidth')};
}

.p-inputnumber-horizontal .p-inputnumber-button {
  min-height: ${dt('inputnumber.extend.extButton.height')};
}

/* Скрываем стандартные SVG иконки и добавляем Tabler Icons */
.p-inputnumber-increment-button svg,
.p-inputnumber-decrement-button svg {
  display: none;
}

.p-inputnumber-increment-button::before,
.p-inputnumber-decrement-button::before {
  font-family: 'tabler-icons' !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${dt('inputnumber.extend.extButton.iconSize')};
}

.p-inputnumber-increment-button::before {
  content: "\\eb0b"; /* ti-plus */
}

.p-inputnumber-decrement-button::before {
  content: "\\eaf2"; /* ti-minus */
}

/* Disabled состояние */
.p-inputnumber-horizontal:has(.p-inputnumber-input:disabled) .p-inputnumber-button {
  background: ${dt('inputtext.root.disabledBackground')};
  color: ${dt('inputtext.root.disabledColor')};
}
`;

export default css;
