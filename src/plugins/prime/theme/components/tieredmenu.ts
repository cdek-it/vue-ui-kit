import type { TieredMenuTokenSections } from '@primeuix/themes/types/tieredmenu';

export const css = ({ dt }: { dt: (token: string) => string }) => `

    /* TieredMenu width */
    .p-tieredmenu {
      width: fit-content;
    }

    /* Default состояние иконки */
    .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.color')};
    }

    /* Hover состояние иконки при наведении на item content */
    .p-tieredmenu-item-content[data-pc-section="itemcontent"]:hover .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.hoverColor')};
    }

    /* Active состояние для tieredmenu item */
    .p-tieredmenu-item.p-tieredmenu-item-active > .p-tieredmenu-item-content {
      color: ${dt('tieredmenu.item.activeColor')};
      background: ${dt('tieredmenu.item.activeBackground')};
    }

    /* Active состояние иконки для основного меню */
    .p-tieredmenu-item.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.activeColor')};
    }

    /* Active hover состояние для основных пунктов меню */
    .p-tieredmenu-item.p-tieredmenu-item-active:not(.p-disabled) > .p-tieredmenu-item-content:hover {
      color: ${dt('tieredmenu.item.activeColor')} !important;
      background: ${dt('tieredmenu.item.activeHoverBackground')} !important;
    }

    /* Active hover состояние иконки для основных пунктов меню */
    .p-tieredmenu-item.p-tieredmenu-item-active:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.activeColor')} !important;
    }

    /* Focus состояние для основных пунктов меню */
    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
      color: ${dt('tieredmenu.item.color')} !important;
      background: ${dt('tieredmenu.item.hoverBackground')} !important;
    }

  `;

export const colorScheme: TieredMenuTokenSections.ColorScheme = {
  light: {
    item: {
      // Обычное состояние
      color: '{menu.item.menuitemTextColor}',

      // Active состояние
      activeColor: '{menu.item.menuitemActiveTextColor}',
      activeBackground: '{menu.item.menuitemActiveBg}',

      // Иконки
      icon: {
        color: '{menu.item.menuitemIconColor}',
        activeColor: '{menu.item.menuitemActiveIconColor}',
      },
    },
  },
  dark: {
    item: {
      // Обычное состояние
      color: '{menu.item.menuitemTextColor}',

      // Active состояние
      activeColor: '{menu.item.menuitemActiveTextColor}',
      activeBackground: '{menu.item.menuitemActiveBg}',

      // Иконки
      icon: {
        color: '{menu.item.menuitemIconColor}',
        activeColor: '{menu.item.menuitemActiveIconColor}',
      },
    },
  },
};

export default {
  css,
  colorScheme,
};
