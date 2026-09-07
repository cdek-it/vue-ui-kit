import { Template, TemplateCustom } from './Password.template';

export default {
  title: 'Prime/Form/Password',
};

export const Primary = {
  render: Template.bind({}),

  args: {
    feedback: false,
  },
};

export const Meter = {
  render: Template.bind({}),
};

export const Custom = {
  render: TemplateCustom.bind({}),
};
