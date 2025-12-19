const css = ({ dt }: { dt: (token: string) => string }) => `
/* Размеры диалога по умолчанию (default) */
.p-dialog-extra.p-dialog {
  min-width: ${dt('sizingDialog.extra.minWidth')};
  max-width: ${dt('sizingDialog.extra.maxWidth')};
}

/* Размер SM (small) - для компактных диалогов */
.p-dialog-sm-extra.p-dialog {
  min-width: ${dt('sizingDialog.sm.extra.minWidth')};
  max-width: ${dt('sizingDialog.sm.extra.maxWidth')};
}

/* Размер LG (large) - для диалогов с большим содержимым */
.p-dialog-lg-extra.p-dialog {
  min-width: ${dt('sizingDialog.lg.extra.minWidth')};
  max-width: ${dt('sizingDialog.lg.extra.maxWidth')};
}

/* Размер XLG (extra large) - для диалогов с максимальным содержимым */
.p-dialog-xlg-extra.p-dialog {
  min-width: ${dt('sizingDialog.xlg.extra.minWidth')};
  max-width: ${dt('sizingDialog.xlg.extra.maxWidth')};
}

.p-dialog .p-dialog-header {
  border-bottom: ${dt('sizing.width.w-0.1')} solid ${dt('content.borderColor')};
}

.p-dialog .p-dialog-header .p-dialog-title {
  display: flex;
  align-items: center;
  gap: ${dt('spacing.gap.gap-2')};
}

.p-dialog .p-dialog-footer {
  flex-direction: row-reverse;
}
`;

export default css;
