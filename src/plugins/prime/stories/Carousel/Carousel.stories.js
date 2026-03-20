import {
  BasicTemplate,
  VerticalTemplate,
  AutoplayTemplate,
} from './Carousel.template';

export default {
  title: 'Prime/Carousel',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для отображения контента в виде слайдов с возможностью горизонтальной и вертикальной прокрутки, настройки количества видимых элементов и автовоспроизведения.',
      },
    },
  },
  argTypes: {
    numVisible: {
      control: { type: 'number' },
    },
    numScroll: {
      control: { type: 'number' },
    },
    circular: {
      control: { type: 'boolean' },
    },
  },
};

export const Basic = {
  render: BasicTemplate,
  args: {
    numVisible: 5,
    numScroll: 1,
  },
};

export const Vertical = {
  render: VerticalTemplate,
  args: {},
};

export const Autoplay = {
  render: AutoplayTemplate,
  args: {},
};
