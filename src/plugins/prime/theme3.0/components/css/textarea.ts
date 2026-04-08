const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для Textarea */
.p-textarea {
  border-width: ${dt('textarea.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.250')};
  min-height: ${dt('textarea.extend.minHeight')};
}

/* Стили для readonly состояния */
.p-textarea:enabled:read-only {
  background: ${dt('textarea.extend.readonlyBackground')};
}

/* Размер XLarge для Textarea */
.p-textarea.p-textarea-xlg {
  font-size: ${dt('textarea.extend.extXlg.fontSize')};
  padding: ${dt('textarea.extend.extXlg.paddingY')} ${dt(
  'textarea.extend.extXlg.paddingX'
)};
}
`;

export default css;
