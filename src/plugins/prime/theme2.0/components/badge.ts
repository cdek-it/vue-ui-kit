import { css } from "@primevue/themes";

export default {
  colorScheme: {
    light: {
      primary: {
        color: "{text.extend.colorPrimaryStatic}",
        background: "{primary.color}"
      },
      secondary: {
        color: "{text.extend.colorInverted}",
        background: "{surface.900}"
      },
      success: {
        color: "{extend.pallete.success.900}",
        background: "{extend.pallete.success.300}"
      },
      info: {
        color: "{extend.pallete.info.900}",
        background: "{extend.pallete.info.300}"
      },
      warn: {
        color: "{extend.pallete.warn.900}",
        background: "{extend.pallete.warn.300}"
      },
      danger: {
        color: "{extend.pallete.error.900}",
        background: "{extend.pallete.error.300}"
      }
    }
  },
  extend: {
    extDot: {
      success: {
        background: "{colors.green.400}"
      },
      info: {
        background: "{extend.pallete.info.400}"
      },
      warn: {
        background: "{extend.pallete.warn.400}"
      },
      danger: {
        background: "{extend.pallete.error.400}"
      },
      lg: {
        size: "0.75rem"
      },
      xlg: {
        size: "1rem"
      }
    }
  },
  root: {
    borderRadius: "{borderRadius.xl}",
    padding: "0.5357142857142857rem",
    fontSize: "0.75rem",
    fontWeight: "28.571428571428573rem",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  dot: {
    size: "0.5rem"
  },
  sm: {
    fontSize: "0.625rem",
    minWidth: "0",
    height: "0"
  },
  lg: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  xl: {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  css: ({ dt }: { dt: (token: string) => string }) => `
  .p-badge[data-pc-name="badge"] {
    font-family: ${dt('typography.fontFamily.heading')}, sans-serif;
  }
  [data-pc-name="badge"][data-p-severity="success"] {
    font-weight: ${dt('typography.fontWeight.semibold')};
  }
  [data-pc-name="badge"][data-p-severity="success"] {
    font-size: ${dt('typography.fontSize.text-sm')};
    }
  [data-pc-name="badge"][data-p-severity="success"] {
    line-height: ${dt('typography.lineHeight.text-sm')};
  }
`
};

