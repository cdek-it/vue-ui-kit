export default {
  colorScheme: {
    light: {
      dropdown: {
        background: "{content.background}",
        hoverBackground: "{navigation.item.focusBackground}",
        activeBackground: "{navigation.item.activeBackground}",
        color: "{navigation.item.color}",
        hoverColor: "{navigation.item.focusColor}",
        activeColor: "{navigation.item.activeColor}"
      },
      today: {
        background: "{content.background}",
        color: "{text.color}"
      }
    }
  },
  extend: {
    extDate: {
      selectedHoverBackground: "{primary.600}"
    },
    extToday: {
      borderColor: "{content.borderColor}",
      hoverBackground: "{content.hoverBackground}"
    },
    extTitle: {
      width: "15rem"
    },
    extTimePicker: {
      minWidth: "2.857142857142857rem",
      color: "{content.color}"
    }
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    color: "{content.color}",
    borderRadius: "{content.borderRadius}",
    shadow: "{overlay.popover.shadow}",
    padding: "{overlay.popover.padding}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    color: "{content.color}",
    padding: "0 0 0.5rem 0"
  },
  title: {
    gap: "0.5rem",
    fontWeight: "50rem"
  },
  selectMonth: {
    hoverBackground: "{content.hoverBackground}",
    color: "{content.color}",
    hoverColor: "{content.hoverColor}",
    borderRadius: "{content.borderRadius}",
    padding: "0.375rem 0.625rem"
  },
  dropdown: {
    width: "2.5rem",
    borderColor: "{formField.borderColor}",
    hoverBorderColor: "{formField.borderColor}",
    activeBorderColor: "{formField.borderColor}",
    borderRadius: "{formField.borderRadius}",
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    },
    sm: {
      width: "0"
    },
    lg: {
      width: "0"
    }
  },
  inputIcon: {
    color: "{formField.iconColor}"
  },
  group: {
    borderColor: "{content.borderColor}",
    gap: "{overlay.popover.padding}"
  },
  selectYear: {
    hoverBackground: "{content.hoverBackground}",
    color: "{content.color}",
    hoverColor: "{content.hoverColor}",
    borderRadius: "{content.borderRadius}",
    padding: "0.375rem 0.625rem"
  },
  dayView: {
    margin: "0 0 0 0"
  },
  weekDay: {
    padding: "0.25rem",
    fontWeight: "50rem",
    color: "{content.color}"
  },
  date: {
    hoverBackground: "{content.hoverBackground}",
    selectedBackground: "{primary.500}",
    rangeSelectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.color}",
    selectedColor: "{text.extend.colorPrimaryStatic}",
    rangeSelectedColor: "{text.extend.colorSecondaryStatic}",
    width: "2rem",
    height: "2rem",
    borderRadius: "0.375rem",
    padding: "0.25rem",
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    }
  },
  monthView: {
    margin: "0 0 0 0"
  },
  month: {
    padding: "0",
    borderRadius: "0"
  },
  yearView: {
    margin: "0 0 0 0"
  },
  year: {
    padding: "0",
    borderRadius: "0"
  },
  buttonbar: {
    padding: "0 0 0 0",
    borderColor: "{content.borderColor}"
  },
  timePicker: {
    padding: "1.5rem 0.75rem 0.75rem 0.75rem",
    borderColor: "{content.borderColor}",
    gap: "0.5rem",
    buttonGap: "0.25rem"
  },
  root: {
    transitionDuration: "{transitionDuration}"
  }
};

