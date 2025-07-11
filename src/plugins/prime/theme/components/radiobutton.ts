export default {
  root: {
    width: '23px',
    height: '23px',
    disabledBackground: '{black.10}',
    checkedDisabledBorderColor: '{surface.200}',
  },
  icon: {
    size: '11px',
    disabledColor: '{surface.ground}',
  },
  css: ({ dt }: { dt: (key: string) => string }) => `
    .p-radiobutton.p-disabled.p-radiobutton-checked .p-radiobutton-box {
      background: ${dt('surface.600')};
      border-color: ${dt('surface.600')};
    }
  `,
};
