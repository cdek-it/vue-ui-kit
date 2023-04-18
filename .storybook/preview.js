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
  version: {
    style: {
      'font-family': "'Roboto', sans-serif",
      'font-weight': '600',
      'font-size': '12px',
      'line-height': '14px',
      'letter-spacing': '0.05em',
      padding: '4px 8px',
      'border-radius': '4px',
      background: 'rgba(0, 187, 228, 0.05)',
      color: '#627790',
    },
  },
};

export const argTypes = {
  story: {
    table: {
      disable: true,
    },
  },
};
