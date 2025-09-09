import type { BreadcrumbTokenSections } from '@primeuix/themes/types/breadcrumb';

const root: BreadcrumbTokenSections.Root = {
  padding: '{menu.breadcrumb.breadcrumbPadding}',
  gap: '0.25rem',
};

const item: BreadcrumbTokenSections.Item = {
  color: '{menu.breadcrumb.breadcrumbItemTextColor}',
  hoverColor: '{menu.item.menuitemHoverTextColor}',
  icon: {
    color: '{menu.breadcrumb.breadcrumbItemIconColor}',
    hoverColor: '{menu.breadcrumb.menuitemHoverIconColor}',
  },
};

const separator: BreadcrumbTokenSections.Separator = {
  color: '{menu.item.breadcrumbSeparatorColor}',
};

export const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-breadcrumb-item {
    padding: 0.25rem;
    border-radius: ${dt('menu.item.menuitemBorderRadius')};
  }

  .p-breadcrumb-item:last-child {
    opacity: 0.6;
  }
  
  .p-breadcrumb-item:not(:last-child):hover {
    background: ${dt('menu.item.menuitemHoverBg')};
  }
  
  .p-breadcrumb-item:last-child:hover * {
    cursor: default;
  }
  
  .p-breadcrumb-item-icon {
    font-size: ${dt('menu.item.menuitemSubmenuIconFontSize')};
  }
`;

export default {
  root,
  item,
  separator,
  css,
};
