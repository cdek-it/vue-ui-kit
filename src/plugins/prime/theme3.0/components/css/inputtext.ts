const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для InputText */
.p-inputtext {
  border-width: ${dt('inputtext.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Стили для readonly состояния */
.p-inputtext:enabled:read-only {
  background: ${dt('inputtext.extend.readonlyBackground')};
}

/* Размер XLarge для InputText (приоритизация) */
.p-inputtext.p-inputtext-xlg {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
  padding: ${dt('inputtext.extend.extXlg.paddingY')} ${dt(
  'inputtext.extend.extXlg.paddingX'
)};
}

/* Ширина контейнера IconField */
.p-iconfield[data-pc-name="iconfield"] {
  width: fit-content;
}

/* Стили для иконки внутри IconField */
.p-iconfield .p-inputicon {
  font-size: ${dt('inputtext.extend.iconSize')};
  width: ${dt('inputtext.extend.iconSize')};
  height: ${dt('inputtext.extend.iconSize')};
  cursor: pointer;
}

/* Скрытие иконки когда input пустой */
.p-iconfield:has(.p-inputtext:placeholder-shown) .p-inputicon,
.p-iconfield:has(.p-inputtext:not(.p-filled)) .p-inputicon {
  display: none;
}
`;

export default css;
