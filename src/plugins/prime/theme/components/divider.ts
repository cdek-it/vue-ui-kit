import type { DividerTokenSections } from '@primeuix/themes/types/divider';

export const root: DividerTokenSections.Root = {
  borderColor: '{general.dividerColor}',
};

export const content: DividerTokenSections.Content = {
  color: '{general/textSecondaryColor}',
};

// Дефолтные из primeuix/styled, вроде похоже на правду
export const horizontal: DividerTokenSections.Horizontal = {
  margin: '1rem 0',
  padding: '0 1rem',
  content: {
    padding: '0 0.5rem',
  },
};

// Дефолтные из primeuix/styled, вроде похоже на правду
export const vertical: DividerTokenSections.Vertical = {
  margin: '0 1rem',
  padding: '0.5rem 0',
  content: {
    padding: '0.5rem 0',
  },
};

export default {
  root,
  content,
  horizontal,
  vertical,
};
