import { Template } from './MultiSelect.template';

export default {
  title: 'Prime/Form/MultiSelect',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Chips = {
  render: Template.bind({}),
  name: 'Chips',

  args: {
    display: 'chip',
  },
};
