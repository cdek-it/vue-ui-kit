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
    modelValue: {
      control: 'boolean',
      description: 'Состояние переключателя',
      name: 'checked',
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
    modelValue: false,
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {},
  },
};

export const Checked = {
  render: Template,
  args: {
    modelValue: true,
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {},
  },
};

export const Invalid = {
  render: Template,
  args: {
    modelValue: false,
    invalid: true,
    disabled: false,
  },
  parameters: {
    docs: {},
  },
};

export const Disabled = {
  render: Template,
  args: {
    modelValue: false,
    invalid: false,
    disabled: true,
  },
  parameters: {
    docs: {},
  },
};
