import { Template, ContentTemplate } from './Divider.template';

export default {
  title: 'Prime/Panel/Divider',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/HOLKdvQJ8jCLeX17s9d0Yf/UI-Kit--DS--v2.0?node-id=33-1543',
    },
  },
};

export const Default = {
  render: Template.bind({}),
};

export const Dashed = {
  render: Template.bind({}),

  args: {
    type: 'dashed',
  },
};

export const Dotted = {
  render: Template.bind({}),

  args: {
    type: 'dotted',
  },
};

export const ContentDefault = {
  render: ContentTemplate.bind({}),
  name: 'ContentDefault',
};

export const ContentLeft = {
  render: ContentTemplate.bind({}),
  name: 'ContentLeft',

  args: {
    align: 'left',
  },
};

export const ContentRight = {
  render: ContentTemplate.bind({}),
  name: 'ContentRight',

  args: {
    align: 'right',
  },
};

export const VerticalContentDefault = {
  render: ContentTemplate.bind({}),
  name: 'VerticalContentDefault',

  args: {
    layout: 'vertical',
    class: 'h-[100px]',
  },
};

export const ContentTop = {
  render: ContentTemplate.bind({}),
  name: 'ContentTop',

  args: {
    align: 'top',
    layout: 'vertical',
    class: 'h-[100px]',
  },
};

export const ContentBottom = {
  render: ContentTemplate.bind({}),
  name: 'ContentBottom',

  args: {
    align: 'bottom',
    layout: 'vertical',
    class: 'h-[100px]',
  },
};
