const css = ({ dt }: { dt: (token: string) => string }) => `
.p-progressbar-label {
  font-family: ${dt('fonts.fontFamily.body')};
}
`;

export default css;
