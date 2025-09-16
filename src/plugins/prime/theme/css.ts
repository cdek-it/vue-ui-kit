const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
  }
  
  [class^="p-menu"].p-component {
    border: none;
  }
  
  [class*="menu"][class*="item"].p-disabled, .p-panelmenu-panel > .p-disabled {
    background: ${dt('ButtonDisabledDisabledButtonBg')};
    border-radius: calc(${dt('menuItemMenuitemBorderRadius')});
    border: 1px solid ${dt('buttonDisabledDisabledButtonBorderColor')};
  }
   
  [class*="p-menu"][class*="item"]:not(.p-disabled).p-menuitem-checked > [class*="item-content"] [class*="icon"] {
     color: ${dt('menu.item.menuitemActiveIconColor')};
  }
  
  [class*="p-menu"][class*="item"].p-menuitem-checked > [class*="item-content"] {
    background: ${dt('menuItemMenuitemActiveBg')};
    color: ${dt('menuItemMenuitemActiveTextColor')};
  }
  
  [class*="p-menu"][class*="item"].p-menuitem-checked > [class*="item-content"]:hover {
    background: ${dt('menuItemMenuitemActiveHoverBg')};
    color: ${dt('menuItemMenuitemActiveTextColor')};
  }
  
  .p-disabled [class*="menu"][class*="icon"] {
     color: ${dt('buttonDisabledDisabledButtonTextColor')};
  }
`;

export default css;
