# vue-ui-kit

Библиотека компонентов на Vue 3 для витрин

## Prerequisits

- Node v16.x
- yarn v1.22.x

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

VsCode settings for auto-formatting:

- Editor: Format On Save - true
- Editor: Default Formatter - Prettier Eslint

## Commands

- Установка пакетов `yarn`
- Генерация библиотеки `yarn build`
- Запуск линтера `yarn lint`
- Запуск тестов `yarn test`, с ui `yarn test:ui`
- Проверка типов `yarn type-check`
- Storybook `yarn storybook`
- Генерация типовых файлов для компонента `yarn gen:component ComponentName`

## Manual Publishing

```bash
yarn build
GITLAB_AUTH_TOKEN=<your_deploy_token> npm publish
```

Deploy token можно создать в настройках репозитория, версия пакета возьмется с `package.json`.

## Установка в сторонний репозиторий

```bash
npm config set -- '//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken' "M__vw1BxxuyPg5htzoZw"
npm config set @cdek-ui-kit:registry https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/
yarn add @cdek-ui-kit/vue
```

Auth token вставленный в примере подходит только для чтения
