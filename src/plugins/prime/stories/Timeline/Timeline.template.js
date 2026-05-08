import Timeline from 'primevue/timeline';
import PBlockTimeline from '@/primeBlocks/PBlockTimeline/PBlockTimeline.vue';

const defaultEvents = [
  { status: 'Заказ создан', date: '15 апр 2026, 10:00' },
  { status: 'Принят на склад', date: '16 апр 2026, 14:30' },
  { status: 'В пути', date: '17 апр 2026, 09:15' },
  { status: 'Доставлен', date: '18 апр 2026, 11:45' },
];

const markerEvents = [
  {
    status: 'Успех',
    date: 'caption',
    icon: 'ti ti-circle-check',
    color: 'var(--p-green-500)',
  },
  { status: 'Успех (точка)', date: 'caption', color: 'var(--p-green-500)' },
  {
    status: 'Предупреждение',
    date: 'caption',
    icon: 'ti ti-alert-circle',
    color: 'var(--p-orange-500)',
  },
  {
    status: 'Предупреждение (точка)',
    date: 'caption',
    color: 'var(--p-orange-500)',
  },
  {
    status: 'Ошибка',
    date: 'caption',
    icon: 'ti ti-circle-x',
    color: 'var(--p-red-500)',
  },
  { status: 'Ошибка (точка)', date: 'caption', color: 'var(--p-red-500)' },
  {
    status: 'Информация',
    date: 'caption',
    icon: 'ti ti-info-circle',
    color: 'var(--p-blue-500)',
  },
  { status: 'Информация (точка)', date: 'caption', color: 'var(--p-blue-500)' },
];

export const HorizontalTemplate = (args) => ({
  components: { Timeline },
  setup() {
    return { args, events: defaultEvents };
  },
  template: `
    <Timeline :value="events" layout="horizontal" v-bind="args">
      <template #content="slotProps">
        <div class="body-bold-base">{{ slotProps.item.status }}</div>
        <div class="caption-secondary">{{ slotProps.item.date }}</div>
      </template>
    </Timeline>
  `,
});

export const VerticalTemplate = (args) => ({
  components: { Timeline },
  setup() {
    return { args, events: defaultEvents };
  },
  template: `
    <Timeline :value="events" layout="vertical" v-bind="args">
      <template #content="slotProps">
        <div class="body-bold-lg">{{ slotProps.item.status }}</div>
        <div class="caption-secondary">{{ slotProps.item.date }}</div>
      </template>
    </Timeline>
  `,
});

export const AlternateTemplate = (args) => ({
  components: { Timeline },
  setup() {
    return { args, events: defaultEvents };
  },
  template: `
    <Timeline :value="events" layout="vertical" align="alternate" v-bind="args">
      <template #content="slotProps">
        <div class="body-bold-lg">{{ slotProps.item.status }}</div>
        <div class="caption-secondary">{{ slotProps.item.date }}</div>
      </template>
    </Timeline>
  `,
});

export const MarkersTemplate = (args) => ({
  components: { PBlockTimeline },
  setup() {
    return { args, events: markerEvents };
  },
  template: `
    <PBlockTimeline :value="events" layout="vertical" v-bind="args">
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
    </PBlockTimeline>
  `,
});
