const prettierConfig = require('./.prettierrc.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: 'props' },
    ],
  },
  globals: {
    defineOptions: 'readonly',
  },
};
