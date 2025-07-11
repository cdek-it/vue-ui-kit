export default {
  root: {
    paddingX: '0.5rem',
    paddingY: '0',
    borderRadius: '3.5px',
  },
  colorScheme: {
    light: {
      root: {
        background: '{black.10}',
        color: '{general.text.color}',
      },
      icon: {
        color: '{general.text.color}',
      },
      removeIcon: {
        color: '{general.text.color}',
      },
    },
    dark: {
      root: {
        background: '{white.20}',
        color: '{general.text.color}',
      },
      icon: {
        color: '{general.text.color}',
      },
      removeIcon: {
        color: '{general.text.color}',
      },
    },
  },
  css: () => `
    .p-chip {
      height: 1.75rem;
    }
  
    .p-chip:has(.p-chip-remove-icon) {
      padding-inline-end: var(--p-chip-padding-x);
    }
  `,
};
