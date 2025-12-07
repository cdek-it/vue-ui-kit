export default {
  colorScheme: {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    }
  },
  extend: {
    extOption: {
      label: {
        gap: "0.25rem"
      },
      caption: {
        color: "{text.mutedColor}",
        stripedColor: "{text.mutedColor}"
      }
    }
  },
  root: {
    background: "{formField.background}",
    disabledBackground: "{formField.disabledBackground}",
    borderColor: "{formField.borderColor}",
    invalidBorderColor: "{formField.invalidBorderColor}",
    color: "{formField.color}",
    disabledColor: "{formField.disabledColor}",
    shadow: "{formField.shadow}",
    borderRadius: "{formField.borderRadius}",
    transitionDuration: "{formField.transitionDuration}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focusBackground}",
    selectedBackground: "{list.option.selectedBackground}",
    selectedFocusBackground: "{list.option.selectedFocusBackground}",
    color: "{list.option.color}",
    focusColor: "{list.option.focusColor}",
    selectedColor: "{list.option.selectedColor}",
    selectedFocusColor: "{list.option.selectedFocusColor}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.borderRadius}"
  },
  optionGroup: {
    background: "{list.optionGroup.background}",
    color: "{list.optionGroup.color}",
    fontWeight: "{list.optionGroup.fontWeight}",
    padding: "{list.option.padding}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.5rem",
    gutterEnd: "0.5rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
};

