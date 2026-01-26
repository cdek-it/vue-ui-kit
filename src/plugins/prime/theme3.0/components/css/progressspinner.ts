const css = ({ dt }: { dt: (token: string) => string }) => `

.p-progressspinner-circle {
  stroke-width: ${dt('progressspinner.root.borderWidth')};
}
`;

export default css;
