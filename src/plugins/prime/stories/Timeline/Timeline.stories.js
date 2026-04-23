import Timeline from 'primevue/timeline';
import {
  HorizontalTemplate,
  VerticalTemplate,
  AlternateTemplate,
  MarkersTemplate,
} from './Timeline.template';

const meta = {
  title: 'Prime/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Компонент для визуализации последовательности событий в хронологическом порядке. Поддерживает горизонтальную и вертикальную ориентацию, кастомные маркеры.',
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-timeline' },
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Массив событий для отображения',
      table: {
        category: 'Props',
        type: { summary: 'array' },
      },
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Ориентация таймлайна',
      table: {
        category: 'Props',
        defaultValue: { summary: "'vertical'" },
        type: { summary: "'vertical' | 'horizontal'" },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom', 'alternate'],
      description: 'Положение контента относительно маркера',
      table: {
        category: 'Props',
        defaultValue: { summary: "'left'" },
        type: { summary: "'left' | 'right' | 'top' | 'bottom' | 'alternate'" },
      },
    },
  },
};

export default meta;

// ── Horizontal ──────────────────────────────────────────────────────────────

export const Horizontal = {
  render: HorizontalTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Горизонтальная ориентация Timeline с событиями в ряд.',
      },
      source: {
        code: `<Timeline :value="events" layout="horizontal">
  <template #content="slotProps">
    <div class="body-bold-base">{{ slotProps.item.status }}</div>
    <div class="caption-secondary">{{ slotProps.item.date }}</div>
  </template>
</Timeline>`,
      },
    },
  },
};

// ── Vertical ────────────────────────────────────────────────────────────────

export const Vertical = {
  render: VerticalTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Вертикальная ориентация Timeline — события сверху вниз.',
      },
      source: {
        code: `<Timeline :value="events" layout="vertical">
  <template #content="slotProps">
    <div class="body-bold-lg">{{ slotProps.item.status }}</div>
    <div class="caption-secondary">{{ slotProps.item.date }}</div>
  </template>
</Timeline>`,
      },
    },
  },
};

// ── Vertical Alternate ──────────────────────────────────────────────────────

export const VerticalAlternate = {
  render: AlternateTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Вертикальная ориентация с чередующимся расположением контента.',
      },
      source: {
        code: `<Timeline :value="events" layout="vertical" align="alternate">
  <template #content="slotProps">
    <div class="body-bold-lg">{{ slotProps.item.status }}</div>
    <div class="caption-secondary">{{ slotProps.item.date }}</div>
  </template>
</Timeline>`,
      },
    },
  },
};

// ── Markers ─────────────────────────────────────────────────────────────────

export const Markers = {
  render: MarkersTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Кастомные маркеры с цветами и иконками. Доступны варианты: с иконкой (через слот #marker) и без (цветная обводка).',
      },
      source: {
        code: `<PBlockTimeline :value="events" layout="vertical">
  <template #marker="slotProps">
    <i
      v-if="slotProps.item.icon"
      :class="[slotProps.item.icon, 'timeline-marker-icon']"
      :style="{ color: slotProps.item.color }"
    ></i>
    <div
      v-else
      class="timeline-marker-dot"
      :style="{ borderColor: slotProps.item.color }"
    ></div>
  </template>
  <template #content="slotProps">
    <div class="body-bold-lg">{{ slotProps.item.status }}</div>
    <div class="caption-secondary">{{ slotProps.item.date }}</div>
  </template>
</PBlockTimeline>`,
      },
    },
  },
};
