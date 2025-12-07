export default {
  colorScheme: {
    light: {
      indicator: {
        background: "{surface.300}",
        hoverBackground: "{surface.400}",
        activeBackground: "{surface.900}"
      }
    }
  },
  root: {
    transitionDuration: "{transitionDuration}"
  },
  content: {
    gap: "0.5rem"
  },
  indicatorList: {
    padding: "1rem",
    gap: "0.5rem"
  },
  indicator: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "{borderRadius.xl}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{rating.focusRing.shadow}"
    }
  }
};

