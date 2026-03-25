import ProgressBar from 'primevue/progressbar';
import { Template, TemplateValues } from './ProgressBar.template';

/**
 * ProgressBar — компонент для визуализации прогресса выполнения задачи.
 */
const meta = {
  title: 'Prime/Misc/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `ProgressBar используется для информирования пользователя о статусе длительного процесса.
        
### Import
\`\`\`js
import ProgressBar from 'primevue/progressbar';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-progressbar' },
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Значение прогресса (0-100)',
      table: { category: 'Props', defaultValue: { summary: '0' } },
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Режим отображения',
      table: { category: 'Props', defaultValue: { summary: 'determinate' } },
    },
    showValue: {
      control: 'boolean',
      description: 'Отображать ли числовое значение',
      table: { category: 'Props', defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

export const Default = {
  render: Template,
  args: {
    value: 50,
  },
};

export const Indeterminate = {
  render: Template,
  args: {
    mode: 'indeterminate',
  },
};

export const Values = {
  render: TemplateValues,
};

export const NoLabel = {
  render: Template,
  args: {
    value: 60,
    showValue: false,
  },
};
