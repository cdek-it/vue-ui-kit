import type { TieredMenuTokenSections } from '@primeuix/themes/types/tieredmenu';

export const css = ({ dt }: { dt: (token: string) => string }) => `

    /* Done: TieredMenu width */
    .p-tieredmenu {
      width: fit-content;
    }

    /* Done: Default состояние иконки */
    .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.color')};
    }

    /* Done: Hover состояние иконки при наведении на item content */
    .p-tieredmenu-item-content[data-pc-section="itemcontent"]:hover .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.hoverColor')};
    }

    /* Done: Active состояние для tieredmenu item */
    .p-tieredmenu-item.p-tieredmenu-item-active > .p-tieredmenu-item-content {
      color: ${dt('tieredmenu.item.activeColor')};
      background: ${dt('tieredmenu.item.activeBackground')};
    }

    /* Done: Active состояние иконки для основного меню */
    .p-tieredmenu-item.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.activeColor')};
    }

    /* Done: Active hover состояние для основных пунктов меню */
    .p-tieredmenu-item.p-tieredmenu-item-active:not(.p-disabled) > .p-tieredmenu-item-content:hover {
      color: ${dt('tieredmenu.item.activeColor')} !important;
      background: ${dt('tieredmenu.item.activeHoverBackground')} !important;
    }

    /* Done: Active hover состояние иконки для основных пунктов меню */
    .p-tieredmenu-item.p-tieredmenu-item-active:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-icon.p-tieredmenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('tieredmenu.item.icon.activeColor')} !important;
    }

    /* Done: Focus состояние для основных пунктов меню */
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

      // Hover состояние
      hoverColor: '{menu.item.menuitemHoverTextColor}',
      hoverBackground: '{menu.item.menuitemHoverBg}',

      // Active состояние  
      activeColor: '{menu.item.menuitemActiveTextColor}',
      activeBackground: '{menu.item.menuitemActiveBg}',
      activeHoverBackground: '{menu.item.menuitemActiveHoverBg}',

      // Иконки
      icon: {
        color: '{menu.item.menuitemIconColor}',
        hoverColor: '{menu.item.menuitemHoverIconColor}',
        activeColor: '{menu.item.menuitemActiveIconColor}'
      }
    }
  },
  dark: {
    item: {
      // Обычное состояние
      color: '{menu.item.menuitemTextColor}',

      // Hover состояние
      hoverColor: '{menu.item.menuitemHoverTextColor}',
      hoverBackground: '{menu.item.menuitemHoverBg}',

      // Active состояние  
      activeColor: '{menu.item.menuitemActiveTextColor}',
      activeBackground: '{menu.item.menuitemActiveBg}',
      activeHoverBackground: '{menu.item.menuitemActiveHoverBg}',

      // Иконки
      icon: {
        color: '{menu.item.menuitemIconColor}',
        hoverColor: '{menu.item.menuitemHoverIconColor}',
        activeColor: '{menu.item.menuitemActiveIconColor}'
      }
    }
  }
};

export default {
  css,
  colorScheme,
};