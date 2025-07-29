import type { SkeletonTokenSections } from '@primeuix/themes/types/skeleton';

export const root: SkeletonTokenSections.Root = {
  borderRadius: '0.5rem',
};

export const colorScheme: SkeletonTokenSections.ColorScheme = {
  light: {
    root: {
      background: '{misc.skeleton.skeletonBg}',
      animationBackground: '{surface.surface-50}',
    },
  },
  dark: {
    root: {
      background: '{misc.skeleton.skeletonBg}',
      animationBackground: '{surface.surface-50}',
    },
  },
};

export default {
  root,
  colorScheme,
};
