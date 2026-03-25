const css = ({ dt }: { dt: (token: string) => string }) => `
.p-card.p-component {
  border: ${dt('card.extend.borderWidth')} solid ${dt(
  'card.extend.borderColor'
)};
  overflow: hidden;
  box-shadow: none;
}

.p-card.shadow-md {
  box-shadow: ${dt('overlay.popover.shadow')};
}

.p-card-subtitle {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('fonts.fontSize.200')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}
`;

export default css;
