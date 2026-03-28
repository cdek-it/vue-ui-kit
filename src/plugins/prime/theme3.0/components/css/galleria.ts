const css = ({ dt }: { dt: (token: string) => string }) => `
.p-galleria .p-galleria-caption h4 {
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: ${dt('fonts.lineHeight.55')};
  font-weight: ${dt('fonts.fontWeight.bold')};
  margin: 0;
}

.p-galleria .p-galleria-caption p {
  font-size: ${dt('fonts.fontSize.xs')};
  line-height: ${dt('fonts.lineHeight.40')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  margin: 0;
}
`;

export default css;
