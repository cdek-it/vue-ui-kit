const css = ({ dt }: { dt: (token: string) => string }) => `
/* Типографика для Dialog */
.p-dialog .p-dialog-title {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('dialog.title.fontSize')};
  font-weight: ${dt('dialog.title.fontWeight')};
  line-height: ${dt('fonts.lineHeight.550')};
}

.p-dialog .p-dialog-content {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.300')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.500')};
}

/* Разделитель между header и content */
.p-dialog .p-dialog-header {
  border-bottom: ${dt('borderWidth.100')} solid ${dt(
  'dialog.root.borderColor'
)};
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

 .p-dialog .p-dialog-header-actions .p-dialog-close-button.p-button-text:focus-visible,
 .p-dialog .p-dialog-header-actions .p-dialog-close-button.p-button:focus-visible,
 .p-dialog .p-button-text:focus-visible,
 .p-dialog .p-button:focus-visible {
  outline: 0 none;
  outline-color: transparent;
  box-shadow: none;
}

/* Размеры диалога */
.p-dialog.p-component {
  width: ${dt('overlay.width')};
}

/* Размер SM (small) */
.p-dialog.p-component.p-dialog-sm {
  width: ${dt('overlay.sm.width')};
}

/* Размер LG (large) */
.p-dialog.p-component.p-dialog-lg {
  width: ${dt('overlay.lg.width')};
}

/* Размер XLG (extra large) */
.p-dialog.p-component.p-dialog-xlg {
  width: ${dt('overlay.xlg.width')};
}
`;

export default css;
