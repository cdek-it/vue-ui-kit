export default {
  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-inputotp {
      .p-inputtext {
        border-radius: 0;
        border-style: none;
        border-bottom-style: solid;
        caret-color: ${dt('primary.700')};
        
        &:enabled:focus {
          outline-style: none;
        }
      }
    }
  `,
};
