const css = ({ dt }: { dt: (token: string) => string }) => `
/* Основной контейнер toast-сообщения */
.p-toast-message {
  width: ${dt('toast.root.width')};
  overflow: hidden;
  border-width: ${dt('toast.root.borderWidth')};
  border-radius: ${dt('toast.root.borderRadius')};
  box-shadow: ${dt('toast.colorScheme.light.info.shadow')};
  position: relative;
}

/* border-radius для контента toast-сообщения */
.p-toast .p-toast-message .p-toast-message-content {
  border-radius: ${dt('toast.root.borderRadius')};
}

/* Заголовок toast */
.p-toast-summary {
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Детальное описание toast */
.p-toast-message .p-toast-detail {
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Кнопка закрытия toast-сообщения */
.p-toast-message .p-toast-message-content .p-toast-close-button {
  margin: 0;
  padding: 0;
  right: 0;
}

/* Общие стили border для кнопки закрытия всех типов toast */
.p-toast-message-info .p-toast-close-button,
.p-toast-message-success .p-toast-close-button,
.p-toast-message-warn .p-toast-close-button,
.p-toast-message-error .p-toast-close-button {
  border: ${dt('toast.extend.extCloseButton.width')} solid;
}

/* Общие стили для акцентной линии всех типов toast */
.p-toast-message-info .p-toast-accent-line,
.p-toast-message-success .p-toast-accent-line,
.p-toast-message-warn .p-toast-accent-line,
.p-toast-message-error .p-toast-accent-line {
  width: ${dt('toast.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('toast.root.borderRadius')} 0 0 ${dt(
  'toast.root.borderRadius'
)};
}

.p-toast-close-button > i {
  font-size: 1.25rem;
}

/* Размеры тоста через классы */
.p-toast.p-toast-sm,
.p-toast.p-toast-sm .p-toast-message {
  width: ${dt('messages.sm.width')};
}

.p-toast.p-toast-lg,
.p-toast.p-toast-lg .p-toast-message {
  width: ${dt('messages.lg.width')};
}

.p-toast.p-toast-xlg,
.p-toast.p-toast-xlg .p-toast-message {
  width: ${dt('messages.xlg.width')};
}

/* Стили для toast типа Info */
.p-toast-message-info .p-toast-message-icon {
  color: ${dt('toast.extend.extInfo.color')};
}

.p-toast-message-info .p-toast-close-button {
  color: ${dt('toast.extend.extInfo.closeButton.color')};
  border-color: ${dt('toast.extend.extInfo.closeButton.borderColor')};
}

.p-toast-message.p-toast-message-info .p-toast-close-button.p-button-text:not(:disabled):hover {
  background: ${dt('toast.colorScheme.light.info.closeButton.hoverBackground')};
  border-color: ${dt('toast.extend.extInfo.closeButton.borderColor')};
  color: ${dt('toast.extend.extInfo.closeButton.color')};
}

.p-toast-message-info .p-toast-accent-line {
  background: ${dt('toast.extend.extInfo.color')};
}

.p-toast-message-info .p-toast-summary {
  color: ${dt('toast.colorScheme.light.info.color')};
}

.p-toast-message-info .p-toast-detail {
  color: ${dt('toast.colorScheme.light.info.detailColor')};
}

/* Стили для toast типа Success */
.p-toast-message-success .p-toast-message-icon {
  color: ${dt('toast.extend.extSuccess.color')};
}

.p-toast-message-success .p-toast-close-button {
  color: ${dt('toast.extend.extSuccess.closeButton.color')};
  border-color: ${dt('toast.extend.extSuccess.closeButton.borderColor')};
}

.p-toast-message.p-toast-message-success .p-toast-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'toast.colorScheme.light.success.closeButton.hoverBackground'
  )};
  border-color: ${dt('toast.extend.extSuccess.closeButton.borderColor')};
  color: ${dt('toast.extend.extSuccess.closeButton.color')};
}

.p-toast-message-success .p-toast-accent-line {
  background: ${dt('toast.extend.extSuccess.color')};
}

.p-toast-message-success .p-toast-summary {
  color: ${dt('toast.colorScheme.light.success.color')};
}

.p-toast-message-success .p-toast-detail {
  color: ${dt('toast.colorScheme.light.success.detailColor')};
}

/* Стили для toast типа Warn */
.p-toast-message-warn .p-toast-message-icon {
  color: ${dt('toast.extend.extWarn.color')};
}

.p-toast-message-warn .p-toast-close-button {
  color: ${dt('toast.extend.extWarn.closeButton.color')};
  border-color: ${dt('toast.extend.extWarn.closeButton.borderColor')};
}

.p-toast-message.p-toast-message-warn .p-toast-close-button.p-button-text:not(:disabled):hover {
  background: ${dt('toast.colorScheme.light.warn.closeButton.hoverBackground')};
  border-color: ${dt('toast.extend.extWarn.closeButton.borderColor')};
  color: ${dt('toast.extend.extWarn.closeButton.color')};
}

.p-toast-message-warn .p-toast-accent-line {
  background: ${dt('toast.extend.extWarn.color')};
}

.p-toast-message-warn .p-toast-summary {
  color: ${dt('toast.colorScheme.light.warn.color')};
}

.p-toast-message-warn .p-toast-detail {
  color: ${dt('toast.colorScheme.light.warn.detailColor')};
}

/* Стили для toast типа Error */
.p-toast-message-error .p-toast-message-icon {
  color: ${dt('toast.extend.extError.color')};
}

.p-toast-message-error .p-toast-close-button {
  color: ${dt('toast.extend.extError.closeButton.color')};
  border-color: ${dt('toast.extend.extError.closeButton.borderColor')};
}

.p-toast-message.p-toast-message-error .p-toast-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'toast.colorScheme.light.error.closeButton.hoverBackground'
  )};
  border-color: ${dt('toast.extend.extError.closeButton.borderColor')};
  color: ${dt('toast.extend.extError.closeButton.color')};
}

.p-toast-message-error .p-toast-accent-line {
  background: ${dt('toast.extend.extError.color')};
}

.p-toast-message-error .p-toast-summary {
  color: ${dt('toast.colorScheme.light.error.color')};
}

.p-toast-message-error .p-toast-detail {
  color: ${dt('toast.colorScheme.light.error.detailColor')};
}
`;

export default css;
