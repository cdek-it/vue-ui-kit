export default {
  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-selectbutton .p-togglebutton {
      padding: 0.75rem 1rem;
    }
    
    .p-selectbutton .p-togglebutton.p-togglebutton-sm {
      padding: 0.6rem 0.75rem;
    }
    
    .p-selectbutton .p-togglebutton.p-togglebutton-lg {
      padding: 1rem 1.5rem;
    }
    
    .p-selectbutton .p-togglebutton::before {
      border-radius: 3.5px;
    }
    
    .p-selectbutton .p-togglebutton.p-togglebutton-checked::before {
      background: ${dt('surface.ground')};
      box-shadow: none;
    }
    
    .p-selectbutton .p-togglebutton.p-togglebutton-checked {
      color: ${dt('primary.700')};
      background: ${dt('form.field.disabled.background')};
      border-color:  ${dt('surface.transparent')};
    }
    
    .p-selectbutton .p-togglebutton:not(:disabled):hover {
      background: ${dt('black.10')};
    }

    .p-selectbutton .p-togglebutton:not(:disabled):hover::before {
      background: ${dt('surface.ground')};
      box-shadow: 0px 0.25rem 0.25rem 0px ${dt('surface.overlay')};
      color: red;
    }

    .p-selectbutton .p-togglebutton:first-child {
      border-inline-end-width: 0px;
    }

    .p-selectbutton .p-togglebutton:disabled::before {
      border: 1px solid ${dt('surface.border')};
    }

    .p-selectbutton .p-togglebutton.p-togglebutton-checked:disabled::before {
      background: ${dt('surface.transparent')};
      box-shadow: none;
    }
    
    .p-selectbutton .p-togglebutton:not(:disabled):hover {
      color: ${dt('textColor')};
    }
  `,
};
