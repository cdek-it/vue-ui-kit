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
      borderColor: '{surface.border}',
      hoverBorderColor: '{primary.color}',
      invalidBorderColor: '{danger.400}',
      color: '{black.80}',
      focusRing: {
        color: '{primary.200}',
        width: '0.25rem',
        style: 'solid',
      },
    },
    textColor: '{black.80}',
  },
  focusRing: {
    width: '3.5px',
    style: 'solid',
    offset: '0',
  },
};
