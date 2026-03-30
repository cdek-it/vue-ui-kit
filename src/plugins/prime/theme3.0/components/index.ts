export default {
  accordion: {
    extend: {
      extHeader: {
        iconSize: '{controls.iconOnly.300}',
        gap: '{controls.gap.100}',
      },
    },
    colorScheme: {
      light: {
        header: {
          background: '{transparent}',
          hoverBackground: '{transparent}',
          activeBackground: '{transparent}',
          activeHoverBackground: '{transparent}',
        },
      },
    },
    header: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      activeColor: '{text.color}',
      activeHoverColor: '{text.hoverColor}',
      borderColor: '{transparent}',
      padding: '{navigation.padding.300} 0 {navigation.padding.300} 0',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '{borderRadius.none}',
      borderWidth: '{borderWidth.none}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      toggleIcon: {
        color: '{text.color}',
        hoverColor: '{text.hoverColor}',
        activeColor: '{text.color}',
        activeHoverColor: '{text.hoverColor}',
      },
      last: {
        bottomBorderRadius: '{borderRadius.none}',
        activeBottomBorderRadius: '{borderRadius.none}',
      },
      first: {
        borderWidth: '{borderWidth.none}',
        topBorderRadius: '{borderRadius.none}',
      },
    },
    root: {
      transitionDuration: '{controls.transitionDuration}',
    },
    panel: {
      borderWidth:
        '{borderWidth.none} {borderWidth.none} {navigation.width.100} {borderWidth.none}',
      borderColor: '{form.borderColor}',
    },
    content: {
      borderWidth:
        '{content.borderWidth} {borderWidth.none} {borderWidth.none} {borderWidth.none}',
      borderColor: '{transparent}',
      background: '{transparent}',
      color: '{text.color}',
      padding:
        '0 {content.padding.400} {content.padding.300} {content.padding.400}',
    },
  },
  autocomplete: {
    extend: {
      extOption: {
        gap: '{form.gap.200}',
      },
      extOptionGroup: {
        gap: '{form.gap.200}',
      },
    },
    colorScheme: {
      light: {
        chip: {
          focusBackground: '{chip.colorScheme.light.root.background}',
          focusColor: '{chip.colorScheme.light.root.color}',
        },
        dropdown: {
          background: '{form.background}',
          hoverBackground: '{form.background}',
          activeBackground: '{form.background}',
          color: '{form.color}',
          hoverColor: '{form.color}',
          activeColor: '{form.color}',
        },
      },
    },
    root: {
      background: '{form.background}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      filledHoverBackground: '{form.filledHoverBackground}',
      filledFocusBackground: '{form.filledFocusBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      focusBorderColor: '{form.focusBorderSecondaryColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      color: '{form.color}',
      disabledColor: '{form.disabledColor}',
      placeholderColor: '{form.placeholderColor}',
      invalidPlaceholderColor: '{form.invalidPlaceholderColor}',
      shadow: '0',
      paddingX: '{form.paddingX}',
      paddingY: '{form.paddingY}',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
    },
    overlay: {
      background: '{overlay.select.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{overlay.select.borderRadius}',
      color: '{overlay.select.color}',
      shadow: '{colorScheme.light.form.shadow}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap.100}',
    },
    option: {
      focusBackground: '{list.option.focusBackground}',
      selectedBackground: '{list.option.selectedBackground}',
      selectedFocusBackground: '{list.option.selectedFocusBackground}',
      color: '{list.option.color}',
      focusColor: '{list.option.focusColor}',
      selectedColor: '{list.option.selectedColor}',
      selectedFocusColor: '{list.option.selectedFocusColor}',
      padding: '{list.option.padding}',
      borderRadius: '{list.option.borderRadius}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{fonts.fontWeight.demibold}',
      padding: '{list.optionGroup.padding}',
    },
    dropdown: {
      width: '{form.width.300}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      activeBorderColor: '{form.focusBorderSecondaryColor}',
      borderRadius: '{form.borderRadius.200}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
      sm: {
        width: '{form.width.200}',
      },
      lg: {
        width: '{form.width.400}',
      },
    },
    chip: {
      borderRadius: '{chip.root.borderRadius}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  avatar: {
    extend: {
      borderColor: '{form.borderColor}',
      circle: {
        borderRadius: '{media.borderRadius.max}',
      },
    },
    root: {
      width: '{media.size.300}',
      height: '{media.size.300}',
      fontSize: '{fonts.fontSize.200}',
      color: '{text.extend.colorPrimaryStatic}',
      background: '{primary.color}',
      borderRadius: '{media.borderRadius.200}',
    },
    icon: {
      size: '{media.icon.size.100}',
    },
    group: {
      borderColor: '{content.background}',
      offset: '{media.padding.300}',
    },
    lg: {
      width: '{media.size.400}',
      height: '{media.size.400}',
      fontSize: '{fonts.fontSize.300}',
      icon: {
        size: '{media.icon.size.100}',
      },
      group: {
        offset: '{media.padding.300}',
      },
    },
    xl: {
      width: '{media.size.500}',
      height: '{media.size.500}',
      icon: {
        size: '{media.icon.size.200}',
      },
      group: {
        offset: '{media.padding.600}',
      },
      fontSize: '{fonts.fontSize.500}',
    },
  },
  badge: {
    extend: {
      extDot: {
        success: {
          background: '{colors.solid.green.400}',
        },
        info: {
          background: '{info.400}',
        },
        warn: {
          background: '{warn.400}',
        },
        danger: {
          background: '{error.400}',
        },
        lg: {
          size: '{feedback.width.400}',
        },
        xlg: {
          size: '{feedback.width.500}',
        },
      },
      ext: {
        padding: '0rem',
      },
    },
    colorScheme: {
      light: {
        primary: {
          color: '{text.extend.colorPrimaryStatic}',
          background: '{primary.color}',
        },
        secondary: {
          color: '{text.extend.colorInverted}',
          background: '{surface.900}',
        },
        success: {
          color: '{success.900}',
          background: '{success.300}',
        },
        info: {
          color: '{info.900}',
          background: '{info.300}',
        },
        warn: {
          color: '{warn.900}',
          background: '{warn.300}',
        },
        danger: {
          color: '{error.900}',
          background: '{error.300}',
        },
      },
    },
    root: {
      borderRadius: '{feedback.width.300}',
      padding: '{feedback.padding.100}',
      fontSize: '{fonts.fontSize.100}',
      fontWeight: '{fonts.fontWeight.regular}',
      minWidth: '{feedback.width.600}',
      height: '{feedback.height.500}',
    },
    dot: {
      size: '{feedback.width.300}',
    },
    sm: {
      fontSize: '{fonts.fontSize.100}',
      minWidth: '0rem',
      height: '0rem',
    },
    lg: {
      fontSize: '{fonts.fontSize.100}',
      minWidth: '{feedback.width.650}',
      height: '{feedback.height.600}',
    },
    xl: {
      fontSize: '{fonts.fontSize.100}',
      minWidth: '{feedback.width.700}',
      height: '{feedback.height.650}',
    },
  },
  breadcrumb: {
    extend: {
      hoverBackground: '{surface.100}',
      iconSize: '{navigation.size.300}',
      extItem: {
        padding: '{navigation.padding.100}',
      },
    },
    root: {
      padding: '0rem',
      background: '{transparent}',
      gap: '0rem',
      transitionDuration: '{form.transitionDuration}',
    },
    focusRing: {
      width: '{focusRing.width}',
      style: '{focusRing.style}',
      color: '{focusRing.color}',
      offset: '{focusRing.offset}',
      shadow: '{focusRing.shadow}',
    },
    item: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      borderRadius: '{navigation.borderRadius}',
      gap: '{navigation.item.gap}',
      icon: {
        color: '{text.color}',
        hoverColor: '{text.hoverColor}',
      },
    },
    separator: {
      color: '{text.color}',
    },
  },
  button: {
    extend: {
      disabledBackground: '{form.disabledBackground}',
      extOutlined: {
        danger: {
          focusBackground: '{transparent}',
        },
        warn: {
          focusBackground: '{transparent}',
        },
        info: {
          focusBackground: '{transparent}',
        },
        help: {
          focusBackground: '{transparent}',
        },
        success: {
          focusBackground: '{transparent}',
        },
      },
      disabledColor: '{form.disabledColor}',
      extText: {
        danger: {
          focusBackground: '{transparent}',
        },
        warn: {
          focusBackground: '{transparent}',
        },
        info: {
          focusBackground: '{transparent}',
        },
        help: {
          focusBackground: '{transparent}',
        },
        success: {
          focusBackground: '{transparent}',
        },
      },
      extLink: {
        background: '{transparent}',
        colorHover: '{text.hoverColor}',
        paddingX: '0rem',
        paddingY: '{controls.padding.100}',
        sm: {
          iconOnlyWidth: '{controls.iconOnly.200}',
        },
        base: {
          iconOnlyWidth: '{controls.iconOnly.400}',
        },
        lg: {
          iconOnlyWidth: '{controls.iconOnly.500}',
        },
        xlg: {
          iconOnlyWidth: '{controls.iconOnly.600}',
        },
      },
      extSm: {
        borderRadius: '{controls.borderRadius.100}',
        gap: '{controls.gap.100}',
      },
      extLg: {
        borderRadius: '{controls.borderRadius.200}',
        gap: '{controls.gap.200}',
        height: '{controls.iconOnly.850}',
      },
      extXlg: {
        borderRadius: '{controls.borderRadius.200}',
        gap: '{controls.gap.200}',
        iconOnlyWidth: '{controls.iconOnly.900}',
        paddingX: '{controls.padding.600}',
        paddingY: '{controls.padding.500}',
        height: '{controls.iconOnly.900}',
      },
      borderWidth: '{controls.width.100}',
      iconSize: {
        sm: '{controls.iconOnly.200}',
        md: '{controls.iconOnly.300}',
        lg: '{controls.iconOnly.400}',
      },
    },
    colorScheme: {
      light: {
        root: {
          primary: {
            background: '{primary.color}',
            hoverBackground: '{primary.hoverColor}',
            activeBackground: '{primary.activeColor}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          secondary: {
            background: '{surface.900}',
            hoverBackground: '{surface.800}',
            activeBackground: '{surface.700}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorInverted}',
            hoverColor: '{text.extend.colorInverted}',
            activeColor: '{text.extend.colorInverted}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          contrast: {
            background: '{surface.200}',
            hoverBackground: '{surface.300}',
            activeBackground: '{surface.400}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.color}',
            hoverColor: '{text.color}',
            activeColor: '{text.color}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          info: {
            background: '{info.300}',
            hoverBackground: '{info.400}',
            activeBackground: '{info.500}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{info.900}',
            hoverColor: '{info.950}',
            activeColor: '{info.900}',
          },
          success: {
            background: '{success.300}',
            hoverBackground: '{success.400}',
            activeBackground: '{success.500}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{success.900}',
            hoverColor: '{success.950}',
            activeColor: '{success.900}',
          },
          warn: {
            background: '{warn.300}',
            hoverBackground: '{warn.400}',
            activeBackground: '{warn.500}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{warn.900}',
            hoverColor: '{warn.950}',
            activeColor: '{warn.900}',
          },
          help: {
            background: '{help.300}',
            hoverBackground: '{help.400}',
            activeBackground: '{help.500}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{help.900}',
            hoverColor: '{help.950}',
            activeColor: '{help.900}',
          },
          danger: {
            background: '{error.300}',
            hoverBackground: '{error.400}',
            activeBackground: '{error.500}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{error.900}',
            hoverColor: '{error.950}',
            activeColor: '{error.900}',
          },
        },
        outlined: {
          primary: {
            hoverBackground: '{primary.hoverBackground}',
            activeBackground: '{primary.activeBackground}',
            borderColor: '{primary.borderColor}',
            color: '{primary.color}',
          },
          success: {
            hoverBackground: '{success.100}',
            activeBackground: '{success.200}',
            borderColor: '{success.600}',
            color: '{success.600}',
          },
          info: {
            hoverBackground: '{info.100}',
            activeBackground: '{info.200}',
            borderColor: '{info.600}',
            color: '{info.600}',
          },
          warn: {
            hoverBackground: '{warn.100}',
            activeBackground: '{warn.200}',
            borderColor: '{warn.600}',
            color: '{warn.600}',
          },
          help: {
            hoverBackground: '{help.100}',
            activeBackground: '{help.200}',
            borderColor: '{help.600}',
            color: '{help.600}',
          },
          danger: {
            hoverBackground: '{error.100}',
            activeBackground: '{error.200}',
            borderColor: '{error.600}',
            color: '{error.600}',
          },
        },
        text: {
          primary: {
            hoverBackground: '{surface.100}',
            activeBackground: '{surface.200}',
            color: '{text.color}',
          },
          success: {
            hoverBackground: '{success.100}',
            activeBackground: '{success.200}',
            color: '{success.600}',
          },
          info: {
            hoverBackground: '{info.100}',
            activeBackground: '{info.200}',
            color: '{info.600}',
          },
          warn: {
            hoverBackground: '{warn.100}',
            activeBackground: '{warn.200}',
            color: '{warn.600}',
          },
          help: {
            hoverBackground: '{help.100}',
            activeBackground: '{help.200}',
            color: '{help.600}',
          },
          danger: {
            hoverBackground: '{error.100}',
            activeBackground: '{error.200}',
            color: '{error.600}',
          },
        },
        link: {
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
          activeColor: '{text.mutedColor}',
        },
      },
      dark: {
        root: {
          primary: {
            background: '{primary.color}',
            hoverBackground: '{primary.hoverColor}',
            activeBackground: '{primary.activeColor}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          secondary: {
            background: '{surface.200}',
            hoverBackground: '{surface.300}',
            activeBackground: '{surface.400}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{surface.950}',
            hoverColor: '{surface.950}',
            activeColor: '{surface.950}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          contrast: {
            background: '{surface.950}',
            hoverBackground: '{surface.900}',
            activeBackground: '{surface.800}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{surface.0}',
            hoverColor: '{surface.0}',
            activeColor: '{surface.0}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          info: {
            background: '{info.500}',
            hoverBackground: '{info.400}',
            activeBackground: '{info.300}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
          },
          success: {
            background: '{success.500}',
            hoverBackground: '{success.400}',
            activeBackground: '{success.300}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
          },
          warn: {
            background: '{warn.500}',
            hoverBackground: '{warn.400}',
            activeBackground: '{warn.300}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
          },
          help: {
            background: '{help.500}',
            hoverBackground: '{help.400}',
            activeBackground: '{help.300}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
          },
          danger: {
            background: '{error.500}',
            hoverBackground: '{error.400}',
            activeBackground: '{error.300}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
          },
        },
        outlined: {
          primary: {
            hoverBackground: '{primary.hoverBackground}',
            activeBackground: '{primary.activeBackground}',
            borderColor: '{primary.borderColor}',
            color: '{primary.color}',
          },
          success: {
            hoverBackground: '{success.950}',
            activeBackground: '{success.900}',
            borderColor: '{success.500}',
            color: '{success.500}',
          },
          info: {
            hoverBackground: '{info.950}',
            activeBackground: '{info.900}',
            borderColor: '{info.500}',
            color: '{info.500}',
          },
          warn: {
            hoverBackground: '{warn.950}',
            activeBackground: '{warn.900}',
            borderColor: '{warn.500}',
            color: '{warn.500}',
          },
          help: {
            hoverBackground: '{help.950}',
            activeBackground: '{help.900}',
            borderColor: '{help.500}',
            color: '{help.500}',
          },
          danger: {
            hoverBackground: '{error.950}',
            activeBackground: '{error.900}',
            borderColor: '{error.500}',
            color: '{error.500}',
          },
        },
        text: {
          primary: {
            hoverBackground: '{surface.800}',
            activeBackground: '{surface.700}',
            color: '{text.color}',
          },
          success: {
            hoverBackground: '{success.950}',
            activeBackground: '{success.900}',
            color: '{success.500}',
          },
          info: {
            hoverBackground: '{info.950}',
            activeBackground: '{info.900}',
            color: '{info.500}',
          },
          warn: {
            hoverBackground: '{warn.950}',
            activeBackground: '{warn.900}',
            color: '{warn.500}',
          },
          help: {
            hoverBackground: '{help.950}',
            activeBackground: '{help.900}',
            color: '{help.500}',
          },
          danger: {
            hoverBackground: '{error.950}',
            activeBackground: '{error.900}',
            color: '{error.500}',
          },
        },
        link: {
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
          activeColor: '{text.mutedColor}',
        },
      },
    },
    root: {
      borderRadius: '{controls.borderRadius.100}',
      roundedBorderRadius: '{controls.borderRadius.max}',
      gap: '{controls.gap.100}',
      paddingX: '{controls.padding.400}',
      paddingY: '{controls.padding.200}',
      iconOnlyWidth: '{controls.iconOnly.700}',
      raisedShadow: 'none',
      badgeSize: '{feedback.width.500}',
      transitionDuration: '{controls.transitionDuration}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
      sm: {
        fontSize: '{fonts.fontSize.200}',
        iconOnlyWidth: '{controls.iconOnly.600}',
        paddingX: '{controls.padding.300}',
        paddingY: '{controls.padding.200}',
      },
      lg: {
        fontSize: '{fonts.fontSize.500}',
        iconOnlyWidth: '{controls.iconOnly.850}',
        paddingX: '{controls.padding.600}',
        paddingY: '{controls.padding.400}',
      },
      label: {
        fontWeight: '{fonts.fontWeight.demibold}',
      },
    },
  },
  card: {
    extend: {
      borderColor: '{content.borderColor}',
      borderWidth: '{content.borderWidth}',
    },
    root: {
      background: '{content.background}',
      borderRadius: '{content.gap.400}',
      color: '{content.color}',
    },
    body: {
      padding: '{content.padding.300}',
      gap: '{content.gap.400}',
    },
    caption: {
      gap: '{content.gap.100}',
    },
    title: {
      fontSize: '{fonts.fontSize.400}',
      fontWeight: '{fonts.fontWeight.demibold}',
    },
    subtitle: {
      color: '{text.mutedColor}',
    },
  },
  carousel: {
    colorScheme: {
      light: {
        indicator: {
          background: '{surface.300}',
          hoverBackground: '{surface.400}',
          activeBackground: '{surface.900}',
        },
      },
    },
    root: {
      transitionDuration: '{media.transitionDuration}',
    },
    content: {
      gap: '{media.gap.200}',
    },
    indicatorList: {
      padding: '{media.padding.400}',
      gap: '{media.gap.200}',
    },
    indicator: {
      width: '{controls.iconOnly.100}',
      height: '{controls.iconOnly.100}',
      borderRadius: '{media.borderRadius.400}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  checkbox: {
    root: {
      borderRadius: '{form.borderRadius.100}',
      extend: {
        borderWidth: '{form.borderWidth}',
      },
      width: '{form.size.400}',
      height: '{form.size.400}',
      background: '{form.background}',
      checkedBackground: '{surface.900}',
      checkedHoverBackground: '{surface.800}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderPrimaryColor}',
      focusBorderColor: '{form.focusBorderPrimaryColor}',
      checkedBorderColor: '{surface.900}',
      checkedHoverBorderColor: '{surface.800}',
      checkedFocusBorderColor: '{primary.color}',
      checkedDisabledBorderColor: '{form.borderColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      shadow: '0',
      focusRing: {
        focusRing: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '{form.size.200}',
        height: '{form.size.200}',
      },
      lg: {
        width: '{form.size.350}',
        height: '{form.size.350}',
      },
      transitionDuration: '{form.transitionDuration}',
    },
    icon: {
      size: '{form.icon.300}',
      color: '{form.color}',
      checkedColor: '{primary.contrastColor}',
      checkedHoverColor: '{primary.contrastColor}',
      disabledColor: '{form.disabledColor}',
      sm: {
        size: '{form.icon.200}',
      },
      lg: {
        size: '{form.icon.400}',
      },
    },
  },
  chip: {
    extend: {
      borderColor: '{transparent}',
      borderWidth: '{controls.width.100}',
    },
    root: {
      borderRadius: '{media.borderRadius.100}',
      paddingX: '{media.padding.200}',
      paddingY: '{media.padding.100}',
      gap: '{media.gap.200}',
      transitionDuration: '{media.transitionDuration}',
    },
    colorScheme: {
      light: {
        root: {
          background: '{surface.200}',
          color: '{text.color}',
        },
        icon: {
          color: '{text.color}',
        },
        removeIcon: {
          color: '{text.color}',
        },
      },
    },
    image: {
      width: '0rem',
      height: '0rem',
    },
    icon: {
      size: '{media.icon.size.100}',
    },
    removeIcon: {
      size: '{media.icon.size.100}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  confirmdialog: {
    extend: {
      extIcon: {
        success: '{success.500}',
        info: '{info.500}',
        help: '{help.500}',
        warn: '{warn.500}',
        danger: '{error.500}',
      },
    },
    icon: {
      size: '{overlay.icon.size.200}',
      color: '{overlay.modal.color}',
    },
    content: {
      gap: '0rem',
    },
  },
  confirmpopup: {
    root: {
      background: '{overlay.popover.background}',
      color: '{overlay.popover.color}',
      shadow: '{overlay.popover.shadow}',
      gutter: '{overlay.gap.300}',
      arrowOffset: '{overlay.modal.padding.200}',
    },
    content: {
      padding: '{overlay.popover.padding.100}',
      gap: '{overlay.gap.400}',
    },
    icon: {
      size: '{overlay.icon.size.200}',
      color: '{overlay.popover.color}',
    },
    footer: {
      gap: '{overlay.gap.200}',
      padding:
        '0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}',
    },
  },
  contextmenu: {
    root: {
      background: '{content.background}',
      color: '{content.color}',
      shadow: '{navigation.shadow}',
    },
    list: {
      padding: '{navigation.list.padding.200} 0',
      gap: '{navigation.list.gap}',
    },
    item: {
      padding: '{navigation.item.padding}',
      gap: '{navigation.item.gap}',
    },
    submenu: {
      mobileIndent: '{navigation.submenu.padding}',
    },
  },
  datatable: {
    colorScheme: {
      light: {
        root: {
          color: '{text.color}',
          borderColor: '{content.borderColor}',
        },
        header: {
          background: '{surface.50}',
          color: '{text.color}',
        },
        headerCell: {
          background: '{surface.50}',
          hoverBackground: '{surface.100}',
          color: '{text.color}',
        },
        footer: {
          background: '{surface.100}',
          color: '{text.color}',
        },
        footerCell: {
          background: '{content.hoverBackground}',
          color: '{text.color}',
        },
        row: {
          stripedBackground: '{content.hoverBackground}',
        },
        bodyCell: {
          selectedBorderColor: '{content.borderColor}',
        },
      },
    },
    extended: {
      extHeaderCell: {
        selectedHoverBackground: '{surface.800}',
      },
      extRow: {
        selectedHoverBackground: '{surface.800}',
        stripedHoverBackground: '{surface.100}',
      },
    },
    root: {
      transitionDuration: '{data.transitionDuration}',
    },
    header: {
      borderColor: '{content.borderColor}',
      borderWidth: '{data.width.100} 0 {data.width.100} 0',
      padding: '{data.padding.400}',
      sm: {
        padding: '{data.padding.200}',
      },
      lg: {
        padding: '{data.padding.500}',
      },
    },
    headerCell: {
      selectedBackground: '{highlight.background}',
      borderColor: '{content.borderColor}',
      hoverColor: '{text.extend.colorInverted}',
      selectedColor: '{highlight.color}',
      gap: '{data.gap.200}',
      padding: '{data.padding.400}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      sm: {
        padding: '{data.padding.200}',
      },
      lg: {
        padding: '{data.padding.500}',
      },
    },
    columnTitle: {
      fontWeight: '{fonts.fontWeight.bold}',
    },
    row: {
      background: '{content.background}',
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{highlight.background}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      selectedColor: '{highlight.color}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
    },
    bodyCell: {
      borderColor: '{content.borderColor}',
      padding: '{data.padding.400}',
      sm: {
        padding: '{data.padding.200}',
      },
      lg: {
        padding: '{data.padding.500}',
      },
    },
    footerCell: {
      borderColor: '{content.borderColor}',
      padding: '{data.padding.400}',
      sm: {
        padding: '{data.padding.200}',
      },
      lg: {
        padding: '{data.padding.500}',
      },
    },
    columnFooter: {
      fontWeight: '{fonts.fontWeight.bold}',
    },
    dropPoint: {
      color: '{highlight.background}',
    },
    footer: {
      borderColor: '{content.borderColor}',
      borderWidth: '0 0 {data.width.100} 0',
      padding: '{data.padding.400}',
      sm: {
        padding: '{data.padding.200}',
      },
      lg: {
        padding: '{data.padding.500}',
      },
    },
    columnResizer: {
      width: '{data.width.300}',
    },
    resizeIndicator: {
      width: '{data.width.100}',
      color: '{highlight.background}',
    },
    sortIcon: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      size: '{data.icon.size.100}',
    },
    loadingIcon: {
      size: '{data.icon.size.500}',
    },
    rowToggleButton: {
      hoverBackground: '{content.hoverBackground}',
      selectedHoverBackground: '{content.hoverBackground}',
      color: '{text.color}',
      hoverColor: '{text.color}',
      selectedHoverColor: '{text.color}',
      size: '{data.icon.size.500}',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    filter: {
      inlineGap: '{data.gap.200}',
      rule: {
        borderColor: '{content.borderColor}',
      },
      constraintList: {
        padding: '{list.padding}',
        gap: '{list.gap.100}',
      },
      constraint: {
        focusBackground: '{list.option.focusBackground}',
        selectedBackground: '{list.option.selectedBackground}',
        selectedFocusBackground: '{list.option.selectedFocusBackground}',
        color: '{list.option.color}',
        focusColor: '{list.option.focusColor}',
        selectedColor: '{list.option.selectedColor}',
        selectedFocusColor: '{list.option.selectedFocusColor}',
        padding: '{list.option.padding}',
        borderRadius: '{list.option.borderRadius}',
        separator: {
          borderColor: '{content.borderColor}',
        },
      },
      overlaySelect: {
        background: '{overlay.select.background}',
        color: '{overlay.select.color}',
        borderColor: '{overlay.select.borderColor}',
        borderRadius: '{overlay.select.borderRadius}',
        shadow: '{overlay.select.shadow}',
      },
      overlayPopover: {
        background: '{overlay.popover.background}',
        color: '{overlay.popover.color}',
        borderColor: '{overlay.select.borderColor}',
        borderRadius: '{overlay.select.borderRadius}',
        shadow: '{overlay.popover.shadow}',
        padding: '{overlay.popover.padding.100}',
        gap: '{list.gap.100}',
      },
    },
    paginatorTop: {
      borderColor: '{form.borderColor}',
      borderWidth: '0 0 {data.width.100} 0',
    },
    paginatorBottom: {
      borderWidth: '0 0 {data.width.100} 0',
      borderColor: '{content.borderColor}',
    },
  },
  dataview: {
    root: {
      borderWidth: '{data.width.100}',
      borderRadius: '{data.borderRadius}',
      padding: '0rem',
      borderColor: '{content.borderColor}',
    },
    header: {
      borderWidth: '0 0 {data.width.100} 0',
      padding: '{data.padding.200} {data.padding.300}',
      borderRadius: '0 0 0 0',
      color: '{text.color}',
    },
    content: {
      background: '{content.background}',
      color: '{content.color}',
      borderColor: '{content.borderColor}',
      borderWidth: '0rem',
      padding: '0rem',
      borderRadius: '0',
    },
    footer: {
      background: '{surface.100}',
      color: '{text.color}',
      borderWidth: '{data.width.100} 0 0 0',
      padding: '{data.padding.200} {data.padding.300}',
      borderRadius: '0 0 0 0',
    },
    paginatorTop: {
      borderWidth: '0 0 {data.width.100} 0',
    },
    paginatorBottom: {
      borderWidth: '{data.width.100} 0 0 0',
    },
  },
  datepicker: {
    extend: {
      extDate: {
        selectedHoverBackground: '{surface.800}',
      },
      extToday: {
        hoverBackground: '{content.hoverBackground}',
        borderColor: '{content.activeBorderColor}',
      },
      extTitle: {
        width: '{form.width.500}',
      },
      extTimePicker: {
        minWidth: '{form.width.400}',
        color: '{content.color}',
      },
    },
    colorScheme: {
      light: {
        dropdown: {
          background: '{content.background}',
          hoverBackground: '{navigation.item.focusBackground}',
          activeBackground: '{navigation.item.activeBackground}',
          color: '{navigation.item.color}',
          hoverColor: '{navigation.item.focusColor}',
          activeColor: '{navigation.item.activeColor}',
        },
        today: {
          background: '{transparent}',
          color: '{text.extend.colorPrimaryStatic}',
        },
      },
    },
    panel: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      padding: '0rem',
    },
    header: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      padding: '{overlay.popover.padding.100}',
    },
    title: {
      gap: '{form.gap.200}',
      fontWeight: '{fonts.fontWeight.bold}',
    },
    selectMonth: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '{form.padding.200}',
    },
    inputIcon: {
      color: '{form.floatLabelColor}',
    },
    dropdown: {
      width: '{form.width.300}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.borderColor}',
      activeBorderColor: '{form.borderColor}',
      borderRadius: '{form.borderRadius.200}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '0rem',
      },
      lg: {
        width: '0rem',
      },
    },
    group: {
      borderColor: '{content.borderColor}',
      gap: '{overlay.popover.padding.100}',
    },
    selectYear: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '{overlay.select.padding}',
    },
    dayView: {
      margin: '{overlay.popover.padding.100}',
    },
    weekDay: {
      padding: '{form.padding.100}',
      fontWeight: '{fonts.fontWeight.bold}',
      color: '{content.color}',
    },
    date: {
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{highlight.background}',
      rangeSelectedBackground: '{list.option.focusBackground}',
      color: '{content.color}',
      hoverColor: '{content.color}',
      selectedColor: '{text.extend.colorInverted}',
      rangeSelectedColor: '{text.color}',
      width: '{form.size.500}',
      height: '{form.size.500}',
      borderRadius: '{form.borderRadius.100}',
      padding: '{form.padding.100}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    monthView: {
      margin: '0 0 0 0',
    },
    month: {
      padding: '0',
      borderRadius: '0rem',
    },
    yearView: {
      margin: '0 0 0 0',
    },
    year: {
      padding: '0',
      borderRadius: '0rem',
    },
    buttonbar: {
      padding: '{overlay.popover.padding.100}',
      borderColor: '{content.borderColor}',
    },
    timePicker: {
      padding: '{form.padding.300}',
      borderColor: '{content.borderColor}',
      gap: '{form.gap.200}',
      buttonGap: '{form.gap.100}',
    },
    root: {
      transitionDuration: '{form.transitionDuration}',
    },
  },
  dialog: {
    extend: {
      borderWidth: '{overlay.borderWidth}',
      backdrop: '{overlay.modal.backdrop}',
    },
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      borderRadius: '{overlay.modal.borderRadius}',
      shadow: '{overlay.popover.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding.300} {overlay.modal.padding.300} 1rem {overlay.modal.padding.300}',
      gap: '{overlay.gap.200}',
    },
    title: {
      fontSize: '{fonts.fontSize.500}',
      fontWeight: '{fonts.fontWeight.demibold}',
    },
    content: {
      padding: '{content.padding.400}',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding.300} {overlay.modal.padding.300} {overlay.modal.padding.300}',
      gap: '{content.gap.200}',
    },
  },
  divider: {
    colorScheme: {
      light: {
        content: {
          background: '{content.background}',
          color: '{text.mutedColor}',
        },
        borderColor: '{content.borderColor}',
      },
    },
    extend: {
      content: {
        gap: '{content.gap.200}',
      },
      iconSize: '{media.icon.size.100}',
    },
    horizontal: {
      margin: '{content.padding.300} 0',
      padding: '0 {content.padding.300}',
      content: {
        padding: '0 {content.padding.200}',
      },
    },
    vertical: {
      margin: '0 {content.padding.300}',
      padding: '{content.padding.300} 0',
      content: {
        padding: '{content.padding.200} 0',
      },
    },
  },
  drawer: {
    extend: {
      borderRadius: '{overlay.popover.borderRadius}',
      borderWidth: '{overlay.borderWidth}',
      width: '{overlay.width}',
      extHeader: {
        gap: '{overlay.gap.200}',
        borderColor: '{drawer.root.borderColor}',
      },
      padding: '{overlay.drawer.padding}',
      scale: '0.125rem',
      backdrop: '{overlay.modal.backdrop}',
    },
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      shadow: '{overlay.modal.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding.300} {overlay.modal.padding.300} {overlay.modal.padding.100} {overlay.modal.padding.300} ',
    },
    title: {
      fontSize: '{fonts.fontSize.500}',
      fontWeight: '{fonts.fontWeight.demibold}',
    },
    content: {
      padding: '{overlay.modal.padding.300}',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding.300} {overlay.modal.padding.300} {overlay.modal.padding.300} ',
    },
  },
  fileupload: {
    extend: {
      extDragNdrop: {
        background: '{surface.0}',
        borderRadius: '{form.borderRadius.200}',
        iconSize: '{form.size.500}',
        padding: '{form.padding.400}',
        info: {
          gap: '{form.gap.100}',
        },
      },
      extFile: {
        iconSize: '{form.size.350}',
      },
      extContent: {
        borderRadius: '{content.borderRadius}',
        highlightBorderDefault: '{form.borderColor}',
      },
    },
    colorScheme: {
      light: {
        header: {
          background: '{surface.0}',
          color: '{text.color}',
        },
      },
    },
    root: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{form.transitionDuration}',
    },
    header: {
      borderColor: '{content.borderColor}',
      borderWidth: '0rem',
      padding: '0rem',
      borderRadius: '0rem',
      gap: '{content.gap.200}',
    },
    content: {
      highlightBorderColor: '{surface.900}',
      padding: '0rem',
      gap: '{content.gap.200}',
    },
    file: {
      padding: '{content.padding.200}',
      gap: '{content.gap.200}',
      borderColor: '{form.borderColor}',
      info: {
        gap: '{content.gap.100}',
      },
    },
    fileList: {
      gap: '{content.gap.200}',
    },
    progressbar: {
      height: '{feedback.height.100}',
    },
    basic: {
      gap: '{content.gap.200}',
    },
  },
  floatlabel: {
    extend: {
      height: '{form.size.800}',
      iconSize: '{form.icon.400}',
    },
    root: {
      color: '{form.floatLabelColor}',
      focusColor: '{form.floatLabelFocusColor}',
      activeColor: '{form.floatLabelActiveColor}',
      invalidColor: '{form.floatLabelInvalidColor}',
      transitionDuration: '{form.transitionDuration}',
      positionX: '{form.padding.400}',
      positionY: '{form.padding.300}',
      fontWeight: '{fonts.fontWeight.regular}',
      fontSize: '{fonts.fontSize.300}',
      active: {
        fontSize: '{fonts.fontSize.100}',
        fontWeight: '{fonts.fontWeight.regular}',
      },
    },
    over: {
      active: {
        top: '{form.padding.400}',
      },
    },
    in: {
      input: {
        paddingTop: '{form.padding.700}',
        paddingBottom: '{form.padding.300}',
      },
      active: {
        top: '{form.padding.300}',
      },
    },
    on: {
      borderRadius: '0rem',
      active: {
        padding: '0 {form.padding.100}',
        background: '{form.background}',
      },
    },
  },
  galleria: {
    extend: {
      backdrop: '{overlay.modal.backdrop}',
    },
    colorScheme: {
      light: {
        thumbnailContent: {
          background: '{surface.100}',
        },
        thumbnailNavButton: {
          hoverBackground: '{colors.alpha.white.200}',
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
        },
        indicatorButton: {
          background: '{surface.300}',
          hoverBackground: '{surface.400}',
        },
      },
    },
    root: {
      borderWidth: '{content.borderWidth}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{media.transitionDuration}',
    },
    navButton: {
      background: '{transparent}',
      hoverBackground: '{colors.alpha.white.200}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      size: '{media.size.600}',
      gutter: '{media.gap.200}',
      prev: {
        borderRadius: '{navigation.item.borderRadius}',
      },
      next: {
        borderRadius: '{navigation.item.borderRadius}',
      },
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    navIcon: {
      size: '{media.icon.size.300}',
    },
    thumbnailsContent: {
      padding: '{media.padding.100}',
    },
    thumbnailNavButton: {
      size: '{media.size.300}',
      borderRadius: '{content.borderRadius}',
      gutter: '{media.gap.200}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    thumbnailNavButtonIcon: {
      size: '{media.icon.size.100}',
    },
    caption: {
      background: '{colors.alpha.white.500}',
      color: '{text.color}',
      padding: '{media.gap.200}',
    },
    indicatorList: {
      gap: '{media.gap.200}',
      padding: '{media.padding.400}',
    },
    indicatorButton: {
      width: '{media.size.200}',
      height: '{media.size.200}',
      activeBackground: '{surface.900}',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    insetIndicatorList: {
      background: '{colors.alpha.black.500}',
    },
    insetIndicatorButton: {
      background: '{colors.alpha.white.100}',
      hoverBackground: '{colors.alpha.white.200}',
      activeBackground: '{colors.alpha.white.500}',
    },
    closeButton: {
      size: '{media.size.600}',
      gutter: '{media.gap.200}',
      background: '{colors.alpha.white.100}',
      hoverBackground: '{colors.alpha.white.200}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      borderRadius: '{controls.borderRadius.200}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    closeButtonIcon: {
      size: '{media.icon.size.300}',
    },
  },
  inputgroup: {
    extend: {
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.300}',
    },
    colorScheme: {
      light: {
        addon: {
          background: '{form.background}',
          borderColor: '{form.borderColor}',
          color: '{text.mutedColor}',
        },
      },
    },
    addon: {
      borderRadius: '{form.borderRadius.200}',
      padding: '{form.padding.300}',
      minWidth: '{form.width.300}',
    },
  },
  inputnumber: {
    extend: {
      borderWidth: '{form.borderWidth}',
      extButton: {
        height: '{form.size.600}',
        iconSize: '{form.icon.300}',
      },
    },
    colorScheme: {
      light: {
        button: {
          background: '{content.background}',
          hoverBackground: '{content.hoverBackground}',
          activeBackground: '{transparent}',
          borderColor: '{form.borderColor}',
          hoverBorderColor: '{form.borderColor}',
          activeBorderColor: '{form.borderColor}',
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
          activeColor: '{text.color}',
        },
      },
    },
    transitionDuration: {
      transitionDuration: '{form.transitionDuration}',
    },
    button: {
      width: '{form.width.300}',
      borderRadius: '{form.borderRadius.200}',
      verticalPadding: '{form.padding.300}',
    },
  },
  inputotp: {
    extend: {
      height: '{form.size.600}',
      borderWidth: '{form.borderWidth}',
    },
    root: {
      gap: '{form.gap.200}',
    },
    input: {
      width: '{form.width.400}',
    },
    sm: {
      width: '0rem',
    },
    lg: {
      width: '0rem',
    },
  },
  inputtext: {
    extend: {
      readonlyBackground: '{form.readonlyBackground}',
      iconSize: '{form.icon.300}',
      borderWidth: '{form.borderWidth}',
      extXlg: {
        fontSize: '{form.xlg.fontSize}',
        paddingX: '{form.paddingX}',
        paddingY: '{form.xlg.paddingY}',
      },
    },
    root: {
      background: '{form.background}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      filledHoverBackground: '{form.filledHoverBackground}',
      filledFocusBackground: '{form.filledFocusBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      focusBorderColor: '{form.focusBorderSecondaryColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      color: '{text.color}',
      disabledColor: '{form.disabledColor}',
      placeholderColor: '{form.placeholderColor}',
      invalidPlaceholderColor: '{form.invalidPlaceholderColor}',
      shadow: '0',
      paddingX: '{form.paddingX}',
      paddingY: '{form.paddingY}',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{form.sm.fontSize}',
        paddingX: '{form.paddingX}',
        paddingY: '{form.sm.paddingY}',
      },
      lg: {
        fontSize: '{form.lg.fontSize}',
        paddingX: '{form.paddingX}',
        paddingY: '{form.lg.paddingY}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
    },
  },
  listbox: {
    extend: {
      extOption: {
        label: {
          gap: '{list.gap.100}',
        },
        caption: {
          color: '{text.mutedColor}',
          stripedColor: '{text.mutedColor}',
        },
        gap: '{list.gap.200}',
      },
    },
    colorScheme: {
      light: {
        option: {
          stripedBackground: '{surface.50}',
        },
      },
    },
    root: {
      background: '{form.background}',
      disabledBackground: '{form.disabledBackground}',
      borderColor: '{form.borderColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      color: '{form.color}',
      disabledColor: '{form.disabledColor}',
      shadow: '0',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap.100}',
      header: {
        padding: '{list.header.padding}',
      },
    },
    option: {
      focusBackground: '{list.option.focusBackground}',
      selectedBackground: '{list.option.selectedBackground}',
      selectedFocusBackground: '{list.option.selectedFocusBackground}',
      color: '{list.option.color}',
      focusColor: '{list.option.focusColor}',
      selectedColor: '{list.option.selectedColor}',
      selectedFocusColor: '{list.option.selectedFocusColor}',
      padding: '{list.option.padding}',
      borderRadius: '{list.option.borderRadius}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{fonts.fontWeight.demibold}',
      padding: '{list.option.padding}',
    },
    checkmark: {
      color: '{list.option.color}',
      gutterStart: '-{list.gap.200}',
      gutterEnd: '{list.gap.200}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  megamenu: {
    extend: {
      extItem: {
        caption: {
          color: '{text.mutedColor}',
          gap: '{content.gap.100}',
        },
      },
      iconSize: '{navigation.submenuIcon.size}',
    },
    colorScheme: {
      light: {
        root: {
          background: '{transparent}',
        },
      },
    },
    root: {
      borderColor: '{transparent}',
      borderRadius: '{content.borderRadius}',
      color: '{content.color}',
      gap: '{content.gap.100}',
      transitionDuration: '{form.transitionDuration}',
      verticalOrientation: {
        padding: '{navigation.list.padding.100}',
        gap: '{navigation.list.gap}',
      },
      horizontalOrientation: {
        padding: '{navigation.list.padding.100}',
        gap: '{navigation.list.gap}',
      },
    },
    baseItem: {
      borderRadius: '{content.borderRadius}',
      padding: '{navigation.item.padding}',
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      activeBackground: '{navigation.item.activeBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      activeColor: '{navigation.item.activeColor}',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      gap: '{navigation.item.gap}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
        activeColor: '{navigation.item.icon.activeColor}',
      },
    },
    overlay: {
      padding: '{content.padding.100}',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      color: '{content.color}',
      shadow: '{navigation.shadow}',
      gap: '0rem',
    },
    submenu: {
      padding: '{navigation.list.padding.100}',
      gap: '{navigation.list.gap}',
    },
    submenuLabel: {
      padding: '{navigation.submenuLabel.padding}',
      background: '{navigation.submenuLabel.background}',
      color: '{navigation.submenuLabel.color}',
    },
    submenuIcon: {
      size: '{navigation.submenuIcon.size}',
      color: '{navigation.submenuIcon.color}',
      focusColor: '{navigation.submenuIcon.focusColor}',
      activeColor: '{navigation.submenuIcon.activeColor}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
    mobileButton: {
      borderRadius: '{navigation.item.borderRadius}',
      size: '{controls.iconOnly.600}',
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      hoverBackground: '{content.hoverBackground}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  menu: {
    extend: {
      paddingX: '0.25rem',
      iconSize: '{navigation.submenuIcon.size}',
      paddingY: '0.25rem',
      extItem: {
        caption: {
          gap: '{content.gap.100}',
        },
        activeBackground: '{navigation.item.activeBackground}',
        activeColor: '{navigation.item.activeColor}',
      },
    },
    colorScheme: {
      light: {
        extend: {
          extItem: {
            caption: {
              color: '{text.mutedColor}',
            },
            icon: {
              activeColor: '{navigation.item.icon.activeColor}',
            },
          },
        },
        root: {
          background: '{content.background}',
          borderColor: '{content.borderColor}',
          color: '{content.color}',
        },
        item: {
          focusBackground: '{navigation.item.focusBackground}',
          color: '{navigation.item.color}',
          focusColor: '{navigation.item.focusColor}',
          icon: {
            color: '{navigation.item.icon.color}',
            focusColor: '{navigation.item.icon.focusColor}',
          },
        },
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
      shadow: '{navigation.shadow}',
      transitionDuration: '{form.transitionDuration}',
    },
    list: {
      padding: '{navigation.list.padding.100}',
      gap: '{navigation.list.gap}',
    },
    submenuLabel: {
      padding: '{navigation.submenuLabel.padding}',
      fontWeight: '{fonts.fontWeight.demibold}',
      background: '{navigation.submenuLabel.background}',
      color: '{navigation.submenuLabel.color}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
    item: {
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      gap: '{navigation.item.gap}',
    },
  },
  menubar: {
    extend: {
      iconSize: '{navigation.submenuIcon.size}',
      extItem: {
        caption: {
          color: '{text.mutedColor}',
          gap: '{content.padding.100}',
        },
      },
      extSubmenuLabel: {
        padding: '{navigation.submenuLabel.padding}',
        fontWeight: '{fonts.fontWeight.demibold}',
        background: '{navigation.submenuLabel.background}',
        color: '{navigation.submenuLabel.color}',
      },
    },
    colorScheme: {
      light: {
        root: {
          background: '{transparent}',
        },
      },
    },
    root: {
      borderColor: '{transparent}',
      borderRadius: '{navigation.item.borderRadius}',
      color: '{content.color}',
      gap: '{content.padding.100}',
      padding: '{navigation.list.padding.100}',
      transitionDuration: '{form.transitionDuration}',
    },
    baseItem: {
      borderRadius: '{navigation.item.borderRadius}',
      padding: '{navigation.item.padding}',
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      activeBackground: '{navigation.item.activeBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      activeColor: '{navigation.item.activeColor}',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      gap: '{navigation.item.gap}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
        activeColor: '{navigation.item.icon.activeColor}',
      },
    },
    submenu: {
      padding: '{navigation.list.padding.100}',
      gap: '{navigation.list.gap}',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      shadow: '{navigation.shadow}',
      mobileIndent: '{navigation.padding.200}',
      icon: {
        size: '{navigation.submenuIcon.size}',
        color: '{navigation.submenuIcon.color}',
        focusColor: '{navigation.submenuIcon.focusColor}',
        activeColor: '{navigation.submenuIcon.activeColor}',
      },
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
    mobileButton: {
      borderRadius: '{navigation.item.borderRadius}',
      size: '{controls.iconOnly.600}',
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      hoverBackground: '{content.hoverBackground}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  message: {
    extend: {
      width: '{messages.width}',
      extText: {
        gap: '{feedback.gap.100}',
      },
      extInfo: {
        color: '{info.500}',
        closeButton: {
          color: '{info.500}',
          borderColor: '{info.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extAccentLine: {
        width: '{feedback.width.200}',
      },
      extCloseButton: {
        width: '{feedback.width.100}',
      },
      extSuccess: {
        color: '{success.500}',
        closeButton: {
          color: '{success.500}',
          borderColor: '{success.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extWarn: {
        color: '{warn.500}',
        closeButton: {
          color: '{warn.500}',
          borderColor: '{warn.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extError: {
        color: '{error.500}',
        closeButton: {
          color: '{error.500}',
          borderColor: '{error.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
    },
    colorScheme: {
      light: {
        success: {
          background: '{success.50}',
          borderColor: '{success.500}',
          color: '{text.color}',
          shadow: 'none',
          outlined: {
            color: '{text.color}',
            borderColor: '{success.500}',
          },
          closeButton: {
            hoverBackground: '{success.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
        outlined: {
          root: {
            borderWidth: '0rem',
          },
          closeButton: {
            hoverBackground: '{transparent}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          outlined: {
            color: '{transparent}',
            borderColor: '{transparent}',
          },
          simple: {
            color: '{transparent}',
          },
        },
        simple: {
          content: {
            padding: '0rem',
          },
        },
        warn: {
          background: '{warn.50}',
          borderColor: '{warn.500}',
          color: '{text.color}',
          shadow: 'none',
          outlined: {
            color: '{text.color}',
            borderColor: '{warn.500}',
          },
          closeButton: {
            hoverBackground: '{warn.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
        error: {
          background: '{error.50}',
          borderColor: '{error.500}',
          color: '{text.color}',
          shadow: 'none',
          outlined: {
            color: '{text.color}',
            borderColor: '{error.500}',
          },
          closeButton: {
            hoverBackground: '{error.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
        secondary: {
          borderColor: '{transparent}',
          shadow: 'none',
          closeButton: {
            hoverBackground: '{transparent}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{transparent}',
          },
          outlined: {
            color: '{transparent}',
            borderColor: '{transparent}',
          },
        },
        contrast: {
          borderColor: '{transparent}',
          shadow: 'none',
          closeButton: {
            hoverBackground: '{transparent}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{transparent}',
          },
          outlined: {
            color: '{transparent}',
            borderColor: '{transparent}',
          },
        },
        info: {
          background: '{info.50}',
          borderColor: '{info.500}',
          color: '{text.color}',
          shadow: 'none',
          closeButton: {
            hoverBackground: '{info.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          outlined: {
            color: '{text.color}',
            borderColor: '{info.500}',
          },
          simple: {
            color: '{text.color}',
          },
        },
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
      borderWidth: '{feedback.width.100}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    content: {
      padding: '{feedback.padding.200}',
      gap: '{feedback.gap.400}',
      sm: {
        padding: '{feedback.padding.200}',
      },
      lg: {
        padding: '{feedback.padding.200}',
      },
    },
    text: {
      fontSize: '{fonts.fontSize.300}',
      fontWeight: '{fonts.fontWeight.bold}',
      sm: {
        fontSize: '{fonts.fontSize.300}',
      },
      lg: {
        fontSize: '{fonts.fontSize.300}',
      },
    },
    icon: {
      size: '{feedback.icon.size.500}',
      sm: {
        size: '{feedback.icon.size.500}',
      },
      lg: {
        size: '{feedback.icon.size.500}',
      },
    },
    closeButton: {
      width: '{controls.iconOnly.600}',
      height: '{controls.iconOnly.600}',
      borderRadius: '{controls.borderRadius.100}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '{feedback.icon.size.200}',
      sm: {
        size: '{feedback.icon.size.200}',
      },
      lg: {
        size: '{feedback.icon.size.200}',
      },
    },
  },
  metergroup: {
    extend: {
      extLabel: {
        color: '{text.mutedColor}',
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
      gap: '{feedback.gap.300}',
    },
    meters: {
      size: '{feedback.height.100}',
      background: '{content.borderColor}',
    },
    label: {
      gap: '{feedback.gap.100}',
    },
    labelMarker: {
      size: '{feedback.icon.size.100}',
    },
    labelIcon: {
      size: '{feedback.icon.size.200}',
    },
    labelList: {
      verticalGap: '{feedback.gap.200}',
      horizontalGap: '{feedback.gap.300}',
    },
  },
  multiselect: {
    colorScheme: {
      overlay: {
        background: '{overlay.select.background}',
        borderColor: '{overlay.select.borderColor}',
        color: '{overlay.select.color}',
      },
      option: {
        focusBackground: '{list.option.focusBackground}',
        selectedBackground: '{list.option.selectedBackground}',
        selectedFocusBackground: '{list.option.selectedFocusBackground}',
        color: '{list.option.color}',
        focusColor: '{list.option.focusColor}',
        selectedColor: '{list.option.selectedColor}',
        selectedFocusColor: '{list.option.selectedFocusColor}',
      },
      root: {
        background: '{form.background}',
        disabledBackground: '{form.disabledBackground}',
        filledBackground: '{form.filledBackground}',
        filledHoverBackground: '{form.filledHoverBackground}',
        filledFocusBackground: '{form.filledFocusBackground}',
        borderColor: '{form.borderColor}',
        hoverBorderColor: '{form.hoverBorderSecondaryColor}',
        focusBorderColor: '{form.focusBorderSecondaryColor}',
        invalidBorderColor: '{form.invalidBorderColor}',
        color: '{form.color}',
        disabledColor: '{form.disabledColor}',
        placeholderColor: '{form.placeholderColor}',
        invalidPlaceholderColor: '{form.invalidPlaceholderColor}',
        focusRing: {
          color: '{form.focusRing.color}',
        },
      },
      dropdown: {
        color: '{form.floatLabelColor}',
      },
      optionGroup: {
        background: '{list.optionGroup.background}',
        color: '{list.optionGroup.color}',
      },
      clearIcon: {
        color: '{form.floatLabelColor}',
      },
    },
    extend: {
      paddingX: '0.3571rem',
      paddingY: '0.3571rem',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.300}',
      width: '{form.width}',
      readonlyBackground: '{form.readonlyBackground}',
    },
    root: {
      shadow: '0',
      paddingX: '{form.paddingX}',
      paddingY: '{form.paddingY}',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{fonts.fontSize.300}',
        paddingX: '{form.padding.200}',
        paddingY: '{form.padding.200}',
      },
      lg: {
        fontSize: '{fonts.fontSize.300}',
        paddingX: '{form.padding.400}',
        paddingY: '{form.padding.400}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
    },
    dropdown: {
      width: '{form.width.300}',
    },
    overlay: {
      borderRadius: '{overlay.select.borderRadius}',
      shadow: '{overlay.select.shadow}',
    },
    list: {
      padding: '{list.padding}',
      header: {
        padding: '{list.header.padding}',
      },
      gap: '{list.gap.100}',
    },
    chip: {
      borderRadius: '{form.borderRadius.100}',
    },
    option: {
      padding: '{list.option.padding}',
      borderRadius: '{list.option.borderRadius}',
      gap: '{list.gap.200}',
    },
    optionGroup: {
      fontWeight: '{fonts.fontWeight.demibold}',
      padding: '{list.optionGroup.padding}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  paginator: {
    root: {
      padding: '0 {data.padding.200}',
      gap: '{data.gap.200}',
      borderRadius: '{content.borderRadius}',
      background: '{transparent}',
      color: '{content.color}',
      transitionDuration: '{data.transitionDuration}',
    },
    currentPageReport: {
      color: '{text.mutedColor}',
    },
    navButton: {
      background: '{transparent}',
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{highlight.background}',
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      selectedColor: '{text.extend.colorInverted}',
      width: '{data.icon.size.700}',
      height: '{data.icon.size.700}',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        focus: '{focusRing.shadow}',
      },
    },
    jumpToPageInput: {
      maxWidth: '{data.width.400}',
    },
  },
  panelmenu: {
    extend: {
      extPanel: {
        gap: '{content.gap.100}',
      },
      iconSize: '{navigation.submenuIcon.size}',
      extItem: {
        activeBackground: '{navigation.item.activeBackground}',
        activeColor: '{navigation.item.activeColor}',
        caption: {
          color: '{text.mutedColor}',
          gap: '{content.gap.100}',
        },
      },
    },
    root: {
      gap: '{content.gap.100}',
      transitionDuration: '{form.transitionDuration}',
    },
    panel: {
      background: '{transparent}',
      borderColor: '{transparent}',
      borderWidth: '{navigation.width.100}',
      color: '{content.color}',
      padding: '{content.padding.100}',
      borderRadius: '{content.borderRadius}',
      first: {
        borderWidth:
          '{navigation.width.100} {navigation.width.100} 0 {navigation.width.100}',
        topBorderRadius: '{content.borderRadius}',
      },
      last: {
        borderWidth:
          '0 {navigation.width.100} {navigation.width.100} {navigation.width.100}',
        topBorderRadius: '{content.borderRadius}',
      },
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      gap: '{navigation.item.gap}',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
      },
    },
    submenu: {
      indent: '{navigation.padding.400}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
    submenuIcon: {
      color: '{navigation.submenuIcon.color}',
      focusColor: '{navigation.submenuIcon.focusColor}',
    },
  },
  password: {
    extend: {
      borderWidth: '{form.borderWidth}',
    },
    colorScheme: {
      light: {
        strength: {
          weakBackground: '{error.500}',
          mediumBackground: '{warn.500}',
          strongBackground: '{success.600}',
        },
        icon: {
          color: '{form.placeholderColor}',
        },
      },
    },
    meter: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      height: '{feedback.height.100}',
    },
    overlay: {
      background: '{overlay.popover.background}',
      borderColor: '{overlay.popover.borderColor}',
      borderRadius: '{overlay.popover.borderRadius}',
      color: '{overlay.popover.color}',
      padding: '{overlay.popover.padding.100}',
      shadow: '{overlay.popover.shadow}',
    },
    content: {
      gap: '{content.gap.200}',
    },
  },
  popover: {
    extend: {
      borderWidth: '{overlay.borderWidth}',
      arrow: {
        width: '{overlay.popover.width.200}',
        height: '{overlay.popover.width.100}',
      },
    },
    root: {
      background: '{overlay.popover.background}',
      borderColor: '{overlay.popover.borderColor}',
      color: '{overlay.popover.color}',
      borderRadius: '{overlay.popover.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      gutter: '{overlay.gap.100}',
      arrowOffset: '{overlay.popover.padding.200}',
    },
    content: {
      padding: '{overlay.popover.padding.100}',
    },
  },
  progressbar: {
    label: {
      color: '{text.extend.colorPrimaryStatic}',
      fontSize: '{fonts.fontSize.100}',
      fontWeight: '{fonts.fontWeight.regular}',
    },
    root: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      height: '{feedback.height.300}',
    },
    value: {
      background: '{primary.color}',
    },
  },
  progressspinner: {
    extend: {
      small: '{feedback.width.500}',
      medium: '{feedback.width.700}',
      large: '{feedback.width.800}',
      xlarge: '{feedback.width.900}',
    },
    root: {
      borderWidth: '{feedback.width.200}',
    },
    colorScheme: {
      light: {
        root: {
          colorOne: '{success.500}',
          colorTwo: '{info.500}',
          colorThree: '{error.500}',
          colorFour: '{warn.500}',
        },
      },
    },
  },
  radiobutton: {
    root: {
      width: '{form.size.400}',
      height: '{form.size.400}',
      background: '{form.background}',
      checkedBackground: '{surface.900}',
      checkedHoverBackground: '{surface.800}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderPrimaryColor}',
      focusBorderColor: '{form.borderColor}',
      checkedBorderColor: '{surface.900}',
      checkedHoverBorderColor: '{form.hoverBorderPrimaryColor}',
      checkedFocusBorderColor: '{form.focusBorderPrimaryColor}',
      checkedDisabledBorderColor: '{form.borderColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      shadow: '0',
      transitionDuration: '{form.transitionDuration}',
    },
    focusRing: {
      width: '{focusRing.width}',
      style: '{focusRing.style}',
      color: '{focusRing.color}',
      offset: '{focusRing.offset}',
      shadow: '{focusRing.shadow}',
    },
    sm: {
      width: '{form.size.300}',
      height: '{form.size.300}',
    },
    lg: {
      width: '{form.size.350}',
      height: '{form.size.350}',
    },
    icon: {
      size: '{form.icon.200}',
      checkedColor: '{text.extend.colorInverted}',
      checkedHoverColor: '{text.extend.colorInverted}',
      disabledColor: '{text.mutedColor}',
      sm: {
        size: '{form.icon.100}',
      },
      lg: {
        size: '{form.icon.300}',
      },
    },
  },
  rating: {
    root: {
      gap: '{form.gap.200}',
      transitionDuration: '{form.transitionDuration}',
    },
    focusRing: {
      width: '{form.focusRing.width}',
      style: '{form.focusRing.style}',
      color: '{form.focusRing.color}',
      offset: '{form.focusRing.offset}',
      shadow: '{focusRing.shadow}',
    },
    icon: {
      size: '{form.icon.500}',
      color: '{surface.500}',
      hoverColor: '{warn.500}',
      activeColor: '{warn.500}',
    },
  },
  ripple: {
    colorScheme: {
      light: {
        root: {
          background: 'rgba(255, 255, 255, 0.0100)',
        },
      },
    },
  },
  scrollpanel: {
    colorScheme: {
      light: {
        bar: {
          background: '{surface.300}',
        },
      },
    },
    root: {
      transitionDuration: '{media.transitionDuration}',
    },
    bar: {
      size: '{media.size.200}',
      borderRadius: '{media.borderRadius.100}',
      focusRing: {
        width: '0rem',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  select: {
    extend: {
      extOption: {
        background: '{list.option.background}',
        gap: '{list.gap.200}',
      },
      extOptionGroup: {
        gap: '{list.gap.200}',
      },
      readonlyBackground: '{form.readonlyBackground}',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.300}',
    },
    root: {
      background: '{form.background}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      filledHoverBackground: '{form.filledHoverBackground}',
      filledFocusBackground: '{form.filledFocusBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      focusBorderColor: '{form.focusBorderSecondaryColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      color: '{text.color}',
      disabledColor: '{form.disabledColor}',
      placeholderColor: '{form.placeholderColor}',
      invalidPlaceholderColor: '{form.invalidPlaceholderColor}',
      shadow: '0',
      paddingX: '{form.paddingX}',
      paddingY: '{form.paddingY}',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{form.fontSize}',
        paddingX: '{form.paddingX}',
        paddingY: '{form.paddingY}',
      },
      lg: {
        fontSize: '{form.fontSize}',
        paddingX: '{form.paddingX}',
        paddingY: '{form.paddingY}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
    },
    dropdown: {
      width: '{form.width.300}',
      color: '{form.iconColor}',
    },
    overlay: {
      background: '{overlay.select.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{overlay.select.borderRadius}',
      color: '{overlay.select.color}',
      shadow: '{overlay.select.shadow}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap.100}',
      header: {
        padding: '{list.header.padding}',
      },
    },
    option: {
      focusBackground: '{list.option.focusBackground}',
      selectedBackground: '{list.option.selectedBackground}',
      selectedFocusBackground: '{list.option.selectedFocusBackground}',
      color: '{list.option.color}',
      focusColor: '{list.option.focusColor}',
      selectedColor: '{list.option.selectedColor}',
      selectedFocusColor: '{list.option.selectedFocusColor}',
      padding: '{list.option.padding}',
      borderRadius: '{list.option.borderRadius}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{fonts.fontWeight.demibold}',
      padding: '{list.option.padding}',
    },
    clearIcon: {
      color: '{form.iconColor}',
    },
    checkmark: {
      color: '{list.option.color}',
      gutterStart: '-{form.padding.200}',
      gutterEnd: '{form.padding.200}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  selectbutton: {
    extend: {
      gap: '{form.gap.100}',
      paddingX: '{controls.padding.100}',
      paddingY: '{controls.padding.100}',
      checkedBackground: '{form.background}',
      iconSize: {
        sm: '{controls.iconOnly.200}',
        md: '{controls.iconOnly.300}',
        lg: '{controls.iconOnly.400}',
        xlg: '{controls.iconOnly.500}',
      },
      checkedBorderColor: '{form.background}',
      checkedColor: '{form.color}',
      ext: {
        borderRadius: '{borderRadius.200}',
      },
    },
    colorScheme: {
      light: {
        root: {
          invalidBorderColor: '{form.invalidBorderColor}',
        },
        extend: {
          background: '{surface.200}',
        },
      },
    },
    root: {
      borderRadius: '{form.borderRadius.200}',
    },
  },
  skeleton: {
    extend: {
      minWidth: '{feedback.width.700}',
      height: '{feedback.height.650}',
    },
    colorScheme: {
      light: {
        root: {
          background: '{surface.200}',
          animationBackground: '{surface.100}',
        },
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
    },
  },
  slider: {
    colorScheme: {
      handle: {
        content: {
          background: '{surface.0}',
        },
      },
    },
    root: {
      transitionDuration: '{form.transitionDuration}',
    },
    track: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      size: '{form.size.150}',
    },
    range: {
      background: '{surface.900}',
    },
    handle: {
      width: '{form.size.350}',
      height: '{form.size.350}',
      borderRadius: '{form.borderRadius.300}',
      background: '{surface.900}',
      hoverBackground: '{surface.900}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      content: {
        borderRadius: '{form.borderRadius.300}',
        hoverBackground: '{surface.900}',
        width: '{form.size.250}',
        height: '{form.size.250}',
        shadow: 'none',
      },
    },
  },
  splitter: {
    colorScheme: {
      light: {
        handle: {
          background: '{surface.900}',
        },
      },
    },
    gutter: {
      background: '{surface.100}',
    },
    root: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      transitionDuration: '{controls.transitionDuration}',
    },
    handle: {
      size: '{form.size.150}',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  stepper: {
    extend: {
      extCaption: {
        gap: '{feedback.gap.100}',
      },
      extStepNumber: {
        invalidBackground: '{error.400}',
        invalidColor: '{error.900}',
        invalidBorderColor: '{error.400}',
        borderWidth: '{feedback.width.100}',
        iconSize: '{feedback.icon.size.300}',
      },
    },
    root: {
      transitionDuration: '{feedback.transitionDuration}',
    },
    separator: {
      background: '{content.borderColor}',
      activeBackground: '{form.focusBorderPrimaryColor}',
      margin: '0 0 0 1.625rem',
      size: '{form.size.100}',
    },
    step: {
      padding: '{feedback.padding.100}',
      gap: '{feedback.gap.200}',
    },
    stepHeader: {
      padding: '0rem',
      borderRadius: '0rem',
      gap: '{feedback.gap.200}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    stepTitle: {
      color: '{text.color}',
      activeColor: '{text.color}',
      fontWeight: '{fonts.fontWeight.regular}',
    },
    stepNumber: {
      background: '{content.background}',
      activeBackground: '{primary.color}',
      borderColor: '{content.borderColor}',
      activeBorderColor: '{primary.color}',
      color: '{text.color}',
      activeColor: '{text.extend.colorPrimaryStatic}',
      size: '{form.size.400}',
      fontSize: '{fonts.fontSize.300}',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '{form.borderRadius.300}',
      shadow: 'none',
    },
    steppanels: {
      padding: '{feedback.padding.200}',
    },
    steppanel: {
      background: '{content.background}',
      color: '{content.color}',
      padding: '0rem',
      indent: '0rem',
    },
  },
  steps: {
    itemLink: {
      gap: '{form.gap.200}',
    },
    itemLabel: {
      fontWeight: '{fonts.fontWeight.regular}',
    },
    itemNumber: {
      background: '{content.background}',
      size: '{form.size.500}',
      fontSize: '{fonts.fontSize.300}',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '{form.borderRadius.300}',
      shadow: 'none',
    },
  },
  tabs: {
    colorScheme: {
      light: {
        navButton: {
          shadow: 'none',
        },
        tab: {
          background: '{transparent}',
          hoverBackground: '{transparent}',
          activeBackground: '{transparent}',
        },
      },
    },
    root: {
      transitionDuration: '{data.transitionDuration}',
    },
    tablist: {
      borderWidth: '0 0 {data.width.100} 0',
      background: '{transparent}',
      borderColor: '{content.borderColor}',
    },
    tab: {
      borderWidth: '0',
      borderColor: '{content.borderColor}',
      hoverBorderColor: '{content.borderColor}',
      activeBorderColor: '{content.activeBorderColor}',
      color: '{text.mutedColor}',
      hoverColor: '{text.color}',
      activeColor: '{text.color}',
      padding: '{content.padding.300}',
      fontWeight: '{fonts.fontWeight.demibold}',
      margin: '0',
      gap: '{content.gap.200}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    tabpanel: {
      background: '{transparent}',
      color: '{text.color}',
      padding: '{spacing.4x}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    navButton: {
      background: '{content.background}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      width: '{controls.iconOnly.400}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    activeBar: {
      height: '0.18rem',
      bottom: '-0.18rem',
      background: '{content.color}',
    },
  },
  toast: {
    extend: {
      extInfo: {
        color: '{info.500}',
        closeButton: {
          color: '{info.500}',
          borderColor: '{info.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extAccentLine: {
        width: '{feedback.width.200}',
      },
      extCloseButton: {
        width: '{feedback.width.100}',
      },
      extSuccess: {
        color: '{success.500}',
        closeButton: {
          color: '{success.500}',
          borderColor: '{success.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extWarn: {
        color: '{warn.500}',
        closeButton: {
          color: '{warn.500}',
          borderColor: '{warn.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
      extError: {
        color: '{error.500}',
        closeButton: {
          color: '{error.500}',
          borderColor: '{error.500}',
        },
        caption: {
          color: '{text.color}',
        },
      },
    },
    colorScheme: {
      light: {
        info: {
          background: '{info.50}',
          borderColor: '{info.500}',
          color: '{text.color}',
          detailColor: '{text.color}',
          shadow: '{overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{info.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
        },
        success: {
          background: '{success.50}',
          borderColor: '{success.500}',
          color: '{text.color}',
          detailColor: '{text.color}',
          shadow: '{overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{success.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
        },
        warn: {
          background: '{warn.50}',
          borderColor: '{warn.500}',
          color: '{text.color}',
          detailColor: '{text.color}',
          shadow: '{overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{warn.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: 'none',
            },
          },
        },
        error: {
          background: '{error.50}',
          borderColor: '{error.500}',
          color: '{text.color}',
          detailColor: '{text.color}',
          shadow: '{overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{error.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
        },
        secondary: {
          shadow: '{overlay.popover.shadow}',
        },
        contrast: {
          shadow: '{overlay.popover.shadow}',
        },
      },
    },
    root: {
      width: '{messages.width}',
      borderWidth: '{feedback.width.100}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    icon: {
      size: '{feedback.icon.size.500}',
    },
    content: {
      padding: '{feedback.padding.200}',
      gap: '{feedback.gap.400}',
    },
    text: {
      gap: '{feedback.gap.100}',
    },
    summary: {
      fontWeight: '{fonts.fontWeight.bold}',
      fontSize: '{fonts.fontSize.300}',
    },
    detail: {
      fontWeight: '{fonts.fontWeight.regular}',
      fontSize: '{fonts.fontSize.200}',
    },
    closeButton: {
      width: '{feedback.icon.size.400}',
      height: '{feedback.icon.size.400}',
      borderRadius: '{controls.borderRadius.100}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '{feedback.icon.size.200}',
    },
  },
  tag: {
    colorScheme: {
      light: {
        primary: {
          background: '{primary.selectedBackground}',
          color: '{text.color}',
        },
        secondary: {
          background: '{surface.200}',
          color: '{text.color}',
        },
        success: {
          background: '{success.400}',
          color: '{success.900}',
        },
        info: {
          background: '{info.300}',
          color: '{info.900}',
        },
        warn: {
          background: '{warn.300}',
          color: '{warn.900}',
        },
        danger: {
          background: '{error.300}',
          color: '{error.900}',
        },
      },
    },
    root: {
      fontSize: '{fonts.fontSize.100}',
      fontWeight: '{fonts.fontWeight.regular}',
      padding: '{media.padding.100} {media.padding.200}',
      gap: '{media.gap.100}',
      borderRadius: '{media.size.200}',
      roundedBorderRadius: '{media.borderRadius.400}',
    },
    icon: {
      size: '{media.icon.size.100}',
    },
  },
  textarea: {
    extend: {
      readonlyBackground: '{form.readonlyBackground}',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.300}',
      minHeight: '{form.size.900}',
    },
    root: {
      background: '{form.background}',
      disabledBackground: '{form.disabledBackground}',
      filledBackground: '{form.filledBackground}',
      filledHoverBackground: '{form.filledHoverBackground}',
      filledFocusBackground: '{form.filledFocusBackground}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      focusBorderColor: '{form.focusBorderSecondaryColor}',
      invalidBorderColor: '{form.invalidBorderColor}',
      color: '{form.color}',
      disabledColor: '{form.disabledColor}',
      placeholderColor: '{form.placeholderColor}',
      invalidPlaceholderColor: '{form.invalidPlaceholderColor}',
      shadow: '0',
      paddingX: '{form.paddingX}',
      paddingY: '{form.paddingY}',
      borderRadius: '{form.borderRadius.200}',
      transitionDuration: '{form.transitionDuration}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
    },
    sm: {
      fontSize: '{fonts.fontSize.300}',
      paddingX: '{form.padding.200}',
      paddingY: '{form.padding.200}',
    },
    lg: {
      fontSize: '{fonts.fontSize.300}',
      paddingX: '{form.padding.400}',
      paddingY: '{form.padding.400}',
    },
  },
  tieredmenu: {
    extend: {
      extSubmenu: {
        borderColor: '{content.borderColor}',
        background: '{content.background}',
      },
      iconSize: '{navigation.submenuIcon.size}',
      extItem: {
        caption: {
          gap: '{content.gap.100}',
          color: '{text.mutedColor}',
        },
      },
    },
    root: {
      background: '{content.background}',
      borderColor: '{transparent}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{navigation.shadow}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    list: {
      padding: '{navigation.list.padding.100}',
      gap: '{navigation.list.gap}',
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      activeBackground: '{navigation.item.activeBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      activeColor: '{navigation.item.activeColor}',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      gap: '{navigation.item.gap}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
        activeColor: '{navigation.item.icon.activeColor}',
      },
    },
    submenu: {
      mobileIndent: '{overlay.popover.padding.100}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
  },
  timeline: {
    extend: {
      extEvent: {
        gap: '{feedback.gap.100}',
      },
    },
    event: {
      minHeight: '{feedback.height.900}',
    },
    vertical: {
      eventContent: {
        padding: '0 {feedback.padding.500}',
      },
    },
    horizontal: {
      eventContent: {
        padding: '{feedback.padding.500} 0',
      },
    },
    eventMarker: {
      size: '{feedback.width.500}',
      borderRadius: '{content.borderRadius}',
      borderWidth: '{feedback.width.200}',
      background: '{content.background}',
      borderColor: '{primary.color}',
      content: {
        borderRadius: '{content.borderRadius}',
        size: '{feedback.width.400}',
        background: '{transparent}',
        insetShadow: 'none',
      },
    },
    eventConnector: {
      color: '{content.borderColor}',
      size: '{feedback.width.100}',
    },
  },
  togglebutton: {
    extend: {
      ext: {
        gap: '{form.gap.300}',
      },
      iconSize: {
        sm: '{controls.iconOnly.200}',
        md: '{controls.iconOnly.300}',
        lg: '{controls.iconOnly.400}',
      },
      iconOnlyWidth: '{form.size.600}',
      hoverBorderColor: '{surface.300}',
      checkedHoverColor: '{text.extend.colorInverted}',
      checkedHoverBackground: '{surface.800}',
      checkedHoverBorderColor: '{surface.800}',
      extXlg: {
        padding: '{form.padding.500} {form.padding.500}',
        iconOnlyWidth: '4.0714rem',
      },
      extSm: {
        iconOnlyWidth: '2.1429rem',
      },
      extLg: {
        iconOnlyWidth: '3.5714rem',
      },
    },
    colorScheme: {
      light: {
        root: {
          background: '{surface.200}',
          hoverBackground: '{surface.300}',
          borderColor: '{surface.200}',
          color: '{text.color}',
          hoverColor: '{text.color}',
          checkedBackground: '{surface.900}',
          checkedColor: '{text.extend.colorInverted}',
          checkedBorderColor: '{surface.900}',
          disabledBackground: '{form.disabledBackground}',
          disabledBorderColor: '{form.disabledBackground}',
          disabledColor: '{form.disabledColor}',
          invalidBorderColor: '{form.invalidBorderColor}',
        },
        icon: {
          color: '{text.color}',
          hoverColor: '{text.color}',
          checkedColor: '{text.extend.colorInverted}',
          disabledColor: '{form.disabledColor}',
        },
        content: {
          checkedBackground: '{transparent}',
        },
      },
    },
    root: {
      padding: '{form.padding.200} {form.padding.400}',
      borderRadius: '{form.borderRadius.300}',
      gap: '{form.gap.200}',
      fontWeight: '{fonts.fontWeight.demibold}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        fontSize: '{fonts.fontSize.200}',
        padding: '{form.padding.100} {form.padding.300}',
      },
      lg: {
        fontSize: '{fonts.fontSize.500}',
        padding: '{form.padding.400} {form.padding.600}',
      },
      transitionDuration: '{form.transitionDuration}',
    },
    content: {
      checkedShadow: 'none',
      padding: '0rem',
      borderRadius: '0rem',
      sm: {
        padding: '0rem',
      },
      lg: {
        padding: '0rem',
      },
    },
  },
  toggleswitch: {
    colorScheme: {
      light: {
        root: {
          background: '{surface.400}',
          hoverBackground: '{surface.500}',
          disabledBackground: '{form.disabledBackground}',
          checkedBackground: '{surface.900}',
          checkedHoverBackground: '{surface.800}',
        },
        handle: {
          background: '{form.backgroundHandler}',
          hoverBackground: '{form.backgroundHandler}',
          disabledBackground: '{form.disabledColor}',
          checkedBackground: '{surface.0}',
          checkedHoverBackground: '{surface.0}',
          color: '{text.color}',
          hoverColor: '{text.color}',
          checkedColor: '{text.color}',
          checkedHoverColor: '{text.color}',
        },
      },
      dark: {
        root: {
          background: '{surface.600}',
          hoverBackground: '{surface.500}',
          disabledBackground: '{form.disabledBackground}',
          checkedBackground: '{surface.900}',
          checkedHoverBackground: '{surface.800}',
        },
        handle: {
          background: '{form.backgroundHandler}',
          hoverBackground: '{form.backgroundHandler}',
          disabledBackground: '{form.disabledColor}',
          checkedBackground: '{surface.0}',
          checkedHoverBackground: '{surface.0}',
          color: '{text.color}',
          hoverColor: '{text.color}',
          checkedColor: '{text.color}',
          checkedHoverColor: '{text.color}',
        },
      },
    },
    root: {
      width: '{form.size.600}',
      height: '{form.size.400}',
      borderRadius: '{form.borderRadius.300}',
      gap: '{form.gap.100}',
      borderWidth: '{form.borderWidth}',
      shadow: 'none',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '0',
      },
      borderColor: '{transparent}',
      hoverBorderColor: '{transparent}',
      checkedBorderColor: '{transparent}',
      checkedHoverBorderColor: '{transparent}',
      invalidBorderColor: '{form.invalidBorderColor}',
      transitionDuration: '{form.transitionDuration}',
      slideDuration: '{form.transitionDuration}',
    },
    handle: {
      borderRadius: '{form.borderRadius.300}',
      size: '{form.size.300}',
    },
  },
  tooltip: {
    colorScheme: {
      light: {
        root: {
          background: '{surface.900}',
          color: '{text.extend.colorInverted}',
        },
      },
    },
    root: {
      maxWidth: '{overlay.width}',
      gutter: '{feedback.gap.100}',
      shadow: '{overlay.popover.shadow}',
      padding: '{feedback.padding.100} {feedback.padding.200} ',
      borderRadius: '{overlay.popover.borderRadius}',
    },
  },
  tree: {
    root: {
      background: '{content.background}',
      color: '{content.color}',
      padding: '{data.padding.400}',
      gap: '{data.gap.100}',
      indent: '{data.padding.400}',
    },
    node: {
      padding: '{data.padding.200} {data.padding.300}',
      color: '{text.color}',
      selectedColor: '{text.extend.colorInverted}',
      gap: '{data.gap.100}',
    },
    nodeIcon: {
      selectedColor: '{text.extend.colorInverted}',
    },
    nodeToggleButton: {
      borderRadius: '{data.borderRadius}',
      size: '{data.icon.size.400}',
      selectedHoverBackground: '{surface.900}',
    },
    loadingIcon: {
      size: '{data.icon.size.100}',
    },
    filter: {
      margin: '0 0 {data.padding.200} 0',
    },
  },
  overlaybadge: {
    root: {
      outline: {
        width: '0rem',
        color: '{transparent}',
      },
    },
  },
};
