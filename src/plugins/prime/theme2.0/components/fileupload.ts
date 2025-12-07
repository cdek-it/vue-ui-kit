export default {
  colorScheme: {
    light: {
      header: {
        background: "{surface.0}",
        color: "{text.color}"
      }
    }
  },
  extend: {
    extDragNdrop: {
      background: "{surface.0}",
      padding: "1rem",
      borderRadius: "{formField.borderRadius}",
      gap: "0.5rem",
      info: {
        gap: "0.25rem"
      }
    },
    extContent: {
      borderRadius: "{borderRadius.md}",
      highlightBorderDefault: "{formField.borderColor}"
    }
  },
  root: {
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    color: "{content.color}",
    borderRadius: "{content.borderRadius}",
    transitionDuration: "{transitionDuration}"
  },
  header: {
    borderColor: "{content.borderColor}",
    borderWidth: "0",
    padding: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  content: {
    highlightBorderColor: "{surface.900}",
    padding: "0",
    gap: "0.5rem"
  },
  file: {
    padding: "0.5rem",
    gap: "0.5rem",
    borderColor: "{formField.borderColor}",
    info: {
      gap: "0.25rem"
    }
  },
  fileList: {
    gap: "0.5rem"
  },
  progressbar: {
    height: "0.5rem"
  },
  basic: {
    gap: "0.5rem"
  }
};

