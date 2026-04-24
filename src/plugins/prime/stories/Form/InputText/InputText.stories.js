import InputText from 'primevue/inputtext';
import PrimeFloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import PBlockInputText from '@/primeBlocks/PBlockInputText/PBlockInputText.vue';
import { ref } from 'vue';
import { Template } from './InputText.template';

const CLEAR_BUTTON_SOURCE =
  `
<script setup>
import { PBlockInputText } from '@cdek-it/vue-ui-kit';

const model = defineModel({ default: '' });
</` +
  `script>

<template>
  <PBlockInputText v-model="model" placeholder="Введите текст..." />
</template>
`;

/**
 * Компонент текстового ввода.
 */
const meta = {
  title: 'Prime/Form/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Текстовое поле для ввода данных.

\`\`\`js
import InputText from 'primevue/inputtext';
\`\`\``,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-inputtext' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'base', 'large', 'xlarge'],
      description: 'Размер поля',
      table: {
        category: 'Props',
        defaultValue: { summary: 'base' },
        type: { summary: "'small' | 'base' | 'large' | 'xlarge'" },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Показывает иконку очистки при наличии значения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
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
    size: 'base',
    placeholder: 'Введите текст...',
    invalid: false,
    disabled: false,
    readonly: false,
    showClear: false,
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

export const ClearButton = {
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
      />
    `,
  }),
  args: {
    showClear: true,
    placeholder: 'Введите текст...',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Поле с кнопкой очистки через `PBlockInputText`. Иконка × появляется при вводе первого символа.',
      },
      source: {
        code: CLEAR_BUTTON_SOURCE,
        language: 'vue',
      },
    },
  },
  argTypes: {
    size: { table: { disable: true } },
    showClear: { table: { disable: true } },
    invalid: { table: { disable: true } },
    disabled: { table: { disable: true } },
    readonly: { table: { disable: true } },
    fluid: { table: { disable: true } },
  },
};

export const Disabled = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputText
        v-model="value"
        :placeholder="args.placeholder"
        disabled
        style="width: 100%"
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
  <InputText v-model="value" placeholder="Введите текст..." disabled />
</template>
        `,
      },
    },
  },
};

export const Readonly = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputText
        v-model="value"
        :placeholder="args.placeholder"
        readonly
        style="width: 100%"
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
  <InputText v-model="value" placeholder="Введите текст..." readonly />
</template>
        `,
      },
    },
  },
};

export const Invalid = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputText
        v-model="value"
        placeholder="Обязательное поле"
        invalid
        style="width: 100%"
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
  <InputText v-model="value" placeholder="Обязательное поле" invalid />
</template>
        `,
      },
    },
  },
};

export const FloatLabel = {
  render: (args) => ({
    components: { InputText, PrimeFloatLabel, IconField, InputIcon },
    setup() {
      const value = ref('');
      const onClear = () => {
        value.value = '';
      };
      return { args, value, onClear };
    },
    template: `
      <PrimeFloatLabel variant="in">
        <IconField v-if="args.showClear" style="width: 100%">
          <InputText
            id="fl-name"
            v-model="value"
            variant="filled"
            style="width: 100%"
          />
          <InputIcon v-if="value" @click.stop="onClear" style="cursor: pointer; z-index: 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
          </InputIcon>
        </IconField>
        <InputText
          v-else
          id="fl-name"
          v-model="value"
          variant="filled"
          style="width: 100%"
        />
        <label for="fl-name">Имя<span v-if="args.required" class="text-red-500 ml-0.5">*</span></label>
      </PrimeFloatLabel>
    `,
  }),
  args: {
    required: true,
    showClear: true,
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
  <FloatLabel variant="in">
    <IconField style="width: 100%">
      <InputText id="fl-name" v-model="value" variant="filled" style="width: 100%" />
      <InputIcon v-if="value" @click.stop="value = ''">
        <XIcon />
      </InputIcon>
    </IconField>
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
    components: { InputText, PrimeFloatLabel, IconField, InputIcon },
    setup() {
      const value = ref('');
      const onClear = () => {
        value.value = '';
      };
      return { args, value, onClear };
    },
    template: `
      <PrimeFloatLabel variant="in">
        <IconField v-if="args.showClear" style="width: 100%">
          <InputText
            id="fl-invalid"
            v-model="value"
            variant="filled"
            invalid
            style="width: 100%"
          />
          <InputIcon v-if="value" @click.stop="onClear" style="cursor: pointer; z-index: 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
          </InputIcon>
        </IconField>
        <InputText
          v-else
          id="fl-invalid"
          v-model="value"
          variant="filled"
          invalid
          style="width: 100%"
        />
        <label for="fl-invalid">Обязательное поле<span v-if="args.required" class="text-red-500 ml-0.5">*</span></label>
      </PrimeFloatLabel>
    `,
  }),
  args: {
    required: true,
    showClear: true,
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
  <FloatLabel variant="in">
    <IconField style="width: 100%">
      <InputText id="fl-invalid" v-model="value" variant="filled" invalid style="width: 100%" />
      <InputIcon v-if="value" @click.stop="value = ''">
        <XIcon />
      </InputIcon>
    </IconField>
    <label for="fl-invalid">Обязательное поле<span class="text-red-500 ml-0.5">*</span></label>
  </FloatLabel>
</template>
        `,
      },
    },
  },
};
