export default {
  extend: {
    paddingX: "0.35714285714285715rem",
    paddingY: "0.35714285714285715rem"
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
    color: "{formField.color}",
    disabledColor: "{formField.disabledColor}",
    placeholderColor: "{formField.placeholderColor}",
    invalidPlaceholderColor: "{formField.invalidPlaceholderColor}",
    shadow: "{formField.shadow}",
    paddingX: "{formField.paddingX}",
    paddingY: "{formField.paddingY}",
    borderRadius: "{formField.borderRadius}",
    transitionDuration: "{formField.transitionDuration}",
    sm: {
      fontSize: "{formField.sm.fontSize}",
      paddingX: "{formField.sm.paddingY}",
      paddingY: "{formField.sm.paddingY}"
    },
    lg: {
      fontSize: "{formField.lg.fontSize}",
      paddingX: "{formField.lg.paddingX}",
      paddingY: "{formField.lg.paddingY}"
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
    width: "2rem",
    color: "{formField.iconColor}"
  },
  overlay: {
    background: "{datatable.filter.overlaySelect.background}",
    borderColor: "{overlay.select.borderColor}",
    borderRadius: "{datatable.filter.overlaySelect.borderRadius}",
    color: "{datatable.filter.overlaySelect.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    header: {
      padding: "{list.header.padding}"
    },
    gap: "{list.gap}"
  },
  readonlyBackground: "{formField.readonlyBackground}",
  option: {
    focusBackground: "{list.option.focusBackground}",
    selectedBackground: "{list.option.selectedBackground}",
    selectedFocusBackground: "{list.option.selectedFocusBackground}",
    color: "{list.option.color}",
    focusColor: "{list.option.focusColor}",
    selectedColor: "{list.option.selectedColor}",
    selectedFocusColor: "{list.option.selectedFocusColor}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.borderRadius}",
    gap: "0.5rem"
  },
  optionGroup: {
    background: "{list.optionGroup.background}",
    color: "{list.optionGroup.color}",
    fontWeight: "{list.optionGroup.fontWeight}",
    padding: "{list.optionGroup.padding}"
  },
  clearIcon: {
    color: "{formField.iconColor}"
  },
  chip: {
    borderRadius: "{borderRadius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
};

