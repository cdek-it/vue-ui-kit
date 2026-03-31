import MeterGroup from 'primevue/metergroup';
import {
  BasicTemplate,
  HorizontalTemplate,
  IconTemplate,
  LabelStartTemplate,
  LabelVerticalTemplate,
  VerticalTemplate,
} from './MeterGroup.template';

const meta = {
  title: 'Prime/Misc/MeterGroup',
  component: MeterGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Компонент для отображения нескольких метрик в виде сегментированной шкалы.

\`\`\`js
import MeterGroup from 'primevue/metergroup';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-metergroup' },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация компонента',
      table: {
        category: 'Props',
        defaultValue: { summary: 'horizontal' },
        type: { summary: 'string' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Позиция списка меток относительно шкалы',
      table: {
        category: 'Props',
        defaultValue: { summary: 'end' },
        type: { summary: 'string' },
      },
    },
    labelOrientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация меток',
      table: {
        category: 'Props',
        defaultValue: { summary: 'horizontal' },
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Stories ────────────────────────────────────────────────────────────────────

export const Basic = {
  render: BasicTemplate,
  args: {
    orientation: 'horizontal',
    labelPosition: 'end',
    labelOrientation: 'horizontal',
  },
  parameters: {
    docs: {},
  },
};

export const Horizontal = {
  render: HorizontalTemplate,
  args: {
    orientation: 'horizontal',
    labelPosition: 'end',
    labelOrientation: 'horizontal',
  },
  parameters: {
    docs: {},
  },
};

export const Vertical = {
  render: VerticalTemplate,
  args: {
    orientation: 'vertical',
    labelPosition: 'end',
    labelOrientation: 'horizontal',
  },
  parameters: {
    docs: {},
  },
};

export const Icon = {
  render: IconTemplate,
  args: {
    orientation: 'horizontal',
    labelPosition: 'end',
    labelOrientation: 'horizontal',
  },
  parameters: {
    docs: {},
  },
};

export const LabelStart = {
  name: 'Label Position Start',
  render: LabelStartTemplate,
  args: {
    orientation: 'horizontal',
    labelPosition: 'start',
    labelOrientation: 'horizontal',
  },
  parameters: {
    docs: {},
  },
};

export const LabelVertical = {
  name: 'Label Orientation Vertical',
  render: LabelVerticalTemplate,
  args: {
    orientation: 'horizontal',
    labelPosition: 'end',
    labelOrientation: 'vertical',
  },
  parameters: {
    docs: {},
  },
};
