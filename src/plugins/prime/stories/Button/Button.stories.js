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
      source: {
        code: `
<template>
  <Button label="Button" />
</template>
        `,
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
        story: 'Кнопки с иконками (префикс по умолчанию).',
      },
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" icon="ti ti-check" size="small" />
    <Button label="Button" icon="ti ti-check" />
    <Button label="Button" icon="ti ti-check" size="large" />
    <Button label="Button" icon="ti ti-check" class="p-button-xlg" />
  </div>
</template>
        `,
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
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" loading size="small" />
    <Button label="Button" loading />
    <Button label="Button" loading size="large" />
    <Button label="Button" loading class="p-button-xlg" />
  </div>
</template>
        `,
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
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" variant="link" size="small" />
    <Button label="Button" variant="link" />
    <Button label="Button" variant="link" size="large" />
    <Button label="Button" variant="link" class="p-button-xlg" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Severity = {
  render: TemplateSeverity,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <!-- Пример для Success. Аналогично для info, warn, danger -->
  <div class="flex items-center gap-4">
    <Button label="Button" severity="success" size="small" />
    <Button label="Button" severity="success" />
    <Button label="Button" severity="success" size="large" />
    <Button label="Button" severity="success" class="p-button-xlg" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Disabled = {
  render: TemplateSeverityDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Button label="Button" disabled />
</template>
        `,
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
        story: 'Скруглённая форма кнопок.',
      },
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" rounded size="small" />
    <Button label="Button" rounded />
    <Button label="Button" rounded size="large" />
    <Button label="Button" rounded class="p-button-xlg" />
  </div>
</template>
        `,
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
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" variant="text" size="small" />
    <Button label="Button" variant="text" />
    <Button label="Button" variant="text" size="large" />
    <Button label="Button" variant="text" class="p-button-xlg" />
  </div>
</template>
        `,
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
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button icon="ti ti-check" size="small" />
    <Button icon="ti ti-check" />
    <Button icon="ti ti-check" size="large" />
    <Button icon="ti ti-check" class="p-button-xlg" />
  </div>
</template>
        `,
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
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <OverlayBadge value="8" severity="danger">
    <Button label="Button" />
  </OverlayBadge>
</template>
        `,
      },
    },
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
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Button label="Button" size="small" />
    <Button label="Button" />
    <Button label="Button" size="large" />
    <Button label="Button" class="p-button-xlg" />
  </div>
</template>
        `,
      },
    },
  },
};
