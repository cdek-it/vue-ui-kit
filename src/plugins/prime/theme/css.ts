const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
  }
`;

export default css;
