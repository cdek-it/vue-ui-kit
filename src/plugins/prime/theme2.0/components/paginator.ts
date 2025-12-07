export default {
  root: {
    padding: "0 0.5rem",
    gap: "0.5rem",
    borderRadius: "{content.borderRadius}",
    background: "{surface.extend.transparent}",
    color: "{content.color}",
    transitionDuration: "{transitionDuration}"
  },
  navButton: {
    background: "{surface.extend.transparent}",
    hoverBackground: "{content.hoverBackground}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hoverColor}",
    selectedColor: "{text.extend.colorInverted}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "{content.borderRadius}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      focus: "{focusRing.shadow}"
    }
  },
  currentPageReport: {
    color: "{text.mutedColor}"
  },
  jumpToPageInput: {
    maxWidth: "5rem"
  }
};

