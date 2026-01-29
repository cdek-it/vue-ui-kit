export default ({ dt }: { dt: (token: string) => string }) => `

/* Option - стили для опций */
.p-listbox .p-listbox-option {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Empty message - стили для пустого сообщения */
.p-listbox .p-listbox-empty-message {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
  color: ${dt('text.mutedColor')};
  text-align: center;
}

/* Иконка для выбранной опции */
.p-listbox .p-listbox-option-check-icon {
  margin-inline-start: ${dt('listbox.checkmark.gutterStart')};
  margin-inline-end: ${dt('listbox.checkmark.gutterEnd')};
  color: ${dt('listbox.option.selectedColor')};
}

/* Blank иконка для невыбранных опций */
.p-listbox .p-listbox-option-blank-icon {
  margin-inline-start: ${dt('listbox.checkmark.gutterStart')};
  margin-inline-end: ${dt('listbox.checkmark.gutterEnd')};
  opacity: 0;
}

/* Custom option template - контейнер с иконкой и текстом */
.p-listbox .p-listbox-option .listbox-option-custom {
  display: flex;
  align-items: center;
  gap: ${dt('listbox.extend.extOption.gap')};
}

/* Custom option label - контейнер с заголовком и описанием */
.p-listbox .p-listbox-option .listbox-option-label {
  display: flex;
  flex-direction: column;
  gap: ${dt('listbox.extend.extOption.label.gap')};
}

/* Custom option caption - описание */
.p-listbox .p-listbox-option .listbox-option-caption {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: normal;
  color: ${dt('listbox.extend.extOption.caption.color')};
}
`;
