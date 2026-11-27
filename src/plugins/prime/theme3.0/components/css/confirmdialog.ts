export default ({ dt }: { dt: (token: string) => string }) => `
/* Иконка в заголовке */
.p-confirmdialog .p-dialog-title {
  display: flex;
  align-items: center;
  gap: ${dt('dialog.header.gap')};
}

.p-confirmdialog .p-dialog-title .p-icon {
  width: ${dt('confirmdialog.icon.size')};
  height: ${dt('confirmdialog.icon.size')};
  font-size: ${dt('confirmdialog.icon.size')};
}

/* Размеры */
.p-confirmdialog-sm.p-dialog {
  width: ${dt('dimension.size.1700')};
}

.p-confirmdialog-lg.p-dialog {
  width: ${dt('dimension.size.2000')};
}

.p-confirmdialog-xlg.p-dialog {
  width: ${dt('dimension.size.2200')};
}

/* Цвета иконок по severity */
.p-confirmdialog[data-pc-severity="success"] .p-dialog-title .p-icon,
.p-confirmdialog.p-confirm-dialog-accept .p-dialog-title .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.success')};
}

.p-confirmdialog[data-pc-severity="info"] .p-dialog-title .p-icon,
.p-confirmdialog.p-confirm-dialog-info .p-dialog-title .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.info')};
}

.p-confirmdialog[data-pc-severity="warn"] .p-dialog-title .p-icon,
.p-confirmdialog.p-confirm-dialog-warn .p-dialog-title .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.warn')};
}

.p-confirmdialog[data-pc-severity="help"] .p-dialog-title .p-icon,
.p-confirmdialog.p-confirm-dialog-help .p-dialog-title .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.help')};
}

.p-confirmdialog[data-pc-severity="danger"] .p-dialog-title .p-icon,
.p-confirmdialog[data-pc-severity="error"] .p-dialog-title .p-icon,
.p-confirmdialog.p-confirm-dialog-error .p-dialog-title .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.danger')};
}
`;
