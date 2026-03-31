import ToggleSwitch from 'primevue/toggleswitch';
import { Template } from './ToggleSwitch.template';

const meta = {
  title: 'Prime/Form/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Используется для переключения между двумя состояниями.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-toggleswitch' },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Состояние переключателя',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Состояние ошибки',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает переключатель',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default = {
  render: Template,
  args: {
    checked: false,
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleSwitch v-model="value" />
</template>
        `,
      },
    },
  },
};

export const Checked = {
  render: Template,
  args: {
    checked: true,
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleSwitch v-model="value" />
</template>
        `,
      },
    },
  },
};

export const Invalid = {
  render: Template,
  args: {
    checked: false,
    invalid: true,
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleSwitch v-model="value" invalid />
</template>
        `,
      },
    },
  },
};

export const Disabled = {
  render: Template,
  args: {
    checked: false,
    invalid: false,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleSwitch v-model="value" disabled />
</template>
        `,
      },
    },
  },
};
