const css = ({ dt }: { dt: (token: string) => string }) => `

/* Addon в disabled состоянии (приоритизация - должен быть после базового) */
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
`;

export default css;
