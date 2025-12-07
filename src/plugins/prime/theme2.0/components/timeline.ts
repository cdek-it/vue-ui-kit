export default {
  event: {
    minHeight: "3.0357142857142856rem"
  },
  vertical: {
    eventContent: {
      padding: "0 1rem"
    }
  },
  horizontal: {
    eventContent: {
      padding: "1rem 0"
    }
  },
  eventMarker: {
    size: "1rem",
    borderRadius: "{content.borderRadius}",
    borderWidth: "0.25rem",
    background: "{content.background}",
    borderColor: "{primary.color}",
    content: {
      borderRadius: "{content.borderRadius}",
      size: "0.75rem",
      background: "{surface.extend.transparent}",
      insetShadow: "none"
    }
  },
  eventConnector: {
    color: "{content.borderColor}",
    size: "0.07142857142857142rem"
  }
};

