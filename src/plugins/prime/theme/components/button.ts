export default {
  colorScheme: {
    primary: {
      focusRingColor: '{primary.focus.ring.color}',
    },
    outlinedPrimary: {
      hoverBackground: '{surface.transparent}',
      activeBackground: '{surface.transparent}',
    },
    textPrimary: {
      hoverBackground: '{primary.alpha}',
      activeBackground: '{surface.transparent}',
    },
  },
  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-button:not(:disabled):not(:active):hover {
      box-shadow: 0px ${dt('focus.ring.width')} ${dt(
    'focus.ring.width'
  )} 0px ${dt('black.20')};
    }

    .p-button:disabled {
      background-color: ${dt('black.10')};
      border-color: ${dt('surface.border')};
      color: ${dt('black.60')};
    }

    .p-button-icon-only {
      width: 2.5rem;
      height: 2.5rem;
    }

    .p-button-icon-only .p-button-icon {
      font-size: 1.25rem;
    }

    .p-button-icon-only.p-button-lg {
      width: 3.5rem;
      height: 3.5rem;
    }

    .p-button-icon-only.p-button-lg .p-button-icon {
      font-size: 1.5rem;
    }

    .p-button-icon-only.p-button-sm {
      width: 2rem;
      height: 2rem;
    }

    .p-button-icon-only.p-button-sm .p-button-icon {
      font-size: 1rem;
    }

    .p-button-outlined:not(:disabled):not(:active):hover {
      border-color: ${dt('primary.color')};
    }
  `,
};
