const css = ({ dt }: { dt: (token: string) => string }) => `
.p-progressbar-label {
  font-family: ${dt('fonts.fontFamily.base')};
}
`;

export default css;
