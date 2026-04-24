import PrimeFloatLabel from 'primevue/floatlabel';
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
    clearable: {
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
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Вариант отображения поля',
      table: {
        category: 'Props',
        defaultValue: { summary: 'outlined' },
        type: { summary: "'outlined' | 'filled'" },
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
    clearable: true,
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
    components: { PBlockInputText, PrimeFloatLabel },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PrimeFloatLabel variant="in">
        <PBlockInputText
          id="fl-name"
          v-model="value"
          variant="filled"
          :clearable="args.clearable"
        />
        <label for="fl-name">Имя<span v-if="args.required" class="text-red-500 ml-0.5">*</span></label>
      </PrimeFloatLabel>
    `,
  }),
  args: {
    required: true,
    clearable: true,
  },
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Показывает маркер обязательного поля `*` рядом с меткой',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    clearable: {
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
  <FloatLabel variant="in">
    <PBlockInputText id="fl-name" v-model="value" variant="filled" />
    <label for="fl-name">Имя<span class="text-red-500 ml-0.5">*</span></label>
  </FloatLabel>
</template>
        `,
      },
    },
  },
};

export const FloatLabelInvalid = {
  name: 'FloatLabel + Invalid',
  render: (args) => ({
    components: { PBlockInputText, PrimeFloatLabel },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <PrimeFloatLabel variant="in">
        <PBlockInputText
          id="fl-invalid"
          v-model="value"
          variant="filled"
          invalid
          :clearable="args.clearable"
        />
        <label for="fl-invalid">Обязательное поле<span v-if="args.required" class="text-red-500 ml-0.5">*</span></label>
      </PrimeFloatLabel>
    `,
  }),
  args: {
    required: true,
    clearable: true,
  },
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Показывает маркер обязательного поля `*` рядом с меткой',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    clearable: {
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
  <FloatLabel variant="in">
    <PBlockInputText id="fl-invalid" v-model="value" variant="filled" invalid />
    <label for="fl-invalid">Обязательное поле<span class="text-red-500 ml-0.5">*</span></label>
  </FloatLabel>
</template>
        `,
      },
    },
  },
};
