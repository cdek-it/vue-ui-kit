import Rating from 'primevue/rating';
import { Template } from './Rating.template';

const meta = {
  title: 'Prime/Form/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Rating — это расширение стандартного элемента ввода с поддержкой тем оформления и управления с клавиатуры. \n\n \`\`\`js \n import Rating from 'primevue/rating'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-rating' },
  },
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Значение рейтинга.',
      table: { category: 'Props' },
    },
    stars: {
      control: 'number',
      description: 'Количество отображаемых звезд.',
      table: { category: 'Props', defaultValue: { summary: 5 } },
    },
    readonly: {
      control: 'boolean',
      description:
        'Если установлено, компонент становится недоступным для редактирования.',
      table: { category: 'Props', defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'Если установлено, компонент становится неактивным.',
      table: { category: 'Props', defaultValue: { summary: false } },
    },
  },
};

export default meta;

export const Default = {
  render: Template,
  args: {
    modelValue: 3,
  },
};

export const ReadOnly = {
  render: Template,
  args: {
    modelValue: 4,
    readonly: true,
  },
};

export const Disabled = {
  render: Template,
  args: {
    modelValue: 2,
    disabled: true,
  },
};
