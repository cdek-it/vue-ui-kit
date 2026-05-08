<script setup lang="ts">
import Timeline from 'primevue/timeline';
import type { TimelineProps } from 'primevue/timeline';

interface IPBlockTimeline extends /* @vue-ignore */ TimelineProps {}

defineProps<IPBlockTimeline>();
</script>

<template>
  <Timeline v-bind="$props">
    <template #marker="slotProps">
      <slot name="marker" v-bind="slotProps">
        <div class="timeline-marker-dot"></div>
      </slot>
    </template>
    <template #content="slotProps">
      <slot name="content" v-bind="slotProps" />
    </template>
    <template #opposite="slotProps">
      <slot name="opposite" v-bind="slotProps" />
    </template>
    <template #connector="slotProps">
      <slot name="connector" v-bind="slotProps" />
    </template>
  </Timeline>
</template>

<style scoped>
/* Кастомный маркер — без иконки */
:deep(.timeline-marker-dot) {
  display: flex;
  width: var(--p-timeline-event-marker-size);
  height: var(--p-timeline-event-marker-size);
  background: var(--p-timeline-event-marker-background);
  border-radius: var(--p-timeline-event-marker-border-radius);
  border-width: var(--p-timeline-event-marker-border-width);
  border-style: solid;
  border-color: var(--p-timeline-event-marker-border-color);
  box-sizing: border-box;
}

/* Кастомный маркер — с иконкой */
:deep(.timeline-marker-icon) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--p-timeline-event-marker-size);
  height: var(--p-timeline-event-marker-size);
  background: var(--p-timeline-event-marker-background);
  border-radius: var(--p-timeline-event-marker-border-radius);
  border-width: var(--p-timeline-event-marker-border-width);
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
}
</style>
