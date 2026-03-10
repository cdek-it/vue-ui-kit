import Button from 'primevue/button';

const SEVERITIES = ['danger', 'warn', 'success', 'info'];

const meta = {
  title: 'Prime/Buttons/Severity',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Семантические варианты кнопки (severity). [Figma](https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=4894122)',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-button' },
  },
  argTypes: {
    // ── Props ────────────────────────────────────────────────
    severity: {
      control: 'select',
      options: SEVERITIES,
      description: 'Семантический вариант кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'danger' },
        type: { summary: "'danger' | 'warn' | 'success' | 'info'" },
      },
    },
    label: {
      control: 'text',
      description: 'Текст кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: [null, 'outlined', 'text', 'link'],
      description: 'Вариант отображения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (filled)' },
        type: { summary: "'outlined' | 'text' | 'link'" },
      },
    },
    size: {
      control: 'select',
      options: ['small', null, 'large'],
      description: 'Размер кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (base)' },
        type: { summary: "'small' | 'large'" },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Скруглённая форма кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключённое состояние',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки с индикатором',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    // ── Events ───────────────────────────────────────────────
    onClick: {
      action: 'clicked',
      table: { category: 'Events' },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const ButtonDefault = {
  name: 'Button',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    label: 'Button',
    severity: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Базовый пример. Используйте Controls для переключения severity.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" severity="danger" />',
      tabs: [
        {
          label: 'Импорт',
          language: 'js',
          code: "import Button from 'primevue/button';",
        },
      ],
    },
  },
};

// ── Variations ────────────────────────────────────────────────────────────────

export const AllSeverities = {
  name: 'All Severities',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, severities: SEVERITIES };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-for="s in severities" :key="s" v-bind="args" :severity="s" :label="s" />
</div>
`,
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Все семантические варианты: `danger`, `warn`, `success`, `info`.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeButton label="danger" severity="danger" />
<PrimeButton label="warn" severity="warn" />
<PrimeButton label="success" severity="success" />
<PrimeButton label="info" severity="info" />`,
    },
  },
};

export const WithIcons = {
  name: 'With Icons',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" severity="danger" label="Button" icon="ti ti-arrow-down-right" />
  <Button v-bind="args" severity="warn" label="Button" icon="ti ti-alert-triangle" />
  <Button v-bind="args" severity="success" label="Button" icon="ti ti-check" />
  <Button v-bind="args" severity="info" label="Button" icon="ti ti-info-circle" />
</div>
`,
  }),
  args: {},
  parameters: {
    docs: {
      description: { story: 'Severity-варианты с иконками.' },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeButton label="Button" icon="ti ti-arrow-down-right" severity="danger" />
<PrimeButton label="Button" icon="ti ti-alert-triangle" severity="warn" />
<PrimeButton label="Button" icon="ti ti-check" severity="success" />
<PrimeButton label="Button" icon="ti ti-info-circle" severity="info" />`,
    },
  },
};

export const Disabled = {
  name: 'Disabled',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, severities: SEVERITIES };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-for="s in severities" :key="s" v-bind="args" :severity="s" :label="s" />
</div>
`,
  }),
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключённое состояние для всех severity-вариантов.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" severity="danger" disabled />',
    },
  },
};
