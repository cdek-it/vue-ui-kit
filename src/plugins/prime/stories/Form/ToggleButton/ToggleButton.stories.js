import ToggleButton from 'primevue/togglebutton';
import { Template } from './ToggleButton.template';

const meta = {
  title: 'Prime/Form/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Кнопка-переключатель между двумя состояниями с поддержкой иконок, слотов и нескольких размеров.

\`\`\`js
import ToggleButton from 'primevue/togglebutton';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-togglebutton' },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Состояние переключателя',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'base', 'large', 'xlarge'],
      description: 'Размер компонента',
      table: {
        category: 'Props',
        defaultValue: { summary: 'base' },
        type: {
          summary: "'small' | 'base' | 'large' | 'xlarge'",
        },
      },
    },
    iconOnly: {
      control: 'boolean',
      description:
        'Режим только с иконкой (CSS-класс `p-togglebutton-icon-only`)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Состояние ошибки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает кнопку',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    offLabel: {
      control: 'text',
      description: 'Текст в выключенном состоянии',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    onLabel: {
      control: 'text',
      description: 'Текст во включённом состоянии',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    offIcon: {
      control: 'text',
      description: 'Иконка в выключенном состоянии',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    onIcon: {
      control: 'text',
      description: 'Иконка во включённом состоянии',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Stories ────────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
  args: {
    checked: false,
    size: 'base',
    iconOnly: false,
    invalid: false,
    disabled: false,
    offLabel: 'ToggleButton',
    onLabel: 'ToggleButton',
    offIcon: 'ti ti-arrow-down-right',
    onIcon: 'ti ti-arrow-down-right',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleButton
    v-model="value"
    off-label="ToggleButton"
    on-label="ToggleButton"
    off-icon="ti ti-arrow-down-right"
    on-icon="ti ti-arrow-down-right"
  />
</template>

<script setup>
import { ref } from 'vue';
const value = ref(false);
</script>
        `,
      },
    },
  },
};

export const Disabled = {
  render: Template,
  args: {
    checked: false,
    size: 'base',
    iconOnly: false,
    invalid: false,
    disabled: true,
    offLabel: 'ToggleButton',
    onLabel: 'ToggleButton',
    offIcon: 'ti ti-arrow-down-right',
    onIcon: 'ti ti-arrow-down-right',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleButton
    v-model="value"
    off-label="ToggleButton"
    on-label="ToggleButton"
    disabled
  />
</template>
        `,
      },
    },
  },
};

export const Invalid = {
  render: Template,
  args: {
    checked: false,
    size: 'base',
    iconOnly: false,
    invalid: true,
    disabled: false,
    offLabel: 'ToggleButton',
    onLabel: 'ToggleButton',
    offIcon: 'ti ti-arrow-down-right',
    onIcon: 'ti ti-arrow-down-right',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ToggleButton
    v-model="value"
    off-label="ToggleButton"
    on-label="ToggleButton"
    invalid
  />
</template>
        `,
      },
    },
  },
};
