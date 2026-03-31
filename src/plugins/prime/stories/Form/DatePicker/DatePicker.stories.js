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
};

export const ClearIcon = {
  render: ClearIconTemplate.bind({}),
};
