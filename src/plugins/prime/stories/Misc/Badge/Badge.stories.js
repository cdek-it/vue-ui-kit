import Badge from 'primevue/badge';
import { Template } from './Badge.template';

const meta = {
  title: 'Prime/Misc/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Используется для отображения статусов, уведомлений и меток.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-badge' },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст внутри бейджа',
      table: {
        category: 'Props',
        type: { summary: 'string|number' },
      },
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
      description: 'Вариант бейджа',
      table: {
        category: 'Props',
        type: {
          summary:
            "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger'",
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['base', 'large', 'xlarge'],
      description: 'Размер бейджа',
      table: {
        category: 'Props',
        type: { summary: "'large' | 'xlarge'" },
        defaultValue: { summary: 'base' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

/** Базовый пример компонента. Используйте Controls для интерактивного изменения пропсов. */
export const Default = {
  render: Template,
  args: {
    value: '8',
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

// ── Variants ─────────────────────────────────────────────────────────────────

export const Severity = {
  render: Template,
  args: {
    value: '8',
    severity: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Цветовые варианты бейджа для обозначения различных состояний.',
      },
      source: {
        code: `
<template>
  <Badge value="8" severity="success" />
</template>
        `,
      },
    },
  },
};

export const Sizes = {
  render: Template,
  args: {
    value: '8',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Доступные размеры бейджа: base, large и xlarge.',
      },
      source: {
        code: `
<template>
  <Badge value="8" size="large" />
</template>
        `,
      },
    },
  },
};

export const Dot = {
  render: Template,
  args: {
    severity: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Бейдж без значения отображается в виде точки.',
      },
      source: {
        code: `
<template>
  <Badge severity="danger" />
</template>
        `,
      },
    },
  },
};
