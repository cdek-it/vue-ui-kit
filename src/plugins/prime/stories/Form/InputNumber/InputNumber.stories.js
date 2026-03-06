import { Template } from './InputNumber.template';

export default {
  title: 'Prime/Form/InputNumber',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Currency = {
  render: Template.bind(),
  name: 'Currency',

  args: {
    mode: 'currency',
    currency: 'RUB',
    locale: 'ru-RU',
  },
};

export const PlusMinusButtons = {
  render: Template.bind(),
  name: 'Plus/Minus Buttons',

  args: {
    showButtons: true,
    buttonLayout: 'horizontal',
    story: 'Plus/Minus',
    incrementIcon: 'ti ti-plus',
    decrementIcon: 'ti ti-minus',
  },
};
