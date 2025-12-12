const css = ({ dt }: { dt: (token: string) => string }) => `
.p-button.p-component .p-button-label {
  font-family: ${dt('typography.fontFamily.heading')};
}

.p-component.p-button:focus-visible {
  outline: none;
  box-shadow: ${dt('focusRing.shadow')};
}

.p-button .p-button-icon {
  font-size: ${dt('typography.fontSize.text-xl')};
}

.p-button.p-button-lg .p-button-icon {
  font-size: ${dt('typography.fontSize.text-2xl')};
}

.p-component.p-button-secondary:disabled {
  color: ${dt('button.extend.disabledColor')};
  background:  ${dt('button.extend.disabledBackground')};
  mix-blend-mode: unset;
  opacity: 1;
}

.p-button-link.p-button {
  padding: ${dt('button.extend.extLink.paddingY')} ${dt(
  'button.extend.extLink.paddingX'
)};
}

.p-button.p-button-link:not(:disabled):hover {
  color: ${dt('button.extend.extLink.colorHover')};
}

.p-button.p-button-link:not(:disabled):hover .p-button-label {
  text-decoration: none;
}

.p-button-lg.p-button-icon-only.p-button-link {
  width: ${dt('button.extend.extLink.lg.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.lg.iconOnlyWidth')};
}

.p-button-link.p-button-icon-only.p-button{
  width: ${dt('button.extend.extLink.base.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.base.iconOnlyWidth')};
}

.p-button-link.p-button-icon-only.p-button-sm{
  width: ${dt('button.extend.extLink.sm.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.sm.iconOnlyWidth')};
}

.p-button-lg.p-button-icon-only {
  height: ${dt('button.root.lg.iconOnlyWidth')};
}

.p-button-icon-only {
  height: ${dt('button.root.iconOnlyWidth')};
}

.p-button-sm.p-button-icon-only {
  height: ${dt('button.root.iconOnlyWidth')};
}
`;

export default css;
