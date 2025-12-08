export default {
  colorScheme: {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hoverColor}",
          activeBackground: "{primary.color}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{text.extend.colorPrimaryStatic}",
          hoverColor: "{text.extend.colorPrimaryStatic}",
          activeColor: "{text.extend.colorPrimaryStatic}",
          focusRing: {
            color: "{primary.200}",
            shadow: "{focusRing.shadow}"
          }
        },
        secondary: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.900}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{text.extend.colorInverted}",
          hoverColor: "{text.extend.colorInverted}",
          activeColor: "{text.extend.colorInverted}",
          focusRing: {
            color: "{primary.200}",
            shadow: "{focusRing.shadow}"
          }
        },
        contrast: {
          background: "{surface.200}",
          hoverBackground: "{surface.300}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{text.color}",
          hoverColor: "{text.color}",
          activeColor: "{text.color}",
          focusRing: {
            color: "{primary.200}",
            shadow: "{focusRing.shadow}"
          }
        },
        info: {
          background: "{extend.pallete.info.300}",
          hoverBackground: "{extend.pallete.info.400}",
          activeBackground: "{extend.pallete.info.300}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{extend.pallete.info.900}",
          hoverColor: "{extend.pallete.info.950}",
          activeColor: "{extend.pallete.info.900}"
        },
        success: {
          background: "{extend.pallete.success.300}",
          hoverBackground: "{extend.pallete.success.400}",
          activeBackground: "{extend.pallete.success.300}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{extend.pallete.success.900}",
          hoverColor: "{extend.pallete.success.950}",
          activeColor: "{extend.pallete.success.900}"
        },
        warn: {
          background: "{extend.pallete.warn.300}",
          hoverBackground: "{extend.pallete.warn.400}",
          activeBackground: "{extend.pallete.warn.300}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{extend.pallete.warn.900}",
          hoverColor: "{extend.pallete.warn.950}",
          activeColor: "{extend.pallete.warn.900}"
        },
        help: {
          background: "{extend.pallete.help.300}",
          hoverBackground: "{extend.pallete.help.400}",
          activeBackground: "{extend.pallete.help.300}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{extend.pallete.help.900}",
          hoverColor: "{extend.pallete.help.950}",
          activeColor: "{extend.pallete.help.900}"
        },
        danger: {
          background: "{extend.pallete.error.300}",
          hoverBackground: "{extend.pallete.error.400}",
          activeBackground: "{extend.pallete.error.300}",
          borderColor: "{surface.extend.transparent}",
          hoverBorderColor: "{surface.extend.transparent}",
          activeBorderColor: "{surface.extend.transparent}",
          color: "{extend.pallete.error.900}",
          hoverColor: "{extend.pallete.error.950}",
          activeColor: "{extend.pallete.error.900}"
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.200}",
          color: "{colors.green.500}"
        },
        success: {
          hoverBackground: "{extend.pallete.success.100}",
          activeBackground: "{surface.extend.transparent}",
          borderColor: "{extend.pallete.success.600}",
          color: "{extend.pallete.success.600}"
        },
        info: {
          hoverBackground: "{extend.pallete.info.100}",
          activeBackground: "{surface.extend.transparent}",
          borderColor: "{extend.pallete.info.600}",
          color: "{extend.pallete.info.600}"
        },
        warn: {
          hoverBackground: "{extend.pallete.warn.100}",
          activeBackground: "{surface.extend.transparent}",
          borderColor: "{extend.pallete.warn.600}",
          color: "{extend.pallete.warn.600}"
        },
        help: {
          hoverBackground: "{extend.pallete.help.100}",
          activeBackground: "{surface.extend.transparent}",
          borderColor: "{extend.pallete.help.600}",
          color: "{extend.pallete.help.600}"
        },
        danger: {
          hoverBackground: "{extend.pallete.error.100}",
          activeBackground: "{surface.extend.transparent}",
          borderColor: "{extend.pallete.error.600}",
          color: "{extend.pallete.error.600}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{text.color}"
        },
        success: {
          hoverBackground: "{extend.pallete.success.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{extend.pallete.success.600}"
        },
        info: {
          hoverBackground: "{extend.pallete.info.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{extend.pallete.info.600}"
        },
        warn: {
          hoverBackground: "{extend.pallete.warn.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{extend.pallete.warn.600}"
        },
        help: {
          hoverBackground: "{extend.pallete.help.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{extend.pallete.help.600}"
        },
        danger: {
          hoverBackground: "{extend.pallete.error.100}",
          activeBackground: "{surface.extend.transparent}",
          color: "{extend.pallete.error.600}"
        }
      },
      link: {
        color: "{text.color}",
        hoverColor: "{text.hoverColor}",
        activeColor: "{text.color}"
      }
    }
  },
  extend: {
    extOutlined: {
      danger: {
        focusBackground: "{surface.extend.transparent}"
      },
      warn: {
        focusBackground: "{surface.extend.transparent}"
      },
      info: {
        focusBackground: "{surface.extend.transparent}"
      },
      help: {
        focusBackground: "{surface.extend.transparent}"
      },
      success: {
        focusBackground: "{surface.extend.transparent}"
      }
    },
    disabledBackground: "{formField.disabledBackground}",
    disabledColor: "{formField.disabledColor}",
    extText: {
      danger: {
        focusBackground: "{surface.extend.transparent}"
      },
      warn: {
        focusBackground: "{surface.extend.transparent}"
      },
      info: {
        focusBackground: "{surface.extend.transparent}"
      },
      help: {
        focusBackground: "{surface.extend.transparent}"
      },
      success: {
        focusBackground: "{surface.extend.transparent}"
      }
    },
    extLink: {
      background: "{surface.extend.transparent}",
      colorHover: "{text.hoverColor}",
      paddingX: "0",
      paddingY: "0.25rem",
      sm: {
        iconOnlyWidth: "1rem"
      },
      base: {
        iconOnlyWidth: "1.5357142857142858rem"
      },
      lg: {
        iconOnlyWidth: "1.75rem"
      },
      xlg: {
        iconOnlyWidth: "2rem"
      }
    },
    extSm: {
      borderRadius: "{borderRadius.md}",
      gap: "0.5rem"
    },
    extLg: {
      borderRadius: "{borderRadius.lg}",
      gap: "0.75rem"
    },
    extXlg: {
      borderRadius: "{borderRadius.lg}",
      gap: "0.75rem",
      iconOnlyWidth: "4.071428571428571rem",
      paddingX: "1.5rem",
      paddingY: "1.25rem"
    }
  },
  root: {
    borderRadius: "{borderRadius.md}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "1rem",
    paddingY: "0.5rem",
    iconOnlyWidth: "2.5rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    badgeSize: "1rem",
    transitionDuration: "{formField.transitionDuration}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      offset: "{focusRing.offset}"
    },
    sm: {
      iconOnlyWidth: "2rem",
      paddingX: "0.75rem",
      paddingY: "0.5rem"
    },
    lg: {
      iconOnlyWidth: "3.5714285714285716rem",
      paddingX: "1.5rem",
      paddingY: "1rem"
    },
    label: {
      fontWeight: "42.857142857142854rem"
    }
  }
};

