import InputMask from 'primevue/inputmask';
import { BasicTemplate, FloatLabelTemplate } from './InputMask.template';

/**
 * Компонент текстового ввода по маске.
 */
const meta = {
  title: 'Prime/Form/InputMask',
  component: InputMask,
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
    mask: {
      control: 'text',
      description: 'Маска ввода (например, 99-99-99)',
      table: { category: 'Props' },
    },
    slotChar: {
      control: 'text',
      description: 'Символ-заполнитель для пустых позиций маски',
      table: { category: 'Props', defaultValue: { summary: '_' } },
    },
    unmask: {
      control: 'boolean',
      description:
        'Либо возвращать форматированную строку (false), либо чистые данные (true)',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
    showClear: {
      control: 'boolean',
      description: 'Отображает иконку очистки содержимого поля',
      table: { category: 'Custom' },
    },
    invalid: {
      control: 'boolean',
      description: 'Флаг невалидности поля',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность ввода',
      table: { category: 'Props' },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки',
      table: { category: 'Props' },
    },
    label: {
      control: 'text',
      description: 'Текст плавающего лейбла (только для стори FloatLabel)',
      table: { category: 'Custom' },
    },
  },
  args: {
    size: 'medium',
    mask: '99-99-99',
    slotChar: '_',
    unmask: false,
    showClear: true,
    invalid: false,
    disabled: false,
    placeholder: '99-99-99',
    label: 'Mask Label',
  },
};

export default meta;

export const Default = {
  render: BasicTemplate,
};

export const FloatLabel = {
  render: FloatLabelTemplate,
  args: {
    size: 'large',
    placeholder: undefined,
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};
