import ExtraButton from './ExtraButton.vue';
import {
  Template,
  TemplateBadge,
  TemplateSeverity,
  TemplateSeverityDisabled,
} from './ExtraButton.template';

const meta = {
  title: 'Prime Blocks/ExtraButton',
  component: ExtraButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Кнопка — базовый интерактивный элемент. [PrimeVue Button](https://primevue.org/button), [Figma Design](https://www.figma.com/design/Q1BWgZ7zoV5UzlBOnjW0cM/UI-Kit--DS--v2.1?node-id=24040-56)',
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
      options: ['base', 'danger', 'warning', 'success', 'info'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'text', 'link'],
    },
    size: { control: 'select', options: ['small', 'base', 'large', 'xlarge'] },
    fluid: { control: 'boolean' },
    icon: {
      control: 'text',
      description: 'CSS-класс иконки (например: ti ti-check)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'undefined' },
        type: { summary: 'string' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Позиция иконки относительно текста',
      table: {
        category: 'Props',
        defaultValue: { summary: 'left' },
        type: { summary: "'left' | 'right'" },
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
    components: { ExtraButton },
    setup() {
      return { args };
    },
    template: '<ExtraButton v-bind="args" />',
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
  <ExtraButton label="Button" />
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
    <ExtraButton label="Button" icon="ti ti-check" size="small" />
    <ExtraButton label="Button" icon="ti ti-check" />
    <ExtraButton label="Button" icon="ti ti-check" size="large" />
    <ExtraButton label="Button" icon="ti ti-check" size="xlarge" />
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
    <ExtraButton label="Button" loading size="small" />
    <ExtraButton label="Button" loading />
    <ExtraButton label="Button" loading size="large" />
    <ExtraButton label="Button" loading size="xlarge" />
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
    <ExtraButton label="Button" variant="link" size="small" />
    <ExtraButton label="Button" variant="link" />
    <ExtraButton label="Button" variant="link" size="large" />
    <ExtraButton label="Button" variant="link" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Severity = {
  render: TemplateSeverity,
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <!-- Пример для Success. Аналогично для info, warn, danger -->
  <div class="flex items-center gap-4">
    <ExtraButton label="Button" severity="success" size="small" />
    <ExtraButton label="Button" severity="success" />
    <ExtraButton label="Button" severity="success" size="large" />
    <ExtraButton label="Button" severity="success" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const SeverityText = {
  render: TemplateSeverity,
  args: {
    variant: 'text',
    disabled: false,
    loading: false,
  },
};

export const Disabled = {
  render: TemplateSeverityDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <ExtraButton label="Button" disabled />
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
    <ExtraButton label="Button" rounded size="small" />
    <ExtraButton label="Button" rounded />
    <ExtraButton label="Button" rounded size="large" />
    <ExtraButton label="Button" rounded size="xlarge" />
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
    <ExtraButton label="Button" variant="text" size="small" />
    <ExtraButton label="Button" variant="text" />
    <ExtraButton label="Button" variant="text" size="large" />
    <ExtraButton label="Button" variant="text" size="xlarge" />
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
    <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="small" />
    <ExtraButton aria-label="Подтвердить" icon="ti ti-check" />
    <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="large" />
    <ExtraButton aria-label="Подтвердить" icon="ti ti-check" size="xlarge" />
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
  <div class="flex items-center gap-8">
    <OverlayBadge value="8" severity="danger">
      <ExtraButton label="Button" size="small" />
    </OverlayBadge>

    <OverlayBadge value="8" severity="danger">
      <ExtraButton label="Button" />
    </OverlayBadge>

    <OverlayBadge value="8" severity="danger">
      <ExtraButton label="Button" size="large" />
    </OverlayBadge>

    <OverlayBadge value="8" severity="danger">
      <ExtraButton label="Button" size="xlarge" />
    </OverlayBadge>
  </div>
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
    <ExtraButton label="Button" size="small" />
    <ExtraButton label="Button" />
    <ExtraButton label="Button" size="large" />
    <ExtraButton label="Button" size="xlarge" />
  </div>
</template>
        `,
      },
    },
  },
};

export const CustomIcon = {
  render: () => ({
    components: { ExtraButton },
    template: `
      <ExtraButton label="Сохранить" icon-position="right">
        <template #icon="{ class: iconClass }">
          <i :class="[iconClass, 'ti ti-check']" aria-hidden="true" />
        </template>
      </ExtraButton>
    `,
  }),
};

export const Variants = {
  render: () => ({
    components: { ExtraButton },
    setup: () => ({
      variants: ['primary', 'secondary', 'tertiary', 'text', 'link'],
      sizes: ['small', 'base', 'large', 'xlarge'],
    }),
    template: `
      <div style="display: grid; gap: 1rem">
        <section v-for="variant in variants" :key="variant">
          <h3>{{ variant }}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 1rem">
            <ExtraButton v-for="size in sizes" :key="size" :variant="variant"
              :size="size" label="Button" />
            <ExtraButton :variant="variant" label="Button" disabled />
            <ExtraButton :variant="variant" label="Button" loading />
            <ExtraButton :variant="variant" icon="ti ti-check" aria-label="Подтвердить" />
          </div>
        </section>
      </div>
    `,
  }),
};
