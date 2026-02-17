const css = ({ dt }: { dt: (token: string) => string }) => `

/* Стили границы */
.p-inputotp .p-inputtext {
  border-width: ${dt('inputotp.extend.borderWidth')};
}
`;

export default css;
