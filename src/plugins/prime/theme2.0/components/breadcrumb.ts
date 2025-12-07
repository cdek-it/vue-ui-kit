export default {
  extend: {
    hoverBackground: "{surface.100}"
  },
  root: {
    padding: "0.25rem",
    background: "{surface.extend.transparent}",
    gap: "0",
    transitionDuration: "{formField.transitionDuration}"
  },
  focusRing: {
    width: "#ffffff",
    style: "{focusRing.style}",
    color: "#ffffff",
    offset: "{focusRing.offset}",
    shadow: "{focusRing.shadow}"
  },
  item: {
    color: "{text.color}",
    hoverColor: "{text.hoverColor}",
    borderRadius: "{borderRadius.xs}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{text.color}",
      hoverColor: "{text.hoverColor}"
    }
  },
  separator: {
    color: "{text.color}"
  }
};

