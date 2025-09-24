// tokens - `src/plugins/prime/theme/tokens.ts` - Misc -> Avatar

import type { AvatarTokenSections } from '@primeuix/themes/types/avatar';

const root: AvatarTokenSections.Root = {
  width: '2rem',
  height: '2rem',
  fontSize: '1rem',
  color: '{misc.avatar.avatarTextColor}',
  background: '{misc.avatar.avatarBg}',
  borderRadius: '0.5rem',
};

const lg: AvatarTokenSections.Lg = {
  width: '2.5rem',
  height: '2.5rem',
  fontSize: '1rem',
  icon: {
    size: '1rem',
  },
};

const xl: AvatarTokenSections.Xl = {
  width: '3.5rem',
  height: '3.5rem',
  fontSize: '1.5rem',
  icon: {
    size: '1.5rem',
  },
};

export const css = ({ dt }: { dt: (token: string) => string }): string => `
  .p-avatar {
    border: 1px solid ${dt('misc.avatar.avatarBorderColor')};
  }

  .p-avatar.p-component + .p-badge {
    transform: translate(50%, -36%);
  }

  .p-avatar.p-avatar-lg + .p-badge,
  .p-avatar.p-avatar-xl + .p-badge {
    transform: translate(50%, -33%);
  }
`;

export default { root, lg, xl, css };
