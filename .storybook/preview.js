import { setup } from '@storybook/vue3-vite';
import { DecoratorHelpers } from '@storybook/addon-themes';
import { registerToastification } from '@/plugins/toastification';
import PrimeVue from 'primevue/config';
import { getPrimeVueConfig } from '@/plugins/prime';
import Tooltip from 'primevue/tooltip';
import ConfirmationService from 'primevue/confirmationservice';

import '../src/tailwind.css';
import './themes/base.css';
import './themes/violet.css';

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

const THEMES = {
  'Light': '',
  'Dark':  'theme-prime-dark',
};

const DEFAULT_THEME = 'Light';

// Pre-compute all theme classes for cleanup
const ALL_THEME_CLASSES = [...new Set(
  Object.values(THEMES).flatMap((c) => c.split(' ')).filter(Boolean),
)];

function applyTheme(themeName) {
  const html = document.documentElement;
  ALL_THEME_CLASSES.forEach((c) => html.classList.remove(c));
  const classes = (THEMES[themeName] || '').split(' ').filter(Boolean);
  classes.forEach((c) => html.classList.add(c));
}

const storyBookConfig = {
  theme: {
    options: {
      darkModeSelector: '.theme-prime-dark',
    },
  },
};

const mergedConfig = getPrimeVueConfig(storyBookConfig);

setup((app) => {
  registerToastification(app);
  app.use(PrimeVue, mergedConfig);
  app.use(ConfirmationService);
  app.directive('tooltip', Tooltip);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Intro',
        'Form',
        'Prime',
        'Prime Blocks',
        'Ui kit',
        'Plugins',
        'Services',
        '*',
        'Deprecated',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  interactions: { disable: true },
  backgrounds: {
    options: {
      white:  { name: 'white', value: '#ffffff' },
      grey:   { name: 'grey',  value: '#F5F6F8' },
      green:  { name: 'green', value: '#1AB248' },
      dark:   { name: 'dark',  value: '#2b2e33' },
    },
  },
};

export const argTypes = {
  story: {
    table: { disable: true },
  },
};

let themesRegistered = false;

export const decorators = [
  (storyFn, context) => {
    // Вызываем один раз после инициализации модуля — канал уже готов
    if (!themesRegistered) {
      initializeThemeState(Object.keys(THEMES), DEFAULT_THEME);
      themesRegistered = true;
    }
    applyTheme(pluckThemeFromContext(context) || DEFAULT_THEME);
    return storyFn();
  },
];

export const tags = ['autodocs'];

export const initialGlobals = {
  theme: '',  // инициализирует global 'theme' для тулбара
  backgrounds: {
    value: '#ffffff',
  },
};
