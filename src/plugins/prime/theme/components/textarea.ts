export default {
  root: { paddingY: '{form.field.padding.x}' },
  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-textarea {
      line-height: normal;
    }
  
    .p-textarea:disabled {
      opacity: ${dt('disabledOpacity')};
    }`,
};
