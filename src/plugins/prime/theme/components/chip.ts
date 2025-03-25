export default {
  paddingX: '0.5rem',
  paddingY: '0',
  borderRadius: '3.5px',
  colorScheme: {
    light: {
      root: {
        background: '{black.10}',
        color: '{general.textColor}',
      },
      icon: {
        color: '{general.text.color}',
      },
      removeIcon: {
        color: '{black.80}',
      },
    },
    dark: {
      root: {
        background: '{white.20}',
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
