import ExtraInputText from '@/primeBlocks/ExtraInputText/ExtraInputText.vue';
import { ref } from 'vue';
import { Template } from './InputText.template';

/**
 * Компонент текстового ввода.
 */
const meta = {
  title: 'Prime/Form/ExtraInputText',
  component: ExtraInputText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Обёртка над PrimeVue InputText с поддержкой очистки, размеров и кастомной иконки.

\`\`\`js
import { ExtraInputText } from '@cdek-it/vue-ui-kit';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-inputtext' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg', 'xlg'],
      description: 'Размер поля по дизайн-спеке.',
      table: {
        category: 'Props',
        type: { summary: "'sm' | 'base' | 'lg' | 'xlg'" },
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
    labelPosition: {
      control: 'select',
      options: ['default', 'float', 'left'],
      description: 'Положение лейбла по спецификации',
      table: {
        category: 'Props',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'float' | 'left'" },
      },
    },
    label: {
      control: 'text',
      description: 'Текст названия поля',
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
    caption: {
      control: 'text',
      description: 'Текст пояснения под полем',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    info: {
      control: 'text',
      description: 'Дополнительная информация в tooltip иконки',
      table: {
        category: 'Props',
        type: { summary: 'string' },
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
    labelPosition: 'default',
    size: 'base',
    invalid: false,
    disabled: false,
    readonly: false,
    caption: '',
    info: '',
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
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
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
  <ExtraInputText v-model="value" placeholder="Введите текст..." disabled />
</template>
        `,
      },
    },
  },
};

export const Readonly = {
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
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
  <ExtraInputText v-model="value" placeholder="Введите текст..." readonly />
</template>
        `,
      },
    },
  },
};

export const Invalid = {
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
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
  <ExtraInputText v-model="value" placeholder="Обязательное поле" invalid />
</template>
        `,
      },
    },
  },
};

export const FloatLabel = {
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
        v-model="value"
        label-position="float"
        :label="args.label"
        :required="args.required"
        :clearable="args.clearable"
      />
    `,
  }),
  args: {
    label: 'Имя',
    required: true,
    clearable: true,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст названия поля',
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
    labelPosition: { table: { disable: true } },
    caption: { table: { disable: true } },
    info: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `Сценарий \`label-position="float"\` — лейбл расположен внутри поля.

Можно также использовать \`FloatLabel\` и \`ExtraInputText\` напрямую:

\`\`\`vue
<FloatLabel variant="in">
  <ExtraInputText id="name" v-model="value" variant="filled" />
  <label for="name">Имя<span class="text-red-500">*</span></label>
</FloatLabel>
\`\`\``,
      },
      source: {
        code: `
<template>
  <ExtraInputText v-model="value" label-position="float" label="Имя" required />
</template>
        `,
      },
    },
  },
};

export const FloatLabelInvalid = {
  name: 'FloatLabel + Invalid',
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
        v-model="value"
        label-position="float"
        :label="args.label"
        :required="args.required"
        :clearable="args.clearable"
        invalid
      />
    `,
  }),
  args: {
    label: 'Обязательное поле',
    required: true,
    clearable: true,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст названия поля',
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
    labelPosition: { table: { disable: true } },
    caption: { table: { disable: true } },
    info: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: 'Сценарий `label-position="float"` с невалидным состоянием.',
      },
      source: {
        code: `
<template>
  <ExtraInputText v-model="value" label-position="float" label="Обязательное поле" required invalid />
</template>
        `,
      },
    },
  },
};

export const LeftLabelWithMeta = {
  name: 'Left Label + Caption + Info',
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
        v-model="value"
        label-position="left"
        :label="args.label"
        :caption="args.caption"
        :info="args.info"
        :placeholder="args.placeholder"
        :clearable="args.clearable"
        :size="args.size"
      />
    `,
  }),
  args: {
    label: 'Телефон',
    caption: 'Формат: +7 (XXX) XXX-XX-XX',
    info: 'Используется для связи с получателем',
    placeholder: '+7 (900) 000-00-00',
    clearable: true,
    size: 'base',
  },
  argTypes: {
    labelPosition: { table: { disable: true } },
    required: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Сценарий по спецификации с левым лейблом, подписью под полем и инфо-иконкой.',
      },
      source: {
        code: `
<template>
  <ExtraInputText
    v-model="value"
    label-position="left"
    label="Телефон"
    caption="Формат: +7 (XXX) XXX-XX-XX"
    info="Используется для связи с получателем"
    placeholder="+7 (900) 000-00-00"
  />
</template>
        `,
      },
    },
  },
};
