const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для InputOtp */
.p-inputotp {
  gap: ${dt('inputotp.root.gap')};
}

/* Стили для каждого input внутри InputOtp */
.p-inputotp .p-inputtext {
  width: ${dt('inputotp.input.width')};
  border-width: ${dt('inputotp.extend.borderWidth')};
  text-align: center;
  line-height: ${dt('fonts.lineHeight.25')};
}

/* Центрирование текста в input */
.p-inputotp .p-inputtext::placeholder {
  text-align: center;
}
`;

export default css;
