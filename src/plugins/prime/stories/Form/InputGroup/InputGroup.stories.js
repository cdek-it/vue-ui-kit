import { Template } from './InputGroup.template';

export default {
  title: 'Prime/Form/InputGroup',
};

export const LeftIcon = {
  render: Template.bind({}),
  name: 'LeftIcon',

  args: {
    icon: 'left',
  },
};

export const RightIcon = {
  render: Template.bind({}),
  name: 'RightIcon',

  args: {
    icon: 'right',
  },
};

export const BothIcons = {
  render: Template.bind({}),
  name: 'BothIcons',

  args: {
    icon: 'both',
  },
};
