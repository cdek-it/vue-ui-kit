export default {
  colorScheme: {
    light: {
      button: {
        background: "{surface.extend.transparent}",
        hoverBackground: "{content.hoverBackground}",
        activeBackground: "{surface.extend.transparent}",
        borderColor: "{formField.borderColor}",
        hoverBorderColor: "{formField.borderColor}",
        activeBorderColor: "{formField.borderColor}",
        color: "{text.color}",
        hoverColor: "{text.hoverColor}",
        activeColor: "{text.color}"
      }
    }
  },
  extend: {
    extButton: {
      height: "2.5rem"
    }
  },
  transitionDuration: {
    transitionDuration: "{formField.transitionDuration}"
  },
  button: {
    width: "2.5rem",
    borderRadius: "{formField.borderRadius}",
    verticalPadding: "{formField.paddingY}"
  }
};

