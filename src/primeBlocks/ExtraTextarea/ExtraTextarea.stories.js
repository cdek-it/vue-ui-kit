import ExtraTextarea from './ExtraTextarea.vue';
import { ref } from 'vue';
import { extraTextareaSpec } from './spec';
import { buildStoryParameters } from '../storybook/storyMeta';
import { getFieldVisualCases } from '../storybook/visualAudit';

export default {
  title: 'Prime Blocks/ExtraTextarea',
  component: ExtraTextarea,
  tags: ['autodocs'],
  parameters: buildStoryParameters(extraTextareaSpec),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      table: {
        category: 'Props',
        type: { summary: "'sm' | 'base' | 'lg'" },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['default', 'float', 'left'],
      table: {
        category: 'Props',
        defaultValue: { summary: 'default' },
        type: { summary: "'default' | 'float' | 'left'" },
      },
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical'],
      table: {
        category: 'Props',
        defaultValue: { summary: 'none' },
        type: { summary: "'none' | 'vertical'" },
      },
    },
    autoResize: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readonly: { control: 'boolean', table: { category: 'Props' } },
    required: { control: 'boolean', table: { category: 'Props' } },
    fluid: { control: 'boolean', table: { category: 'Props' } },
    placeholder: { control: 'text', table: { category: 'Props' } },
    label: { control: 'text', table: { category: 'Props' } },
    caption: { control: 'text', table: { category: 'Props' } },
    info: { control: 'text', table: { category: 'Props' } },
    rows: { control: 'number', table: { category: 'Props' } },
    cols: { control: 'number', table: { category: 'Props' } },
  },
  args: {
    label: 'Описание',
    placeholder: 'Введите текст...',
    rows: 4,
    labelPosition: 'default',
    size: 'base',
    resize: 'none',
    invalid: false,
    disabled: false,
    readonly: false,
    required: false,
    autoResize: false,
    fluid: false,
    caption: '',
    info: '',
  },
};

export const VisualAudit = {
  render: () => ({
    components: { ExtraTextarea },
    setup: () => ({ cases: getFieldVisualCases() }),
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr)); gap: 24px;">
        <section v-for="item in cases" :key="item.id" :data-visual-case="item.id" :data-visual-state="item.state">
          <p>{{ item.id }}</p>
          <ExtraTextarea
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

export const Default = {
  name: '01. Playground',
  render: (args) => ({
    components: { ExtraTextarea },
    setup() {
      const value = ref('');

      return { args, value };
    },
    template: `
      <ExtraTextarea
        v-bind="args"
        v-model="value"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Интерактивный пример для проверки основных props через Controls.',
      },
    },
  },
};

export const LabelPositions = {
  name: '02. Label positions',
  render: () => ({
    components: { ExtraTextarea },
    setup() {
      const values = ref({
        default: '',
        float: 'Текст с плавающим label',
        left: '',
      });

      return { values };
    },
    template: `
      <div style="display: grid; gap: 1rem; max-width: 40rem;">
        <h3 style="margin: 0;">labelPosition="default"</h3>
        <ExtraTextarea
          v-model="values.default"
          label="Default label"
          placeholder="Введите текст..."
          rows="3"
        />
        <h3 style="margin: 0;">labelPosition="float"</h3>
        <ExtraTextarea
          v-model="values.float"
          label="Float label"
          label-position="float"
          placeholder="Введите текст..."
          rows="3"
        />
        <h3 style="margin: 0;">labelPosition="left"</h3>
        <ExtraTextarea
          v-model="values.left"
          label="Left label"
          label-position="left"
          placeholder="Введите текст..."
          rows="3"
        />
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Все варианты расположения label: default, float и left.',
      },
    },
  },
};

export const Sizes = {
  name: '03. Sizes',
  render: () => ({
    components: { ExtraTextarea },
    setup() {
      const values = ref({
        sm: '',
        base: '',
        lg: '',
      });

      return { values };
    },
    template: `
      <div style="display: grid; gap: 1rem; max-width: 32rem;">
        <h3 style="margin: 0;">size="sm"</h3>
        <ExtraTextarea
          v-model="values.sm"
          label="Small"
          size="sm"
          placeholder="Введите текст..."
          rows="3"
        />
        <h3 style="margin: 0;">size="base"</h3>
        <ExtraTextarea
          v-model="values.base"
          label="Base"
          size="base"
          placeholder="Введите текст..."
          rows="3"
        />
        <h3 style="margin: 0;">size="lg"</h3>
        <ExtraTextarea
          v-model="values.lg"
          label="Large"
          size="lg"
          placeholder="Введите текст..."
          rows="3"
        />
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Размеры поля textarea: sm, base и lg.',
      },
    },
  },
};

export const States = {
  name: '04. States',
  render: () => ({
    components: { ExtraTextarea },
    setup() {
      const values = ref({
        default: '',
        invalid: '',
        disabled: 'Недоступное значение',
        readonly: 'Значение только для чтения',
      });

      return { values };
    },
    template: `
      <div style="display: grid; gap: 1rem; max-width: 32rem;">
        <h3 style="margin: 0;">default</h3>
        <ExtraTextarea
          v-model="values.default"
          label="Default"
          caption="Дополнительная подсказка"
          rows="3"
        />
        <h3 style="margin: 0;">invalid</h3>
        <ExtraTextarea
          v-model="values.invalid"
          label="Invalid"
          caption="Поле заполнено некорректно"
          invalid
          rows="3"
        />
        <h3 style="margin: 0;">disabled</h3>
        <ExtraTextarea
          v-model="values.disabled"
          label="Disabled"
          disabled
          rows="3"
        />
        <h3 style="margin: 0;">readonly</h3>
        <ExtraTextarea
          v-model="values.readonly"
          label="Readonly"
          readonly
          rows="3"
        />
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Основные состояния: default, invalid, disabled и readonly.',
      },
    },
  },
};

export const Resize = {
  name: '05. Resize behavior',
  render: () => ({
    components: { ExtraTextarea },
    setup() {
      const fixed = ref('');
      const vertical = ref('');
      const auto = ref('Первая строка');

      return { auto, fixed, vertical };
    },
    template: `
      <div style="display: grid; gap: 1rem; max-width: 32rem;">
        <h3 style="margin: 0;">resize="none"</h3>
        <ExtraTextarea
          v-model="fixed"
          label="Resize none"
          resize="none"
          placeholder="Размер зафиксирован"
          rows="3"
        />
        <h3 style="margin: 0;">resize="vertical"</h3>
        <ExtraTextarea
          v-model="vertical"
          label="Resize vertical"
          resize="vertical"
          placeholder="Можно менять высоту"
          rows="3"
        />
        <h3 style="margin: 0;">auto-resize</h3>
        <ExtraTextarea
          v-model="auto"
          label="Auto resize"
          auto-resize
          resize="none"
          rows="2"
        />
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Поведение высоты: fixed, ручной vertical resize и autoResize.',
      },
    },
  },
};

export const Custom = {
  name: '06. Custom caption slot',
  render: (args) => ({
    components: { ExtraTextarea },
    setup() {
      const value = ref('Текст обращения');

      return { args, value };
    },
    template: `
      <ExtraTextarea
        v-bind="args"
        v-model="value"
      >
        <template #caption>
          <span>Минимум 20 символов</span>
        </template>
      </ExtraTextarea>
    `,
  }),
  args: {
    label: 'Комментарий',
    labelPosition: 'float',
    placeholder: 'Опишите ситуацию',
    invalid: true,
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример пользовательского caption slot с сохранением поведения wrapper.',
      },
    },
  },
};
