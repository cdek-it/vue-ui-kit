const { mergeConfig } = require('vite');
const svgLoader = require('vite-svg-loader');
const path = require('path');
const designTokensAddon = path.resolve(__dirname, 'addons/design-tokens');

module.exports = {
  stories: ['../src/docs/1_installation.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },


  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/vue-ui-kit/';
    }

    return mergeConfig(config, {
      plugins: [svgLoader()],
      resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, '../src') },
          // FIX ДЛЯ СТОРИБУК 10
          {
            find: /file:\/\/.*mdx-react-shim\.js/,
            replacement: require.resolve('@storybook/addon-docs/mdx-react-shim'),
          },
        ],
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/assets/style/vars";`,
          },
        },
        modules: {
          generateScopedName: (name) => name.replace(/^prefix/, 'cdek'),
        },
      },
    });
  },

  docs: {}
};
