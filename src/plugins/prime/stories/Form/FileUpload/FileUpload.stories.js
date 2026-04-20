import { DefaultTemplate } from './FileUpload.template';

export default {
  title: 'Prime/Form/FileUpload',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент загрузки файлов с поддержкой drag-and-drop, прогресс-бара и предпросмотра файлов. В stories используется обёртка `PBlockFileUpload` из `@/primeBlocks` — она инкапсулирует кастомный шаблон карточек, мок-uploader (console.log) и не затрагивает внутренние классы PrimeVue в потребителе.',
      },
    },
    designToken: { disable: false },
    designTokens: {
      prefix: '--p-fileupload',
    },
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Разрешает выбирать несколько файлов за один раз.',
      table: {
        category: 'Props',
        defaultValue: { summary: true },
        type: { summary: 'boolean' },
      },
    },
    accept: {
      control: 'text',
      description: 'Шаблон разрешённых типов файлов.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    maxFileSize: {
      control: 'number',
      description: 'Максимальный размер одного файла в байтах.',
      table: {
        category: 'Props',
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность выбора и загрузки файлов.',
      table: {
        category: 'Props',
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    multiple: true,
    accept: 'image/*,.pdf,.doc,.docx',
    maxFileSize: 1000000,
  },
};

export const Default = {
  render: DefaultTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <PBlockFileUpload
    :multiple="true"
    accept="image/*,.pdf,.doc,.docx"
    :maxFileSize="1000000"
  />
</template>
`,
      },
    },
  },
};
