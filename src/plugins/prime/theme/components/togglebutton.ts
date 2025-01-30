export default {
  padding: '0.75rem 1rem',

  colorScheme: {
    checkedColor: '{primary.700}',
    color: '{black.60}',
    disabledColor: '{black.60}',
    hoverColor: '{textColor}',
    disabledBorderColor: '{surface.transparent}',
    content: {
      checkedBackground: '{surface.ground}',
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
   .p-togglebutton:not(:disabled):hover::before {
      background: ${dt('surface.ground')};
      box-shadow: 0px 0.25rem 0.25rem 0px ${dt('surface.overlay')};
   }
  
   .p-selectbutton .p-togglebutton:first-child {
      border-inline-end-width: 0px;
   }
    
   .p-togglebutton:disabled::before {
      border: 1px solid ${dt('surface.border')};
   } 
  
   .p-togglebutton.p-togglebutton-checked:disabled::before {
      background: ${dt('surface.transparent')};
      box-shadow: none;
    }
  `,
};
