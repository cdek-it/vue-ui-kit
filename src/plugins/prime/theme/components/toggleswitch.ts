export default {
  colorScheme: {
    handle: {
      background: '{form.field.background}',
      hoverBackground: '{form.field.background}',
      checkedBackground: '{form.field.background}',
      checkedHoverBackground: '{form.field.background}',
      disabledBackground: '{form.field.background}',
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-invalid .p-toggleswitch-slider {
      border-color: ${dt('form.field.focusRing.color')};
    }
    
    .p-toggleswitch.p-toggleswitch-checked.p-disabled .p-toggleswitch-slider {
      background: ${dt('surface.600')};
    }
  `,
};
