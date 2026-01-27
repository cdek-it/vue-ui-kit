export default ({ dt }: { dt: (token: string) => string }) => `
  .p-accordionheader {
    font-family: ${dt('fonts.fontFamily.base')};
    font-size: ${dt('fonts.fontSize.base')};
  }

  .p-accordionheader-toggle-icon,
  .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon,
  .p-accordionheader > div > i {
    font-size: ${dt('accordion.extend.extHeader.iconSize')};
  }

  .p-accordionheader > div {
    display: flex;
    align-items: center;
    gap: ${dt('accordion.extend.extHeader.gap')};
  }
`;
