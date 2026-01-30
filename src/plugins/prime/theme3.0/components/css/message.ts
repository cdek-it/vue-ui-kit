const css = ({ dt }: { dt: (token: string) => string }) => `
/* border-radius для контента message */
.p-message .p-message-content {
  border-radius: ${dt('message.root.borderRadius')};
}

/* Основной контейнер message */
.p-message {
  width: ${dt('message.extend.width')};
  overflow: hidden;
  position: relative;
}

/* Контент message с приоритизацией align-items */
.p-message .p-message-content {
  display: flex;
  align-items: flex-start;
}

/* Текстовый блок message */
.p-message-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${dt('message.extend.extText.gap')};
}

/* Заголовок message */
.p-message-summary {
  font-weight: ${dt('message.text.fontWeight')};
  line-height: ${dt('fonts.lineHeight.40')};
  font-size: ${dt('message.text.fontSize')};
}

/* Детальное описание message */
.p-message .p-message-detail {
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.40')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

/* Кнопка закрытия message */
.p-message .p-message-content .p-message-close-button {
  width: ${dt('message.closeButton.width')};
  height: ${dt('message.closeButton.height')};
  margin: 0;
  padding: 0;
  right: 0;
}

/* Общие стили border для кнопки закрытия всех типов message */
.p-message-info .p-message-close-button,
.p-message-success .p-message-close-button,
.p-message-warn .p-message-close-button,
.p-message-error .p-message-close-button {
  border: ${dt('message.extend.extCloseButton.width')} solid;
}

/* Общие стили для акцентной линии всех типов message */
.p-message-info .p-message-accent-line,
.p-message-success .p-message-accent-line,
.p-message-warn .p-message-accent-line,
.p-message-error .p-message-accent-line {
  width: ${dt('message.extend.extAccentLine.width')};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: ${dt('message.root.borderRadius')} 0 0 ${dt(
  'message.root.borderRadius'
)};
}

/* Стили для message типа Info */
.p-message-info .p-message-icon {
  color: ${dt('message.extend.extInfo.color')};
}

.p-message-info .p-message-close-button {
  color: ${dt('message.extend.extInfo.closeButton.color')};
  border-color: ${dt('message.extend.extInfo.closeButton.borderColor')};
}

.p-message.p-message-info .p-message-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'message.colorScheme.light.info.closeButton.hoverBackground'
  )};
  border-color: ${dt('message.extend.extInfo.closeButton.borderColor')};
  color: ${dt('message.extend.extInfo.closeButton.color')};
}

.p-message-info .p-message-accent-line {
  background: ${dt('message.extend.extInfo.color')};
}

/* Стили для message типа Success */
.p-message-success .p-message-icon {
  color: ${dt('message.extend.extSuccess.color')};
}

.p-message-success .p-message-close-button {
  color: ${dt('message.extend.extSuccess.closeButton.color')};
  border-color: ${dt('message.extend.extSuccess.closeButton.borderColor')};
}

.p-message.p-message-success .p-message-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'message.colorScheme.light.success.closeButton.hoverBackground'
  )};
  border-color: ${dt('message.extend.extSuccess.closeButton.borderColor')};
  color: ${dt('message.extend.extSuccess.closeButton.color')};
}

.p-message-success .p-message-accent-line {
  background: ${dt('message.extend.extSuccess.color')};
}

/* Стили для message типа Warn */
.p-message-warn .p-message-icon {
  color: ${dt('message.extend.extWarn.color')};
}

.p-message-warn .p-message-close-button {
  color: ${dt('message.extend.extWarn.closeButton.color')};
  border-color: ${dt('message.extend.extWarn.closeButton.borderColor')};
}

.p-message.p-message-warn .p-message-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'message.colorScheme.light.warn.closeButton.hoverBackground'
  )};
  border-color: ${dt('message.extend.extWarn.closeButton.borderColor')};
  color: ${dt('message.extend.extWarn.closeButton.color')};
}

.p-message-warn .p-message-accent-line {
  background: ${dt('message.extend.extWarn.color')};
}

/* Стили для message типа Error */
.p-message-error .p-message-icon {
  color: ${dt('message.extend.extError.color')};
}

.p-message-error .p-message-close-button {
  color: ${dt('message.extend.extError.closeButton.color')};
  border-color: ${dt('message.extend.extError.closeButton.borderColor')};
}

.p-message.p-message-error .p-message-close-button.p-button-text:not(:disabled):hover {
  background: ${dt(
    'message.colorScheme.light.error.closeButton.hoverBackground'
  )};
  border-color: ${dt('message.extend.extError.closeButton.borderColor')};
  color: ${dt('message.extend.extError.closeButton.color')};
}

.p-message-error .p-message-accent-line {
  background: ${dt('message.extend.extError.color')};
}
`;

export default css;
