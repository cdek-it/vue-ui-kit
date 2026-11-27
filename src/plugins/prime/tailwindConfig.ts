import merge from 'lodash/merge';

const widthAndHeight = {
  1: '1rem',
  2: '2rem',
  3: '3rem',
  4: '4rem',
  5: '5rem',
  6: '6rem',
  7: '7rem',
  8: '8rem',
  9: '9rem',
  10: '10rem',
  11: '11rem',
  12: '12rem',
  13: '13rem',
  14: '14rem',
  15: '15rem',
  16: '16rem',
  17: '17rem',
  18: '18rem',
  19: '19rem',
  20: '20rem',
  21: '21rem',
  22: '22rem',
  23: '23rem',
  24: '24rem',
  25: '25rem',
  26: '26rem',
  27: '27rem',
  28: '28rem',
  29: '29rem',
  30: '30rem',
  34: '34rem',
  45: '45rem',
  50: '50rem',
  54: '54rem',
  58: '58rem',
  60: '60rem',
};

export const tailwindConfigTheme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  colors: {
    surface: {
      ground: 'var(--p-color-bg-surface-canvas-default)',
      overlay: 'var(--p-color-bg-surface-overlay-default)',
      section: 'var(--p-color-bg-surface-default-active)',
      hover: 'var(--p-color-bg-surface-canvas-hover)',
      border: 'var(--p-color-border-neutral-default)',
    },
    info: 'var(--p-color-bg-status-info-strong-hover)',
    success: 'var(--p-color-bg-status-success-strong-hover)',
    warning: 'var(--p-color-bg-status-warning-strong-hover)',
    danger: 'var(--p-color-bg-status-danger-strong-hover)',
    help: 'var(--p-color-bg-status-help-strong-hover)',
  },
  textColor: {
    'color-primary': 'var(--p-color-fg-inverse-default)',
    'color-secondary': 'var(--p-color-fg-subtle)',
  },
  borderRadius: {
    kit: '0.5rem',
  },
  borderWidth: {
    3: '3px',
  },
  width: widthAndHeight,
  height: widthAndHeight,
};

export const mergeTailwindTheme = (theme: any) => {
  return merge(tailwindConfigTheme, theme);
};
