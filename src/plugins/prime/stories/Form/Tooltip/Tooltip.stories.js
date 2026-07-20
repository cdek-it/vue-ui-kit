import Button from 'primevue/button';
import {
  Template,
  TemplatePositions,
  TemplateDelay,
  TemplateEvent,
} from './Tooltip.template';

const meta = {
  title: 'Prime/Form/Tooltip',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Tooltip — это компонент, который отображает информационный текст при наведении на элемент. \n\n \`\`\`js \n import Tooltip from 'primevue/tooltip'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-tooltip' },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Текст внутри подсказки.',
      table: { category: 'Props', type: { summary: 'string' } },
    },
    label: {
      control: 'text',
      description: 'Текст на кнопке, к которой привязан тултип.',
      table: { category: 'Props', type: { summary: 'string' } },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция подсказки относительно элемента.',
      table: {
        category: 'Props',
        defaultValue: { summary: 'right' },
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
      },
    },
  },
};

export default meta;

export const Default = {
  render: Template,
  args: {
    text: 'Это текст подсказки',
    label: 'Наведи на меня',
    position: 'right',
  },
};

export const Positions = {
  render: TemplatePositions,
};

export const Delay = {
  render: TemplateDelay,
};

export const Event = {
  render: TemplateEvent,
};
