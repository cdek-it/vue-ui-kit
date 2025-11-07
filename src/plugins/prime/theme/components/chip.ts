import type { ChipTokenSections } from '@primeuix/themes/types/chip';

const css = ({ dt }: { dt: (token: string) => string }) => `
    .p-chip:has(.p-chip-remove-icon) {
      padding-inline-end: var(--p-chip-padding-x);
    }

    .p-chip[disabled=true] {
      background: ${dt('button.disabled.disabledButtonBg')};
      user-select: none;
      pointer-events: none;
      color: ${dt('button.disabled.disabledButtonTextColor')};
    }

    .p-chip[disabled=true] .p-chip-icon, .p-chip[disabled=true] .p-chip-remove-icon {
      color: ${dt('button.disabled.disabledButtonTextColor')};
    }
`;

export const root: ChipTokenSections.Root = {
  gap: '0.5rem',
  paddingX: '{misc.chip.chipPaddingLeftRight}',
  paddingY: '{misc.chip.chipPaddingTopBottom}',
  borderRadius: '{misc.chip.chipBorderRadius}',
};

export const icon: ChipTokenSections.Icon = {
  size: '1rem',
};

export const removeIcon: ChipTokenSections.RemoveIcon = {
  size: '1rem',

  focusRing: {
    width: '0.2rem',
    style: '{focus.ring.style}',
    color: '{primary.200}',
    offset: '{focus.ring.offset}',
  },
};

export const colorScheme: ChipTokenSections.ColorScheme = {
  light: {
    root: {
      background: '{misc.chip.chipBg}',
      color: '{misc.chip.chipTextColor}',
    },
    icon: {
      color: '{misc.chip.chipTextColor}',
    },
    removeIcon: {
      color: '{misc.chip.chipTextColor}',
    },
  },
  dark: {
    root: {
      background: '{misc.chip.chipBg}',
      color: '{misc.chip.chipTextColor}',
    },
    icon: {
      color: '{misc.chip.chipTextColor}',
    },
    removeIcon: {
      color: '{misc.chip.chipTextColor}',
    },
  },
};

export default {
  root,
  icon,
  removeIcon,
  colorScheme,
  css,
};
