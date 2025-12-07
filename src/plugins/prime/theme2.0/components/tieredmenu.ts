export default {
  extend: {
    extSubmenu: {
      borderColor: "{content.borderColor}",
      background: "{content.background}"
    },
    extItem: {
      caption: {
        gap: "0.25rem",
        color: "{text.mutedColor}"
      }
    }
  },
  root: {
    background: "{surface.extend.transparent}",
    borderColor: "{surface.extend.transparent}",
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
    activeBackground: "{navigation.item.activeBackground}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focusColor}",
    activeColor: "{navigation.item.activeColor}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.borderRadius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focusColor}",
      activeColor: "{navigation.item.icon.activeColor}"
    }
  },
  submenu: {
    mobileIndent: "0.75rem"
  },
  separator: {
    borderColor: "{content.borderColor}"
  }
};

