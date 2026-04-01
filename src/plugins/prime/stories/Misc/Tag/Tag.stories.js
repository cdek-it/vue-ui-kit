import Tag from 'primevue/tag';
import { Template, TemplateSeverities } from './Tag.template';

const meta = {
  title: 'Prime/Misc/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Метка для категоризации и маркировки контента. Не является интерактивным элементом управления — используется только для отображения. \n \`\`\`js \n import Tag from 'primevue/tag'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-tag' },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст тега.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
      description: 'Вариант важности (цвета) тега.',
      table: {
        category: 'Props',
        defaultValue: { summary: 'primary' },
        type: {
          summary:
            "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger'",
        },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Скругленный вариант тега.',
      table: {
        category: 'Props',
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      control: 'text',
      description: 'Иконка тега.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Tag',
  render: Template,
  args: {
    value: 'Tag',
    severity: 'primary',
  },
  parameters: {
    docs: {},
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Severities = {
  render: TemplateSeverities,
  parameters: {
    docs: {},
  },
};

export const Rounded = {
  render: Template,
  args: {
    value: 'Rounded',
    severity: 'success',
    rounded: true,
  },
  parameters: {
    docs: {},
  },
};

export const WithIcon = {
  render: Template,
  args: {
    value: 'Verified',
    severity: 'info',
    icon: 'ti ti-check',
  },
  parameters: {
    docs: {},
  },
};
