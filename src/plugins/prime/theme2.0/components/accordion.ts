export default {
  header: {
    color: "{text.color}",
    hoverColor: "{text.hoverColor}",
    activeColor: "{text.color}",
    activeHoverColor: "{text.hoverColor}",
    borderColor: "{content.borderColor}",
    padding: "1rem 0 1rem 0",
    fontWeight: "0",
    borderRadius: "0",
    borderWidth: "0 0 0 0",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "inset {focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.color}",
      hoverColor: "{text.hoverColor}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.hoverColor}"
    },
    last: {
      bottomBorderRadius: "{content.borderRadius}",
      activeBottomBorderRadius: "0"
    },
    first: {
      borderWidth: "0",
      topBorderRadius: "{content.borderRadius}"
    }
  },
  root: {
    transitionDuration: "{formField.transitionDuration}"
  },
  panel: {
    borderWidth: "0",
    borderColor: "{content.background}"
  },
  colorScheme: {
    light: {
      header: {
        background: "{surface.extend.transparent}",
        hoverBackground: "{surface.extend.transparent}",
        activeBackground: "{surface.extend.transparent}",
        activeHoverBackground: "{surface.extend.transparent}"
      }
    }
  },
  content: {
    borderWidth: "1px 0 0 0",
    borderColor: "{content.borderColor}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 0 1rem 1.75rem"
  }
};

