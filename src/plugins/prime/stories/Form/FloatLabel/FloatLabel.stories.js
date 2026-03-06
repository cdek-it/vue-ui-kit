import { Template } from './FloatLabel.template';

export default {
  title: 'Prime/Form/FloatLabel',
};

export const Input = {
  render: Template.bind({}),
  name: 'Input',

  args: {
    component: 'InputText',
  },
};

export const Textarea = {
  render: Template.bind({}),
  name: 'Textarea',

  args: {
    component: 'Textarea',
  },
};
