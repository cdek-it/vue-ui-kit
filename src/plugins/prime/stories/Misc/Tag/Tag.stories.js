import Tag from 'primevue/tag';
import { Template } from './Tag.template';

const meta = {
  title: 'Prime/Misc/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Tag — это компонент для цветового выделения и классификации элементов интерфейса. \n\n \`\`\`js \n import Tag from 'primevue/tag'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-tag' },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст тега.',
      table: { category: 'Props' },
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
      description: 'Вариант важности (цвета) тега.',
      table: { category: 'Props', defaultValue: { summary: 'primary' } },
    },
    rounded: {
      control: 'boolean',
      description: 'Скругленный вариант тега.',
      table: { category: 'Props', defaultValue: { summary: false } },
    },
    icon: {
      control: 'text',
      description: 'Иконка тега.',
      table: { category: 'Props' },
    },
  },
};

export default meta;

export const Default = {
  render: Template,
  args: {
    value: 'Tag',
    severity: 'primary',
  },
};

export const Rounded = {
  render: Template,
  args: {
    value: 'Rounded',
    severity: 'success',
    rounded: true,
  },
};

export const WithIcon = {
  render: Template,
  args: {
    value: 'Verified',
    severity: 'info',
    icon: 'ti ti-check',
  },
};
