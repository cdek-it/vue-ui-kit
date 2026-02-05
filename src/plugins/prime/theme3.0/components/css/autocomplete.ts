const css = ({ dt }: { dt: (token: string) => string }) => `

/* Стили для input внутри AutoComplete */
.p-autocomplete .p-autocomplete-input {
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Стили для multiple режима */
.p-autocomplete-multiple .p-autocomplete-input-multiple {
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Стили для chips внутри multiple AutoComplete */
.p-autocomplete-multiple .p-autocomplete-chip {
  gap: ${dt('autocomplete.extend.extOption.gap')};
}

/* Стили для отдельной опции */
.p-autocomplete-option {
  gap: ${dt('autocomplete.extend.extOption.gap')};
}

/* Стили для группы опций */
.p-autocomplete-option-group {
  gap: ${dt('autocomplete.extend.extOptionGroup.gap')};
}

.p-chip.p-chip:has(.p-chip-remove-icon) {
  padding-inline-end: ${dt('chip.root.paddingX')};
}

`;

export default css;
