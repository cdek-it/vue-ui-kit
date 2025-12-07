export default {
  extend: {
    extPanel: {
      gap: "0.25rem"
    },
    extItem: {
      activeBackground: "{navigation.item.activeBackground}",
      activeColor: "{navigation.item.activeColor}",
      caption: {
        color: "{text.mutedColor}",
        gap: "0.25rem"
      }
    }
  },
  root: {
    gap: "0.25rem",
    transitionDuration: "{transitionDuration}"
  },
  panel: {
    background: "{surface.extend.transparent}",
    borderColor: "{surface.extend.transparent}",
    borderWidth: "0.07142857142857142rem",
    color: "{content.color}",
    padding: "0.25rem",
    borderRadius: "{content.borderRadius}",
    first: {
      borderWidth: "1px 1px 0 1px",
      topBorderRadius: "{content.borderRadius}"
    },
    last: {
      borderWidth: "0 1px 1px 1px",
      topBorderRadius: "{content.borderRadius}"
    }
  },
  item: {
    focusBackground: "{navigation.item.focusBackground}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focusColor}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.borderRadius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focusColor}"
    }
  },
  submenu: {
    indent: "0.75rem"
  },
  separator: {
    borderColor: "{content.borderColor}"
  },
  submenuIcon: {
    color: "{navigation.submenuIcon.color}",
    focusColor: "{navigation.submenuIcon.focusColor}"
  }
};

