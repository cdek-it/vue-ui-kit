const { mergeConfig } = require('vite');
const svgLoader = require('vite-svg-loader');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
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
          // FIX ДЛЯ СТОРИБУК 10
          'file://./node_modules/@storybook/addon-docs/dist/mdx-react-shim.js':
            path.resolve(
              __dirname,
              '../node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js'
            ),
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

  docs: {},
};
