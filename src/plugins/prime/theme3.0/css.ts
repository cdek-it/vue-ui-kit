import avatarCss from './components/css/avatar';
import badgeCss from './components/css/badge';
import breadcrumbCss from './components/css/breadcrumb';
import buttonCss from './components/css/button';
import checkboxCss from './components/css/checkbox';
import dialogCss from './components/css/dialog';
import dividerCss from './components/css/divider';
import drawerCss from './components/css/drawer';
import progressbarCss from './components/css/progressbar';
import ratingCss from './components/css/rating';
import tagCss from './components/css/tag';
import tooltipCss from './components/css/tooltip';

const css = ({ dt }: { dt: (token: string) => string }) => `
   ${avatarCss({ dt })}
   ${badgeCss({ dt })}
   ${breadcrumbCss({ dt })}
   ${buttonCss({ dt })}
   ${checkboxCss({ dt })}
   ${dialogCss({ dt })}
   ${dividerCss({ dt })}
   ${drawerCss({ dt })}
   ${progressbarCss({ dt })}
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
`;

export default css;
