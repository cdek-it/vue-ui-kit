import Button from 'primevue/button';
import OverlayBadge from 'primevue/overlaybadge';

const meta = {
  title: 'Prime/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Кнопка — базовый интерактивный элемент. [PrimeVue Button](https://primevue.org/button), [Figma Design](https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-Kit--DS--v2.0?node-id=160-5223)',
      },
    },
    designToken: { disable: false },
  },
  argTypes: {
    // ── Props ────────────────────────────────────────────────
    label: {
      control: 'text',
      description: 'Текст кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
    severity: {
      control: 'select',
      options: [
        null,
        'secondary',
        'contrast',
        'danger',
        'warn',
        'success',
        'info',
      ],
      description: 'Семантический вариант кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (primary)' },
        type: {
          summary:
            "'secondary' | 'contrast' | 'danger' | 'warn' | 'success' | 'info'",
        },
      },
    },
    variant: {
      control: 'select',
      options: [null, 'outlined', 'text', 'link'],
      description: 'Вариант отображения кнопки',
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
    icon: {
      control: 'text',
      description: 'CSS-класс иконки (например: ti ti-check)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Позиция иконки относительно текста',
      table: {
        category: 'Props',
        defaultValue: { summary: 'left' },
        type: { summary: "'left' | 'right' | 'top' | 'bottom'" },
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
  },
  parameters: {
    docs: {
      description: {
        story:
          'Базовый пример компонента. Используйте Controls для интерактивного изменения пропсов.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" />',
      tabs: [
        { label: 'npm', language: 'bash', code: 'npm install primevue' },
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

export const Sizes = {
  name: 'Sizes',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" size="small" />
  <Button v-bind="args" />
  <Button v-bind="args" size="large" />
  <Button v-bind="args" class="p-button-xlg" />
</div>
`,
  }),
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Все доступные размеры: `small`, `base` (default), `large`, `xlarge`.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeButton size="small" label="Button" />
<PrimeButton label="Button" />
<PrimeButton size="large" label="Button" />
<PrimeButton class="p-button-xlg" label="Button" />`,
    },
  },
};

export const Variant = {
  name: 'Variant',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" />
  <Button v-bind="args" variant="outlined" />
  <Button v-bind="args" variant="text" />
  <Button v-bind="args" variant="link" />
</div>
`,
  }),
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Варианты отображения: `filled` (default), `outlined`, `text`, `link`.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeButton label="Button" />
<PrimeButton label="Button" variant="outlined" />
<PrimeButton label="Button" variant="text" />
<PrimeButton label="Button" variant="link" />`,
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
  <Button v-bind="args" icon="ti ti-check" />
  <Button v-bind="args" icon="ti ti-check" label="Button" />
  <Button v-bind="args" label="Button" icon="ti ti-arrow-right" iconPos="right" />
</div>
`,
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Кнопки с иконками: `icon-only`, `prefix` (слева), `postfix` (справа).',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeButton icon="ti ti-check" />
<PrimeButton icon="ti ti-check" label="Button" />
<PrimeButton label="Button" icon="ti ti-arrow-right" iconPos="right" />`,
    },
  },
};

export const Rounded = {
  name: 'Rounded',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" size="small" />
  <Button v-bind="args" />
  <Button v-bind="args" size="large" />
  <Button v-bind="args" class="p-button-xlg" />
</div>
`,
  }),
  args: {
    label: 'Button',
    rounded: true,
  },
  parameters: {
    docs: {
      description: { story: 'Скруглённая форма кнопки во всех размерах.' },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" rounded />',
    },
  },
};

export const Disabled = {
  name: 'Disabled',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" />
  <Button v-bind="args" variant="outlined" />
  <Button v-bind="args" variant="text" />
  <Button v-bind="args" variant="link" />
</div>
`,
  }),
  args: {
    label: 'Button',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключённое состояние для всех вариантов отображения.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" disabled />',
    },
  },
};

export const Loading = {
  name: 'Loading',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
  <Button v-bind="args" size="small" />
  <Button v-bind="args" />
  <Button v-bind="args" size="large" />
  <Button v-bind="args" class="p-button-xlg" />
</div>
`,
  }),
  args: {
    label: 'Button',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние загрузки с индикатором во всех размерах.',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: '<PrimeButton label="Button" loading />',
    },
  },
};

export const Badge = {
  name: 'Badge',
  render: (args) => ({
    components: { Button, OverlayBadge },
    setup() {
      return { args };
    },
    template: `
<div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
  <OverlayBadge v-bind="args">
    <Button label="Button" size="small" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" size="large" />
  </OverlayBadge>
  <OverlayBadge v-bind="args">
    <Button label="Button" class="p-button-xlg" />
  </OverlayBadge>
</div>
`,
  }),
  args: {
    value: 'Badge',
    severity: 'danger',
  },
  argTypes: {
    value: { control: 'text' },
    severity: {
      control: 'inline-radio',
      options: [null, 'info', 'success', 'warn', 'danger'],
    },
  },
  parameters: {
    controls: { include: ['value', 'severity'] },
    docs: {
      description: {
        story:
          'Кнопка с бейджем. [PrimeVue OverlayBadge](https://primevue.org/badge/#overlay)',
      },
    },
    designToken: { disable: false },
    codeV2: {
      language: 'html',
      code: `<PrimeOverlayBadge value="Badge" severity="danger">
  <PrimeButton label="Button" />
</PrimeOverlayBadge>`,
      tabs: [
        {
          label: 'Импорт',
          language: 'js',
          code: "import Button from 'primevue/button';\nimport OverlayBadge from 'primevue/overlaybadge';",
        },
      ],
    },
  },
};
