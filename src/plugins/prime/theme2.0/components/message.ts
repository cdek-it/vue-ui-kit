export default {
  colorScheme: {
    light: {
      success: {
        background: "{extend.pallete.success.50}",
        borderColor: "{extend.pallete.success.500}",
        color: "{text.color}",
        shadow: "none",
        outlined: {
          color: "{text.color}",
          borderColor: "{extend.pallete.success.500}"
        },
        closeButton: {
          hoverBackground: "{extend.pallete.success.200}",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "{text.color}"
        }
      },
      outlined: {
        root: {
          borderWidth: "0"
        },
        closeButton: {
          hoverBackground: "#ffffff",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        outlined: {
          color: "#ffffff",
          borderColor: "#ffffff"
        },
        simple: {
          color: "#ffffff"
        }
      },
      simple: {
        content: {
          padding: "0"
        }
      },
      warn: {
        background: "{extend.pallete.warn.50}",
        borderColor: "{extend.pallete.warn.500}",
        color: "{text.color}",
        shadow: "none",
        outlined: {
          color: "{text.color}",
          borderColor: "{extend.pallete.warn.500}"
        },
        closeButton: {
          hoverBackground: "{extend.pallete.warn.200}",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "{text.color}"
        }
      },
      error: {
        background: "{extend.pallete.error.50}",
        borderColor: "{extend.pallete.error.500}",
        color: "{text.color}",
        shadow: "none",
        outlined: {
          color: "{text.color}",
          borderColor: "{extend.pallete.error.500}"
        },
        closeButton: {
          hoverBackground: "{extend.pallete.error.200}",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "{text.color}"
        }
      },
      secondary: {
        borderColor: "#ffffff",
        shadow: "none",
        closeButton: {
          hoverBackground: "#ffffff",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "#ffffff"
        },
        outlined: {
          color: "#ffffff",
          borderColor: "#ffffff"
        }
      },
      contrast: {
        borderColor: "#ffffff",
        shadow: "none",
        closeButton: {
          hoverBackground: "#ffffff",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "#ffffff"
        },
        outlined: {
          color: "#ffffff",
          borderColor: "#ffffff"
        }
      },
      info: {
        background: "{extend.pallete.info.50}",
        borderColor: "{extend.pallete.info.500}",
        color: "{text.color}",
        shadow: "none",
        outlined: {
          color: "{text.color}",
          borderColor: "{extend.pallete.info.500}"
        },
        closeButton: {
          hoverBackground: "{extend.pallete.info.200}",
          focusRing: {
            сolor: "{focusRing.color}",
            shadow: "none"
          }
        },
        simple: {
          color: "{text.color}"
        }
      }
    }
  },
  extend: {
    width: "{sizingMessage.width}",
    extText: {
      gap: "0.25rem"
    },
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
    borderRadius: "{content.borderRadius}",
    borderWidth: "0.07142857142857142rem",
    transitionDuration: "{transitionDuration}"
  },
  content: {
    padding: "1rem",
    gap: "1rem",
    sm: {
      padding: "1rem"
    },
    lg: {
      padding: "1rem"
    }
  },
  text: {
    fontSize: "1rem",
    fontWeight: "35.714285714285715rem",
    sm: {
      fontSize: "1rem"
    },
    lg: {
      fontSize: "1rem"
    }
  },
  icon: {
    size: "2.25rem",
    sm: {
      size: "2.25rem"
    },
    lg: {
      size: "2.25rem"
    }
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    borderRadius: "0.75rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      offset: "{focusRing.offset}"
    }
  },
  closeIcon: {
    size: "1rem",
    sm: {
      size: "1rem"
    },
    lg: {
      size: "1rem"
    }
  }
};

