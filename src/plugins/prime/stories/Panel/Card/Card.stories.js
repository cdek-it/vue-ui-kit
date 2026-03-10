import { Template } from './Card.template';

export default {
  title: 'Prime/Panel/Card',
};

export const Default = {
  render: Template.bind({}),

  args: {
    title: 'Title',
  },
};
