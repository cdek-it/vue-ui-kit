const css = ({ dt }: { dt: (token: string) => string }) => `
/* InputText базовые стили */
.p-inputtext {
line-height: ${dt('inputtext.root.lineHeight')};
}

/* Readonly состояние */
.p-inputtext:read-only {
  background: ${dt('inputtext.extend.readonlyBackground')};
}

/* Размеры InputText */
/* SM (small) */
.p-inputtext.p-inputtext-sm {
  font-size: ${dt('sizingInputtext.sm.fontSize')};
  padding: ${dt('sizingInputtext.sm.paddingY')} ${dt('sizingInputtext.sm.paddingX')};
}

/* LG (large) */
.p-inputtext.p-inputtext-lg {
  font-size: ${dt('sizingInputtext.lg.fontSize')};
  padding: ${dt('sizingInputtext.lg.paddingY')} ${dt('sizingInputtext.lg.paddingX')};
}

/* XLG (extra large) */
.p-inputtext.p-inputtext-xlg {
  font-size: ${dt('sizingInputtext.xlg.fontSize')};
  padding: ${dt('sizingInputtext.xlg.paddingY')} ${dt('sizingInputtext.xlg.paddingX')};
}

/* IconField с InputText */
.p-iconfield {
  position: relative;
  width: fit-content;
  display: flex;
}

.p-iconfield .p-inputtext {
  padding-right: calc(${dt('inputtext.root.paddingX')} + ${dt('inputtext.extend.iconSize')} + 0.25rem);
}

.p-iconfield .p-inputicon {
  position: absolute;
  right: ${dt('inputtext.root.paddingX')};
  color: ${dt('formField.iconColor')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-iconfield .p-inputicon i {
  font-size: ${dt('inputtext.extend.iconSize')};
}

/* FloatLabel variant="in" - padding для input */
.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea {
  padding-block-start: ${dt('floatlabel.inside.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.inside.input.paddingBottom')};
}

`;

export default css;
