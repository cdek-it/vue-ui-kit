import Badge from 'primevue/badge';
import { Template } from './Badge.template';

const meta = {
  title: 'Prime/Misc/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Используется для отображения статусов, уведомлений и меток.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-badge' },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст внутри бейджа',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
      description: 'Вариант бейджа',
      table: {
        category: 'Props',
        type: {
          summary:
            "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger'",
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['base', 'large', 'xlarge'],
      description: 'Размер бейджа',
      table: {
        category: 'Props',
        type: { summary: "'large' | 'xlarge'" },
        defaultValue: { summary: 'base' },
      },
    },
  },
};

export default meta;

export const Severity = {
  render: Template,
  args: {
    value: 'Badge',
    severity: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge value="Badge" severity="primary" />`,
      },
    },
  },
};

export const Sizes = {
  render: Template,
  args: {
    value: 'Badge',
    severity: 'primary',
    size: 'base',
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge value="Badge" severity="primary" size="large" />`,
      },
    },
  },
};

export const Dot = {
  render: Template,
  args: {
    severity: 'primary',
    size: 'base',
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge severity="primary" />`,
      },
    },
  },
};
