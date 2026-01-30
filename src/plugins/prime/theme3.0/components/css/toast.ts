const css = ({ dt }: { dt: (token: string) => string }) => `

.p-toast-message-info .p-toast-message-icon {
  color: ${dt('toast.extend.extInfo.color')};
}

.p-toast-message-info .p-toast-close-button {
  color: ${dt('toast.extend.extInfo.closeButton.color')};
  border: ${dt('toast.extend.extCloseButton.width')} solid ${dt(
  'toast.extend.extInfo.closeButton.borderColor'
)};
}

.p-toast-message-info .p-toast-accent-line {
  background: ${dt('toast.extend.extInfo.color')};
  width: ${dt('toast.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('toast.root.borderRadius')} 0 0 ${dt(
  'toast.root.borderRadius'
)};
}

.p-toast-message-success .p-toast-message-icon {
  color: ${dt('toast.extend.extSuccess.color')};
}

.p-toast-message-success .p-toast-close-button {
  color: ${dt('toast.extend.extSuccess.closeButton.color')};
  border: ${dt('toast.extend.extCloseButton.width')} solid ${dt(
  'toast.extend.extSuccess.closeButton.borderColor'
)};
}

.p-toast-message-success .p-toast-accent-line {
  background: ${dt('toast.extend.extSuccess.color')};
  width: ${dt('toast.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('toast.root.borderRadius')} 0 0 ${dt(
  'toast.root.borderRadius'
)};
}

.p-toast-message-warn .p-toast-message-icon {
  color: ${dt('toast.extend.extWarn.color')};
}

.p-toast-message-warn .p-toast-close-button {
  color: ${dt('toast.extend.extWarn.closeButton.color')};
  border: ${dt('toast.extend.extCloseButton.width')} solid ${dt(
  'toast.extend.extWarn.closeButton.borderColor'
)};
}

.p-toast-message-warn .p-toast-accent-line {
  background: ${dt('toast.extend.extWarn.color')};
  width: ${dt('toast.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('toast.root.borderRadius')} 0 0 ${dt(
  'toast.root.borderRadius'
)};
}

.p-toast-message-error .p-toast-message-icon {
  color: ${dt('toast.extend.extError.color')};
}

.p-toast-message-error .p-toast-close-button {
  color: ${dt('toast.extend.extError.closeButton.color')};
  border: ${dt('toast.extend.extCloseButton.width')} solid ${dt(
  'toast.extend.extError.closeButton.borderColor'
)};
}

.p-toast-message-error .p-toast-accent-line {
  background: ${dt('toast.extend.extError.color')};
  width: ${dt('toast.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('toast.root.borderRadius')} 0 0 ${dt(
  'toast.root.borderRadius'
)};
}

.p-toast-message-caption {
  color: ${dt('toast.extend.extInfo.caption.color')};
  font-size: ${dt('toast.detail.fontSize')};
  font-weight: ${dt('toast.detail.fontWeight')};
}
`;

export default css;
