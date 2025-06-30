import tokens from './tokens';

/**
 * Примитивные цвета
 */
export default {
  // @see Neutrals / White https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=282-27&m=dev
  white: {
    10: 'rgba(255, 255, 255, 0.1)',
    20: 'rgba(255, 255, 255, 0.2)',
    30: 'rgba(255, 255, 255, 0.3)',
    40: 'rgba(255, 255, 255, 0.4)',
    50: 'rgba(255, 255, 255, 0.5)',
    60: 'rgba(255, 255, 255, 0.6)',
    70: 'rgba(255, 255, 255, 0.7)',
    80: 'rgba(255, 255, 255, 0.8)',
    90: 'rgba(255, 255, 255, 0.9)',
    100: '#FFFFFF',
  },
  // @see Neutrals / Black https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
  black: {
    10: 'rgba(0, 0, 0, 0.1)',
    20: 'rgba(0, 0, 0, 0.2)',
    30: 'rgba(0, 0, 0, 0.3)',
    40: 'rgba(0, 0, 0, 0.4)',
    50: 'rgba(0, 0, 0, 0.5)',
    60: 'rgba(0, 0, 0, 0.6)',
    70: 'rgba(0, 0, 0, 0.7)',
    80: 'rgba(0, 0, 0, 0.8)',
    90: 'rgba(0, 0, 0, 0.9)',
    100: '#000000',
  },
  // @see Brand(primary) https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
  emerald: {
    0: '#283027',
    50: '#F4FCF2',
    100: '#CAF0C2',
    200: '#A0E491',
    300: '#76D961',
    400: '#4CCD30',
    500: '#22C100',
    600: '#1DA400',
    700: '#188700',
    800: '#136A00',
    900: '#0E4D00',
    alpha: 'rgba(34, 193, 0, 0.1)',
  },
  // @see Surface https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
  gray: {
    0: '#2F2F2F',
    50: '#FBFBFB',
    100: '#EBEBEA',
    200: '#DBDADA',
    300: '#CBCACA',
    400: '#BBBAB9',
    500: '#ABAAA9',
    600: '#919190',
    700: '#787776',
    800: '#5E5E5D',
    900: '#444444',
    alpha: 'rgba(171, 170, 169, 0.1)',
  },
  // @see Info https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
  blue: {
    0: '#282D32',
    50: '#F4F9FE',
    100: '#C9E3FA',
    200: '#9ECDF6',
    300: '#74B8F3',
    400: '#49A2EF',
    500: '#1F8CEB',
    600: '#1A77C8',
    700: '#1662A5',
    800: '#114D81',
    900: '#0C385E',
    alpha: 'rgba(31, 140, 235, 0.1)',
  },
  // @see Success https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-107&m=dev
  green: {
    0: '#2A2F2B',
    50: '#F6FBF6',
    100: '#D2EDD5',
    200: '#AFDEB3',
    300: '#8CCF91',
    400: '#68C170',
    500: '#45B24E',
    600: '#3B9742',
    700: '#307D37',
    800: '#1C471F',
    900: '#1C471F',
    alpha: 'rgba(69, 178, 78, 0.1)',
  },
  // @see Error https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=282-27&m=dev
  red: {
    0: '#312A2A',
    50: '#FDF6F5',
    100: '#F6D4D1',
    200: '#EFB2AC',
    300: '#E99088',
    400: '#E26E63',
    500: '#DB4C3F',
    600: '#BA4136',
    700: '#9A352C',
    800: '#782A23',
    900: '#581E19',
    alpha: 'rgba(219, 76, 63, 0.1)',
  },
  // @see Warning https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-85&m=dev
  orange: {
    0: '#332E27',
    50: '#FFFAF2',
    100: '#FFE8C2',
    200: '#FFD791',
    300: '#FFC561',
    400: '#FFB330',
    500: '#FFA100',
    600: '#D98900',
    700: '#B27100',
    800: '#8C5900',
    900: '#664000',
    alpha: 'rgba(255, 161, 0, 0.1)',
  },
  // @see Purple https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-107&m=dev
  purple: {
    0: '#2E2B31',
    50: '#FAF6FD',
    100: '#E6D7F5',
    200: '#D2B7EE',
    300: '#BF97E6',
    400: '#AB77DF',
    500: '#9757D7',
    600: '#804AB7',
    700: '#6A3D97',
    800: '#533076',
    900: '#3C2356',
    alpha: 'rgba(151, 87, 215, 0.1)',
  },
};

// @see Error https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-74&m=dev
const danger = {
  0: '{red.0}',
  50: '{red.50}',
  100: '{red.100}',
  200: '{red.200}',
  300: '{red.300}',
  400: '{red.400}',
  500: '{red.500}',
  600: '{red.600}',
  700: '{red.700}',
  800: '{red.800}',
  900: '{red.900}',
  alpha: '{red.alpha}',
};

// @see Info https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-96&m=dev
const info = {
  0: '{blue.0}',
  50: '{blue.50}',
  100: '{blue.100}',
  200: '{blue.200}',
  300: '{blue.300}',
  400: '{blue.400}',
  500: '{blue.500}',
  600: '{blue.600}',
  700: '{blue.700}',
  800: '{blue.800}',
  900: '{blue.900}',
  alpha: '{blue.alpha}',
};

// @see Warning https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-85&m=dev
const warning = {
  0: '{orange.0}',
  50: '{orange.50}',
  100: '{orange.100}',
  200: '{orange.200}',
  300: '{orange.300}',
  400: '{orange.400}',
  500: '{orange.500}',
  600: '{orange.600}',
  700: '{orange.700}',
  800: '{orange.800}',
  900: '{orange.900}',
  alpha: '{orange.alpha}',
};

// @see Success https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=112-96&m=dev
const success = {
  0: '{green.0}',
  50: '{green.50}',
  100: '{green.100}',
  200: '{green.200}',
  300: '{green.300}',
  400: '{green.400}',
  500: '{green.500}',
  600: '{green.600}',
  700: '{green.700}',
  800: '{green.900}',
  900: '{green.900}',
  alpha: '{green.alpha}',
};

// @see Help https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&var-id=615-10&m=dev
const help = {
  0: '{purple.0}',
  50: '{purple.50}',
  100: '{purple.100}',
  200: '{purple.200}',
  300: '{purple.300}',
  400: '{purple.400}',
  500: '{purple.500}',
  600: '{purple.600}',
  700: '{purple.700}',
  800: '{purple.800}',
  900: '{purple.900}',
  alpha: '{purple.alpha}',
};

// @see Brand(primary) https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
export const primaryColor = {
  light: {
    0: '{emerald.0}',
    50: '{emerald.50}',
    100: '{emerald.100}',
    200: '{emerald.200}',
    300: '{emerald.300}',
    400: '{emerald.400}',
    500: '{emerald.500}',
    600: '{emerald.600}',
    700: '{emerald.700}',
    800: '{emerald.800}',
    900: '{emerald.900}',
    alpha: '{emerald.alpha}',
    color: {
      hover: '{primary.800}',
    },
  },
};

const form = {
  light: {
    inputText: {
      input: {
        bg: '{surface.ground}',
        textColor: '{general.text.color}',
        iconColor: '{general.text.color}',
        borderColor: '{surface.border}',
        placeholder: {
          textColor: '{general.text.secondary.color}',
        },
      },
    },
    menu: {
      item: {
        menu: {
          item: {
            textColor: '{general.text.color}',
          },
        },
      },
    },
    listBox: {
      input: {
        listItem: {
          textColor: '{menu.item.menu.item.textColor}',
        },
      },
    },
  },
  dark: {
    inputText: {
      input: {
        bg: '{surface.ground}',
        textColor: '{general.text.color}',
        iconColor: '{general.text.color}',
        borderColor: '{surface.border}',
        placeholder: {
          textColor: '{general.text.secondary.color}',
        },
      },
    },
    menu: {
      item: {
        menu: {
          item: {
            textColor: '{general.text.secondary.color}',
          },
        },
      },
    },
    listBox: {
      input: {
        listItem: {
          textColor: '{menu.item.menu.item.textColor}',
        },
      },
    },
  },
};

const button = {
  light: {
    disabled: {
      disabledButtonBg: '{black.10}',
      disabledButtonTextColor: '{general.text.secondary.color}',
      disabledButtonBorderColor: '{surface.border}',
    },
  },
  dark: {
    disabled: {
      disabledButtonBg: '{white.20}',
      disabledButtonTextColor: '{general.text.secondary.color}',
      disabledButtonBorderColor: '{surface.border}',
    },
  },
};

export const General = {
  light: {
    colorScheme: 'light',
    primaryColor: '{primary.700}',
    primaryColorHover: '{primary.800}',
    primaryColorText: '{white.100}',
    fontSize: 14,
    fontWeight: 'normal',
    textColor: '{black.80}',
    textSecondaryColor: '{black.60}',
    highlightBg: '{general.primary.color}',
    highlightTextColor: '{general.primary.color.text}',
    borderRadius: 7,
    inlineSpacing: 7,
    disabledOpacity: 0.6,
    dividerColor: '{surface.border}',
    divider: '1px solid {dividerColor}',
    focusOutlineColor: '{primary.200}',
    focusOutline: 'none',
    focusOutlineOffset: 'none',
    focusShadowWidth: 3.5,
    focusShadow: '0 0 0 {focusShadowWidth} {focusOutlineColor}',
    errorColor: '{danger.400}',
    focusOutlineErrorColor: '{danger.100}',
    focusShadowError: '0 0 0 {focusShadowWidth} {focusOutlineErrorColor}',
    transitionDuration: '.2s',
    formElementTransition: 'background-color {transitionDuration}',
    maskBg: '{surface.overlay}',
    primeIconFontSize: 14,
    loadingIconFontSize: 28,
    actionIconWidth: 28,
    actionIconHeight: 28,
    actionIconBg: '{surface.transparent}',
    actionIconColor: '{black.60}',
    actionIconBorderColor: '{surface.transparent}',
    actionIconBorder: '1px solid {actionIconBorderColor}',
    actionIconHoverBg: '{surface.hover}',
    actionIconHoverColor: '{black.80}',
    actionIconHoverBorderColor: '{surface.transparent}',
    actionIconBorderRadius: '{general.borderRadius}',
    actionIconTransition: 'background-color {transitionDuration}',
    scaleSM: 0.875,
    scaleLG: 1.25,
  },
  dark: {
    colorScheme: 'dark',
    primaryColor: '{primary.300}',
    primaryColorHover: '{primary.200}',
    primaryColorText: '{black.80}',
    fontSize: 14,
    fontWeight: 'normal',
    textColor: '{white.100}',
    textSecondaryColor: '{white.80}',
    highlightBg: '{general.primary.color}',
    highlightTextColor: '{general.primary.color.text}',
    borderRadius: 7,
    inlineSpacing: 7,
    disabledOpacity: 0.6,
    dividerColor: '{surface.border}',
    divider: '1px solid {dividerColor}',
    focusOutlineColor: '{primary.800}',
    focusOutline: 'none',
    focusOutlineOffset: 'none',
    focusShadowWidth: 3.5,
    focusShadow: '0 0 0 {focusShadowWidth} {focusOutlineColor}',
    errorColor: '{danger.400}',
    focusOutlineErrorColor: '{danger.800}',
    focusShadowError: '0 0 0 {focusShadowWidth} {focusOutlineErrorColor}',
    transitionDuration: '.2s',
    formElementTransition: 'background-color {transitionDuration}',
    maskBg: '{surface.overlay}',
    primeIconFontSize: 14,
    loadingIconFontSize: 28,
    actionIconWidth: 28,
    actionIconHeight: 28,
    actionIconBg: '{surface.transparent}',
    actionIconColor: '{white.80}',
    actionIconBorderColor: '{surface.transparent}',
    actionIconBorder: '1px solid {actionIconBorderColor}',
    actionIconHoverBg: '{surface.hover}',
    actionIconHoverColor: '{white.100}',
    actionIconHoverBorderColor: '{surface.transparent}',
    actionIconBorderRadius: '{general.borderRadius}',
    actionIconTransition: 'background-color {transitionDuration}',
    scaleSM: 0.875,
    scaleLG: 1.25,
  },
};

export const semanticColors = {
  // @see Surface https://www.figma.com/design/70PmUKyqbgjyd7dfEc3fzs/%F0%9F%9A%A7-Tokens-PrimeFace-(DS)?node-id=0-1&p=f&vars=1&m=dev
  light: {
    surface: {
      0: '{gray.0}',
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
      ground: '{white.100}',
      section: '{gray.alpha}',
      card: '{surface.ground}',
      overlay: '{black.20}',
      border: '{surface.200}',
      hover: '{surface.100}',
      transparent: 'rgba(256, 256, 256, 0.0001)',
    },
    general: General.light,
    form: form.light,
    button: button.light,
    danger,
    info,
    warning,
    success,
    help,
    primary: {
      color: '{primary.700}',
      focusRingColor: '{primary.200}',
      hoverColor: '{primary.800}',
      colorText: '{white.100}',
    },
    text: {
      color: '{black.80}',
    },
    content: {
      background: '{surface.ground}',
    },
    ...tokens.light,
  },
  dark: {
    surface: {
      0: '{gray.50}',
      50: '{gray.0}',
      100: '{gray.900}',
      200: '{gray.800}',
      300: '{gray.700}',
      400: '{gray.600}',
      500: '{gray.500}',
      600: '{gray.400}',
      700: '{gray.300}',
      800: '{gray.200}',
      900: '{gray.100}',
      ground: '#1C1B22',
      section: '{gray.alpha}',
      card: '{surface.ground}',
      overlay: '{black.40}',
      border: '{surface.100}',
      hover: '{surface.200}',
      transparent: 'rgba(0, 0, 0, 0.0001)',
    },
    general: General.dark,
    form: form.dark,
    button: button.dark,
    danger,
    info,
    warning,
    success,
    help,
    primary: {
      color: '{primary.300}',
      hoverColor: '{primary.200}',
      colorText: '{black.80}',
      contrastColor: '{black.80}',
    },
    text: {
      color: '{white.100}',
    },
    ...tokens.dark,
  },
};
