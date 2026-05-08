const css = ({ dt }: { dt: (token: string) => string }) => `

/* --- Base --- */

.p-timeline .p-timeline-event-content.p-timeline-event-content {
  display: flex;
  flex-direction: column;
  gap: ${dt('timeline.extend.extEvent.gap')};
}

/* --- Orientation paddings --- */

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
  padding: ${dt('feedback.padding.100')} 0;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
  padding: 0 ${dt('feedback.padding.100')};
}

/* --- Horizontal --- */

.p-timeline.p-timeline-horizontal {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  align-items: start;
}

/* Connector для последнего элемента в горизонтальной ориентации */
.p-timeline.p-timeline-horizontal .p-timeline-event:last-child .p-timeline-event-separator::after {
  content: '';
  display: block;
  flex: 1;
  background-color: ${dt('timeline.eventConnector.color')};
  height: ${dt('timeline.eventConnector.size')};
}

`;

export default css;
