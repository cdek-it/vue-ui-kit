import type { MegaMenuTokenSections } from '@primeuix/themes/types/megamenu';

export const css = ({ dt }: { dt: (token: string) => string }) => `

     /* Default состояние иконки */
    .p-icon.p-megamenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('megamenu.item.icon.color')};
    }

    /* Hover состояние иконки при наведении на item content */
    .p-megamenu-item-content[data-pc-section="itemcontent"]:hover .p-icon.p-megamenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('megamenu.item.icon.hoverColor')};
    }

    /* Active состояние для megamenu item */
    .p-megamenu-item-content.p-menuitem-active {
      color: ${dt('megamenu.item.activeColor')};
      background: ${dt('megamenu.item.activeBackground')};
    }

    /* Active состояние иконки */
    .p-megamenu-item.p-megamenu-item-active .p-icon.p-megamenu-submenu-icon[data-pc-section="submenuicon"]{
      color: ${dt('megamenu.item.icon.activeColor')};
    }

    /* Active hover состояние для основных пунктов меню (не в overlay) */
    .p-megamenu-item.p-megamenu-item-active:not(.p-disabled):not(.p-megamenu-overlay .p-megamenu-item) > .p-megamenu-item-content:hover {
      color: ${dt('megamenu.item.activeColor')} !important;
      background: ${dt('megamenu.item.activeHoverBackground')} !important;
    }

    /* Active hover состояние иконки для основных пунктов меню (не в overlay) */
    .p-megamenu-item.p-megamenu-item-active:not(.p-disabled):not(.p-megamenu-overlay .p-megamenu-item) > .p-megamenu-item-content:hover .p-icon.p-megamenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('megamenu.item.icon.activeColor')} !important;
    }

    /* Focus состояние для основных пунктов меню (не в overlay) */
    .p-megamenu-item.p-focus:not(.p-megamenu-overlay .p-megamenu-item) > .p-megamenu-item-content {
      color: ${dt('megamenu.item.activeColor')} !important;
      background: ${dt('megamenu.item.activeBackground')} !important;
    }

    /* Focus состояние иконки для основных пунктов меню (не в overlay) */
    .p-megamenu-item.p-focus:not(.p-megamenu-overlay .p-megamenu-item) > .p-megamenu-item-content .p-icon.p-megamenu-submenu-icon[data-pc-section="submenuicon"] {
      color: ${dt('megamenu.item.icon.activeColor')} !important;
    }

  `;

export const colorScheme: MegaMenuTokenSections.ColorScheme = {
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
