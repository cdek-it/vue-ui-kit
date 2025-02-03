export default {
  borderRadius: '100px',

  colorScheme: {
    background: '{black.10}',
    color: '{black.60}',
    checked: {
      background: '{primary.700}',
      color: '{surface.ground}',
      borderColor: '{primary.700}',
    },
    hover: {
      background: '{primary.alpha}',
      color: '{primary.700}',
    },
    disabled: {
      background: '{black.10}',
      color: '{black.60}',
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

  css: ({ dt }: { dt: (token: string) => string }) => `
   .p-togglebutton:disabled {
      opacity: 0.6;
      mix-blend-mode: luminosity;
   }
   
   .p-togglebutton.p-togglebutton-checked:not(:disabled):hover {
    background: ${dt('primary.800')};}
  `,
};
