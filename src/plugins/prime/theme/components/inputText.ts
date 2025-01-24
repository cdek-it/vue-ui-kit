export default {
  paddingY: '0.679rem',

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-inputtext {
      line-height: normal;
    }
  
    .p-inputtext:disabled {
      opacity: ${dt('disabledOpacity')};
    }
  `,
};
