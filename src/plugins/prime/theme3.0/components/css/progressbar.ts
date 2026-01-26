const css = ({ dt }: { dt: (token: string) => string }) => `
.p-progressbar-label {
  font-family: ${dt('fonts.fontFamily.body')};
  font-size: ${dt('progressbar.label.fontSize')};
  font-weight: ${dt('progressbar.label.fontWeight')};
  color: ${dt('progressbar.label.color')};
}
`;

export default css;
