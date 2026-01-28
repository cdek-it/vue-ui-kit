import Timeline from 'primevue/timeline';

export const HorizontalTemplate = (args) => ({
  components: { Timeline },
  setup() {
    const events = [
      { status: 'Event 1', date: 'caption', color: '#1dc831' },
      { status: 'Event 2', date: 'caption', color: '#1dc831' },
      { status: 'Event 3', date: 'caption', color: '#1dc831' },
    ];
    return {
      args,
      events,
    };
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
    const events = [
      { status: 'Event 1', date: 'caption', color: '#1dc831' },
      { status: 'Event 2', date: 'caption', color: '#1dc831' },
      { status: 'Event 3', date: 'caption', color: '#1dc831' },
    ];
    return {
      args,
      events,
    };
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

export const VerticalAlternateTemplate = (args) => ({
  components: { Timeline },
  setup() {
    const events = [
      { status: 'Event 1', date: 'caption', color: '#1dc831' },
      { status: 'Event 2', date: 'caption', color: '#1dc831' },
      { status: 'Event 3', date: 'caption', color: '#1dc831' },
    ];
    return {
      args,
      events,
    };
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
  components: { Timeline },
  setup() {
    const events = [
      { status: 'Primary', date: 'caption', borderColor: '#1dc831' },
      {
        status: 'Primary with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#1dc831',
        borderColor: '#1dc831',
      },
      { status: 'Green', date: 'caption', borderColor: '#44e858' },
      {
        status: 'Green with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#44e858',
        borderColor: 'transparent',
      },
      { status: 'Orange', date: 'caption', borderColor: '#f5b83d' },
      {
        status: 'Orange with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#f5b83d',
        borderColor: '#f5b83d',
      },
      { status: 'Red', date: 'caption', borderColor: '#e85244' },
      {
        status: 'Red with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#e85244',
        borderColor: '#e85244',
      },
      { status: 'Purple', date: 'caption', borderColor: '#a855f7' },
      {
        status: 'Purple with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#a855f7',
        borderColor: '#a855f7',
      },
      { status: 'Blue', date: 'caption', borderColor: '#4496e8' },
      {
        status: 'Blue with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#4496e8',
        borderColor: '#4496e8',
      },
      { status: 'Gray', date: 'caption', borderColor: '#a2a5a9' },
      {
        status: 'Gray with icon',
        date: 'caption',
        icon: 'ti ti-circle-check',
        iconColor: '#a2a5a9',
        borderColor: '#a2a5a9',
      },
    ];
    return {
      args,
      events,
    };
  },
  template: `
    <Timeline :value="events" layout="vertical" v-bind="args">
      <template #marker="slotProps">
        <i 
          v-if="slotProps.item.icon"
          :class="[slotProps.item.icon, 'timeline-marker-icon']"
          :style="{ 
            color: slotProps.item.iconColor,
            borderColor: slotProps.item.borderColor 
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
    </Timeline>
  `,
});

export const ColorMarkersTemplate = (args) => ({
  components: { Timeline },
  setup() {
    const events = [
      { status: 'Primary', date: 'caption', borderColor: '#1dc831' },
      { status: 'Green', date: 'caption', borderColor: '#44e858' },
      { status: 'Orange', date: 'caption', borderColor: '#f5b83d' },
      { status: 'Red', date: 'caption', borderColor: '#e85244' },
      { status: 'Purple', date: 'caption', borderColor: '#a855f7' },
      { status: 'Blue', date: 'caption', borderColor: '#4496e8' },
      { status: 'Gray', date: 'caption', borderColor: '#a2a5a9' },
    ];
    return {
      args,
      events,
    };
  },
  template: `
    <Timeline :value="events" layout="vertical" v-bind="args">
      <template #marker="slotProps">
        <div 
          class="timeline-marker-dot"
          :style="{ borderColor: slotProps.item.borderColor }"
        ></div>
      </template>
      <template #content="slotProps">
        <div class="body-bold-lg">{{ slotProps.item.status }}</div>
        <div class="caption-secondary">{{ slotProps.item.date }}</div>
      </template>
    </Timeline>
  `,
});
