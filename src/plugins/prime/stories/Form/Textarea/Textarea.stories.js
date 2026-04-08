import Textarea from 'primevue/textarea';
import { Template, TemplateFloatLabel } from './Textarea.template';

/**
 * Компонент многострочного текстового ввода.
 */
const meta = {
  title: 'Prime/Form/Textarea',
  component: Textarea,
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
    autoResize: {
      control: 'boolean',
      description: 'Автоматическое изменение высоты при вводе',
      table: { category: 'Props' },
    },
    showClear: {
      control: 'boolean',
      description: 'Отображает иконку очистки содержимого поля',
      table: { category: 'Custom' },
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
    placeholder: {
      control: 'text',
      description: 'Текст подсказки внутри поля',
      table: { category: 'Props' },
    },
    rows: {
      control: 'number',
      description: 'Количество строк',
      table: { category: 'Props' },
    },
    cols: {
      control: 'number',
      description: 'Количество колонок',
      table: { category: 'Props' },
    },
  },
  args: {
    size: 'medium',
    placeholder: 'Input text here...',
    invalid: false,
    disabled: false,
    readonly: false,
    showClear: false,
    autoResize: false,
    rows: 4,
  },
};

export default meta;

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  render: Template,
};

export const FloatLabel = {
  render: TemplateFloatLabel,
  args: {
    placeholder: undefined,
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};
