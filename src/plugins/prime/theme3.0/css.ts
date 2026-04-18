const css = ({ dt: _dt }: { dt: (token: string) => string }) => `
  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
  }

  [class*="menu"].p-component {
    border: none;
  }

  [class*="menu"][class*="item"]:not(:has([class*="icon"])) [class*="item-content"] > [class*="item"] {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`;

export default css;
