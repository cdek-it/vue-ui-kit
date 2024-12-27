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
  colors: {
    surface: {
      ground: 'var(--p-surface-ground)',
      overlay: 'var(--p-surface-overlay)',
      section: 'var(--p-surface-section)',
      hover: 'var(--p-surface-hover)',
      border: 'var(--p-surface-border)',
    },
    info: 'var(--p-info-400)',
    success: 'var(--p-success-400)',
    warning: 'var(--p-warning-400)',
    danger: 'var(--p-danger-400)',
    help: 'var(--p-help-400)',
  },
  textColor: {
    'color-primary': 'var(--p-white-100)',
    'color-secondary': 'var(--p-black-60)',
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
