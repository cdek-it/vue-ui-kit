export default {
  extend: {
    paddingX: "0.25rem",
    paddingY: "0.25rem",
    extItem: {
      caption: {
        color: "{text.mutedColor}",
        gap: "0.25rem"
      }
    }
  },
  root: {
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    color: "{content.color}",
    borderRadius: "{content.borderRadius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transitionDuration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focusBackground}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focusColor}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.borderRadius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focusColor}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenuLabel.padding}",
    fontWeight: "{navigation.submenuLabel.fontWeight}",
    background: "{navigation.submenuLabel.background}",
    color: "{navigation.submenuLabel.color}"
  },
  separator: {
    borderColor: "{content.borderColor}"
  }
};

