// Button component theme based on Figma design
// https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-Kit--DS--v2.0?node-id=160-5223
export default {
  root: {
    // Base size (md) - from Figma tokens: text-base
    paddingX: '0.875rem', // 14px
    paddingY: '0.4375rem', // 7px
    gap: '0.4375rem', // 7px
    borderRadius: '0.65625rem', // 10.5px
    fontFamily: 'TT Fellows, sans-serif',
    fontSize: '0.875rem', // 14px - typography/font-size/text-base
    fontWeight: '600', // Medium - typography/font-weight/medium
    lineHeight: '1.5', // 21px / 14px = 1.5 - leading-normal
    letterSpacing: '0',
    transitionDuration: '{transition.duration}',

    // Small size - from Figma tokens: text-sm
    sm: {
      paddingX: '0.65625rem', // 10.5px
      paddingY: '0.4375rem', // 7px
      fontSize: '0.765625rem', // 12.25px - typography/font-size/text-sm
      lineHeight: '1.25', // 15.31px / 12.25px ≈ 1.25 - leading-tight
      borderRadius: '0.65625rem', // 10.5px
    },

    // Large size - from Figma tokens: text-xl
    lg: {
      paddingX: '1.3125rem', // 21px
      paddingY: '0.875rem', // 14px
      fontSize: '1.09375rem', // 17.5px - typography/font-size/text-xl
      lineHeight: '1.257', // 22px / 17.5px ≈ 1.257 - typography/line-height/leading-55
      gap: '0.65625rem', // 10.5px
      borderRadius: '0.875rem', // 14px
    },

    // XLarge size - from Figma tokens: text-xl (same typography as large)
    xl: {
      paddingX: '1.3125rem', // 21px
      paddingY: '1.09375rem', // 17.5px
      fontSize: '1.09375rem', // 17.5px - typography/font-size/text-xl
      lineHeight: '1.257', // 22px / 17.5px ≈ 1.257 - typography/line-height/leading-55
      gap: '0.65625rem', // 10.5px
      borderRadius: '0.875rem', // 14px
    },

    // Rounded variant
    roundedBorderRadius: '999px',

    // Icon sizes
    iconOnlyWidth: '2.1875rem', // 35px for base
    iconOnlyPadding: '0',
  },

  colorScheme: {
    light: {
      root: {
        // Primary variant (green)
        primary: {
          background: '#44e858',
          hoverBackground: '#1dc831',
          activeBackground: '#168322',
          color: '#2b2e33',
          hoverColor: '#2b2e33',
          activeColor: '#2b2e33',
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          activeBorderColor: 'transparent',
          focusRingColor: '#d4fedc',
        },

        // Secondary variant (dark)
        secondary: {
          background: '#2b2e33',
          hoverBackground: '#404348',
          activeBackground: '#56595f',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          activeBorderColor: 'transparent',
          focusRingColor: '#d4fedc',
        },

        // Tertiary/Contrast variant (light gray)
        contrast: {
          background: '#e2e2e4',
          hoverBackground: '#cecfd2',
          activeBackground: '#a2a5a9',
          color: '#2b2e33',
          hoverColor: '#2b2e33',
          activeColor: '#2b2e33',
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          activeBorderColor: 'transparent',
          focusRingColor: '#d4fedc',
        },
      },

      // Text variant
      text: {
        primary: {
          background: 'transparent',
          hoverBackground: '#f0f0f1',
          activeBackground: '#e2e2e4',
          color: '#2b2e33',
          hoverColor: '#2b2e33',
          activeColor: '#2b2e33',
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          activeBorderColor: 'transparent',
          focusRingColor: '#d4fedc',
        },
      },

      // Link variant
      link: {
        color: '#2b2e33',
        hoverColor: '#56595f',
        activeColor: '#85888e',
        focusRingColor: '#d4fedc',
      },
    },
  },

  // Disabled state
  disabledBackground: '#e2e2e4',
  disabledColor: '#85888e',

  css: ({ dt }: { dt: (token: string) => string }) => `
    /* Base button styles */
    .p-button {
      font-family: 'TT Fellows', sans-serif;
      border-width: 1px;
    }
    
    /* XLarge size - uses same font-size as large */
    .p-button-xl,
    .p-button-xlg {
      padding: var(--p-button-xl-padding-y) var(--p-button-xl-padding-x);
      font-size: var(--p-button-lg-font-size);
      gap: var(--p-button-xl-gap);
      border-radius: var(--p-button-xl-border-radius);
    }
    
    .p-button-xl.p-button-rounded,
    .p-button-xlg.p-button-rounded {
      border-radius: var(--p-button-rounded-border-radius);
    }
    
    /* Hover state */
    .p-button:not(:disabled):hover {
      box-shadow: none;
    }

    /* Focus state */
    .p-button:focus-visible {
      outline: 3.5px solid #d4fedc;
      outline-offset: 0;
      box-shadow: none;
    }

    /* Disabled state */
    .p-button:disabled {
      background-color: #e2e2e4 !important;
      border-color: transparent !important;
      color: #85888e !important;
      opacity: 1;
    }

    /* Icon only buttons - base size */
    .p-button-icon-only {
      width: 2.1875rem;
      height: 2.1875rem;
      padding: 0;
    }

    /* Icon sizes */
    .p-button-icon {
      font-size: 1.09375rem; /* 17.5px for base */
    }

    .p-button-sm .p-button-icon {
      font-size: 0.875rem; /* 14px */
    }

    .p-button-lg .p-button-icon,
    .p-button-xl .p-button-icon,
    .p-button-xlg .p-button-icon {
      font-size: 1.3125rem; /* 21px */
    }

    /* Icon only - small */
    .p-button-icon-only.p-button-sm {
      width: 1.75rem; /* 28px */
      height: 1.75rem;
    }

    /* Icon only - large */
    .p-button-icon-only.p-button-lg {
      width: 3.125rem; /* 50px */
      height: 3.125rem;
    }

    /* Icon only - xlarge */
    .p-button-icon-only.p-button-xl,
    .p-button-icon-only.p-button-xlg {
      width: 3.5625rem; /* 57px */
      height: 3.5625rem;
    }

    /* Link variant specific styles */
    .p-button-link {
      padding-left: 0;
      padding-right: 0;
      padding-top: 0.21875rem; /* 3.5px */
      padding-bottom: 0.21875rem;
      background: transparent !important;
      border-color: transparent !important;
    }

    .p-button-link:not(:disabled):hover {
      background: transparent !important;
      color: #56595f;
    }

    .p-button-link:not(:disabled):active {
      background: transparent !important;
      color: #85888e;
    }

    .p-button-link.p-button-icon-only.p-button-sm {
      width: 0.875rem; /* 14px */
      height: 0.875rem;
    }

    .p-button-link.p-button-icon-only {
      width: 1.3125rem; /* 21px */
      height: 1.3125rem;
    }

    .p-button-link.p-button-icon-only.p-button-lg {
      width: 1.53125rem; /* 24.5px */
      height: 1.53125rem;
    }

    .p-button-link.p-button-icon-only.p-button-xl,
    .p-button-link.p-button-icon-only.p-button-xlg {
      width: 1.75rem; /* 28px */
      height: 1.75rem;
    }

    /* Text variant */
    .p-button-text {
      background: transparent !important;
      border-color: transparent !important;
    }

    .p-button-text:not(:disabled):hover {
      background: #f0f0f1 !important;
    }

    .p-button-text:not(:disabled):active {
      background: #e2e2e4 !important;
    }

    /* Secondary variant */
    .p-button-secondary {
      background: #2b2e33;
      color: #ffffff;
      border-color: transparent;
    }

    .p-button-secondary:not(:disabled):hover {
      background: #404348;
      color: #ffffff;
    }

    .p-button-secondary:not(:disabled):active {
      background: #56595f;
      color: #ffffff;
    }

    /* Contrast/Tertiary variant */
    .p-button-contrast {
      background: #e2e2e4;
      color: #2b2e33;
      border-color: transparent;
    }

    .p-button-contrast:not(:disabled):hover {
      background: #cecfd2;
      color: #2b2e33;
    }

    .p-button-contrast:not(:disabled):active {
      background: #a2a5a9;
      color: #2b2e33;
    }

    /* Loading state */
    .p-button-loading {
      pointer-events: none;
    }

    /* Rounded variant */
    .p-button.p-button-rounded {
      border-radius: 999px;
    }
  `,
};
