export default {
  extend: {
    extOption: {
      background: "{list.option.background}",
      gap: "0.5rem"
    },
    extOptionGroup: {
      gap: "0.5rem"
    },
    readonlyBackground: "{formField.readonlyBackground}"
  },
  root: {
    background: "{formField.background}",
    disabledBackground: "{formField.disabledBackground}",
    filledBackground: "{formField.filledBackground}",
    filledHoverBackground: "{formField.filledHoverBackground}",
    filledFocusBackground: "{formField.filledFocusBackground}",
    borderColor: "{formField.borderColor}",
    hoverBorderColor: "{formField.hoverBorderSecondaryColor}",
    focusBorderColor: "{formField.focusBorderSecondaryColor}",
    invalidBorderColor: "{formField.invalidBorderColor}",
    color: "{text.color}",
    disabledColor: "{formField.disabledColor}",
    placeholderColor: "{formField.placeholderColor}",
    invalidPlaceholderColor: "{formField.invalidPlaceholderColor}",
    shadow: "{formField.shadow}",
    paddingX: "{sizingSelect.root.paddingX}",
    paddingY: "{sizingSelect.root.paddingY}",
    borderRadius: "{formField.borderRadius}",
    transitionDuration: "{formField.transitionDuration}",
    sm: {
      fontSize: "{sizingSelect.root.fontSize}",
      paddingX: "{sizingSelect.root.paddingX}",
      paddingY: "{sizingSelect.root.paddingY}"
    },
    lg: {
      fontSize: "{sizingSelect.root.fontSize}",
      paddingX: "{sizingSelect.root.paddingX}",
      paddingY: "{sizingSelect.root.paddingY}"
    },
    focusRing: {
      width: "{formField.focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.shadow}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{formField.iconColor}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.borderColor}",
    borderRadius: "{overlay.select.borderRadius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
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
  clearIcon: {
    color: "{formField.iconColor}"
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

