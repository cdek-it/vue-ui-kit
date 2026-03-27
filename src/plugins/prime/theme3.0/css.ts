import accordionCss from './components/css/accordion';
import avatarCss from './components/css/avatar';
import badgeCss from './components/css/badge';
import breadcrumbCss from './components/css/breadcrumb';
import buttonCss from './components/css/button';
import cardCss from './components/css/card';
import checkboxCss from './components/css/checkbox';
import listboxCss from './components/css/listbox';
import confirmdialogCss from './components/css/confirmdialog';
import dialogCss from './components/css/dialog';
import menuCss from './components/css/menu';
import dividerCss from './components/css/divider';
import drawerCss from './components/css/drawer';
import messageCss from './components/css/message';
import inputgroupCss from './components/css/inputgroup';
import inputtextCss from './components/css/inputtext';
import popoverCss from './components/css/popover';
import progressbarCss from './components/css/progressbar';
import ratingCss from './components/css/rating';
import selectbuttonCss from './components/css/selectbutton';
import stepperCss from './components/css/stepper';
import tabsCss from './components/css/tabs';
import tagCss from './components/css/tag';
import toggleswitchCss from './components/css/toggleswitch';
import tooltipCss from './components/css/tooltip';
import progressspinnerCss from './components/css/progressspinner';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${accordionCss({ dt })}
   ${avatarCss({ dt })}
   ${badgeCss({ dt })}
   ${breadcrumbCss({ dt })}
   ${buttonCss({ dt })}
   ${cardCss({ dt })}
   ${checkboxCss({ dt })}
   ${listboxCss({ dt })}
   ${confirmdialogCss({ dt })}
   ${dialogCss({ dt })}
   ${menuCss({ dt })}
   ${dividerCss({ dt })}
   ${drawerCss({ dt })}
   ${messageCss({ dt })}
   ${inputgroupCss({ dt })}
   ${inputtextCss({ dt })}
   ${popoverCss({ dt })}
   ${progressbarCss({ dt })}
   ${popoverCss({ dt })}
   ${ratingCss({ dt })}
   ${selectbuttonCss({ dt })}
   ${stepperCss({ dt })}
   ${tabsCss({ dt })}
   ${tagCss({ dt })}
   ${toggleswitchCss({ dt })}
   ${tooltipCss({ dt })}
   ${progressspinnerCss({ dt })}

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
`;

export default css;
