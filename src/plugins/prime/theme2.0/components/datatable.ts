export default {
  colorScheme: {
    light: {
      root: {
        Color: "{text.color}",
        borderColor: "{content.borderColor}"
      },
      header: {
        background: "{surface.50}",
        color: "{text.color}"
      },
      headerCell: {
        background: "{surface.50}",
        hoverBackground: "{surface.100}",
        color: "{text.color}"
      },
      footer: {
        background: "{surface.100}",
        color: "{text.color}"
      },
      footerCell: {
        background: "{content.hoverBackground}",
        color: "{text.color}"
      },
      row: {
        stripedBackground: "{content.hoverBackground}"
      },
      bodyCell: {
        selectedBorderColor: "{content.borderColor}"
      }
    }
  },
  extended: {
    extHeaderCell: {
      selectedHoverBackground: "{surface.800}"
    },
    extRow: {
      selectedHoverBackground: "{surface.800}",
      stripedHoverBackground: "{surface.100}"
    }
  },
  root: {
    transitionDuration: "{transitionDuration}"
  },
  header: {
    borderColor: "{content.borderColor}",
    borderWidth: "1px 0 1px 0",
    padding: "1rem",
    sm: {
      padding: "0.5rem"
    },
    lg: {
      padding: "1.25rem"
    }
  },
  headerCell: {
    selectedBackground: "{highlight.background}",
    borderColor: "{content.borderColor}",
    hoverColor: "{text.hoverColor}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "1rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "inset {focus.ring.shadow}"
    },
    sm: {
      padding: "0.5rem"
    },
    lg: {
      padding: "1.25rem"
    }
  },
  columnTitle: {
    fontWeight: "50rem"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hoverBackground}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hoverColor}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{content.borderColor}",
    padding: "1rem",
    sm: {
      padding: "0.5rem"
    },
    lg: {
      padding: "1.25rem"
    }
  },
  footerCell: {
    borderColor: "{content.borderColor}",
    padding: "1rem",
    sm: {
      padding: "0.5rem"
    },
    lg: {
      padding: "1.25rem"
    }
  },
  columnFooter: {
    fontWeight: "50rem"
  },
  dropPoint: {
    color: "{highlight.background}"
  },
  footer: {
    borderColor: "{content.borderColor}",
    borderWidth: "0 0 1px 0",
    padding: "1rem",
    sm: {
      padding: "0.5rem"
    },
    lg: {
      padding: "1.25rem"
    }
  },
  columnResizer: {
    width: "0.5rem"
  },
  resizeIndicator: {
    width: "1px",
    color: "{highlight.background}"
  },
  sortIcon: {
    color: "{text.color}",
    hoverColor: "{text.hoverColor}",
    size: "1rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  rowToggleButton: {
    hoverBackground: "{content.hoverBackground}",
    selectedHoverBackground: "{content.hoverBackground}",
    color: "{text.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{text.color}",
    size: "2rem",
    borderRadius: "{content.borderRadius}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  filter: {
    inlineGap: "0.5rem",
    rule: {
      borderColor: "{content.borderColor}"
    },
    constraintList: {
      padding: "{list.padding}",
      gap: "{list.gap}"
    },
    constraint: {
      focusBackground: "{list.option.focusBackground}",
      selectedBackground: "{list.option.selectedBackground}",
      selectedFocusBackground: "{list.option.selectedFocusBackground}",
      color: "{list.option.color}",
      focusColor: "{list.option.focusColor}",
      selectedColor: "{list.option.selectedColor}",
      selectedFocusColor: "{list.option.selectedFocusColor}",
      padding: "{list.option.padding}",
      borderRadius: "{list.option.borderRadius}",
      separator: {
        borderColor: "{content.borderColor}"
      }
    },
    overlaySelect: {
      background: "{overlay.select.background}",
      color: "{overlay.select.color}",
      borderColor: "{overlay.select.borderColor}",
      borderRadius: "{overlay.select.borderRadius}",
      shadow: "{overlay.select.shadow}"
    },
    overlayPopover: {
      background: "{overlay.popover.background}",
      color: "{overlay.popover.color}",
      borderColor: "{overlay.select.borderColor}",
      borderRadius: "{overlay.select.borderRadius}",
      shadow: "{overlay.popover.shadow}",
      padding: "{overlay.popover.padding}",
      gap: "{list.gap}"
    }
  },
  paginatorTop: {
    borderColor: "{formField.borderColor}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderWidth: "0 0 1px 0",
    borderColor: "{content.borderColor}"
  }
};

