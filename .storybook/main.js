import { mergeConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default {
  stories: [
    '../src/docs/1_installation.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/cdek-vue-ui-kit/';
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
    autodocs: true,
  },
};
