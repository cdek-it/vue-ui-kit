const css = ({ dt }: { dt: (token: string) => string }) => `
.p-card.p-component {
  border: ${dt('card.extend.borderWidth')} solid ${dt(
  'card.extend.borderColor'
)};
  overflow: hidden;
  box-shadow: none;
}

.p-card.shadow-md {
  box-shadow: ${dt('content.shadow')};
}

.p-card-title {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('card.title.fontSize')};
  font-weight: ${dt('card.title.fontWeight')};
}

.p-card-subtitle {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
}

`;

export default css;
