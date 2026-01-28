const css = ({ dt }: { dt: (token: string) => string }) => `
/* Размеры стрелки popover – тень */
.p-popover.p-component::before {
  border-width: 8px;
  margin-left: -8px;
}

/* Размеры стрелки popover – граница */
.p-popover.p-component::after {
  border-width: ${dt('popover.extend.arrow.width')};px;
  margin-left: -7px;
}
`;

export default css;
