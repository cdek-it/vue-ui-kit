const { mergeConfig } = require('vite');
const svgLoader = require('vite-svg-loader');
const path = require('path');

module.exports = {
  stories: [
    '../src/docs/1_installation.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  features: {
    storyStoreV7: true,
  },

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/vue-ui-kit/';
    }

    return mergeConfig(config, {
      plugins: [svgLoader()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
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

  docs: {
    autodocs: true
  }
};
