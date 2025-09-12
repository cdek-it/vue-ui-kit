import type { BadgeTokenSections } from '@primeuix/themes/types/badge';

const info: BadgeTokenSections.Info = {
  background: '{button.severity.info.basic.infoButtonBg}',
  color: '{button.severity.info.basic.infoButtonTextColor}',
};

const danger: BadgeTokenSections.Danger = {
  background: '{button.severity.danger.basic.dangerButtonBg}',
  color: '{button.severity.danger.basic.dangerButtonTextColor}',
};

const success: BadgeTokenSections.Success = {
  background: '{button.severity.success.basic.successButtonBg}',
  color: '{button.severity.success.basic.successButtonTextColor}',
};

const warn: BadgeTokenSections.Warn = {
  background: '{button.severity.warning.basic.warningButtonBg}',
  color: '{button.severity.warning.basic.warningButtonTextColor}',
};

const colorScheme: BadgeTokenSections.ColorScheme = {
  light: {
    info,
    danger,
    success,
    warn,
  },
  dark: {
    info,
    danger,
    success,
    warn,
  },
};

export default {
  borderRadius: '100px',
  root: {
    borderRadius: '100px',
  },
  colorScheme,
};
