const css = ({ dt }: { dt: (token: string) => string }) => `

/* Checked hover state */
.p-togglebutton.p-togglebutton-checked:not(:disabled):hover {
  background: ${dt('togglebutton.extend.checkedHoverBackground')};
  color: ${dt('togglebutton.extend.checkedHoverColor')};
  border-color: ${dt('togglebutton.extend.checkedHoverBorderColor')};
}

/* Icon only width for different sizes */
.p-togglebutton.p-togglebutton-icon-only {
  width: ${dt('togglebutton.extend.iconOnlyWidth')};
}

.p-togglebutton.p-togglebutton-icon-only.p-togglebutton-sm {
  width: ${dt('togglebutton.extend.extSm.iconOnlyWidth')};
}

.p-togglebutton.p-togglebutton-icon-only.p-togglebutton-lg {
  width: ${dt('togglebutton.extend.extLg.iconOnlyWidth')};
}

.p-togglebutton.p-togglebutton-icon-only.p-togglebutton-xlarge {
  width: ${dt('togglebutton.extend.extXlg.iconOnlyWidth')};
  padding: ${dt('togglebutton.extend.extXlg.padding')};
}

/* XLarge size (not covered by default tokens) */
.p-togglebutton.p-togglebutton-xlarge {
  padding: ${dt('togglebutton.extend.extXlg.padding')};
  font-size: ${dt('formField.lg.fontSize')};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
border-color: ${dt('togglebutton.hoverBorderColor')};
}
`;

export default css;
