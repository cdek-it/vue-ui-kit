import avatarCss from './components/css/avatar';
import breadcrumbCss from './components/css/breadcrumb';
import buttonCss from './components/css/button';
import cardCss from './components/css/card';
import checkboxCss from './components/css/checkbox';
import confirmdialogCss from './components/css/confirmdialog';
import dialogCss from './components/css/dialog';
import dividerCss from './components/css/divider';
import inputtextCss from './components/css/inputtext';
import menuCss from './components/css/menu';
import menubarCss from './components/css/menubar';
import megamenuCss from './components/css/megamenu';
import panelmenuCss from './components/css/panelmenu';
import tieredmenuCss from './components/css/tieredmenu';
import togglebuttonCss from './components/css/togglebutton';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${avatarCss({ dt })}
   ${breadcrumbCss({ dt })}
   ${buttonCss({ dt })}
   ${cardCss({ dt })}
   ${checkboxCss({ dt })}
   ${confirmdialogCss({ dt })}
   ${dialogCss({ dt })}
   ${dividerCss({ dt })}
   ${inputtextCss({ dt })}
   ${menuCss({ dt })}
   ${menubarCss({ dt })}
   ${megamenuCss({ dt })}
   ${panelmenuCss({ dt })}
   ${tieredmenuCss({ dt })}
   ${togglebuttonCss({ dt })}

  .p-disabled, .p-component:disabled {
    mix-blend-mode: luminosity;
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
  
  .p-disabled [class*="menu"][class*="icon"] {
     color: ${dt('buttonDisabledDisabledButtonTextColor')};
  }
`;

export default css;
