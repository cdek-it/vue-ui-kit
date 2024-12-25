import { primaryColor, semanticColors } from './primitive';

export default {
  primary: primaryColor,
  formField: {
    borderRadius: '7px',
    lgFontSize: '1.25rem',
  },
  colorScheme: {
    ...semanticColors,
    primary: {
      color: '{primary.700}',
      focusRingColor: '{primary.200}',
      hoverColor: '{primary.800}',
    },
  },
  focusRing: {
    width: '3.5px',
    style: 'solid',
    offset: '0',
  },
};
