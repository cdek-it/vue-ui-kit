import Skeleton from 'primevue/skeleton';
import {
  TemplateRectangles,
  TemplateCircle,
  TemplateCard,
  TemplateNoAnimation,
} from './Skeleton.template';

const meta = {
  title: 'Prime/Misc/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Заглушка для контента, пока данные загружаются. Поддерживает прямоугольную и круглую формы, а также волновую анимацию.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-skeleton' },
  },
  argTypes: {
    animation: {
      control: 'select',
      options: ['wave', 'none'],
      description: 'Тип анимации',
      table: {
        category: 'Props',
        defaultValue: { summary: 'wave' },
        type: { summary: "'wave' | 'none'" },
      },
    },
  },
};

export default meta;

// ── Default ──────────────────────────────────────────────────────────────────

export const SkeletonDefault = {
  name: 'Skeleton',
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-3">
        <Skeleton :animation="args.animation" height="1rem" />
        <Skeleton :animation="args.animation" height="1rem" width="75%" />
        <Skeleton :animation="args.animation" height="1rem" width="50%" />
        <Skeleton :animation="args.animation" shape="circle" size="4rem" />
      </div>
    `,
  }),
  args: {
    animation: 'wave',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Базовый вариант компонента. Используйте Controls для интерактивного изменения пропсов.',
      },
      source: {
        code: `
<template>
  <Skeleton height="2rem" width="200px" />
</template>
        `,
      },
    },
    designToken: { disable: false },
  },
};

// ── Stories ──────────────────────────────────────────────────────────────────

export const Rectangles = {
  render: TemplateRectangles,
  parameters: {
    docs: {
      description: {
        story:
          'Прямоугольные строки-заглушки разной ширины — типичный паттерн для текстовых блоков.',
      },
      source: {
        code: `
<template>
  <div class="flex flex-col gap-3">
    <Skeleton height="1rem" />
    <Skeleton height="1rem" width="75%" />
    <Skeleton height="1rem" width="50%" />
  </div>
</template>
        `,
      },
    },
  },
};

export const Circle = {
  render: TemplateCircle,
  parameters: {
    docs: {
      description: {
        story: 'Круглые заглушки – используются для аватаров и иконок.',
      },
      source: {
        code: `
<template>
  <div class="flex items-center gap-4">
    <Skeleton shape="circle" size="3rem" />
    <Skeleton shape="circle" size="4rem" />
    <Skeleton shape="circle" size="6rem" />
  </div>
</template>
        `,
      },
    },
  },
};

export const CardPlaceholder = {
  render: TemplateCard,
  parameters: {
    docs: {
      description: {
        story:
          'Комбинированный паттерн: аватар + строки текста — типичная заглушка карточки пользователя.',
      },
      source: {
        code: `
<template>
  <div class="flex gap-4">
    <Skeleton shape="circle" size="4rem" class="flex-shrink-0" />
    <div class="flex flex-col gap-2 flex-1">
      <Skeleton height="1rem" width="60%" />
      <Skeleton height="0.75rem" width="40%" />
      <Skeleton height="0.75rem" />
    </div>
  </div>
</template>
        `,
      },
    },
  },
};

export const NoAnimation = {
  render: TemplateNoAnimation,
  parameters: {
    docs: {
      description: {
        story:
          'Скелетон без анимации — подходит для статичных состояний загрузки.',
      },
      source: {
        code: `
<template>
  <div class="flex flex-col gap-3">
    <Skeleton animation="none" height="1rem" />
    <Skeleton animation="none" height="1rem" width="75%" />
    <Skeleton animation="none" shape="circle" size="4rem" />
  </div>
</template>
        `,
      },
    },
  },
};
