import PBlockDatePicker from '@/primeBlocks/PBlockDatePicker/PBlockDatePicker.vue';
import {
  BasicTemplate,
  RangeTemplate,
  TimeTemplate,
  ButtonBarTemplate,
  InlineTemplate,
  MonthPickerTemplate,
  YearPickerTemplate,
  FloatLabelTemplate,
  ClearIconTemplate,
} from './DatePicker.template';

export default {
  title: 'Prime/Form/DatePicker',
  component: PBlockDatePicker,
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
    label: {
      control: 'text',
      description: 'Текст плавающего лейбла',
      table: { category: 'Custom' },
    },
  },
  args: {
    size: 'medium',
    placeholder: '',
    invalid: false,
    disabled: false,
    readonly: false,
    showClear: true,
    label: 'Выберите дату',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Компонент выбора даты и времени. [PrimeVue DatePicker](https://primevue.org/datepicker), [Макет](https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5726)',
      },
    },
    designTokens: {
      prefix: '--p-datepicker',
    },
  },
};

export const Basic = {
  render: BasicTemplate.bind({}),
};

export const Range = {
  render: RangeTemplate.bind({}),
};

export const Time = {
  render: TimeTemplate.bind({}),
};

export const ButtonBar = {
  render: ButtonBarTemplate.bind({}),
};

export const Inline = {
  render: InlineTemplate.bind({}),
};

export const MonthPicker = {
  render: MonthPickerTemplate.bind({}),
};

export const YearPicker = {
  render: YearPickerTemplate.bind({}),
};

export const FloatLabel = {
  render: FloatLabelTemplate.bind({}),
  args: {
    size: 'large',
    placeholder: undefined,
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};

export const ClearIcon = {
  render: ClearIconTemplate.bind({}),
};
