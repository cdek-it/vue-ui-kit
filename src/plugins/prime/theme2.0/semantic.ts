export default {
  list: {
    padding: "0.25rem",
    gap: "0.25rem",
    header: {
      padding: "1rem 1rem 0 1rem"
    },
    option: {
      padding: '0.5rem 0.75rem',
      borderRadius: "0.5rem"
    },
    optionGroup: {
      padding: "0.5rem 0.75rem",
      fontWeight: "600"
    }
  },
  focusRing: {
    width: "0.25rem",
    style: "none",
    color: "#ffffff",
    offset: "0",
    shadow: "0 0 0 0.25rem {primary.200}"
  },
  primary: {
    "50": "{colors.green.50}",
    "100": "{colors.green.100}",
    "200": "{colors.green.200}",
    "300": "{colors.green.300}",
    "400": "{colors.green.400}",
    "500": "{colors.green.500}",
    "600": "{colors.green.600}",
    "700": "{colors.green.700}",
    "800": "{colors.green.800}",
    "900": "{colors.green.900}",
    "950": "{colors.green.950}"
  },
  formField: {
    paddingX: '0.75rem',
    paddingY: "0.75rem",
    borderRadius: "{borderRadius.md}",
    transitionDuration: "{transitionDuration}",
    sm: {
      fontSize: "1rem",
      paddingX: "0.044642857142857144rem",
      paddingY: "0.03571428571428571rem"
    },
    lg: {
      fontSize: "1rem",
      paddingX: "0.0625rem",
      paddingY: "0.05357142857142857rem"
    },
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  sizingInputtext: {
    root: {
      fontSize: "1rem",
      paddingX: "0.75rem",
      paddingY: "0.75rem"
    },
    sm: {
      fontSize: "1rem",
      paddingX: "0.75rem",
      paddingY: "0.75rem"
    },
    lg: {
      fontSize: "1rem",
      paddingX: "0.75rem",
      paddingY: "1.25rem"
    },
    xlg: {
      fontSize: "1rem",
      paddingX: "0.75rem",
      paddingY: "1.5rem"
    }
  },
  sizingSelect: {
      fontSize: "1rem",
      paddingX: "0.75rem",
      paddingY: "1rem"
  },
  sizingDialog: {
    extra: {
      minWidth: "25rem"
    },
    sm: {
      extra: {
        minWidth: "20rem"
      }
    },
    lg: {
      extra: {
        minWidth: "30rem"
      }
    },
    xlg: {
      extra: {
        minWidth: "45rem"
      }
    }
  },
  sizingMessage: {
    width: "25rem",
    sm: {
      width: "20rem"
    },
    lg: {
      width: "30rem"
    },
    xlg: {
      width: "45rem"
    }
  },
  sizingToast: {
    width: "25rem",
    sm: {
      width: "20rem"
    },
    lg: {
      width: "30rem"
    },
    xlg: {
      width: "45rem"
    }
  },
  sizingDrawer: {
    width: "25rem",
    sm: {
      width: "20rem"
    },
    lg: {
      width: "30rem"
    },
    xlg: {
      width: "45rem"
    }
  },
  content: {
    borderRadius: "{borderRadius.md}"
  },
  mask: {
    transitionDuration: "{transitionDuration}"
  },
  navigation: {
    list: {
      padding: "0.25rem",
      gap: "0.25rem"
    },
    item: {
      padding: "0.625rem 1rem",
      borderRadius: "{borderRadius.sm}",
      gap: "0.5rem"
    },
    submenuLabel: {
      padding: "0.625rem 1rem",
      fontWeight: "600"
    },
    submenuIcon: {
      size: "1.25rem"
    }
  },
  overlay: {
    select: {
      borderRadius: "{borderRadius.md}",
      shadow: "0 3.5px 7px 0 rgba(0, 0, 0, 0.2)"
    },
    popover: {
      borderRadius: "{borderRadius.sm}",
      padding: "0.75rem",
      shadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    },
    modal: {
      borderRadius: "{borderRadius.xl}",
      padding: "1.5rem",
      shadow: "0 1px 3px rgba(0, 0, 0, 0.3)"
    },
    navigation: {
      shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)"
    }
  },
  transitionDuration: "0.2s",
  disabledOpacity: "3.5714285714285716rem",
  iconSizeMedium: "1rem",
  iconSizeLarge: "1.25rem",
  anchorGutter: "0.14285714285714285rem",
  colorScheme: {
  light: {
      pallete: {
        success: {
          "50": "{colors.green.50}",
          "100": "{colors.green.100}",
          "200": "{colors.green.200}",
          "300": "{colors.green.300}",
          "400": "{colors.green.400}",
          "500": "{colors.green.500}",
          "600": "{colors.green.600}",
          "700": "{colors.green.700}",
          "800": "{colors.green.800}",
          "900": "{colors.green.900}",
          "950": "{colors.green.950}"
        },
        info: {
          "50": "{colors.blue.50}",
          "100": "{colors.blue.100}",
          "200": "{colors.blue.200}",
          "300": "{colors.blue.300}",
          "400": "{colors.blue.400}",
          "500": "{colors.blue.500}",
          "600": "{colors.blue.600}",
          "700": "{colors.blue.700}",
          "800": "{colors.blue.800}",
          "900": "{colors.blue.900}",
          "950": "{colors.blue.950}"
        },
        warn: {
          "50": "{colors.yellow.50}",
          "100": "{colors.yellow.100}",
          "200": "{colors.yellow.200}",
          "300": "{colors.yellow.300}",
          "400": "{colors.yellow.400}",
          "500": "{colors.yellow.500}",
          "600": "{colors.yellow.600}",
          "700": "{colors.yellow.700}",
          "800": "{colors.yellow.800}",
          "900": "{colors.yellow.900}",
          "950": "{colors.yellow.950}"
        },
        help: {
          "50": "{colors.purple.50}",
          "100": "{colors.purple.100}",
          "200": "{colors.purple.200}",
          "300": "{colors.purple.300}",
          "400": "{colors.purple.400}",
          "500": "{colors.purple.500}",
          "600": "{colors.purple.600}",
          "700": "{colors.purple.700}",
          "800": "{colors.purple.800}",
          "900": "{colors.purple.900}",
          "950": "{colors.purple.950}"
        },
        error: {
          "50": "{colors.red.50}",
          "100": "{colors.red.100}",
          "200": "{colors.red.200}",
          "300": "{colors.red.300}",
          "400": "{colors.red.400}",
          "500": "{colors.red.500}",
          "600": "{colors.red.600}",
          "700": "{colors.red.700}",
          "800": "{colors.red.800}",
          "900": "{colors.red.900}",
          "950": "{colors.red.950}"
        }
      },
    surface: {
      "0": "#ffffff",
      "50": "{colors.zinc.50}",
      "100": "{colors.zinc.100}",
      "200": "{colors.zinc.200}",
      "300": "{colors.zinc.300}",
      "400": "{colors.zinc.400}",
      "500": "{colors.zinc.500}",
      "600": "{colors.zinc.600}",
      "700": "{colors.zinc.700}",
      "800": "{colors.zinc.800}",
      "900": "{colors.zinc.900}",
      "950": "{colors.zinc.950}",
      "extend": {
        "transparent": "rgba(255, 255, 255, 0.0001)"
      }
    },
    primary: {
      color: "{primary.500}",
      contrastColor: "{surface.0}",
      hoverColor: "{primary.600}",
      activeColor: "{primary.700}"
    },
    highlight: {
      background: "{colors.zinc.900}",
      focusBackground: "{colors.zinc.800}",
      color: "{extend.white.100}",
      focusColor: "{extend.white.100}"
    },
    focusRing: {
      shadow: "0 0 0 0.2rem {primary.200}",
      extend: {
        invalid: "{colors.red.200}",
        success: "{colors.green.200}",
        warning: "{colors.yellow.200}",
        info: "{colors.blue.200}"
      }
    },
    mask: {
      background: "{extend.black.40}",
      color: "{surface.200}"
    },
    formField: {
      background: "{extend.white.100}",
      disabledBackground: "{colors.zinc.200}",
      readonlyBackground: "{colors.zinc.100}",
      filledBackground: "{extend.white.100}",
      filledHoverBackground: "{extend.white.100}",
      filledFocusBackground: "{extend.white.100}",
      borderColor: "{colors.zinc.300}",
      hoverBorderPrimaryColor: "{colors.zinc.900}",
      focusBorderPrimaryColor: "{colors.zinc.900}",
      hoverBorderSecondaryColor: "{colors.green.600}",
      focusBorderSecondaryColor: "{colors.green.600}",
      invalidBorderColor: "{colors.red.400}",
      color: "{colors.zinc.950}",
      disabledColor: "{colors.zinc.500}",
      placeholderColor: "{colors.zinc.500}",
      invalidPlaceholderColor: "{colors.red.600}",
      floatLabelColor: "{colors.zinc.500}",
      floatLabelFocusColor: "{colors.zinc.500}",
      floatLabelActiveColor: "{colors.zinc.500}",
      floatLabelInvalidColor: "{formField.invalidPlaceholderColor}",
      iconColor: "{colors.zinc.950}",
      shadow: "rgba(0, 0, 0, 0.0000)",
      backgroundHandler: "{extend.white.100}"
    },
    text: {
      color: "{colors.zinc.900}",
      extend: {
        colorPrimaryStatic: "{colors.zinc.900}",
        colorSecondaryStatic: "{extend.white.100}",
        colorInverted: "{extend.white.100}"
      },
      hoverColor: "{colors.zinc.700}",
      mutedColor: "{colors.zinc.500}",
      hoverMutedColor: "{colors.zinc.300}"
    },
    content: {
      background: "{extend.white.100}",
      hoverBackground: "{colors.zinc.100}",
      borderColor: "{colors.zinc.200}",
      color: "{text.color}",
      hoverColor: "{text.hoverColor}"
    },
    overlay: {
      select: {
        background: "{extend.white.100}",
        borderColor: "{colors.zinc.200}",
        color: "{text.color}"
      },
      popover: {
        background: "{extend.white.100}",
        borderColor: "{formField.borderColor}",
        color: "{text.color}",
        shadow: "rgba(24, 26, 31, 0.2000)"
      },
      modal: {
        background: "{extend.white.100}",
        borderColor: "{colors.zinc.200}",
        color: "{text.color}"
      }
    },
    list: {
      option: {
        background: "{extend.white.100}",
        focusBackground: "{colors.zinc.100}",
        selectedBackground: "{colors.zinc.900}",
        selectedFocusBackground: "{colors.zinc.700}",
        color: "{text.color}",
        focusColor: "{text.color}",
        selectedColor: "{text.extend.colorInverted}",
        selectedFocusColor: "{text.extend.colorInverted}",
        icon: {
          color: "{text.color}",
          focusColor: "{text.color}"
        }
      },
      surface: "#ffffff",
      optionGroup: {
        background: "{extend.white.100}",
        color: "{text.mutedColor}"
      }
    },
    navigation: {
      submenuLabel: {
        background: "rgba(255, 255, 255, 0.0000)",
        color: "{text.mutedColor}"
      },
      submenuIcon: {
        color: "{colors.zinc.900}",
        focusColor: "{colors.zinc.900}",
        activeColor: "{extend.white.100}"
      },
      item: {
        focusBackground: "{colors.zinc.100}",
        activeBackground: "{colors.zinc.900}",
        color: "{colors.zinc.900}",
        focusColor: "{colors.zinc.900}",
        activeColor: "{extend.white.100}",
        icon: {
          color: "{colors.zinc.900}",
          focusColor: "{colors.zinc.900}",
          activeColor: "{extend.white.100}"
        }
      }
    }
  },
  dark: {
      pallete: {
        success: {
          "50": "{colors.green.950}",
          "100": "{colors.green.900}",
          "200": "{colors.green.800}",
          "300": "{colors.green.700}",
          "400": "{colors.green.600}",
          "500": "{colors.green.500}",
          "600": "{colors.green.400}",
          "700": "{colors.green.300}",
          "800": "{colors.green.200}",
          "900": "{colors.green.100}",
          "950": "{colors.green.50}"
        },
        info: {
          "50": "{colors.blue.950}",
          "100": "{colors.blue.900}",
          "200": "{colors.blue.800}",
          "300": "{colors.blue.700}",
          "400": "{colors.blue.600}",
          "500": "{colors.blue.500}",
          "600": "{colors.blue.400}",
          "700": "{colors.blue.300}",
          "800": "{colors.blue.200}",
          "900": "{colors.blue.100}",
          "950": "{colors.blue.50}"
        },
        warn: {
          "50": "{colors.yellow.950}",
          "100": "{colors.yellow.900}",
          "200": "{colors.yellow.800}",
          "300": "{colors.yellow.700}",
          "400": "{colors.yellow.600}",
          "500": "{colors.yellow.500}",
          "600": "{colors.yellow.400}",
          "700": "{colors.yellow.300}",
          "800": "{colors.yellow.200}",
          "900": "{colors.yellow.100}",
          "950": "{colors.yellow.50}"
        },
        help: {
          "50": "{colors.purple.950}",
          "100": "{colors.purple.900}",
          "200": "{colors.purple.800}",
          "300": "{colors.purple.700}",
          "400": "{colors.purple.600}",
          "500": "{colors.purple.500}",
          "600": "{colors.purple.400}",
          "700": "{colors.purple.300}",
          "800": "{colors.purple.200}",
          "900": "{colors.purple.100}",
          "950": "{colors.purple.50}"
        },
        error: {
          "50": "{colors.red.950}",
          "100": "{colors.red.900}",
          "200": "{colors.red.800}",
          "300": "{colors.red.700}",
          "400": "{colors.red.600}",
          "500": "{colors.red.500}",
          "600": "{colors.red.400}",
          "700": "{colors.red.300}",
          "800": "{colors.red.200}",
          "900": "{colors.red.100}",
          "950": "{colors.red.50}"
        }
    },
    surface: {
      "0": "#000000",
      "50": "{colors.zinc.950}",
      "100": "{colors.zinc.900}",
      "200": "{colors.zinc.800}",
      "300": "{colors.zinc.700}",
      "400": "{colors.zinc.600}",
      "500": "{colors.zinc.500}",
      "600": "{colors.zinc.400}",
      "700": "{colors.zinc.300}",
      "800": "{colors.zinc.200}",
      "900": "{colors.zinc.100}",
      "950": "{colors.zinc.50}",
      "extend": {
        "transparent": "rgba(0, 0, 0, 0.0001)"
      }
    },
    primary: {
      color: "{primary.500}",
      contrastColor: "{colors.zinc.900}",
      hoverColor: "{primary.400}",
      activeColor: "{primary.300}"
    },
    highlight: {
      background: "{colors.zinc.100}",
      focusBackground: "{colors.zinc.200}",
      color: "{colors.zinc.900}",
      focusColor: "{colors.zinc.900}"
    },
    focusRing: {
      shadow: "0 0 0 0.2rem {primary.800}",
      extend: {
        invalid: "{colors.red.800}",
        success: "{colors.green.800}",
        warning: "{colors.yellow.800}",
        info: "{colors.blue.800}"
      }
    },
    mask: {
      background: "{extend.black.60}",
      color: "{surface.800}"
    },
    formField: {
      background: "{colors.zinc.950}",
      disabledBackground: "{colors.zinc.800}",
      readonlyBackground: "{colors.zinc.900}",
      filledBackground: "{colors.zinc.950}",
      filledHoverBackground: "{colors.zinc.950}",
      filledFocusBackground: "{colors.zinc.950}",
      borderColor: "{colors.zinc.700}",
      hoverBorderPrimaryColor: "{colors.zinc.100}",
      focusBorderPrimaryColor: "{colors.zinc.100}",
      hoverBorderSecondaryColor: "{colors.green.400}",
      focusBorderSecondaryColor: "{colors.green.400}",
      invalidBorderColor: "{colors.red.600}",
      color: "{extend.white.100}",
      disabledColor: "{colors.zinc.500}",
      placeholderColor: "{colors.zinc.500}",
      invalidPlaceholderColor: "{colors.red.400}",
      floatLabelColor: "{colors.zinc.500}",
      floatLabelFocusColor: "{colors.zinc.500}",
      floatLabelActiveColor: "{colors.zinc.500}",
      floatLabelInvalidColor: "{formField.invalidPlaceholderColor}",
      iconColor: "{extend.white.100}",
      shadow: "rgba(255, 255, 255, 0.0000)",
      backgroundHandler: "{extend.white.100}"
    },
    text: {
      color: "{extend.white.100}",
      extend: {
        colorPrimaryStatic: "{colors.zinc.900}",
        colorSecondaryStatic: "{extend.white.100}",
        colorInverted: "{colors.zinc.900}"
      },
      hoverColor: "{colors.zinc.300}",
      mutedColor: "{colors.zinc.500}",
      hoverMutedColor: "{colors.zinc.700}"
    },
    content: {
      background: "{colors.zinc.900}",
      hoverBackground: "{colors.zinc.800}",
      borderColor: "{colors.zinc.800}",
      color: "{text.color}",
      hoverColor: "{text.hoverColor}"
    },
    overlay: {
      select: {
        background: "{colors.zinc.900}",
        borderColor: "{colors.zinc.800}",
        color: "{text.color}"
      },
      popover: {
        background: "{colors.zinc.900}",
        borderColor: "{formField.borderColor}",
        color: "{text.color}",
        shadow: "rgba(24, 26, 31, 0.2000)"
      },
      modal: {
        background: "{colors.zinc.900}",
        borderColor: "{colors.zinc.800}",
        color: "{text.color}"
      }
    },
    list: {
      option: {
        background: "{colors.zinc.900}",
        focusBackground: "{colors.zinc.800}",
        selectedBackground: "{colors.zinc.100}",
        selectedFocusBackground: "{colors.zinc.300}",
        color: "{text.color}",
        focusColor: "{text.color}",
        selectedColor: "{text.extend.colorInverted}",
        selectedFocusColor: "{text.extend.colorInverted}",
        icon: {
          color: "{text.color}",
          focusColor: "{text.color}"
        }
      },
      surface: "#ffffff",
      optionGroup: {
        background: "{colors.zinc.900}",
        color: "{text.mutedColor}"
      }
    },
    navigation: {
      submenuLabel: {
        background: "rgba(255, 255, 255, 0.0000)",
        color: "{text.mutedColor}"
      },
      submenuIcon: {
        color: "{colors.zinc.100}",
        focusColor: "{colors.zinc.100}",
        activeColor: "{colors.zinc.900}"
      },
      item: {
        focusBackground: "{colors.zinc.900}",
        activeBackground: "{colors.zinc.100}",
        color: "{extend.white.100}",
        focusColor: "{extend.white.100}",
        activeColor: "{colors.zinc.900}",
        icon: {
          color: "{extend.white.100}",
          focusColor: "{extend.white.100}",
          activeColor: "{colors.zinc.900}"
        }
      }
    }
  }
  }
};
