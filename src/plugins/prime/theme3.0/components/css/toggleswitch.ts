export default ({ dt }: { dt: (token: string) => string }) => `
  .p-toggleswitch:not(.p-invalid):has(.p-toggleswitch-input:focus-visible) {
    box-shadow: 0 0 0 ${dt('focusRing.width')} ${dt(
  'focusRing.extend.success'
)};
    border-radius: ${dt('form.borderRadius.max')};
  }

  .p-toggleswitch.p-invalid:has(.p-toggleswitch-input:focus-visible) {
    box-shadow: 0 0 0 ${dt('focusRing.width')} ${dt(
  'focusRing.extend.invalid'
)};
    border-radius: ${dt('form.borderRadius.max')};
  }
`;
