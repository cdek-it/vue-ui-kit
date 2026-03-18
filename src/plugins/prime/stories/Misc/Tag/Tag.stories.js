import Tag from 'primevue/tag';
import { Template, TemplateSeverities } from './Tag.template';

const meta = {
  title: 'Prime/Misc/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Tag — это компонент для цветового выделения и классификации элементов интерфейса. \n\n ### Import \n \`\`\`js \n import Tag from 'primevue/tag'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-tag' },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст тега.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
      description: 'Вариант важности (цвета) тега.',
      table: {
        category: 'Props',
        defaultValue: { summary: 'primary' },
        type: {
          summary:
            "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger'",
        },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Скругленный вариант тега.',
      table: {
        category: 'Props',
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      control: 'text',
      description: 'Иконка тега.',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Tag',
  render: Template,
  args: {
    value: 'Tag',
    severity: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Tag value="Tag" severity="primary" />
</template>
        `,
      },
    },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Severities = {
  render: TemplateSeverities,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-wrap items-center gap-4">
    <Tag value="Primary" severity="primary" />
    <Tag value="Secondary" severity="secondary" />
    <Tag value="Success" severity="success" />
    <Tag value="Info" severity="info" />
    <Tag value="Warn" severity="warn" />
    <Tag value="Danger" severity="danger" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Rounded = {
  render: Template,
  args: {
    value: 'Rounded',
    severity: 'success',
    rounded: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Tag value="Rounded" severity="success" :rounded="true" />
</template>
        `,
      },
    },
  },
};

export const WithIcon = {
  render: Template,
  args: {
    value: 'Verified',
    severity: 'info',
    icon: 'ti ti-check',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Tag value="Verified" severity="info" icon="ti ti-check" />
</template>
        `,
      },
    },
  },
};
