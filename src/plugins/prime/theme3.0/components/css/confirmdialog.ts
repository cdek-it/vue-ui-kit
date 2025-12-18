const css = ({ dt }: { dt: (token: string) => string }) => `
.p-confirmdialog .p-dialog {
  min-width: ${dt('sizingDialog.extra.minWidth')};
}

.p-confirmdialog .p-dialog-header .p-icon {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
}

.p-confirmdialog .p-dialog-header .p-icon::before {
  font-size: 1.5rem;
}

.p-confirmdialog .p-dialog-footer {
  justify-content: flex-end;
  flex-direction: row-reverse;
}

.p-confirmdialog[data-pc-severity="success"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-accept .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.success')};
}

.p-confirmdialog[data-pc-severity="info"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-info .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.info')};
}

.p-confirmdialog[data-pc-severity="warn"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-warn .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.warn')};
}

.p-confirmdialog[data-pc-severity="help"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-help .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.help')};
}

.p-confirmdialog[data-pc-severity="danger"] .p-dialog-header .p-icon,
.p-confirmdialog[data-pc-severity="error"] .p-dialog-header .p-icon,
.p-confirmdialog.p-confirm-dialog-error .p-dialog-header .p-icon {
  color: ${dt('confirmdialog.extend.extIcon.danger')};
}
`;

export default css;
