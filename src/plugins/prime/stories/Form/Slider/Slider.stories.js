import { Template } from './Slider.template';

export default {
  title: 'Prime/Form/Slider',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Range = {
  render: Template.bind({}),
  name: 'Range',

  args: {
    range: true,
    defaultValue: [20, 80],
  },
};
