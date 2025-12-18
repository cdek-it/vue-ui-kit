const css = ({ dt }: { dt: (token: string) => string }) => `
.p-dialog {
  background: ${dt('dialog.root.background')};
  border-radius: ${dt('dialog.root.borderRadius')};
  box-shadow: ${dt('dialog.root.shadow')};
  border: 1px solid ${dt('dialog.root.borderColor')};
  color: ${dt('dialog.root.color')};
  min-width: 280px;
}

.p-dialog .p-dialog-header {
  padding: ${dt('dialog.header.padding')};
  border-bottom: 1px solid ${dt('content.borderColor')};
}

.p-dialog .p-dialog-header .p-dialog-title {
  font-weight: ${dt('dialog.title.fontWeight')};
  font-size: ${dt('dialog.title.fontSize')};
  display: flex;
  align-items: center;
  gap: ${dt('dialog.header.gap')};
}

.p-dialog .p-dialog-header .p-dialog-header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.p-dialog .p-dialog-content {
  padding: ${dt('dialog.content.padding')};
}

.p-dialog .p-dialog-footer {
  padding: ${dt('dialog.footer.padding')};
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  gap: ${dt('dialog.footer.gap')};
}
`;

export default css;
