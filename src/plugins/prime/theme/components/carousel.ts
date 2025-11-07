// tokens - `src/plugins/prime/theme/tokens.ts`
export default {
  root: {
    indicator: {
      width: '{MediaCarouselCarouselIndicatorWidth}',
      height: '{MediaCarouselCarouselIndicatorHeight}',
      border: {
        radius: '{MediaCarouselCarouselIndicatorBorderRadius}',
      },
    },
  },

  colorScheme: {
    light: {
      indicator: {
        background: '{MediaCarouselCarouselIndicatorBg}',
        active: {
          background: '{MediaCarouselCarouselIndicatorActiveBg}',
        },
      },
    },
    dark: {
      indicator: {
        background: '{MediaCarouselCarouselIndicatorBg}',
        active: {
          background: '{MediaCarouselCarouselIndicatorActiveBg}',
        },
      },
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-carousel .p-button-icon-only.p-button-rounded {
      border-radius: ${dt('generalActionIconBorderRadius')};
    }

    .p-carousel .p-button-text.p-button-secondary:not(:disabled):active {
      background: unset;
    }

    .p-carousel .p-button:not(:disabled):not(:active):hover {
      background: unset;
      box-shadow: unset;
    }
  `,
};
