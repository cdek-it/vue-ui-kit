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
      {
        name: 'stripped',
        value: 'linear-gradient(#FFF 11.1%, #1AB248 0, #1AB248 33.3%, #FFF 0, #FFF 55.5%, #1AB248 0, #1AB248 77.7%, #FFF 0)',
      },
    ],
  },
};
