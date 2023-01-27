import { app } from '@storybook/vue3';
import { registerToastification } from '@/plugins/toastification';

registerToastification(app);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
};

export const argTypes = {
  story: {
    table: {
      disable: true,
    },
  },
};
