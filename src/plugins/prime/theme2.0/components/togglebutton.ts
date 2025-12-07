export default {

  extend: {
    gap: "0.75rem",
    extXlg: {
      padding: "1.25rem 1.5rem",
      iconOnlyWidth: "4.071428571428571rem"
    },
    iconOnlyWidth: "2.5rem",
    extSm: {
      iconOnlyWidth: "2.142857142857143rem"
    },
    hoverBorderColor: "{surface.300}",
    checkedHoverColor: "{text.extend.colorInverted}",
    checkedHoverBackground: "{surface.800}",
    checkedHoverBorderColor: "{surface.800}",
    extLg: {
      iconOnlyWidth: "3.5714285714285716rem"
    }
  },
  root: {
    padding: "0.5rem 1rem",
    borderRadius: "{borderRadius.rounded}",
    gap: "0.5rem",
    fontWeight: "35.714285714285715rem",
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    },
    sm: {
      fontSize: "{formField.sm.fontSize}",
      padding: "0.25rem 0.75rem"
    },
    lg: {
      fontSize: "{formField.sm.fontSize}",
      padding: "1rem 1.5rem"
    },
    transitionDuration: "{formField.transitionDuration}"
  },
  content: {
    checkedShadow: "none",
    padding: "0",
    borderRadius: "0",
    sm: {
      padding: "0"
    },
    lg: {
      padding: "0"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}",
        borderColor: "{surface.200}",
        color: "{text.color}",
        hoverColor: "{text.color}",
        checkedBackground: "{surface.900}",
        checkedColor: "{text.extend.colorInverted}",
        checkedBorderColor: "{surface.900}",
        disabledBackground: "{formField.disabledBackground}",
        disabledBorderColor: "{formField.disabledBackground}",
        disabledColor: "{formField.disabledColor}",
        invalidBorderColor: "{formField.invalidBorderColor}"
      },
      content: {
        checkedBackground: "{surface.extend.transparent}"
      },
      icon: {
        color: "{text.color}",
        hoverColor: "{text.color}",
        checkedColor: "{text.extend.colorInverted}",
        disabledColor: "{formField.disabledColor}"
      }
    }
  }
};

