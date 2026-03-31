import MultiSelect from 'primevue/multiselect';
import { Template, TemplateFloatLabel } from './MultiSelect.template';

/**
 * Компонент множественного выбора из списка.
 */
const meta = {
  title: 'Prime/Form/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер поля',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
      },
    },
    display: {
      control: 'select',
      options: ['comma', 'chip'],
      description: 'Способ отображения выбранных значений',
      table: {
        category: 'Props',
        defaultValue: { summary: 'comma' },
        type: { summary: "'comma' | 'chip'" },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Флаг невалидности поля (меняет цвет границ)',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность выбора',
      table: { category: 'Props' },
    },
    readonly: {
      control: 'boolean',
      description: 'Переводит поле в режим [только чтение]',
      table: { category: 'Props' },
    },
    loading: {
      control: 'boolean',
      description: 'Отображает индикатор загрузки',
      table: { category: 'Props' },
    },
    showClear: {
      control: 'boolean',
      description: 'Отображает иконку очистки выбранных значений',
      table: { category: 'Props' },
    },
    filter: {
      control: 'boolean',
      description: 'Добавляет поле поиска в выпадающий список',
      table: { category: 'Props' },
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
    display: 'comma',
    invalid: false,
    disabled: false,
    readonly: false,
    loading: false,
    showClear: true,
    filter: false,
    placeholder: 'Выберите значения',
    label: 'Значения',
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

export const Chips = {
  args: {
    display: 'chip',
  },
  render: Template,
  argTypes: {
    label: { table: { disable: true } },
    display: { table: { disable: true } },
  },
};

export const FloatLabel = {
  args: {
    placeholder: undefined,
  },
  render: TemplateFloatLabel,
  argTypes: {
    display: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    size: { table: { disable: true } },
  },
};
