const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для InputMask */
.p-inputmask {
  border-width: ${dt('inputtext.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Стили для readonly состояния */
.p-inputmask:enabled:read-only {
  background: ${dt('inputtext.extend.readonlyBackground')};
}

/* Размер XLarge для InputMask */
.p-inputmask.p-inputtext-xlg {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
  padding: ${dt('inputtext.extend.extXlg.paddingY')} ${dt(
  'inputtext.extend.extXlg.paddingX'
)};
}
`;

export default css;
