const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для Textarea */
.p-textarea {
  border-width: ${dt('textarea.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.25')};
  resize: vertical;
  min-height: ${dt('textarea.extend.minHeight')};
}

/* Состояние readonly */
.p-textarea:enabled:read-only {
  background: ${dt('textarea.extend.readonlyBackground')};
}

.p-floatlabel:has(.p-textarea-sm) label {
  inset-inline-start: ${dt('textarea.sm.paddingX')};
}
.p-floatlabel:has(.p-textarea-lg) label {
  inset-inline-start: ${dt('textarea.lg.paddingX')};
}

/* Скрытие иконки, когда поле пустое */
.p-iconfield:has(.p-textarea:placeholder-shown) .p-inputicon,
.p-iconfield:has(.p-textarea:not(.p-filled)) .p-inputicon {
  display: none;
}

.p-iconfield .p-inputicon {
  top: ${dt('textarea.root.paddingX')};
  margin-top: 0;
}
`;

export default css;
