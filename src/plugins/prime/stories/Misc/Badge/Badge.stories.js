import { Template, SizeTemplate, DotTemplate } from './Badge.template';

export default {
  title: 'Prime/Misc/Badge',
};

export const Default = {
  render: Template.bind({}),

  args: {
    value: 'Badge',
  },
};

export const Sizes = {
  render: SizeTemplate.bind({}),
};

export const Dot = {
  render: DotTemplate.bind({}),
};
