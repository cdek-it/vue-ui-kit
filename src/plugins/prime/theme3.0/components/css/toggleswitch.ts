const css = ({ dt }: { dt: (token: string) => string }) => `

.p-toggleswitch-slider {
  border-width: ${dt('toggleswitch.root.borderWidth')};
}

/* Focus ring для валидных состояний */
.p-toggleswitch:not(.p-disabled):not(.p-invalid):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
  box-shadow: 0 0 0 ${dt('toggleswitch.root.focusRing.width')} ${dt(
  'focusRing.extend.success'
)};
}

/* Focus ring для состояния ошибки */
.p-toggleswitch.p-invalid:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
  box-shadow: 0 0 0 ${dt('focusRing.width')} ${dt('focusRing.extend.invalid')};
}

`;

export default css;
