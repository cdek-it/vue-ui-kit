import PBlockInputText from '@/primeBlocks/PBlockInputText/PBlockInputText.vue';
import { ref } from 'vue';
import { Template } from './InputText.template';

/**
 * Компонент текстового ввода.
 */
const meta = {
  title: 'Prime/Form/InputText',
  component: PBlockInputText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Обёртка над PrimeVue InputText с поддержкой очистки, размеров и кастомной иконки.

\`\`\`js
import { PBlockInputText } from '@cdek-it/vue-ui-kit';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-inputtext' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large', 'xlarge'],
      description:
        'Размер поля. `xlarge` — кастомный размер, реализован через CSS-класс `p-inputtext-xlg`.',
      table: {
        category: 'Props',
        type: { summary: "'small' | 'large' | 'xlarge'" },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Показывает иконку очистки при наличии значения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Невалидное состояние',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает взаимодействие',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Только для чтения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Подсказка при пустом поле',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    hasFloatlabel: {
      control: 'boolean',
      description: 'Включает режим плавающей метки (FloatLabel)',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Текст плавающей метки (при `hasFloatlabel`)',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Показывает маркер обязательного поля `*` рядом с меткой',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    fluid: {
      control: 'boolean',
      description: 'Растягивает поле на всю ширину контейнера',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    placeholder: 'Введите текст...',
    showClear: true,
    hasFloatlabel: false,
    invalid: false,
    disabled: false,
    readonly: false,
    fluid: false,
  },
};

export default meta;

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'Базовый пример компонента. Используйте Controls для интерактивного изменения пропсов.',
      },
    },
  },
};

export const Disabled = {
  render: (args) => ({
    components: { PBlockInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PBlockInputText
        v-model="value"
        :placeholder="args.placeholder"
        disabled
      />
    `,
  }),
  args: {
    placeholder: 'Введите текст...',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Отключённое состояние.',
      },
      source: {
        code: `
<template>
  <PBlockInputText v-model="value" placeholder="Введите текст..." disabled />
</template>
        `,
      },
    },
  },
};

export const Readonly = {
  render: (args) => ({
    components: { PBlockInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PBlockInputText
        v-model="value"
        :placeholder="args.placeholder"
        readonly
      />
    `,
  }),
  args: {
    placeholder: 'Введите текст...',
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Режим только для чтения — поле отображает значение, но недоступно для редактирования.',
      },
      source: {
        code: `
<template>
  <PBlockInputText v-model="value" placeholder="Введите текст..." readonly />
</template>
        `,
      },
    },
  },
};

export const Invalid = {
  render: (args) => ({
    components: { PBlockInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PBlockInputText
        v-model="value"
        placeholder="Обязательное поле"
        invalid
      />
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Невалидное состояние.',
      },
      source: {
        code: `
<template>
  <PBlockInputText v-model="value" placeholder="Обязательное поле" invalid />
</template>
        `,
      },
    },
  },
};

export const FloatLabel = {
  render: (args) => ({
    components: { PBlockInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PBlockInputText
        v-model="value"
        hasFloatlabel
        :label="args.label"
        :required="args.required"
        :showClear="args.showClear"
      />
    `,
  }),
  args: {
    label: 'Имя',
    required: true,
    showClear: true,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст плавающей метки',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Показывает маркер обязательного поля `*` рядом с меткой',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Показывает иконку очистки при наличии значения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    size: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: 'Интеграция с `FloatLabel` — плавающая метка внутри поля.',
      },
      source: {
        code: `
<template>
  <PBlockInputText v-model="value" hasFloatlabel label="Имя" required />
</template>
        `,
      },
    },
  },
};

export const FloatLabelInvalid = {
  name: 'FloatLabel + Invalid',
  render: (args) => ({
    components: { PBlockInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PBlockInputText
        v-model="value"
        hasFloatlabel
        :label="args.label"
        :required="args.required"
        :showClear="args.showClear"
        invalid
      />
    `,
  }),
  args: {
    label: 'Обязательное поле',
    required: true,
    showClear: true,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст плавающей метки',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Показывает маркер обязательного поля `*` рядом с меткой',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Показывает иконку очистки при наличии значения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    size: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story:
          'FloatLabel с невалидным состоянием — демонстрирует стилизацию ошибки в комбинации с плавающей меткой.',
      },
      source: {
        code: `
<template>
  <PBlockInputText v-model="value" hasFloatlabel label="Обязательное поле" required invalid />
</template>
        `,
      },
    },
  },
};
