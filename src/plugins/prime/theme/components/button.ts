export default {
  padding: {
    x: '1rem',
    y: '0.607rem',
  },
  smPadding: {
    x: '0.75rem',
    y: '0.429rem',
  },
  lgPadding: {
    x: '1.5rem',
    y: '0.929rem',
  },
  colorScheme: {
    primary: {
      focusRingColor: '{primary.focus.ring.color}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
    },
    info: {
      background: '{info.400}',
      hoverBackground: '{info.500}',
      activeBackground: '{info.400}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
      focusRingColor: '{primary.focus.ring.color}',
    },
    success: {
      background: '{success.400}',
      hoverBackground: '{success.500}',
      activeBackground: '{success.400}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
      focusRingColor: '{primary.focus.ring.color}',
    },
    warn: {
      background: '{warning.400}',
      hoverBackground: '{warning.500}',
      activeBackground: '{warning.400}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
      focusRingColor: '{primary.focus.ring.color}',
    },
    danger: {
      background: '{danger.400}',
      hoverBackground: '{danger.500}',
      activeBackground: '{danger.400}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
      focusRingColor: '{primary.focus.ring.color}',
    },
    help: {
      background: '{help.400}',
      hoverBackground: '{help.500}',
      activeBackground: '{help.400}',
      borderColor: '{surface.transparent}',
      hoverBorderColor: '{surface.transparent}',
      activeBorderColor: '{surface.transparent}',
      focusRingColor: '{primary.focus.ring.color}',
    },
    outlined: {
      primary: {
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
      info: {
        color: '{info.400}',
        borderColor: '{info.200}',
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
      success: {
        color: '{success.400}',
        borderColor: '{success.200}',
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
      warn: {
        color: '{warning.400}',
        borderColor: '{warning.200}',
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
      danger: {
        color: '{danger.400}',
        borderColor: '{danger.200}',
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
      help: {
        color: '{help.400}',
        borderColor: '{help.200}',
        hoverBackground: '{surface.transparent}',
        activeBackground: '{surface.transparent}',
      },
    },
    text: {
      primary: {
        hoverBackground: '{primary.alpha}',
        activeBackground: '{surface.transparent}',
      },
      info: {
        hoverBackground: '{info.alpha}',
        activeBackground: '{surface.transparent}',
      },
      success: {
        hoverBackground: '{success.alpha}',
        activeBackground: '{surface.transparent}',
      },
      warn: {
        hoverBackground: '{warning.alpha}',
        activeBackground: '{surface.transparent}',
      },
      danger: {
        hoverBackground: '{danger.alpha}',
        activeBackground: '{surface.transparent}',
      },
      help: {
        hoverBackground: '{help.alpha}',
        activeBackground: '{surface.transparent}',
      },
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
      padding: 0;
    }

    .p-button-icon {
      font-size: 1.25rem;
    }

    .p-button-icon-only.p-button-lg {
      height: 3.5rem;
      width: 3.5rem;
    }

    .p-button-lg {
      --p-button-gap: 0.75rem;
    }

    .p-button-lg .p-button-icon {
      font-size: 1.5rem;
    }

    .p-button-icon-only.p-button-sm {
      width: 2rem;
      height: 2rem;
    }

    .p-button-sm .p-button-icon {
      font-size: 1rem;
    }

    .p-button-outlined:not(:disabled):not(:active):hover {
      --p-button-outlined-primary-border-color: ${dt('primary.color')};
      --p-button-outlined-info-border-color: ${dt('info.400')};
      --p-button-outlined-success-border-color: ${dt('success.400')};
      --p-button-outlined-warn-border-color: ${dt('warning.400')};
      --p-button-outlined-danger-border-color: ${dt('danger.400')};
      --p-button-outlined-help-border-color: ${dt('help.400')};
  `,
};
