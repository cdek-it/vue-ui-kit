export default {
  colorScheme: {
    light: {
      root: {
        background: "{surface.extend.transparent}"
      }
    }
  },
  extend: {
    extItem: {
      caption: {
        color: "{text.mutedColor}",
        gap: "0.25rem"
      }
    }
  },
  root: {
    borderColor: "{surface.extend.transparent}",
    borderRadius: "{content.borderRadius}",
    color: "{content.color}",
    gap: "0.25rem",
    transitionDuration: "{transitionDuration}",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    }
  },
  baseItem: {
    borderRadius: "{content.borderRadius}",
    padding: "{navigation.item.padding}"
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
  overlay: {
    padding: "0.25rem",
    background: "{content.background}",
    borderColor: "{content.borderColor}",
    borderRadius: "{content.borderRadius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0"
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  submenuLabel: {
    padding: "{navigation.submenuLabel.padding}",
    fontWeight: "{navigation.submenuLabel.fontWeight}",
    background: "{navigation.submenuLabel.background}",
    color: "{navigation.submenuLabel.color}"
  },
  submenuIcon: {
    size: "{navigation.submenuIcon.size}",
    color: "{navigation.submenuIcon.color}",
    focusColor: "{navigation.submenuIcon.focusColor}",
    activeColor: "{navigation.submenuIcon.activeColor}"
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

