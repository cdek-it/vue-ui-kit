const css = ({ dt }: { dt: (token: string) => string }) => `
/* Стили границы */
.p-inputotp.p-component .p-inputtext {
  border-width: ${dt('inputotp.extend.borderWidth')};
  padding-block: 7.75px;
  padding-inline: 0;
}
`;

export default css;
