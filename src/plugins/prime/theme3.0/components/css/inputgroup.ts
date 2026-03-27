const css = ({ dt }: { dt: (token: string) => string }) => `
/* Addon в disabled состоянии */
.p-inputgroup:has(input[disabled]) .p-inputgroupaddon,
.p-inputgroup:has(.p-inputtext[disabled]) .p-inputgroupaddon,
.p-inputgroup:has(.p-component[disabled]) .p-inputgroupaddon {
  background: ${dt('inputtext.root.disabledBackground')};
  color: ${dt('inputtext.root.disabledColor')};
}

/* Иконка внутри addon */
.p-inputgroup.p-inputgroup .p-inputgroupaddon i {
  font-size: ${dt('inputgroup.extend.iconSize')};
}

/* Размер XLarge для InputGroup */
.p-inputgroup.p-inputgroup-xlg .p-inputgroupaddon {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
  padding: ${dt('inputtext.extend.extXlg.paddingY')} ${dt(
  'inputtext.extend.extXlg.paddingX'
)};
}

/* Корректировка иконки в XLarge */
.p-inputgroup.p-inputgroup-xlg .p-inputgroupaddon i {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
}
`;

export default css;
