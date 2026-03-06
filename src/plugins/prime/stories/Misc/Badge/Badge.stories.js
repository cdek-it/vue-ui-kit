import { Template, SizeTemplate, DotTemplate } from './Badge.template';

export default {
  title: 'Prime/Misc/Badge',
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    value: 'Badge',
  },
};

export const Sizes = {
  render: SizeTemplate.bind({}),
  name: 'Sizes',
};

export const Dot = {
  render: DotTemplate.bind({}),
  name: 'Dot',
};
