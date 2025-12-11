const css = ({ dt }: { dt: (token: string) => string }) => `
.p-avatar.p-component {
  font-weight: ${dt('typography.fontWeight.bold')};
}
`;

export default css;
