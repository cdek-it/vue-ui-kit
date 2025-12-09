const css = ({ dt }: { dt: (token: string) => string }) => `
.p-checkbox.p-component:not(.p-disabled):not(.p-checkbox-checked):not(.p-invalid):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
  border-color: ${dt('checkbox.root.borderColor')};
}

.p-checkbox.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
  border-color: ${dt('checkbox.root.checkedBorderColor')};
}

.p-invalid .p-checkbox-box, .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible).p-invalid .p-checkbox-box  {
  box-shadow: 0 0 0  ${dt('focusRing.width')}
  ${dt('theme.focusRing.extend.invalid')}
}

.p-invalid .p-checkbox-box, .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible).p-invalid .p-checkbox-box  {
  border-color: ${dt('checkbox.invalidBorderColor')};
}

.p-checkbox[data-p-indeterminate] .p-checkbox-box {
  border-color: ${dt('checkbox.root.checkedHoverBorderColor')};
  background: ${dt('checkbox.root.checkedBackground')};
}

.p-checkbox[data-p-indeterminate] .p-checkbox-icon {
  color: ${dt('checkbox.icon.checkedColor')};
}

.p-checkbox[data-p-indeterminate].p-component:not(.p-disabled):not(.p-checkbox-checked):not(.p-invalid):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
  border-color: ${dt('checkbox.root.checkedBackground')};
}

.p-checkbox[data-p-indeterminate]:not(.p-disabled):not(.p-invalid):has(.p-checkbox-input:hover) .p-checkbox-box {
  background: ${dt('checkbox.root.checkedHoverBackground')};
}
`;

export default css;
