export default {
  colorScheme: {
    light: {
      root: {
        background: "{surface.400}",
        hoverBackground: "{surface.500}",
        disabledBackground: "{formField.disabledBackground}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.500}"
      },
      handle: {
        background: "{formField.backgroundHandler}",
        hoverBackground: "{formField.backgroundHandler}",
        disabledBackground: "{formField.disabledColor}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        color: "{text.color}",
        hoverColor: "{text.color}",
        checkedColor: "{text.color}",
        checkedHoverColor: "{text.color}"
      }
    }
  },
  root: {
    width: "2.5rem",
    height: "1.5rem",
    borderRadius: "{borderRadius.xl}",
    gap: "0.14285714285714285rem",
    borderWidth: "0",
    shadow: "none",
    focusRing: {
      width: "{formField.focusRing.width}",
      String: "{formField.focusRing.style}",
      color: "{primary.200}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    },
    borderColor: "{surface.extend.transparent}",
    hoverBorderColor: "{surface.extend.transparent}",
    checkedBorderColor: "{surface.extend.transparent}",
    checkedHoverBorderColor: "{surface.extend.transparent}",
    invalidBorderColor: "{formField.invalidBorderColor}",
    transitionDuration: "{formField.transitionDuration}",
    slideDuration: "0.2s"
  },
  handle: {
    borderRadius: "7.142857142857143rem",
    size: "1.25rem"
  }
};

