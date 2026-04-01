import Button from 'primevue/button';
import { Template, TemplateBadge, TemplateSeverity } from './Button.template';

const meta = {
  title: 'Prime/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Интерактивный элемент интерфейса. Используется для инициации действий, отправки форм и навигации.',
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
      options: [null, 'text', 'link'],
      description: 'Вариант отображения кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (filled)' },
        type: { summary: "'text' | 'link'" },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'base', 'large', 'xlarge'],
      mapping: {
        base: null,
      },
      description: 'Размер кнопки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'base' },
        type: { summary: "'small' | 'base' | 'large' | 'xlarge'" },
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
    // ── Badge ────────────────────────────────────────────────
    value: {
      control: 'text',
      description: 'Значение бэйджа',
      table: {
        category: 'Badge',
        type: { summary: 'string' },
      },
    },
    badgeSeverity: {
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
      description: 'Цвет бэйджа',
      table: {
        category: 'Badge',
        type: { summary: 'string' },
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
        story: 'Кнопка с иконкой.',
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
        story: 'Состояние загрузки.',
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
  args: {
    label: 'Button',
    severity: 'success',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Кнопка с определённым семантическим вариантом. Используйте Controls для смены severity.',
      },
    },
  },
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
        story: 'Кнопка со скруглением.',
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
        story: 'Текстовый вариант кнопки.',
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
        story: 'Кнопка с иконкой без текста.',
      },
    },
  },
};

export const Badge = {
  render: TemplateBadge,
  args: {
    label: 'Button',
    value: '8',
    badgeSeverity: 'danger',
  },
  parameters: {
    docs: {},
  },
};

export const Sizes = {
  render: Template,
  args: {
    label: 'Button',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация размеров. Используйте Controls для смены size.',
      },
    },
  },
};
