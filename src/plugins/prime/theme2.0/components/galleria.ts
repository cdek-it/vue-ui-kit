export default {
  colorScheme: {
    light: {
      thumbnailContent: {
        background: "{surface.100}"
      },
      thumbnailNavButton: {
        hoverBackground: "{extend.white.20}",
        color: "{text.color}",
        hoverColor: "{text.hoverColor}"
      },
      indicatorButton: {
        background: "{surface.300}",
        hoverBackground: "{surface.400}"
      }
    }
  },
  root: {
    borderWidth: "1px",
    borderColor: "{content.borderColor}",
    borderRadius: "{content.borderRadius}",
    transitionDuration: "{transitionDuration}"
  },
  navButton: {
    background: "{surface.extend.transparent}",
    hoverBackground: "{extend.white.20}",
    color: "{text.extend.colorInverted}",
    hoverColor: "{text.extend.colorInverted}",
    size: "4rem",
    gutter: "0.5rem",
    prev: {
      borderRadius: "{navigation.item.borderRadius}"
    },
    next: {
      borderRadius: "{navigation.item.borderRadius}"
    },
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  navIcon: {
    size: "2rem"
  },
  thumbnailsContent: {
    padding: "0.25rem"
  },
  thumbnailNavButton: {
    size: "2rem",
    borderRadius: "{content.borderRadius}",
    gutter: "0.5rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  thumbnailNavButtonIcon: {
    size: "1rem"
  },
  caption: {
    background: "{extend.white.50}",
    color: "{text.color}",
    padding: "0.5rem"
  },
  indicatorList: {
    gap: "0.5rem",
    padding: "1rem"
  },
  indicatorButton: {
    width: "0.5rem",
    height: "0.5rem",
    activeBackground: "{surface.900}",
    borderRadius: "{content.borderRadius}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  insetIndicatorList: {
    background: "{extend.black.50}"
  },
  insetIndicatorButton: {
    background: "{extend.white.10}",
    hoverBackground: "{extend.white.20}",
    activeBackground: "{extend.white.50}"
  },
  closeButton: {
    size: "4rem",
    gutter: "0.5rem",
    background: "{extend.white.10}",
    hoverBackground: "{extend.white.20}",
    color: "{text.extend.colorInverted}",
    hoverColor: "{text.extend.colorInverted}",
    borderRadius: "{borderRadius.lg}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  closeButtonIcon: {
    size: "2rem"
  }
};

