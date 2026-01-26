const css = ({ dt }: { dt: (token: string) => string }) => `
/* Типографика для Dialog */
.p-dialog .p-dialog-title {
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: ${dt('fonts.lineHeight.55')};
}

.p-dialog .p-dialog-content {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.50')};
}

/* Разделитель между header и content */
.p-dialog .p-dialog-header {
  border-bottom: ${dt('borderWidth.xs')} solid ${dt('content.borderColor')};
}

/* Позиционирование кнопки закрытия справа */
.p-dialog .p-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.p-dialog .p-dialog-header-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
}

/* Размеры диалога */
.p-dialog {
  min-width: ${dt('sizing.96')};
  max-width: ${dt('sizing.120')};
}

/* Размер SM (small) */
.p-dialog-sm {
  min-width: ${dt('sizing.80')};
  max-width: ${dt('sizing.96')};
}

/* Размер LG (large) */
.p-dialog-lg {
  min-width: ${dt('sizing.120')};
  max-width: ${dt('sizing.140')};
}

/* Размер XLG (extra large) */
.p-dialog-xlg {
  width: ${dt('sizing.140')};
}
`;

export default css;
