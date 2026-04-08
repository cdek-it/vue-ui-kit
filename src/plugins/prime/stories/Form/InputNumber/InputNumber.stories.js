import InputNumber from 'primevue/inputnumber';
import { Template, TemplateFloatLabel } from './InputNumber.template';

/**
 * Компонент ввода числовых значений с кнопками увеличения/уменьшения.
 */
const meta = {
  title: 'Prime/Form/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер поля ввода',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Флаг невалидности поля (меняет цвет границ)',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность ввода в поле',
      table: { category: 'Props' },
    },
    readonly: {
      control: 'boolean',
      description: 'Переводит поле в режим [только чтение]',
      table: { category: 'Props' },
    },
    showButtons: {
      control: 'boolean',
      description: 'Отображает кнопки увеличения/уменьшения значения',
      table: { category: 'Props' },
    },
    buttonLayout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'stacked'],
      description: 'Расположение кнопок',
      table: {
        category: 'Props',
        defaultValue: { summary: 'stacked' },
        type: { summary: "'horizontal' | 'vertical' | 'stacked'" },
      },
    },
    mode: {
      control: 'select',
      options: ['decimal', 'currency'],
      description: 'Режим отображения значения',
      table: {
        category: 'Props',
        defaultValue: { summary: 'decimal' },
        type: { summary: "'decimal' | 'currency'" },
      },
    },
    currency: {
      control: 'text',
      description: 'Код валюты (ISO 4217), используется при mode="currency"',
      table: {
        category: 'Props',
        defaultValue: { summary: 'RUB' },
        type: { summary: 'string' },
      },
    },
    locale: {
      control: 'text',
      description: 'Локаль для форматирования числа',
      table: {
        category: 'Props',
        defaultValue: { summary: 'ru-RU' },
        type: { summary: 'string' },
      },
    },
    suffix: {
      control: 'text',
      description: 'Суффикс после значения (например, "%")',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    prefix: {
      control: 'text',
      description: 'Префикс перед значением',
      table: {
        category: 'Props',
        type: { summary: 'string' },
      },
    },
    min: {
      control: 'number',
      description: 'Минимально допустимое значение',
      table: {
        category: 'Props',
        type: { summary: 'number' },
      },
    },
    max: {
      control: 'number',
      description: 'Максимально допустимое значение',
      table: {
        category: 'Props',
        type: { summary: 'number' },
      },
    },
    step: {
      control: 'number',
      description: 'Шаг изменения значения',
      table: {
        category: 'Props',
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    minFractionDigits: {
      control: { type: 'number', min: 0, max: 20 },
      description: 'Минимальное количество знаков после запятой',
      table: {
        category: 'Props',
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    maxFractionDigits: {
      control: { type: 'number', min: 0, max: 20 },
      description: 'Максимальное количество знаков после запятой',
      table: {
        category: 'Props',
        defaultValue: { summary: '2' },
        type: { summary: 'number' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки внутри поля',
      table: { category: 'Props' },
    },
    label: {
      control: 'text',
      description: 'Текст плавающего лейбла',
      table: { category: 'Custom' },
    },
  },
  args: {
    size: 'medium',
    invalid: false,
    disabled: false,
    readonly: false,
    showButtons: true,
    buttonLayout: 'horizontal',
    mode: 'decimal',
    currency: 'RUB',
    locale: 'ru-RU',
    minFractionDigits: 0,
    maxFractionDigits: 20,
    placeholder: '0',
    label: 'Number',
  },
};

export default meta;

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
  argTypes: {
    label: { table: { disable: true } },
  },
};

export const FloatLabel = {
  args: {
    placeholder: undefined,
  },
  render: TemplateFloatLabel,
  argTypes: {
    showButtons: { table: { disable: true } },
    buttonLayout: { table: { disable: true } },
    placeholder: { table: { disable: true } },
  },
};

export const Currency = {
  args: {
    mode: 'currency',
    currency: 'RUB',
    locale: 'ru-RU',
  },
  render: Template,
  argTypes: {
    label: { table: { disable: true } },
    suffix: { table: { disable: true } },
    prefix: { table: { disable: true } },
    minFractionDigits: { table: { disable: true } },
    maxFractionDigits: { table: { disable: true } },
  },
};

export const MinMax = {
  name: 'Min/Max и Step',
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
  render: Template,
  argTypes: {
    label: { table: { disable: true } },
    mode: { table: { disable: true } },
    currency: { table: { disable: true } },
    locale: { table: { disable: true } },
    suffix: { table: { disable: true } },
    prefix: { table: { disable: true } },
  },
};
