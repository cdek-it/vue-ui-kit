import accordionCss from './components/css/accordion';
import avatarCss from './components/css/avatar';
import badgeCss from './components/css/badge';
import breadcrumbCss from './components/css/breadcrumb';
import buttonCss from './components/css/button';
import cardCss from './components/css/card';
import checkboxCss from './components/css/checkbox';
import confirmdialogCss from './components/css/confirmdialog';
import dialogCss from './components/css/dialog';
import megamenuCss from './components/css/megamenu';
import dividerCss from './components/css/divider';
import drawerCss from './components/css/drawer';
import messageCss from './components/css/message';
import metergroupCss from './components/css/metergroup';
import popoverCss from './components/css/popover';
import progressbarCss from './components/css/progressbar';
import ratingCss from './components/css/rating';
import selectbuttonCss from './components/css/selectbutton';
import stepperCss from './components/css/stepper';
import tabsCss from './components/css/tabs';
import tagCss from './components/css/tag';
import tooltipCss from './components/css/tooltip';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${accordionCss({ dt })}
   ${avatarCss({ dt })}
   ${badgeCss({ dt })}
   ${breadcrumbCss({ dt })}
   ${buttonCss({ dt })}
   ${cardCss({ dt })}
   ${checkboxCss({ dt })}
   ${confirmdialogCss({ dt })}
   ${dialogCss({ dt })}
   ${megamenuCss({ dt })}
   ${dividerCss({ dt })}
   ${drawerCss({ dt })}
   ${messageCss({ dt })}
   ${metergroupCss({ dt })}
   ${popoverCss({ dt })}
   ${progressbarCss({ dt })}
   ${ratingCss({ dt })}
   ${selectbuttonCss({ dt })}
   ${stepperCss({ dt })}
   ${tabsCss({ dt })}
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
