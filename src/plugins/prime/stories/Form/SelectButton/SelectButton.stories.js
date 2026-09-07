import SelectButton from 'primevue/selectbutton';
import {
  TemplateDefault,
  TemplateSelected,
  TemplateDisabled,
  TemplateSemiDisabled,
} from './SelectButton.template';

const meta = {
  title: 'Prime/Form/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Группа кнопок-переключателей с поддержкой одиночного и множественного выбора.

\`\`\`js
import SelectButton from 'primevue/selectbutton';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-selectbutton' },
  },
  argTypes: {
    sizeClass: {
      control: 'select',
      options: [
        '',
        'p-selectbutton-sm',
        'p-selectbutton-lg',
        'p-selectbutton-xlg',
      ],
      description: 'Размер компонента (CSS-класс)',
      table: {
        category: 'Props',
        defaultValue: { summary: '' },
        type: {
          summary:
            "'' | 'p-selectbutton-sm' | 'p-selectbutton-lg' | 'p-selectbutton-xlg'",
        },
      },
    },
    withIcons: {
      control: 'boolean',
      description: 'Показывает иконки в опциях через слот #option',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает весь компонент',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Разрешает выбор нескольких опций',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    allowEmpty: {
      control: 'boolean',
      description: 'Разрешает снятие выбора (пустое значение)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Stories ────────────────────────────────────────────────────────────────────

export const Default = {
  render: TemplateDefault,
  args: { sizeClass: '', withIcons: false },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <SelectButton
    v-model="value"
    :options="options"
    optionLabel="name"
    optionValue="value"
  />
</template>

<script setup>
import { ref } from 'vue';
const value = ref('1');
const options = [
  { name: 'Option 1', value: '1' },
  { name: 'Option 2', value: '2' },
  { name: 'Option 3', value: '3' },
];
</script>
        `,
      },
    },
  },
};

export const Selected = {
  render: TemplateSelected,
  args: { sizeClass: '', withIcons: false },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <SelectButton
    v-model="value"
    :options="options"
    optionLabel="name"
    optionValue="value"
  />
</template>

<script setup>
import { ref } from 'vue';
const value = ref('2');
const options = [
  { name: 'Option 1', value: '1' },
  { name: 'Option 2', value: '2' },
  { name: 'Option 3', value: '3' },
];
</script>
        `,
      },
    },
  },
};

export const Disabled = {
  render: TemplateDisabled,
  args: { sizeClass: '', withIcons: false },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <SelectButton
    v-model="value"
    :options="options"
    optionLabel="name"
    optionValue="value"
    disabled
  />
</template>
        `,
      },
    },
  },
};

export const SemiDisabled = {
  name: 'Semi-disabled',
  render: TemplateSemiDisabled,
  args: { sizeClass: '', withIcons: false },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <SelectButton
    v-model="value"
    :options="options"
    optionLabel="name"
    optionValue="value"
    :optionDisabled="(o) => o.disabled"
  />
</template>

<script setup>
import { ref } from 'vue';
const value = ref('1');
const options = [
  { name: 'Option 1', value: '1', disabled: false },
  { name: 'Option 2', value: '2', disabled: true },
  { name: 'Option 3', value: '3', disabled: false },
];
</script>
        `,
      },
    },
  },
};
