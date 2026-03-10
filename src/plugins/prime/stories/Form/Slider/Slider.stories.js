import { Template } from './Slider.template';

export default {
  title: 'Prime/Form/Slider',
};

export const Primary = {
  render: Template.bind({}),
};

export const Range = {
  render: Template.bind({}),

  args: {
    range: true,
    defaultValue: [20, 80],
  },
};
