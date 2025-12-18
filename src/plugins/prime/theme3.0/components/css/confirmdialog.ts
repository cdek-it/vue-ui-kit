const css = ({ dt }: { dt: (token: string) => string }) => `
.p-confirmdialog .p-dialog {
  border-radius: ${dt('overlay.modal.borderRadius')};
  box-shadow: ${dt('overlay.modal.shadow')};
  min-width: 280px;
}

.p-confirmdialog .p-dialog-content {
  padding: ${dt('dialog.content.padding')};
  gap: ${dt('confirmdialog.content.gap')};
  display: flex;
  align-items: flex-start;
}

.p-confirmdialog .p-confirmdialog-icon {
  font-size: ${dt('confirmdialog.icon.size')};
  width: ${dt('confirmdialog.icon.size')};
  height: ${dt('confirmdialog.icon.size')};
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.p-confirmdialog .p-confirmdialog-message {
  flex: 1;
  line-height: 1.5;
}

.p-confirmdialog.p-confirm-dialog-accept .p-confirmdialog-icon,
.p-confirmdialog[data-pc-severity="success"] .p-confirmdialog-icon {
  color: ${dt('confirmdialog.extend.extIcon.success')};
}

.p-confirmdialog.p-confirm-dialog-info .p-confirmdialog-icon,
.p-confirmdialog[data-pc-severity="info"] .p-confirmdialog-icon {
  color: ${dt('confirmdialog.extend.extIcon.info')};
}

.p-confirmdialog.p-confirm-dialog-warn .p-confirmdialog[data-pc-severity="warn"] .p-confirmdialog-icon {
  color: ${dt('confirmdialog.extend.extIcon.warn')};
}

.p-confirmdialog.p-confirm-dialog-help .p-confirmdialog-icon,
.p-confirmdialog[data-pc-severity="help"] .p-confirmdialog-icon {
  color: ${dt('confirmdialog.extend.extIcon.help')};
}

.p-confirmdialog.p-confirm-dialog-error .p-confirmdialog-icon,
.p-confirmdialog[data-pc-severity="danger"] .p-confirmdialog-icon,
.p-confirmdialog[data-pc-severity="error"] .p-confirmdialog-icon {
  color: ${dt('confirmdialog.extend.extIcon.danger')};
}

.p-confirmdialog .p-dialog-footer {
  padding: ${dt('dialog.footer.padding')};
  gap: ${dt('dialog.footer.gap')};
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
}

.p-confirmdialog .p-dialog-header {
  padding: ${dt('dialog.header.padding')};
  border-bottom: 1px solid ${dt('content.borderColor')};
}

.p-confirmdialog .p-dialog-header .p-dialog-title {
  display: flex;
  align-items: center;
  gap: ${dt('dialog.header.gap')};
  font-weight: ${dt('dialog.title.fontWeight')};
}

.p-confirmdialog .p-dialog-header .p-dialog-title .p-icon {
  font-size: ${dt('confirmdialog.icon.size')};
  width: ${dt('confirmdialog.icon.size')};
  height: ${dt('confirmdialog.icon.size')};
  margin-right: 0;
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
