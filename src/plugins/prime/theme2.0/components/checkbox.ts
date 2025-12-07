export default {
  root: {
    borderRadius: "{borderRadius.sm}",
    extend: {
      borderWidth: "0.07142857142857142rem"
    },
    width: "1.5rem",
    height: "1.5rem",
    background: "{formField.background}",
    checkedBackground: "{surface.900}",
    checkedHoverBackground: "{surface.800}",
    disabledBackground: "{formField.disabledBackground}",
    filledBackground: "{formField.filledBackground}",
    borderColor: "{formField.borderColor}",
    hoverBorderColor: "{formField.hoverBorderPrimaryColor}",
    focusBorderColor: "{formField.focusBorderPrimaryColor}",
    checkedBorderColor: "{surface.900}",
    checkedHoverBorderColor: "{surface.800}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{formField.borderColor}",
    invalidBorderColor: "{formField.invalidBorderColor}",
    shadow: "{formField.shadow}",
    focusRing: {
      focusRing: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    },
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.25rem",
      height: "1.25rem"
    },
    transitionDuration: "{formField.transitionDuration}"
  },
  icon: {
    size: "1rem",
    color: "{formField.color}",
    checkedColor: "{primary.contrastColor}",
    checkedHoverColor: "{primary.contrastColor}",
    disabledColor: "{formField.disabledColor}",
    sm: {
      size: "0.75rem"
    },
    lg: {
      size: "1.25rem"
    }
  }
};

