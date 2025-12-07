export default {
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{chip.colorScheme.light.root.background}",
        focusColor: "{chip.colorScheme.light.root.color}"
      },
      dropdown: {
        background: "{formField.background}",
        hoverBackground: "{formField.background}",
        activeBackground: "{formField.background}",
        color: "{formField.color}",
        hoverColor: "{formField.color}",
        activeColor: "{formField.color}"
      }
    }
  },
  extend: {
    extOption: {
      gap: "0.5rem"
    },
    extOptionGroup: {
      gap: "0.5rem"
    }
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
    transitionDuration: "{formField.transitionDuration}"
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
    gap: "{list.gap}"
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
    padding: "{list.optionGroup.padding}"
  },
  dropdown: {
    width: "2rem",
    borderColor: "{formField.borderColor}",
    hoverBorderColor: "{formField.hoverBorderSecondaryColor}",
    activeBorderColor: "{formField.focusBorderSecondaryColor}",
    borderRadius: "{formField.borderRadius}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{formField.focusRing.style}",
      color: "{formField.focusRing.color}",
      offset: "{formField.focusRing.offset}",
      shadow: "{formField.focusRing.shadow}"
    },
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    }
  },
  chip: {
    borderRadius: "{chip.root.borderRadius}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
};

