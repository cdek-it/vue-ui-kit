import { setup } from '@storybook/vue3';
import { registerToastification } from '@/plugins/toastification';
// import './themes/violet.css';

setup((app) => {
  registerToastification(app);
});

export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
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
    ],
  },
  // themes: {
  //   default: 'green',
  //   list: [
  //     { name: 'green', class: 'theme-green', color: '#1ab248' },
  //     { name: 'violet', class: 'theme-violet', color: '#4b3c87' },
  //   ],
  // },
};

export const argTypes = {
  story: {
    table: {
      disable: true,
    },
  },
};
