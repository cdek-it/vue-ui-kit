export default {
  extend: {
    borderColor: "{surface.extend.transparent}"
  },
  root: {
    borderRadius: "{borderRadius.sm}",
    paddingX: "0.5rem",
    paddingY: "0.25rem",
    gap: "0.5rem",
    transitionDuration: "{formField.transitionDuration}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        color: "{text.color}"
      },
      icon: {
        color: "{text.color}"
      },
      removeIcon: {
        color: "{text.color}"
      }
    }
  },
  image: {
    width: "0",
    height: "0"
  },
  icon: {
    size: "1rem"
  },
  removeIcon: {
    size: "1rem",
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{primary.200}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.focusRing.shadow}"
    }
  }
};

