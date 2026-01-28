const css = ({ dt }: { dt: (token: string) => string }) => `
/* Размеры стрелки popover – тень */
.p-popover.p-component::before {
  border-width: 0.6rem;
  margin-left: -0.6rem;
}

/* Размеры стрелки popover – граница */
.p-popover.p-component::after {
  border-width: ${dt('popover.extend.arrow.width')};px;
  margin-left: -0.5rem;
}
`;

export default css;
