export default {
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      },
      tab: {
        background: "{surface.extend.transparent}",
        hoverBackground: "{surface.extend.transparent}",
        activeBackground: "{surface.extend.transparent}"
      }
    }
  },
  root: {
    transitionDuration: "{transitionDuration}"
  },
  tablist: {
    borderWidth: "0 0 2px 0",
    background: "{surface.extend.transparent}",
    borderColor: "{content.borderColor}"
  },
  tab: {
    borderWidth: "0",
    borderColor: "{content.borderColor}",
    hoverBorderColor: "{content.borderColor}",
    activeBorderColor: "{formField.focusBorderPrimaryColor}",
    color: "{text.mutedColor}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    padding: "1rem",
    fontWeight: "50rem",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  tabpanel: {
    background: "{surface.extend.transparent}",
    color: "{text.color}",
    padding: "1rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  navButton: {
    background: "{content.background}",
    color: "{content.color}",
    hoverColor: "{content.hoverColor}",
    width: "1.5rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  activeBar: {
    height: "0.14285714285714285rem",
    bottom: "-1",
    background: "{content.color}"
  }
};

