import { Template, CustomContainer } from './Message.template';

export default {
  title: 'Prime/Message',
};

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
};

export const Custom = {
  render: CustomContainer.bind({}),
  name: 'Custom',
};
