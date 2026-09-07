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
    docs: {
      source: {
        code: `
<template>
  <MeterGroup :value="value" />
</template>

<script setup>
const value = [{ label: 'Space used', color: '#44e858', value: 15 }];
</script>
        `,
      },
    },
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
    docs: {
      source: {
        code: `
<template>
  <MeterGroup :value="value" />
</template>

<script setup>
const value = [
  { label: 'Apps', color: '#44e858', value: 40 },
  { label: 'Messages', color: '#77baf4', value: 25 },
  { label: 'Media', color: '#facb75', value: 20 },
  { label: 'System', color: '#f47f77', value: 15 },
];
</script>
        `,
      },
    },
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
    docs: {
      source: {
        code: `
<template>
  <div style="height: 300px; display: flex;">
    <MeterGroup :value="value" orientation="vertical" style="height: 100%; flex: 1;" />
  </div>
</template>
        `,
      },
    },
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
    docs: {
      source: {
        code: `
<template>
  <MeterGroup :value="value" />
</template>

<script setup>
const value = [
  { label: 'Apps', color: '#44e858', value: 40, icon: 'ti ti-device-desktop' },
  { label: 'Messages', color: '#77baf4', value: 25, icon: 'ti ti-mail' },
  { label: 'Media', color: '#facb75', value: 20, icon: 'ti ti-photo' },
  { label: 'System', color: '#f47f77', value: 15, icon: 'ti ti-settings' },
];
</script>
        `,
      },
    },
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
    docs: {
      source: {
        code: `
<template>
  <MeterGroup :value="value" labelPosition="start" />
</template>
        `,
      },
    },
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
    docs: {
      source: {
        code: `
<template>
  <MeterGroup :value="value" labelOrientation="vertical" />
</template>
        `,
      },
    },
  },
};
