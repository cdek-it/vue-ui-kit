import type { MenuTokenSections } from '@primeuix/themes/types/menu';

export const css = ({ dt }: { dt: (token: string) => string }) => `
    /* Width component */
    .p-menu {
      width: fit-content;
      }  
    
    /* Default состояние для menu item */
    .p-menu-item .p-menu-item-content {
      color: ${dt('menu.item.menuitemTextColor')};
      background: ${dt('menu.item.menuitemBg')};
      }

    /* Default состояние иконки */
    .p-menuitem .p-menuitem-icon {
      color: ${dt('menu.item.icon.color')};
    }

    /* Hover состояние для menu item */
    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
      color: ${dt('menu.item.menuitemHoverTextColor')};
      background: ${dt('menu.item.menuitemHoverBg')};
    }

    /* Hover состояние иконки */
    .p-menuitem .p-menuitem-content:hover .p-menuitem-icon {
      color: ${dt('menu.item.icon.focusColor')};
    }
    
    /* Focus состояние для menu item (когда элемент получает фокус) */
    .p-menu-item.p-focus .p-menu-item-content {
      color: ${dt('menu.item.menuitemActiveTextColor')};
      background: ${dt('menu.item.menuitemActiveBg')};
    }

     /* Hover состояние для сфокусированного menu item (когда наводим мышь на уже сфокусированный элемент) */
    .p-menu-item.p-focus[data-p-focused="true"] .p-menu-item-content:hover {
      color: ${dt('menu.item.menuitemActiveTextColor')};
      background: ${dt('menu.item.menuitemActiveHoverBg')};
    }

  `;

export const colorScheme: MenuTokenSections.ColorScheme = {
  light: {
    item: {
      // Обычное состояние
      color: '{surface.700}',

      // Focus состояние (для hover и focus)
      focusColor: '{primary.color}',
      focusBackground: '{primary.50}',

      // Иконки
      icon: {
        color: '{surface.500}',
        focusColor: '{primary.color}',
      },
    },
    submenuHeader: {
      color: '{surface.500}',
      background: 'transparent',
      fontWeight: '600',
      padding: '0.75rem 1rem',
    },
  },
  dark: {
    item: {
      // Обычное состояние
      color: '{surface.0}',

      // Focus состояние (для hover и focus)
      focusColor: '{primary.color}',
      focusBackground: '{surface.800}',

      // Иконки
      icon: {
        color: '{surface.400}',
        focusColor: '{primary.color}',
      },
    },
    submenuHeader: {
      color: '{surface.400}',
      background: 'transparent',
      fontWeight: '600',
      padding: '0.75rem 1rem',
    },
  },
};

export default {
  css,
  colorScheme,
};
