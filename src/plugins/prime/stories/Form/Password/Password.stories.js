import { Template, TemplateCustom } from './Password.template';

export default {
  title: 'Prime/Form/Password',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',

  args: {
    feedback: false,
  },
};

export const Meter = {
  render: Template.bind({}),
  name: 'Meter',
};

export const Custom = {
  render: TemplateCustom.bind({}),
  name: 'Custom',
};
