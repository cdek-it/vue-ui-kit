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
  width: ${dt('sizing.overlay.root.width')};
}

/* Размер SM (small) */
.p-dialog-sm {
  width: ${dt('sizing.overlay.sm.width')};
}

/* Размер LG (large) */
.p-dialog-lg {
  width: ${dt('sizing.overlay.lg.width')};
}

/* Размер XLG (extra large) */
.p-dialog-xlg {
  width: ${dt('sizing.overlay.xlg.width')};
}
`;

export default css;
