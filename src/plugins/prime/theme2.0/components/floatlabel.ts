export default {
  extend: {
    height: "4rem",
    iconSize: "{iconSizeLarge}"
  },
  root: {
    color: "{formField.floatLabelColor}",
    focusColor: "{formField.floatLabelFocusColor}",
    activeColor: "{formField.floatLabelActiveColor}",
    invalidColor: "{formField.floatLabelInvalidColor}",
    transitionDuration: "{formField.transitionDuration}",
    positionX: "{formField.paddingX}",
    positionY: "{formField.paddingY}",
    fontWeight: "35.714285714285715rem",
    active: {
      fontSize: "12.25px",
      fontWeight: "400"
    }
  },
  over: {
    active: {
      top: "0.5rem"
    }
  },
  inside: {
    input: {
      paddingTop: "1.875rem",
      paddingBottom: "{formField.paddingY}"
    },
    active: {
      top: "{formField.paddingY}"
    }
  },
  on: {
    borderRadius: "0",
    active: {
      padding: "0 0.125rem",
      background: "#ffffff"
    }
  }
};

