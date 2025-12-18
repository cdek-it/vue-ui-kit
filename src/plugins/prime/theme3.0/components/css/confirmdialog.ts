const css = ({ dt }: { dt: (token: string) => string }) => `
/* Размеры диалога по умолчанию (default) */
.p-confirmdialog.p-dialog {
  min-width: ${dt('sizingDialog.extra.minWidth')};
  max-width: ${dt('sizingDialog.extra.maxWidth')};
}

/* Размер SM (small) - для компактных диалогов */
.p-confirmdialog-sm.p-dialog {
  min-width: ${dt('sizingDialog.sm.extra.minWidth')};
  max-width: ${dt('sizingDialog.sm.extra.maxWidth')};
}

/* Размер LG (large) - для диалогов с большим содержимым */
.p-confirmdialog-lg.p-dialog {
  min-width: ${dt('sizingDialog.lg.extra.minWidth')};
  max-width: ${dt('sizingDialog.lg.extra.maxWidth')};
}

/* Размер XLG (extra large) - для диалогов с максимальным содержимым */
.p-confirmdialog-xlg.p-dialog {
  min-width: ${dt('sizingDialog.xlg.extra.minWidth')};
  max-width: ${dt('sizingDialog.xlg.extra.maxWidth')};
}

/* Стилизация иконки в заголовке диалога */
.p-confirmdialog .p-dialog-header .p-icon {
  display: inline-flex;
  width: ${dt('fonts.fontSize.2xl')};
  height: ${dt('fonts.fontSize.2xl')};
}

/* Размер шрифта для иконки (псевдоэлемент ::before) */
.p-confirmdialog .p-dialog-header .p-icon::before {
font-size: ${dt('fonts.fontSize.2xl')};
}

/* Расположение кнопок в футере диалога */
.p-confirmdialog .p-dialog-footer {
  justify-content: flex-end;
  flex-direction: row-reverse;
}

/* Цвет иконки для severity="success" (успешное действие) */
.p-confirmdialog[data-pc-severity="success"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-accept .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.success')};
}

/* Цвет иконки для severity="info" (информационное сообщение) */
.p-confirmdialog[data-pc-severity="info"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-info .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.info')};
}

/* Цвет иконки для severity="warn" (предупреждение) */
.p-confirmdialog[data-pc-severity="warn"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-warn .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.warn')};
}

/* Цвет иконки для severity="help" (справка) */
.p-confirmdialog[data-pc-severity="help"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-help .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.help')};
}

/* Цвет иконки для severity="danger" или "error" (критическое действие) */
.p-confirmdialog[data-pc-severity="danger"] .p-dialog-header .p-icon,
.p-confirmdialog[data-pc-severity="error"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-error .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.danger')};
}
`;

export default css;