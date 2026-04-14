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

const itemTemplate = `
<template #item="{ data }">
  <!--
    min-w-0 + overflow-hidden на обёртке карточки обязательны:
    тема переопределяет visibility:hidden у PrimeVue для p-items-hidden,
    поэтому отсечение скрытых слайдов обеспечивается через overflow:hidden
    на viewport-контейнере карусели.
  -->
  <div class="flex flex-col gap-3 px-3 py-3 border rounded min-w-0 overflow-hidden">
    <span class="font-bold truncate">{{ data.title }}</span>
    <span>{{ data.subtitle }}</span>
  </div>
</template>`;

export const Basic = {
  render: BasicTemplate,
  args: {
    numVisible: 5,
    numScroll: 1,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Carousel :value="items" :numVisible="5" :numScroll="1">
  ${itemTemplate}
</Carousel>`.trim(),
      },
    },
  },
};

export const Vertical = {
  render: VerticalTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Carousel :value="items" orientation="vertical" :numVisible="3" :numScroll="1">
  ${itemTemplate}
</Carousel>`.trim(),
      },
    },
  },
};

export const Autoplay = {
  render: AutoplayTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Carousel :value="items" :autoplayInterval="3000" :numVisible="3" :numScroll="1" circular>
  ${itemTemplate}
</Carousel>`.trim(),
      },
    },
  },
};
