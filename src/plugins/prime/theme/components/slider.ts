export default {
  colorScheme: {
    range: {
      background: '{primary.700}',
    },
    handle: {
      background: '{primary.700}',
      hoverBackground: '{primary.800}',
      content: {
        background: '{primary.700}',
        hoverBackground: '{primary.800}',
      },
      focusRing: {
        width: 0,
      },
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-disabled).p-focus:not(:hover) {
       box-shadow: 0px 0px 0px 0.25rem ${dt('primary.200')};
       background: ${dt('surface.ground')};
    }
  `,
};
