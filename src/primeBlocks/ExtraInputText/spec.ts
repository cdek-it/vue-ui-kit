import type { ExtraStorySpec } from '../storybook/storyMeta';

export const extraInputTextSpec: ExtraStorySpec = {
  description:
    'Обёртка над PrimeVue InputText с поддержкой очистки, размеров и кастомной иконки. Базовый текст использует sizing.base.form.fontSize и sizing.base.form.lineHeight из текущего экспорта; sm/lg/xlg используют собственные component-токены. В float-варианте метка поднимается при фокусе и при наличии значения, шрифт поднятой метки базовый. Invalid сохраняет danger-кольцо и цвет метки и caption при фокусе. В default-варианте info отображается у label. Стандартный caption содержит ведущую иконку; caption-слот полностью заменяет его содержимое.',
  importName: 'ExtraInputText',
  figmaUrl:
    'https://www.figma.com/design/Khh7arsuXss3ncqy1Dz3OZ/UI-Kit--DS--v2.0?node-id=15-13444',
  designTokensPrefix: '--p-inputtext',
};
