const css = () => `
  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
  }

  [class*="menu"].p-component {
    border: none;
  }

`;

export default css;
