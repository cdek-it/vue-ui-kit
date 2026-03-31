const css = ({ dt }: { dt: (token: string) => string }) => `

.p-listbox-option {
  display: flex;
  align-items: center;
  gap: ${dt('listbox.extend.extOption.gap')};
}

.p-listbox-option:has(.p-listbox-option-check-icon) {
  gap: unset;
}

.p-listbox-option-label-group {
  display: flex;
  flex-direction: column;
  gap: ${dt('listbox.extend.extOption.label.gap')};
}

.p-listbox-option-caption {
  color: ${dt('listbox.extend.extOption.caption.color')};
}

.p-listbox-check-icon {
  margin-inline-start: ${dt('listbox.checkmark.gutterStart')};
  margin-inline-end: ${dt('listbox.checkmark.gutterEnd')};
}

.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected .p-listbox-option-check-icon {
  color: ${dt('listbox.option.selectedColor')};
}

`;

export default css;
