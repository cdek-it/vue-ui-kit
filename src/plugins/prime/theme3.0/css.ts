import avatarCss from './components/css/avatar';
import checkboxCss from './components/css/checkbox';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${avatarCss({ dt })}
   ${checkboxCss({ dt })}

  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
  }
  
  [class*="menu"].p-component {
    border: none;
  }
  
  [class*="menu"][class*="item"]:not(:has([class*="icon"])) [class*="item-content"] > [class*="item"] {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
  
  [class*="menu"][class*="item"].p-disabled, .p-panelmenu-panel > .p-disabled {
    background: ${dt('ButtonDisabledDisabledButtonBg')};
    border-radius: calc(${dt('menuItemMenuitemBorderRadius')});
    border: 1px solid ${dt('buttonDisabledDisabledButtonBorderColor')};
  }
  
  [class*="menu"][class*="item"].p-disabled  [class*="item-content"] > [class*="item"] {
    padding-top: calc(0.5rem - 1px);
    padding-bottom: calc(0.5rem - 1px);
  }
   
  [class*="menu"][class*="item"]:not(.p-disabled).p-menuitem-checked > [class*="item-content"] [class*="icon"] {
     color: ${dt('menu.item.menuitemActiveIconColor')};
  }
  
  [class*="menu"][class*="item"].p-menuitem-checked > [class*="item-content"] {
    background: ${dt('menuItemMenuitemActiveBg')};
    color: ${dt('menuItemMenuitemActiveTextColor')};
  }
  
  [class*="menu"][class*="item"].p-menuitem-checked > [class*="item-content"]:hover {
    background: ${dt('menuItemMenuitemActiveHoverBg')};
    color: ${dt('menuItemMenuitemActiveTextColor')};
  }
  
  .p-disabled [class*="menu"][class*="icon"] {
     color: ${dt('buttonDisabledDisabledButtonTextColor')};
  }
`;

export default css;
