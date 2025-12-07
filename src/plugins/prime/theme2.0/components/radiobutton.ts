export default {
  root: {
    width: "1.5rem",
    height: "1.5rem",
    background: "{formField.background}",
    checkedBackground: "{surface.900}",
    checkedHoverBackground: "{surface.800}",
    disabledBackground: "{formField.disabledBackground}",
    filledBackground: "{formField.filledBackground}",
    borderColor: "{formField.borderColor}",
    hoverBorderColor: "{formField.hoverBorderPrimaryColor}",
    focusBorderColor: "{formField.borderColor}",
    checkedBorderColor: "{surface.900}",
    checkedHoverBorderColor: "{formField.hoverBorderPrimaryColor}",
    checkedFocusBorderColor: "{formField.focusBorderPrimaryColor}",
    checkedDisabledBorderColor: "{formField.borderColor}",
    invalidBorderColor: "{formField.invalidBorderColor}",
    shadow: "{formField.shadow}",
    transitionDuration: "{formField.transitionDuration}"
  },
  focusRing: {
    width: "0.25rem",
    style: "{focusRing.style}",
    color: "{focusRing.color}",
    offset: "{focusRing.offset}",
    shadow: "{formField.focusRing.shadow}"
  },
  sm: {
    width: "1rem",
    height: "1rem"
  },
  lg: {
    width: "1.25rem",
    height: "1.25rem"
  },
  icon: {
    size: "0.85rem",
    checkedColor: "{text.extend.colorInverted}",
    checkedHoverColor: "{text.extend.colorInverted}",
    disabledColor: "{text.mutedColor}",
    sm: {
      size: "0"
    },
    lg: {
      size: "0"
    }
  }
};

