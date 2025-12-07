export default {
  colorScheme: {
    light: {
      handle: {
        background: "{surface.900}"
      }
    }
  },
  gutter: {
    background: "{surface.100}"
  },
  root: {
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    color: "{content.color}",
    transitionDuration: "{transitionDuration}"
  },
  handle: {
    size: "0.25rem",
    borderRadius: "{content.borderRadius}",
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    }
  }
};

