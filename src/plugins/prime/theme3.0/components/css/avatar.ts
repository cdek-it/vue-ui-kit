const css = ({ dt }: { dt: (token: string) => string }) => `
.p-avatar.p-component {
  font-weight: ${dt('fonts.fontWeight.bold')};
}
`;

export default css;
