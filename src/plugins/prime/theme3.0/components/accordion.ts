export const css = ({ dt }: { dt: (token: string) => string }): string => `
  .p-accordionheader {
    background: ${dt('accordion.localExtToken')};
  }
`;

export default {
  extend: {
    colorScheme: {
      light: {
        localExtToken: 'yellow',
      },
      dark: {
        localExtToken: 'purple',
      },
    },
  },
  root: {
    transitionDuration: '0.20000000298023224',
  },
  header: {
    color: '#2b2e33',
    hoverColor: '#56595f',
    activeColor: '#2b2e33',
    activeHoverColor: '#56595f',
    padding: '0 14 0 14px',
    fontWeight: '0',
    borderRadius: 0,
    borderWidth: '0 0 0 0',
    borderColor: '#e2e2e4',
    background: 'rgba(255, 255, 255, 0.0001)',
    hoverBackground: 'rgba(255, 255, 255, 0.0001)',
    activeBackground: 'rgba(255, 255, 255, 0.0001)',
    activeHoverBackground: 'rgba(255, 255, 255, 0.0001)',
    focusRing: {
      width: 3.5,
      style: 'none',
      color: '#ffffff',
      offset: 0,
      shadow: 'inset {focus.ring.shadow}',
    },
    toggleIcon: {
      color: '#2b2e33',
      hoverColor: '#56595f',
      activeColor: '#2b2e33',
      activeHoverColor: '#56595f',
    },
    last: {
      bottomBorderRadius: 10.5,
      activeBottomBorderRadius: 0,
    },
    first: {
      borderWidth: 0,
      topBorderRadius: 10.5,
    },
  },
  panel: {
    borderWidth: '0',
    borderColor: '#ffffff',
  },
  content: {
    borderWidth: '1px 0 0 0',
    borderColor: '#e2e2e4',
    background: '#ffffff',
    color: '#2b2e33',
    padding: '0, 0, 1rem, 1.75rem',
  },
  css,
};
