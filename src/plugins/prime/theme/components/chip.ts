export default {
  paddingX: '0.5rem',
  paddingY: '0',
  borderRadius: '3.5px',
  colorScheme: {
    light: {
      root: {
        background: '{black.10}',
        color: '{black.80}',
      },
      icon: {
        color: '{black.80}',
      },
      removeIcon: {
        color: '{black.80}',
      },
    },
  },
  css: ({ dt }: { dt: (key: string) => string }) => `
    .p-chip {
      height: 1.75rem;
    }
  
    .p-chip:has(.p-chip-remove-icon) {
      padding-inline-end: var(--p-chip-padding-x);
    }
  `,
};
