export default {
  extend: {
    extItem: {
      caption: {
        color: "{text.mutedColor}",
        gap: "0.25rem"
      }
    },
    extSubmenuLabel: {
      padding: "{navigation.submenuLabel.padding}",
      fontWeight: "{navigation.submenuLabel.fontWeight}",
      background: "{navigation.submenuLabel.background}",
      color: "{navigation.submenuLabel.color}"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.extend.transparent}"
      }
    }
  },
  root: {
    borderColor: "{surface.extend.transparent}",
    borderRadius: "{navigation.item.borderRadius}",
    color: "{content.color}",
    gap: "0.25rem",
    padding: "{navigation.list.padding}",
    transitionDuration: "{transitionDuration}"
  },
  baseItem: {
    borderRadius: "{navigation.item.borderRadius}",
    padding: "0.5rem 0.75rem"
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
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    borderRadius: "{content.borderRadius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "0.75rem",
    icon: {
      size: "{navigation.submenuIcon.size}",
      color: "{navigation.submenuIcon.color}",
      focusColor: "{navigation.submenuIcon.focusColor}",
      activeColor: "{navigation.submenuIcon.activeColor}"
    }
  },
  separator: {
    borderColor: "{content.borderColor}"
  },
  mobileButton: {
    borderRadius: "{navigation.item.borderRadius}",
    size: "2rem",
    color: "{text.color}",
    hoverColor: "{text.hoverColor}",
    hoverBackground: "{content.hoverBackground}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  }
};

