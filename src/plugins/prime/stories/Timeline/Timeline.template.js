import Timeline from 'primevue/timeline';
import PBlockTimeline from '@/primeBlocks/PBlockTimeline/PBlockTimeline.vue';

const defaultEvents = [
  { status: 'Заказ создан', date: '15 апр 2026, 10:00' },
  { status: 'Принят на склад', date: '16 апр 2026, 14:30' },
  { status: 'В пути', date: '17 апр 2026, 09:15' },
  { status: 'Доставлен', date: '18 апр 2026, 11:45' },
];

const markerEvents = [
  { status: 'Успех', date: 'caption', borderColor: 'var(--p-green-500)' },
  {
    status: 'Успех с иконкой',
    date: 'caption',
    icon: 'ti ti-circle-check',
    iconColor: 'var(--p-green-500)',
    borderColor: 'var(--p-green-500)',
  },
  {
    status: 'Предупреждение',
    date: 'caption',
    borderColor: 'var(--p-orange-500)',
  },
  {
    status: 'Предупреждение с иконкой',
    date: 'caption',
    icon: 'ti ti-alert-circle',
    iconColor: 'var(--p-orange-500)',
    borderColor: 'var(--p-orange-500)',
  },
  { status: 'Ошибка', date: 'caption', borderColor: 'var(--p-red-500)' },
  {
    status: 'Ошибка с иконкой',
    date: 'caption',
    icon: 'ti ti-circle-x',
    iconColor: 'var(--p-red-500)',
    borderColor: 'var(--p-red-500)',
  },
  { status: 'Информация', date: 'caption', borderColor: 'var(--p-blue-500)' },
  {
    status: 'Информация с иконкой',
    date: 'caption',
    icon: 'ti ti-info-circle',
    iconColor: 'var(--p-blue-500)',
    borderColor: 'var(--p-blue-500)',
  },
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
          :style="{
            color: slotProps.item.iconColor,
            borderColor: slotProps.item.borderColor,
          }"
        ></i>
        <div
          v-else
          class="timeline-marker-dot"
          :style="{ borderColor: slotProps.item.borderColor }"
        ></div>
      </template>
      <template #content="slotProps">
        <div class="body-bold-lg">{{ slotProps.item.status }}</div>
        <div class="caption-secondary">{{ slotProps.item.date }}</div>
      </template>
    </PBlockTimeline>
  `,
});
