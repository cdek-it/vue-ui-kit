export default {
  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-selectbutton .p-togglebutton {
      padding: 0.1786rem;
    }

    .p-selectbutton .p-togglebutton::before {
      content: unset;
    }

    .p-selectbutton .p-togglebutton:disabled {
      background: ${dt('form.field.disabled.background')};
      opacity: 1;
      border: none;
    }

    .p-selectbutton .p-togglebutton .p-togglebutton-content {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }

    .p-selectbutton .p-togglebutton.p-togglebutton-checked {
      color: ${dt('primary.700')};
      background: ${dt('form.field.disabled.background')};
      border-color:  ${dt('surface.transparent')};
    }

    .p-selectbutton .p-togglebutton.p-togglebutton-checked .p-togglebutton-content {
      background: ${dt('surface.ground')};
      box-shadow: none;
    }

    .p-selectbutton .p-togglebutton:disabled .p-togglebutton-content {
      border: 1px solid ${dt('surface.border')};
    }

    .p-selectbutton .p-togglebutton:first-child {
      border-inline-end-width: 0;
    }

    .p-selectbutton .p-togglebutton:not(:disabled):hover {
      color: ${dt('textColor')};
      background: ${dt('black.10')};
    }

    .p-selectbutton .p-togglebutton.p-togglebutton-checked:disabled .p-togglebutton-content {
      background: ${dt('surface.transparent')};
      box-shadow: none;
    }

    .p-selectbutton .p-togglebutton.p-togglebutton-sm .p-togglebutton-content {
      padding: 0.344rem 0.75rem;
    }
    
    .p-selectbutton .p-togglebutton.p-togglebutton-lg .p-togglebutton-content {
      padding: 0.813rem 1.5rem;
    }

    .p-selectbutton.fluid {
      display: flex;
    }
    
    .p-selectbutton.fluid .p-togglebutton {
      width: 100%;
    }
    
    .p-selectbutton.fluid .p-togglebutton .p-togglebutton-content {
      width: 100%;
    }
  `,
};
