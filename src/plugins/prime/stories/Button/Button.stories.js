import Button from 'primevue/button';
import {
  Template,
  TemplateBadge,
  TemplateSeverity,
  TemplateSeverityDisabled,
} from './Button.template';

const meta = {
  title: 'Prime/Button',
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
    designTokens: { prefix: '--p-button' },
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

// ── Stories ──────────────────────────────────────────────────────────────────

export const Icons = {
  render: Template,
  args: {
    label: 'Button',
    icon: 'ti ti-check',
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопки с иконками (префикс по умолчанию).',
      },
    },
  },
};

export const Loading = {
  render: Template,
  args: {
    label: 'Button',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние загрузки с индикатором.',
      },
    },
  },
};

export const Link = {
  render: Template,
  args: {
    label: 'Link Button',
    variant: 'link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопка в виде ссылки.',
      },
    },
  },
};

export const Severity = {
  render: TemplateSeverity,
};

export const Disabled = {
  render: TemplateSeverityDisabled,
};

export const Rounded = {
  render: Template,
  args: {
    label: 'Button',
    rounded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Скруглённая форма кнопок.',
      },
    },
  },
};

export const Text = {
  render: Template,
  args: {
    label: 'Button',
    variant: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Текстовый вариант кнопки (без заливки и границ).',
      },
    },
  },
};

export const IconOnly = {
  render: Template,
  args: {
    icon: 'ti ti-check',
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопки без текста, только с иконкой.',
      },
    },
  },
};

export const Badge = {
  render: TemplateBadge,
  args: {
    value: '8',
    severity: 'danger',
  },
};

export const Sizes = {
  render: Template,
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры: small, base, large, xlg.',
      },
    },
  },
};
