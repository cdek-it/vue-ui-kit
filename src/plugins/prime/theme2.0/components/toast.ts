export default {
  colorScheme: {
    light: {
      info: {
        background: "{extend.pallete.info.50}",
        borderColor: "{extend.pallete.info.500}",
        color: "{text.color}",
        detailColor: "{text.color}",
        shadow: "{overlay.popover.shadow}",
        closeButton: {
          hoverBackground: "{extend.pallete.info.200}",
          focusRing: {
            color: "{focusRing.color}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "{extend.pallete.success.50}",
        borderColor: "{extend.pallete.success.500}",
        color: "{text.color}",
        detailColor: "{text.color}",
        shadow: "{overlay.popover.shadow}",
        closeButton: {
          hoverBackground: "{extend.pallete.success.200}",
          focusRing: {
            color: "{focusRing.color}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "{extend.pallete.warn.50}",
        borderColor: "{extend.pallete.warn.500}",
        color: "{text.color}",
        detailColor: "{text.color}",
        shadow: "{overlay.popover.shadow}",
        closeButton: {
          hoverBackground: "{extend.pallete.warn.200}",
          focusRing: {
            color: "{focusRing.color}",
            shadow: "none"
          }
        }
      },
      Color: "#ffffff",
      error: {
        background: "{extend.pallete.error.50}",
        borderColor: "{extend.pallete.error.500}",
        color: "{text.color}",
        detailColor: "{text.color}",
        shadow: "{overlay.popover.shadow}",
        closeButton: {
          hoverBackground: "{extend.pallete.error.200}",
          focusRing: {
            color: "{focusRing.color}",
            shadow: "none"
          }
        }
      },
      secondary: {
        shadow: "{overlay.popover.shadow}"
      },
      contrast: {
        shadow: "{overlay.popover.shadow}"
      }
    }
  },
  extend: {
    extInfo: {
      color: "{extend.pallete.info.500}",
      closeButton: {
        color: "{extend.pallete.info.500}",
        borderColor: "{extend.pallete.info.500}"
      },
      caption: {
        color: "{text.color}"
      }
    },
    extAccentLine: {
      width: "0.25rem"
    },
    extCloseButton: {
      width: "0.07142857142857142rem"
    },
    extSuccess: {
      color: "{extend.pallete.success.500}",
      closeButton: {
        color: "{extend.pallete.success.500}",
        borderColor: "{extend.pallete.success.500}"
      },
      caption: {
        color: "{text.color}"
      }
    },
    extWarn: {
      color: "{extend.pallete.warn.500}",
      closeButton: {
        color: "{extend.pallete.warn.500}",
        borderColor: "{extend.pallete.warn.500}"
      },
      caption: {
        color: "{text.color}"
      }
    },
    extError: {
      color: "{extend.pallete.error.500}",
      closeButton: {
        color: "{extend.pallete.error.500}",
        borderColor: "{extend.pallete.error.500}"
      },
      caption: {
        color: "{text.color}"
      }
    }
  },
  root: {
    width: "{sizingToast.width}",
    borderWidth: "0.07142857142857142rem",
    borderRadius: "{content.borderRadius}",
    transitionDuration: "{transitionDuration}"
  },
  icon: {
    size: "2.25rem"
  },
  content: {
    padding: "1rem",
    gap: "1rem"
  },
  text: {
    gap: "0.25rem"
  },
  summary: {
    fontWeight: "35.714285714285715rem",
    fontSize: "1rem"
  },
  detail: {
    fontWeight: "35.714285714285715rem",
    fontSize: "0.875rem"
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    borderRadius: "{borderRadius.md}",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      offset: "{focusRing.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  }
};

