const css = ({ dt }: { dt: (token: string) => string }) => `

.p-galleria .p-galleria-caption {
  background: ${dt('galleria.caption.background')};
  padding: ${dt('spacing.2x')};
}

.p-galleria .p-galleria-caption h4 {
  font-size: ${dt('fonts.fontSize.200')};
  line-height: ${dt('fonts.lineHeight.550')};
  font-weight: ${dt('fonts.fontWeight.bold')};
  color: ${dt('text.color')};
  margin: 0;
}

.p-galleria .p-galleria-caption p {
  font-size: ${dt('fonts.fontSize.100')};
  line-height: ${dt('fonts.lineHeight.400')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  color: ${dt('text.color')};
  margin: 0;
}

`;

export default css;
