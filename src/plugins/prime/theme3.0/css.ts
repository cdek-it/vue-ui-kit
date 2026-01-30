import avatarCss from './components/css/avatar';
import breadcrumbCss from './components/css/breadcrumb';
import buttonCss from './components/css/button';
import checkboxCss from './components/css/checkbox';
import dialogCss from './components/css/dialog';
import drawerCss from './components/css/drawer';
import panelmenuCss from './components/css/panelmenu';
import ratingCss from './components/css/rating';
import tagCss from './components/css/tag';
import tooltipCss from './components/css/tooltip';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${avatarCss({ dt })}
   ${breadcrumbCss({ dt })}
   ${buttonCss({ dt })}
   ${checkboxCss({ dt })}
   ${dialogCss({ dt })}
   ${drawerCss({ dt })}
   ${panelmenuCss({ dt })}
   ${ratingCss({ dt })}
   ${tagCss({ dt })}
   ${tooltipCss({ dt })}

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
   
  [class*="menu"][class*="item"]:not(.p-disabled).p-menuitem-checked:not(:has(.p-panelmenu-submenu-icon)) > [class*="item-content"] [class*="icon"] {
     color: ${dt('navigation.item.icon.activeColor')};
  }
  
  [class*="menu"][class*="item"].p-menuitem-checked:not(:has(.p-panelmenu-submenu-icon)) > [class*="item-content"] {
    background: ${dt('navigation.item.activeBackground')};
    color: ${dt('navigation.item.activeColor')};
  }
  
  [class*="menu"][class*="item"].p-menuitem-checked:not(:has(.p-panelmenu-submenu-icon)) > [class*="item-content"]:hover {
    background: ${dt('navigation.item.activeBackground')};
    color: ${dt('navigation.item.activeColor')};
  }
  
  .p-disabled [class*="menu"][class*="icon"] {
     color: ${dt('buttonDisabledDisabledButtonTextColor')};
  }
`;

export default css;
