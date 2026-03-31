import Slider from 'primevue/slider';
import {
  Template,
  TemplateRange,
  TemplateStep,
  TemplateVertical,
  TemplateDisabled,
} from './Slider.template';

const meta = {
  title: 'Prime/Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Компонент позволяет выбрать числовое значение или диапазон путём перемещения ползунка. \n\n \`\`\`js \n import Slider from 'primevue/slider'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-slider' },
  },
  argTypes: {
    min: {
      control: 'number',
      description: 'Минимальное значение',
      table: {
        category: 'Props',
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
      table: {
        category: 'Props',
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
    },
    step: {
      control: 'number',
      description: 'Шаг изменения значения',
      table: {
        category: 'Props',
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    range: {
      control: 'boolean',
      description: 'Режим выбора диапазона с двумя ползунками',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация слайдера',
      table: {
        category: 'Props',
        defaultValue: { summary: 'horizontal' },
        type: { summary: "'horizontal' | 'vertical'" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает взаимодействие с компонентом',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const SliderDefault = {
  name: 'Slider',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const value = ref(50);
</script>

<template>
  <Slider v-model="value" style="width: 300px" />
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Range = {
  render: TemplateRange,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const value = ref([20, 80]);
</script>

<template>
  <Slider v-model="value" range style="width: 300px" />
</template>
        `,
      },
    },
  },
};

export const Step = {
  render: TemplateStep,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const value = ref(50);
</script>

<template>
  <Slider v-model="value" :step="10" style="width: 300px" />
</template>
        `,
      },
    },
  },
};

export const Vertical = {
  render: TemplateVertical,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const value = ref(50);
</script>

<template>
  <Slider v-model="value" orientation="vertical" style="height: 200px" />
</template>
        `,
      },
    },
  },
};

export const Disabled = {
  render: TemplateDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Slider :model-value="50" disabled style="width: 300px" />
</template>
        `,
      },
    },
  },
};
