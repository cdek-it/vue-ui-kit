import { primaryColor, semanticColors } from './primitive';

export default {
  primary: primaryColor,
  formField: {
    borderRadius: '7px',
    lgFontSize: '1.25rem',
  },
  colorScheme: {
    ...semanticColors,
    focusRingColor: '{primary.200}',
    primary: {
      color: '{primary.700}',
      focusRingColor: '{primary.200}',
      hoverColor: '{primary.800}',
    },
    formField: {
      background: '{surface.ground}',
      disabledBackground: '{black.10}',
      disabledColor: '{black.80}',
      placeholderColor: '{black.60}',
      borderColor: '{surface.border}',
      hoverBorderColor: '{primary.color}',
      invalid: {
        placeholderColor: '{black.60}',
        borderColor: '{danger.400}',
      },
      color: '{black.80}',
      focusRing: {
        color: '{primary.200}',
        width: '0.25rem',
        style: 'solid',
      },
      icon: {
        color: '{black.80}',
      },
      floatLabel: {
        color: '{black.60}',
      },
      focus: {
        border: {
          color: '{surface.border}',
        },
      },
    },
    list: {
      gap: '0.25rem',
      option: {
        focus: {
          background: '{surface.100}',
          color: '{black.80}',
        },
        selected: {
          background: '{primary.700}',
          color: '{surface.ground}',
          focus: {
            color: '{surface.ground}',
            background: '{primary.700}',
          },
        },
      },
    },
    textColor: '{black.80}',
    overlay: {
      select: {
        background: '{surface.ground}',
      },
    },
  },
  focusRing: {
    width: '3.5px',
    style: 'solid',
    offset: '0',
  },
};
