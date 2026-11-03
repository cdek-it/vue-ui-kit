import type { ExtraStorySpec } from '../storybook/storyMeta';

export const extraTextareaSpec: ExtraStorySpec = {
  description:
    'Обёртка над PrimeVue Textarea с явным spec-first API. Базовая типографика берётся из sizing.base.form текущего экспорта. Float-метка поднимается при фокусе и при наличии значения и использует heading-шрифт. Invalid сохраняет danger-кольцо и цвет метки при фокусе. В default-варианте info отображается у label. clearable добавляет очистку заполненного доступного поля; clear-icon заменяет иконку. TODO(spec): перенести clearable в исходную спецификацию. Стандартный caption содержит ведущую иконку; caption-слот полностью заменяет его содержимое.',
  importName: 'ExtraTextarea',
  figmaUrl:
    'https://www.figma.com/design/Khh7arsuXss3ncqy1Dz3OZ/UI-Kit--DS--v2.0?node-id=309-1582',
  designTokensPrefix: '--p-textarea',
};
