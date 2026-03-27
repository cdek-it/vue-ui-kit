import Password from 'primevue/password';
import {
  BasicTemplate,
  FloatLabelTemplate,
  CustomContentTemplate,
} from './Password.template';

/**
 * Компонент ввода пароля с индикатором сложности и переключением видимости.
 */
const meta = {
  title: 'Prime/Form/Password',
  component: Password,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Размер поля ввода',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
      },
    },
    toggleMask: {
      control: 'boolean',
      description: 'Отображает иконку переключения видимости пароля',
      table: { category: 'Props', defaultValue: { summary: 'false' } },
    },
    feedback: {
      control: 'boolean',
      description: 'Отображает панель индикатора сложности при фокусе',
      table: { category: 'Props', defaultValue: { summary: 'true' } },
    },
    promptLabel: {
      control: 'text',
      description: 'Текст заголовка панели подсказки',
      table: { category: 'Props' },
    },
    weakLabel: {
      control: 'text',
      description: 'Текст для слабого пароля',
      table: { category: 'Props' },
    },
    mediumLabel: {
      control: 'text',
      description: 'Текст для среднего пароля',
      table: { category: 'Props' },
    },
    strongLabel: {
      control: 'text',
      description: 'Текст для сильного пароля',
      table: { category: 'Props' },
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
      description: 'Текст плавающего лейбла (для FloatLabel)',
      table: { category: 'Custom' },
    },
  },
  args: {
    size: 'medium',
    toggleMask: true,
    feedback: true,
    promptLabel: 'Выберите пароль',
    weakLabel: 'Слишком простой',
    mediumLabel: 'Средний уровень',
    strongLabel: 'Надежный пароль',
    invalid: false,
    disabled: false,
    placeholder: 'Введите сюда пароль...',
    label: 'Пароль',
  },
};

export default meta;

export const Default = {
  render: BasicTemplate,
};

export const FloatLabel = {
  render: FloatLabelTemplate,
  args: {
    placeholder: undefined,
  },
};

export const CustomContent = {
  render: CustomContentTemplate,
  args: {
    feedback: true,
    toggleMask: true,
  },
};
