# vue-ui-kit

Библиотека компонентов на Vue 3 для витрин

Актуальный storybook http://frontdev.pages.cdek.ru/cdek-vue-ui-kit

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

## Versions

- [vue@3.3.4](https://blog.vuejs.org/posts/vue-3-3)

## Commands

- Установка пакетов `yarn`
- Генерация библиотеки `yarn build`
- Запуск линтера `yarn lint`
- Запуск тестов `yarn test`, с ui `yarn test:ui`
- Проверка типов `yarn type-check`
- Storybook `yarn storybook`
- Генерация типовых файлов для компонента `yarn gen:component ComponentName`

## Manual Publishing

Добавить файл в корне `.npmrc` с контентом

```
@cdek-ui-kit:registry=https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/

# Add token for uploading to the registry.
'//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken'="<deploy_token>"
```

Deploy token можно создать в настройках репозитория (доступно только для мейнтейнеров).

Settings > Repository > Deploy tokens

Далее запустить команды:

```bash
yarn build
npm publish
```

Версия пакета возьмется с `package.json`.

## CI publishing

Есть мануальный пайплайн на ветке `main`, версия также возьмется с `package.json`.

## Установка в сторонний репозиторий

```bash
npm config set -- '//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken' "M__vw1BxxuyPg5htzoZw"
npm config set @cdek-ui-kit:registry https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/
yarn add @cdek-ui-kit/vue
```

Auth token вставленный в примере подходит только для чтения
