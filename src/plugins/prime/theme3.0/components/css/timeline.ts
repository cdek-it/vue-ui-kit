export default ({ dt }: { dt: (token: string) => string }) => `
/* Кастомные стили для Timeline компонента согласно дизайну Figma */

/* Контент события - gap между элементами */
.p-timeline .p-timeline-event-content.p-timeline-event-content {
  display: flex;
  flex-direction: column;
  gap: ${dt('timeline.extend.extEvent.gap')};
}

/* Кастомный маркер - без иконки */
.p-timeline .p-timeline-event-separator .timeline-marker-dot {
  display: flex;
  width: ${dt('timeline.eventMarker.size')};
  height: ${dt('timeline.eventMarker.size')};
  background: ${dt('timeline.eventMarker.background')};
  border-radius: ${dt('timeline.eventMarker.borderRadius')};
  border-width: ${dt('timeline.eventMarker.borderWidth')};
}

/* Кастомный маркер – с иконкой */
.p-timeline .p-timeline-event-separator .timeline-marker-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${dt('timeline.eventMarker.size')};
  height: ${dt('timeline.eventMarker.size')};
  background: ${dt('timeline.eventMarker.background')};
  border-radius: ${dt('timeline.eventMarker.borderRadius')};
  font-size: ${dt('fonts.fontSize.xl')};
}

`;
