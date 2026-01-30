import { app } from '@storybook/vue3';
import { registerToastification } from '@/plugins/toastification';
import PrimeVue from 'primevue/config';
import { getPrimeVueConfig } from '@/plugins/prime';
import Tooltip from 'primevue/tooltip';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '../src/tailwind.css';
import './themes/base.css';
import './themes/violet.css';
import StoryWrapper from './common/StoryWrapper/StoryWrapper.vue';
import { onMounted } from 'vue';

registerToastification(app);

const storyBookConfig = {
  theme: {
    options: {
      darkModeSelector: '.theme-prime-dark',
    },
  },
};

const mergedConfig = getPrimeVueConfig(storyBookConfig);

app.use(PrimeVue, mergedConfig);
app.use(ConfirmationService);
app.use(ToastService);
app.directive('tooltip', Tooltip);

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
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'grey',
        value: '#F5F6F8',
      },
      {
        name: 'green',
        value: '#1AB248',
      },
      {
        name: 'dark',
        value: '#1C1B22',
      },
    ],
  },
  themes: {
    default: 'green',
    list: [
      { name: 'green', class: 'theme-green', color: '#1ab248' },
      { name: 'violet', class: 'theme-violet', color: '#4b3c87' },
    ],
  },
};

export const argTypes = {
  story: {
    table: {
      disable: true,
    },
  },
};

// Пересмотреть после поднятия версии сторибука, сейчас какой-то костыль
export const decorators = [
  (story, context) => {
    return {
      components: { story, StoryWrapper },
      setup() {
        const params = new URLSearchParams(window.location.search);
        const viewMode = params.get('viewMode');
        const hasWrapper =
          context.kind.toLowerCase().includes('prime') && viewMode === 'story';

        const removeBg = (doc) => {
          if (doc) {
            doc.style.removeProperty('background');
          }

          document.body.style.removeProperty('background');
        };

        // Пересмотреть после поднятия версии сторибука, сейчас какой-то костыль
        const onToggleHandler = (disable = false) => {
          const doc = document.querySelector('.sbdocs');

          if (disable) {
            document.documentElement.classList.remove('theme-prime-dark');
            removeBg(doc);
            return;
          }

          const added =
            document.documentElement.classList.toggle('theme-prime-dark');

          if (added) {
            const bgColor = '#1C1B22';
            document.body.style.setProperty('background', bgColor, 'important');
            if (doc) {
              doc.style.background = bgColor;
            }

            return;
          }

          removeBg(doc);
        };

        onMounted(() => onToggleHandler(true));

        return {
          hasWrapper,
          onToggleHandler,
        };
      },
      template:
        '<story-wrapper v-if="hasWrapper" @toggled="onToggleHandler"><story/></story-wrapper>' +
        '<story v-else />',
    };
  },
];
