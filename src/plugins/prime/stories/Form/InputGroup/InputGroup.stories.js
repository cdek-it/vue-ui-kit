import InputGroup from 'primevue/inputgroup';
import { Template } from './InputGroup.template';

/**
 * Группа полей ввода для объединения с аддонами (иконками или текстом).
 */
const meta = {
  title: 'Prime/Form/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер группы полей ввода (влияет на паддинги и шрифты)',
      table: { category: 'Custom', defaultValue: { summary: 'medium' } },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки для InputText',
      table: { category: 'InputProps' },
    },
    leftIcon: {
      control: 'text',
      description: 'Класс иконки для левого аддона (например, "ti ti-user")',
      table: { category: 'Addons' },
    },
    leftText: {
      control: 'text',
      description: 'Текст для левого аддона (например, "@")',
      table: { category: 'Addons' },
    },
    rightIcon: {
      control: 'text',
      description: 'Класс иконки для правого аддона',
      table: { category: 'Addons' },
    },
    rightText: {
      control: 'text',
      description: 'Текст для правого аддона (например, "$")',
      table: { category: 'Addons' },
    },
    invalid: {
      control: 'boolean',
      description: 'Флаг ошибки',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает возможность ввода',
      table: { category: 'Props' },
    },
    readonly: {
      control: 'boolean',
      description: 'Поле только для чтения',
      table: { category: 'Props' },
    },
  },
  args: {
    size: 'medium',
    placeholder: 'Введите данные...',
    leftIcon: 'ti ti-user',
    leftText: '',
    rightIcon: '',
    rightText: '',
    invalid: false,
    disabled: false,
    readonly: false,
  },
};

export default meta;

export const Default = {
  render: Template,
};

export const WithText = {
  args: {
    leftIcon: '',
    leftText: '@',
    placeholder: 'Username',
  },
  render: Template,
};
