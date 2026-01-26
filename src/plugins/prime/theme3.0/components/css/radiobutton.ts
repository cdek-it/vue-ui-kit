const css = ({ dt }: { dt: (token: string) => string }) => `
/* Hover состояние для checked RadioButton - border совпадает с фоном */
.p-radiobutton.p-radiobutton-checked:not(.p-disabled):not(.p-invalid):has(.p-radiobutton-input:hover) .p-radiobutton-box {
  background: ${dt('radiobutton.root.checkedHoverBackground')};
  border-color: ${dt('radiobutton.root.checkedHoverBackground')};
}

/* Hover состояние для checked invalid RadioButton - border совпадает с фоном */
.p-radiobutton.p-radiobutton-checked.p-invalid:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
  background: ${dt('radiobutton.root.checkedHoverBackground')};
  border-color: ${dt('radiobutton.root.checkedHoverBackground')};
}
`;

export default css;
