import type { TagTokenSections } from '@primeuix/themes/types/tag';

export const root: TagTokenSections.Root = {
  fontSize: '{misc.tag.tagFontSize}',
  fontWeight: '700',
  padding: '{misc.tag.tagPadding}',
  gap: '0.22rem',
  borderRadius: '{general.borderRadius}',
  roundedBorderRadius: '100px',
};

export const icon: TagTokenSections.Icon = {
  size: '{misc.tag.tagFontSize}',
};

export const colorScheme: TagTokenSections.ColorScheme = {
  light: {
    primary: {
      background: '{misc.badge.badgeBg}',
      color: '{misc.badge.badgeTextColor}',
    },
    info: {
      background: '{button.severity.info.basic.infoButtonBg}',
      color: '{button.severity.info.basic.infoButtonTextColor}',
    },
    success: {
      background: '{button.severity.success.basic.successButtonBg}',
      color: '{button.severity.success.basic.successButtonTextColor}',
    },

    warn: {
      background: '{button.severity.warning.basic.warningButtonBg}',
      color: '{button.severity.warning.basic.warningButtonTextColor}',
    },

    danger: {
      background: '{button.severity.danger.basic.dangerButtonBg}',
      color: '{button.severity.danger.basic.dangerButtonTextColor}',
    },

    secondary: {
      background: '{surface.surface-border}',
      color: '{general.textSecondaryColor}',
    },
  },
  dark: {
    primary: {
      background: '{misc.badge.badgeBg}',
      color: '{misc.badge.badgeTextColor}',
    },
    info: {
      background: '{button.severity.info.basic.infoButtonBg}',
      color: '{button.severity.info.basic.infoButtonTextColor}',
    },
    success: {
      background: '{button.severity.success.basic.successButtonBg}',
      color: '{button.severity.success.basic.successButtonTextColor}',
    },

    warn: {
      background: '{button.severity.warning.basic.warningButtonBg}',
      color: '{button.severity.warning.basic.warningButtonTextColor}',
    },

    danger: {
      background: '{button.severity.danger.basic.dangerButtonBg}',
      color: '{button.severity.danger.basic.dangerButtonTextColor}',
    },

    secondary: {
      background: '{surface.surface-border}',
      color: '{general.textSecondaryColor}',
    },
  },
};

export default {
  root,
  icon,
  colorScheme,
};
