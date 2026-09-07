import ProgressSpinner from 'primevue/progressspinner';
import { Template } from './ProgressSpinner.template';

const meta = {
  title: 'Prime/Misc/ProgressSpinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Используется для отображения неопределенного времени ожидания.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-progressspinner' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер спиннера (переключает соответствующие CSS-классы)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
      },
    },
    multicolor: {
      control: 'boolean',
      description: 'Включить многоцветную анимацию для линии спиннера',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'ProgressSpinner',
  render: Template,
  args: {
    size: 'medium',
    multicolor: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Базовый вариант бесконечного спиннера с возможностью выбора размера и настройки цветовой схемы (мультицветность или один цвет).',
      },
      source: {
        code: '<ProgressSpinner class="p-progressspinner-medium" :multicolor="false" />',
      },
    },
  },
};
