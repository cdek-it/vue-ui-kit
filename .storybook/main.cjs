const { mergeConfig } = require('vite');
const svgLoader = require('vite-svg-loader');
const path = require('path');
const designTokensAddon = path.resolve(__dirname, 'addons/design-tokens');

module.exports = {
  stories: [
    '../src/plugins/prime/**/*.mdx',
    '../src/plugins/prime/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/primeBlocks/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    designTokensAddon,
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            providerImportSource: require.resolve('@storybook/addon-docs/mdx-react-shim'),
          },
        },
      },
    },
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

  docs: {},
};
