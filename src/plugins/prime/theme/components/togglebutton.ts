export default {
  root: {
    borderRadius: '100px',
    disabledBackground: '{black.10}',
    disabledColor: '{black.60}',
  },

  colorScheme: {
    light: {
      root: {
        background: '{black.10}',
        color: '{black.60}',
        checkedBackground: '{primary.700}',
        checkedColor: '{surface.ground}',
        checkedBorderColor: '{primary.700}',
        hoverBackground: '{primary.alpha}',
        hoverColor: '{primary.700}',
      },
      content: {
        checkedBackground: '{surface.transparent}',
      },
      icon: {
        color: '{black.60}',
        hoverColor: '{primary.700}',
        checkedColor: '{surface.ground}',
      },
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
   .p-togglebutton:disabled {
      opacity: 0.6;
      mix-blend-mode: luminosity;
   }
   
   .p-togglebutton.p-togglebutton-checked:not(:disabled):hover {
      background: ${dt('primary.800')};
   }
  `,
};
