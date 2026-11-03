import ExtraInputText from './ExtraInputText.vue';
import { ref } from 'vue';
import { extraInputTextSpec } from './spec';
import { buildStoryParameters } from '../storybook/storyMeta';
import { getFieldVisualCases } from '../storybook/visualAudit';

/**
 * Компонент текстового ввода.
 */
const meta = {
  title: 'Prime Blocks/ExtraInputText',
  component: ExtraInputText,
  tags: ['autodocs'],
  parameters: buildStoryParameters(extraInputTextSpec),
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
      options: ['default', 'float'],
      description: 'Положение лейбла по спецификации',
      table: {
        category: 'Props',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'float'" },
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

export const VisualAudit = {
  render: () => ({
    components: { ExtraInputText },
    setup: () => ({ cases: getFieldVisualCases() }),
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr)); gap: 24px;">
        <section v-for="item in cases" :key="item.id" :data-visual-case="item.id" :data-visual-state="item.state">
          <p>{{ item.id }}</p>
          <ExtraInputText
            :model-value="item.value"
            :label-position="item.labelPosition"
            :placeholder="item.placeholder"
            :invalid="item.invalid"
            :disabled="item.disabled"
            :readonly="item.readonly"
            label="FloatLabel"
            caption="Caption"
          />
        </section>
      </div>
    `,
  }),
  parameters: { controls: { disable: true } },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Sizes = {
  render: () => ({
    components: { ExtraInputText },
    setup: () => ({
      sizes: ['sm', 'base', 'lg', 'xlg'],
      positions: ['default', 'float'],
    }),
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr)); gap: 24px;">
        <template v-for="size in sizes" :key="size">
          <section v-for="position in positions" :key="position" :data-visual-case="size + '-' + position">
            <p>{{ size }} / {{ position }}</p>
            <ExtraInputText
              :size="size"
              :label-position="position"
              model-value="InputText"
              label="Label"
              placeholder="Placeholder"
            />
          </section>
        </template>
      </div>
    `,
  }),
  parameters: { controls: { disable: true } },
};

export const Default = {
  render: (args) => ({
    components: { ExtraInputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <ExtraInputText
        v-model="value"
        :size="args.size"
        :clearable="args.clearable"
        :label-position="args.labelPosition"
        :label="args.label"
        :caption="args.caption"
        :info="args.info"
        :required="args.required"
        :invalid="args.invalid"
        :disabled="args.disabled"
        :readonly="args.readonly"
        :placeholder="args.placeholder"
        :fluid="args.fluid"
      />
    `,
  }),
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
