import Chip from 'primevue/chip';
import { Template } from './Chip.template';

const meta = {
  title: 'Prime/Misc/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Интерактивный элемент с текстом, иконкой и опциональной кнопкой удаления.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-chip' },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст внутри чипа',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'Иконка чипа',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    removable: {
      control: 'boolean',
      description: 'Отображает кнопку удаления',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает чип',
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
    label: 'Chip',
  },
  parameters: {
    docs: {},
  },
};

export const WithIcon = {
  render: Template,
  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
  },
  parameters: {
    docs: {},
  },
};

export const Removable = {
  render: Template,
  args: {
    label: 'Chip',
    removable: true,
  },
  parameters: {
    docs: {},
  },
};

export const RemovableWithIcon = {
  render: Template,
  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
  },
  parameters: {
    docs: {},
  },
};

export const Disabled = {
  render: Template,
  args: {
    label: 'Chip',
    icon: 'ti ti-info-circle',
    removable: true,
    disabled: true,
  },
  parameters: {
    docs: {},
  },
};
