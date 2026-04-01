import ScrollPanel from 'primevue/scrollpanel';
import {
  Template,
  TemplateHorizontal,
  TemplateBoth,
} from './ScrollPanel.template';

const meta = {
  title: 'Prime/Panel/ScrollPanel',
  component: ScrollPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Компонент с кастомной полосой прокрутки.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-scrollpanel' },
  },
  argTypes: {
    step: {
      control: 'number',
      description: 'Шаг прокрутки в пикселях.',
      table: {
        category: 'Props',
        defaultValue: { summary: 5 },
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default = {
  name: 'ScrollPanel',
  render: Template,
  args: {
    step: 5,
  },
  parameters: {
    docs: {},
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Horizontal = {
  render: TemplateHorizontal,
  parameters: {
    docs: {},
  },
};

export const Both = {
  render: TemplateBoth,
  parameters: {
    docs: {},
  },
};
