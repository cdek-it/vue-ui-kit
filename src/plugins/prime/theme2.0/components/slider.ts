export default {
  colorScheme: {
    handle: {
      content: {
        background: "{surface.0}"
      }
    }
  },
  root: {
    transitionDuration: "{formField.transitionDuration}"
  },
  track: {
    background: "{content.borderColor}",
    borderRadius: "{content.borderRadius}",
    size: "0.25rem"
  },
  range: {
    background: "{surface.900}"
  },
  handle: {
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "{borderRadius.xl}",
    background: "{surface.900}",
    hoverBackground: "{surface.900}",
    content: {
      borderRadius: "{borderRadius.xl}",
      hoverBackground: "{surface.900}",
      width: "0.75rem",
      height: "0.75rem",
      shadow: "none"
    },
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    }
  }
};

