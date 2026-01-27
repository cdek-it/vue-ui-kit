export default {
  accordion: {
    header: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      activeColor: '{text.color}',
      activeHoverColor: '{text.hoverColor}',
      borderColor: '{transparent}',
      padding: '{navigation.padding.4} 0 {navigation.padding.4} 0',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '0',
      borderWidth: '0 0 0 0',
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
        bottomBorderRadius: '{content.borderRadius}',
        activeBottomBorderRadius: '0',
      },
      first: {
        borderWidth: '0',
        topBorderRadius: '{content.borderRadius}',
      },
    },
    root: {
      transitionDuration: '{controls.transitionDuration}',
    },
    panel: {
      borderWidth: '{navigation.width.xs}',
      borderColor: '{form.borderColor}',
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
    content: {
      borderWidth: '{content.borderWidth} 0 0 0',
      borderColor: '{transparent}',
      background: '{transparent}',
      color: '{text.color}',
      padding: '0 0 {content.padding.sm} {content.padding.md}',
    },
  },
  autocomplete: {
    extend: {
      extOption: {
        gap: '{form.gap.xs}',
      },
      extOptionGroup: {
        gap: '{form.gap.xs}',
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
      shadow: '{form.shadow}',
      paddingX: '{form.padding.sm}',
      paddingY: '{form.padding.sm}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
    },
    overlay: {
      background: '{overlay.select.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{overlay.select.borderRadius}',
      color: '{overlay.select.color}',
      shadow: '{form.shadow}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap.sm}',
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
      width: '{form.width.full}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.hoverBorderSecondaryColor}',
      activeBorderColor: '{form.focusBorderSecondaryColor}',
      borderRadius: '{form.borderRadius.md}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '{form.width.sm}',
      },
      lg: {
        width: '{form.width.lg}',
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
    },
    root: {
      width: '{media.size.sm}',
      height: '{media.size.sm}',
      fontSize: '{fonts.fontSize.base}',
      color: '{text.extend.colorPrimaryStatic}',
      background: '{primary.color}',
      borderRadius: '{media.borderRadius.sm}',
    },
    icon: {
      size: '{media.icon.size.sm}',
    },
    group: {
      borderColor: '{content.background}',
      offset: '-{media.padding.md}',
    },
    lg: {
      width: '{media.size.md}',
      height: '{media.size.md}',
      fontSize: '{fonts.fontSize.base}',
      icon: {
        size: '{media.icon.size.sm}',
      },
      group: {
        offset: '-{media.padding.md}',
      },
    },
    xl: {
      width: '{media.size.lg}',
      height: '{media.size.lg}',
      icon: {
        size: '{media.icon.size.md}',
      },
      group: {
        offset: '-{media.padding.3xlg}',
      },
      fontSize: '{fonts.fontSize.base}',
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
          size: '{feedback.width.md}',
        },
        xlg: {
          size: '{feedback.width.lg}',
        },
      },
      ext: {
        padding: '0',
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
      borderRadius: '{feedback.width.sm}',
      padding: '{feedback.padding.md}',
      fontSize: '{fonts.fontSize.xs}',
      fontWeight: '{fonts.fontWeight.regular}',
      minWidth: '{feedback.width.2xlg}',
      height: '{feedback.height.2xlg}',
    },
    dot: {
      size: '{feedback.width.sm}',
    },
    sm: {
      fontSize: '{fonts.fontSize.xs}',
      minWidth: '0',
      height: '0',
    },
    lg: {
      fontSize: '{fonts.fontSize.xs}',
      minWidth: '{feedback.width.3xlg}',
      height: '{feedback.height.3xlg}',
    },
    xl: {
      fontSize: '{fonts.fontSize.xs}',
      minWidth: '{feedback.width.4xlg}',
      height: '{feedback.height.4xlg}',
    },
  },
  breadcrumb: {
    extend: {
      hoverBackground: '{surface.100}',
      iconSize: '{navigation.size.xsm}',
      extItem: {
        padding: '{navigation.padding.2xs}',
      },
    },
    root: {
      padding: '0',
      background: '{transparent}',
      gap: '0',
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
        paddingX: '0',
        paddingY: '{controls.padding.xs}',
        sm: {
          iconOnlyWidth: '{controls.iconOnly.xs}',
        },
        base: {
          iconOnlyWidth: '{controls.iconOnly.md}',
        },
        lg: {
          iconOnlyWidth: '{controls.iconOnly.lg}',
        },
        xlg: {
          iconOnlyWidth: '{controls.iconOnly.xlg}',
        },
      },
      extSm: {
        borderRadius: '{controls.borderRadius.sm}',
        gap: '{controls.gap.sm}',
      },
      extLg: {
        borderRadius: '{controls.borderRadius.md}',
        gap: '{controls.gap.md}',
        height: '{controls.iconOnly.4xlg}',
      },
      extXlg: {
        borderRadius: '{controls.borderRadius.md}',
        gap: '{controls.gap.md}',
        iconOnlyWidth: '{controls.iconOnly.5xlg}',
        paddingX: '{controls.padding.2xlg}',
        paddingY: '{controls.padding.xlg}',
        height: '{controls.iconOnly.5xlg}',
      },
      borderWidth: '{controls.width.tn}',
      iconSize: {
        sm: '{controls.iconOnly.xs}',
        md: '{controls.iconOnly.sm}',
        lg: '{controls.iconOnly.md}',
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
    },
    root: {
      borderRadius: '{controls.borderRadius.sm}',
      roundedBorderRadius: '{controls.borderRadius.max}',
      gap: '{controls.gap.sm}',
      paddingX: '{controls.padding.lg}',
      paddingY: '{controls.padding.sm}',
      iconOnlyWidth: '{controls.iconOnly.2xlg}',
      raisedShadow: 'none',
      badgeSize: '{feedback.width.lg}',
      transitionDuration: '{controls.transitionDuration}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
      sm: {
        fontSize: '{fonts.fontSize.sm}',
        iconOnlyWidth: '{controls.iconOnly.xlg}',
        paddingX: '{controls.padding.md}',
        paddingY: '{controls.padding.sm}',
      },
      lg: {
        fontSize: '{fonts.fontSize.xl}',
        iconOnlyWidth: '{controls.iconOnly.3xlg}',
        paddingX: '{controls.padding.2xlg}',
        paddingY: '{controls.padding.lg}',
      },
      label: {
        fontWeight: '{fonts.fontWeight.demibold}',
      },
    },
  },
  card: {
    extend: {
      borderColor: '{content.borderColor}',
    },
    root: {
      background: '{content.background}',
      borderRadius: '{content.gap.lg}',
      color: '{content.color}',
    },
    body: {
      padding: '{content.padding.sm}',
      gap: '{content.gap.lg}',
    },
    caption: {
      gap: '{content.gap.xs}',
    },
    title: {
      fontSize: '{fonts.fontSize.lg}',
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
      gap: '{media.gap.sm}',
    },
    indicatorList: {
      padding: '{media.padding.lg}',
      gap: '{media.gap.sm}',
    },
    indicator: {
      width: '{controls.iconOnly.tn}',
      height: '{controls.iconOnly.tn}',
      borderRadius: '{media.borderRadius.lg}',
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
      borderRadius: '{form.borderRadius.sm}',
      extend: {
        borderWidth: '{form.borderWidth}',
      },
      width: '{form.size.2xlg}',
      height: '{form.size.2xlg}',
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
      shadow: '{form.shadow}',
      focusRing: {
        focusRing: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '{form.size.sm}',
        height: '{form.size.sm}',
      },
      lg: {
        width: '{form.size.xlg}',
        height: '{form.size.xlg}',
      },
      transitionDuration: '{form.transitionDuration}',
    },
    icon: {
      size: '{form.icon.md}',
      color: '{form.color}',
      checkedColor: '{primary.contrastColor}',
      checkedHoverColor: '{primary.contrastColor}',
      disabledColor: '{form.disabledColor}',
      sm: {
        size: '{form.icon.sm}',
      },
      lg: {
        size: '{form.icon.lg}',
      },
    },
  },
  chip: {
    extend: {
      borderColor: '{transparent}',
    },
    root: {
      borderRadius: '{media.borderRadius.xs}',
      paddingX: '{media.padding.sm}',
      paddingY: '{media.padding.xs}',
      gap: '{media.gap.sm}',
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
      width: '0',
      height: '0',
    },
    icon: {
      size: '{media.icon.size.sm}',
    },
    removeIcon: {
      size: '{media.icon.size.sm}',
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
      size: '{overlay.icon.size.md}',
      color: '{overlay.modal.color}',
    },
    content: {
      gap: '0',
    },
  },
  confirmpopup: {
    root: {
      background: '{overlay.popover.background}',
      color: '{overlay.popover.color}',
      shadow: '{overlay.popover.shadow}',
      gutter: '{overlay.gap.md}',
      arrowOffset: '{overlay.modal.padding.sm}',
    },
    content: {
      padding: '{overlay.popover.padding.sm}',
      gap: '{overlay.gap.lg}',
    },
    icon: {
      size: '{overlay.icon.size.md}',
      color: '{overlay.popover.color}',
    },
    footer: {
      gap: '{overlay.gap.sm}',
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
      padding: '{navigation.list.padding.md} 0',
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
      borderWidth: '{data.width.0pt3} 0 {data.width.0pt3} 0',
      padding: '{data.padding.lg}',
      sm: {
        padding: '{data.padding.sm}',
      },
      lg: {
        padding: '{data.padding.xlg}',
      },
    },
    headerCell: {
      selectedBackground: '{highlight.background}',
      borderColor: '{content.borderColor}',
      hoverColor: '{text.hoverColor}',
      selectedColor: '{highlight.color}',
      gap: '{data.gap.sm}',
      padding: '{data.padding.lg}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      sm: {
        padding: '{data.padding.sm}',
      },
      lg: {
        padding: '{data.padding.xlg}',
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
      padding: '{data.padding.lg}',
      sm: {
        padding: '{data.padding.sm}',
      },
      lg: {
        padding: '{data.padding.xlg}',
      },
    },
    footerCell: {
      borderColor: '{content.borderColor}',
      padding: '{data.padding.lg}',
      sm: {
        padding: '{data.padding.sm}',
      },
      lg: {
        padding: '{data.padding.xlg}',
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
      borderWidth: '0 0 {data.width.0pt3} 0',
      padding: '{data.padding.lg}',
      sm: {
        padding: '{data.padding.sm}',
      },
      lg: {
        padding: '{data.padding.xlg}',
      },
    },
    columnResizer: {
      width: '{data.width.sm}',
    },
    resizeIndicator: {
      width: '{data.width.tn}',
      color: '{highlight.background}',
    },
    sortIcon: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      size: '{data.icon.size.md}',
    },
    loadingIcon: {
      size: '{data.icon.size.3xlg}',
    },
    rowToggleButton: {
      hoverBackground: '{content.hoverBackground}',
      selectedHoverBackground: '{content.hoverBackground}',
      color: '{text.color}',
      hoverColor: '{text.color}',
      selectedHoverColor: '{text.color}',
      size: '{data.icon.size.3xlg}',
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
      inlineGap: '{data.gap.sm}',
      rule: {
        borderColor: '{content.borderColor}',
      },
      constraintList: {
        padding: '{list.padding}',
        gap: '{list.gap.sm}',
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
        padding: '{overlay.popover.padding.sm}',
        gap: '{list.gap.sm}',
      },
    },
    paginatorTop: {
      borderColor: '{form.borderColor}',
      borderWidth: '0 0 {data.width.0pt3} 0',
    },
    paginatorBottom: {
      borderWidth: '0 0 {data.width.0pt3} 0',
      borderColor: '{content.borderColor}',
    },
  },
  dataview: {
    root: {
      borderWidth: '{data.width.tn}',
      borderRadius: '{data.borderRadius}',
      padding: '0',
      borderColor: '{content.borderColor}',
    },
    header: {
      borderWidth: '0 0 {data.width.0pt3} 0',
      padding: '{data.padding.sm} {data.padding.md}',
      borderRadius: '0 0 0 0',
      color: '{text.color}',
    },
    content: {
      background: '{content.background}',
      color: '{content.color}',
      borderColor: '{content.borderColor}',
      borderWidth: '0',
      padding: '0',
      borderRadius: '0',
    },
    footer: {
      background: '{surface.100}',
      color: '{text.color}',
      borderWidth: '{data.width.0pt3} 0 0 0',
      padding: '{data.padding.sm} {data.padding.md}',
      borderRadius: '0 0 0 0',
    },
    paginatorTop: {
      borderWidth: '0 0 {data.width.0pt3} 0',
    },
    paginatorBottom: {
      borderWidth: '{data.width.0pt3} 0 0 0',
    },
  },
  datepicker: {
    extend: {
      extDate: {
        selectedHoverBackground: '{primary.selectedHoverBackground}',
      },
      extToday: {
        borderColor: '{content.borderColor}',
        hoverBackground: '{content.hoverBackground}',
      },
      extTitle: {
        width: '{form.width.10xlg}',
      },
      extTimePicker: {
        minWidth: '{form.width.lg}',
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
          background: '{content.background}',
          color: '{text.color}',
        },
      },
    },
    panel: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      padding: '{overlay.popover.padding.sm}',
    },
    header: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      padding: '0 0 {formField.padding.xs} 0',
    },
    title: {
      gap: '{form.gap.xs}',
      fontWeight: '{fonts.fontWeight.bold}',
    },
    selectMonth: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '{form.padding.xs}',
    },
    inputIcon: {
      color: '{form.iconColor}',
    },
    dropdown: {
      width: '{form.width.md}',
      borderColor: '{form.borderColor}',
      hoverBorderColor: '{form.borderColor}',
      activeBorderColor: '{form.borderColor}',
      borderRadius: '{form.borderRadius.md}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '0',
      },
      lg: {
        width: '0',
      },
    },
    group: {
      borderColor: '{content.borderColor}',
      gap: '{overlay.popover.padding.sm}',
    },
    selectYear: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '{overlay.select.padding}',
    },
    dayView: {
      margin: '0 0 0 0',
    },
    weekDay: {
      padding: '{form.padding.tn}',
      fontWeight: '{fonts.fontWeight.bold}',
      color: '{content.color}',
    },
    date: {
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{primary.selectedBackground}',
      rangeSelectedBackground: '{highlight.background}',
      color: '{content.color}',
      hoverColor: '{content.color}',
      selectedColor: '{text.extend.colorPrimaryStatic}',
      rangeSelectedColor: '{text.extend.colorSecondaryStatic}',
      width: '{form.size.3xlg}',
      height: '{form.size.3xlg}',
      borderRadius: '{form.borderRadius.sm}',
      padding: '{form.padding.tn}',
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
      borderRadius: '0',
    },
    yearView: {
      margin: '0 0 0 0',
    },
    year: {
      padding: '0',
      borderRadius: '0',
    },
    buttonbar: {
      padding: '0 0 0 0',
      borderColor: '{content.borderColor}',
    },
    timePicker: {
      padding: '{form.padding.sm}',
      borderColor: '{content.borderColor}',
      gap: '{form.gap.xs}',
      buttonGap: '{form.gap.tn}',
    },
    root: {
      transitionDuration: '{form.transitionDuration}',
    },
  },
  dialog: {
    extend: {
      borderWidth: '{overlay.borderWidth}',
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
        '{overlay.modal.padding.md} {overlay.modal.padding.md} 1rem {overlay.modal.padding.md}',
      gap: '0',
    },
    title: {
      fontSize: '{fonts.fontSize.xl}',
      fontWeight: '{fonts.fontWeight.demibold}',
    },
    content: {
      padding: '{content.padding.md}',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding.md} {overlay.modal.padding.md} {overlay.modal.padding.md}',
      gap: '{content.gap.sm}',
    },
  },
  divider: {
    root: {
      borderColor: '{content.borderColor}',
    },
    content: {
      background: '{content.background}',
      color: '{text.mutedColor}',
    },
    horizontal: {
      margin: '{content.padding.sm} 0',
      padding: '0 {content.padding.sm}',
      content: {
        padding: '0 {content.padding.xs}',
      },
    },
    vertical: {
      margin: '0 {content.padding.sm}',
      padding: '{content.padding.sm} 0',
      content: {
        padding: '{content.padding.xs} 0',
      },
    },
  },
  drawer: {
    extend: {
      borderRadius: '{overlay.popover.borderRadius}',
      borderWidth: '{overlay.borderWidth}',
      extHeader: {
        gap: '{overlay.gap.sm}',
        borderColor: '{drawer.root.borderColor}',
        paddingBottom: '{overlay.modal.padding.xs}',
      },
      padding: '{overlay.drawer.padding}',
      scale: '1.75',
    },
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      shadow: '{overlay.modal.shadow}',
      transitionDuration: '{overlay.transitionDuration}',
      width: '{sizing.overlay.root.width}',
    },
    header: {
      padding:
        '{overlay.modal.padding.md} {overlay.modal.padding.md} {overlay.modal.padding.xs} {overlay.modal.padding.md} ',
    },
    title: {
      fontSize: '{fonts.fontSize.xl}',
      fontWeight: '{fonts.fontWeight.demibold}',
    },
    content: {
      padding: '{overlay.modal.padding.md}',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding.md} {overlay.modal.padding.md} {overlay.modal.padding.md} ',
    },
    sm: {
      width: '{sizing.overlay.sm.width}',
    },
    lg: {
      width: '{sizing.overlay.lg.width}',
    },
    xlg: {
      width: '{sizing.overlay.xlg.width}',
    },
  },
  fileupload: {
    extend: {
      extDragNdrop: {
        padding: '{form.padding.md}',
        iconSize: '{form.size.3xlg}',
        background: '{surface.0}',
        borderRadius: '{form.borderRadius.md}',
        info: {
          gap: '{form.gap.tn}',
        },
      },
      extContent: {
        borderRadius: '{content.borderRadius}',
        highlightBorderDefault: '{form.borderColor}',
      },
      extFile: {
        iconSize: '{form.size.xlg}',
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
      borderWidth: '0',
      padding: '0',
      borderRadius: '0',
      gap: '{content.gap.sm}',
    },
    content: {
      highlightBorderColor: '{surface.900}',
      padding: '0',
      gap: '{content.gap.sm}',
    },
    file: {
      padding: '{content.padding.xs}',
      gap: '{content.gap.sm}',
      borderColor: '{form.borderColor}',
      info: {
        gap: '{content.gap.xs}',
      },
    },
    fileList: {
      gap: '{content.gap.sm}',
    },
    progressbar: {
      height: '{feedback.height.sm}',
    },
    basic: {
      gap: '{content.gap.sm}',
    },
  },
  floatlabel: {
    extend: {
      height: '{form.size.6xlg}',
      iconSize: '{form.icon.lg}',
    },
    root: {
      color: '{form.floatLabelColor}',
      focusColor: '{form.floatLabelFocusColor}',
      activeColor: '{form.floatLabelActiveColor}',
      invalidColor: '{form.floatLabelInvalidColor}',
      transitionDuration: '{form.transitionDuration}',
      positionX: '{form.padding.sm}',
      positionY: '{form.padding.sm}',
      fontWeight: '{fonts.fontWeight.regular}',
      active: {
        fontSize: '{fonts.fontSize.sm}',
        fontWeight: '{fonts.fontWeight.regular}',
      },
    },
    over: {
      active: {
        top: '{form.padding.xs}',
      },
    },
    inside: {
      input: {
        paddingTop: '{form.padding.md}',
        paddingBottom: '{form.padding.sm}',
      },
      active: {
        top: '{form.padding.sm}',
      },
    },
    on: {
      borderRadius: '0',
      active: {
        padding: '0 {formField.padding.tn}',
        background: '{form.background}',
      },
    },
  },
  galleria: {
    colorScheme: {
      light: {
        thumbnailContent: {
          background: '{surface.100}',
        },
        thumbnailNavButton: {
          hoverBackground: '{colors.alpha.white.20}',
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
      hoverBackground: '{colors.alpha.white.20}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      size: '{media.size.xlg}',
      gutter: '{media.gap.sm}',
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
      size: '{media.icon.size.lg}',
    },
    thumbnailsContent: {
      padding: '{media.padding.xs}',
    },
    thumbnailNavButton: {
      size: '{media.size.sm}',
      borderRadius: '{content.borderRadius}',
      gutter: '{media.gap.sm}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    thumbnailNavButtonIcon: {
      size: '{media.icon.size.sm}',
    },
    caption: {
      background: '{colors.alpha.white.50}',
      color: '{text.color}',
      padding: '{media.gap.sm}',
    },
    indicatorList: {
      gap: '{media.gap.sm}',
      padding: '{media.padding.lg}',
    },
    indicatorButton: {
      width: '{media.size.xs}',
      height: '{media.size.xs}',
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
      background: '{colors.alpha.black.50}',
    },
    insetIndicatorButton: {
      background: '{colors.alpha.white.10}',
      hoverBackground: '{colors.alpha.white.20}',
      activeBackground: '{colors.alpha.white.50}',
    },
    closeButton: {
      size: '{media.size.xlg}',
      gutter: '{media.gap.sm}',
      background: '{colors.alpha.white.10}',
      hoverBackground: '{colors.alpha.white.20}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      borderRadius: '{controls.borderRadius.md}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    closeButtonIcon: {
      size: '{media.icon.size.lg}',
    },
  },
  message: {
    extend: {
      width: '{messages.message.width}',
      extText: {
        gap: '{feedback.gap.xs}',
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
        width: '{feedback.width.xs}',
      },
      extCloseButton: {
        width: '{feedback.width.tn}',
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
            borderWidth: '0',
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
            padding: '0',
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
          outlined: {
            color: '{text.color}',
            borderColor: '{info.500}',
          },
          closeButton: {
            hoverBackground: '{info.200}',
            focusRing: {
              color: '{focusRing.color}',
              shadow: '{focusRing.shadow}',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
      borderWidth: '{feedback.width.tn}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    content: {
      padding: '{feedback.padding.lg}',
      gap: '{feedback.gap.lg}',
      sm: {
        padding: '{feedback.padding.lg}',
      },
      lg: {
        padding: '{feedback.padding.lg}',
      },
    },
    text: {
      fontSize: '{fonts.fontSize.base}',
      fontWeight: '{fonts.fontWeight.bold}',
      sm: {
        fontSize: '{fonts.fontSize.base}',
      },
      lg: {
        fontSize: '{fonts.fontSize.base}',
      },
    },
    icon: {
      size: '{feedback.icon.size.2xlg}',
      sm: {
        size: '{feedback.icon.size.2xlg}',
      },
      lg: {
        size: '{feedback.icon.size.2xlg}',
      },
    },
    closeButton: {
      width: '{controls.iconOnly.xlg}',
      height: '{controls.iconOnly.xlg}',
      borderRadius: '{controls.borderRadius.sm}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '{feedback.icon.size.sm}',
      sm: {
        size: '{feedback.icon.size.sm}',
      },
      lg: {
        size: '{feedback.icon.size.sm}',
      },
    },
  },
  inputgroup: {
    extend: {
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.md}',
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
      borderRadius: '{form.borderRadius.md}',
      padding: '{form.padding.sm}',
      minWidth: '{form.width.md}',
    },
  },
  inputnumber: {
    extend: {
      borderWidth: '{form.borderWidth}',
      extButton: {
        height: '{form.size.4xlg}',
      },
    },
    colorScheme: {
      light: {
        button: {
          background: '{transparent}',
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
      width: '{form.width.md}',
      borderRadius: '{form.borderRadius.md}',
      verticalPadding: '{form.padding.sm}',
    },
  },
  inputotp: {
    extend: {
      height: '{form.size.4xlg}',
      borderWidth: '{form.borderWidth}',
    },
    root: {
      gap: '{form.gap.xs}',
    },
    input: {
      width: '{form.width.md}',
    },
    sm: {
      width: '0',
    },
    lg: {
      width: '0',
    },
  },
  inputtext: {
    extend: {
      readonlyBackground: '{form.readonlyBackground}',
      iconSize: '{form.icon.md}',
      borderWidth: '{form.borderWidth}',
      extXlg: {
        fontSize: '{sizing.form.root.fontSize}',
        paddingX: '{sizing.form.root.paddingX}',
        paddingY: '{sizing.form.root.paddingY}',
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
      shadow: '{form.shadow}',
      paddingX: '{sizing.form.root.paddingX}',
      paddingY: '{sizing.form.root.paddingY}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{sizing.form.sm.fontSize}',
        paddingX: '{sizing.form.sm.paddingX}',
        paddingY: '{sizing.form.sm.paddingY}',
      },
      lg: {
        fontSize: '{sizing.form.lg.fontSize}',
        paddingX: '{sizing.form.lg.paddingX}',
        paddingY: '{sizing.form.lg.paddingY}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  listbox: {
    extend: {
      extOption: {
        label: {
          gap: '{list.gap.sm}',
        },
        caption: {
          color: '{text.mutedColor}',
          stripedColor: '{text.mutedColor}',
        },
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
      shadow: '{form.shadow}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap.sm}',
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
      gutterStart: '-{list.gap.md}',
      gutterEnd: '{list.gap.md}',
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
          gap: '{content.gap.xs}',
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
      gap: '{content.gap.xs}',
      transitionDuration: '{form.transitionDuration}',
      verticalOrientation: {
        padding: '{navigation.list.padding.sm}',
        gap: '{navigation.list.gap}',
      },
      horizontalOrientation: {
        padding: '{navigation.list.padding.sm}',
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
      padding: '{content.padding.tn}',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      color: '{content.color}',
      shadow: '{navigation.shadow}',
      gap: '0',
    },
    submenu: {
      padding: '{navigation.list.padding.sm}',
      gap: '{navigation.list.gap}',
    },
    submenuLabel: {
      padding: '{navigation.submenuLabel.padding}',
      background: '{navigation.submenuLabel.background}',
      color: '{navigation.submenuLabel.color}',
      Number: '{fonts.fontWeight.demibold}',
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
      size: '{controls.iconOnly.xlg}',
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
          gap: '{content.gap.xs}',
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
      padding: '{navigation.list.padding.sm}',
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
          gap: '{content.padding.tn}',
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
      gap: '{content.padding.tn}',
      padding: '{navigation.list.padding.sm}',
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
      padding: '{navigation.list.padding.sm}',
      gap: '{navigation.list.gap}',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      shadow: '{navigation.shadow}',
      mobileIndent: '{navigation.padding.xs}',
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
      size: '{controls.iconOnly.xlg}',
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
  metergroup: {
    extend: {
      extLabel: {
        color: '{text.mutedColor}',
      },
    },
    root: {
      borderRadius: '{content.borderRadius}',
      gap: '{feedback.gap.md}',
    },
    meters: {
      size: '{feedback.height.sm}',
      background: '{content.borderColor}',
    },
    label: {
      gap: '{feedback.gap.sm}',
    },
    labelMarker: {
      size: '{feedback.icon.size.xs}',
    },
    labelIcon: {
      size: '{feedback.icon.size.sm}',
    },
    labelList: {
      verticalGap: '{feedback.gap.sm}',
      horizontalGap: '{feedback.gap.md}',
    },
  },
  multiselect: {
    extend: {
      paddingX: '0.35714285714285715rem',
      paddingY: '0.35714285714285715rem',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.md}',
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
      shadow: '{form.shadow}',
      paddingX: '{form.padding.sm}',
      paddingY: '{form.padding.sm}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{fonts.fontSize.base}',
        paddingX: '{form.padding.xs}',
        paddingY: '{form.padding.xs}',
      },
      lg: {
        fontSize: '{fonts.fontSize.base}',
        paddingX: '{form.padding.md}',
        paddingY: '{form.padding.md}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    dropdown: {
      width: '{form.width.md}',
      color: '{form.iconColor}',
    },
    overlay: {
      background: '{datatable.filter.overlaySelect.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{datatable.filter.overlaySelect.borderRadius}',
      color: '{datatable.filter.overlaySelect.color}',
      shadow: '{overlay.select.shadow}',
    },
    readonlyBackground: '{form.readonlyBackground}',
    list: {
      padding: '{list.padding}',
      header: {
        padding: '{list.header.padding}',
      },
      gap: '{list.gap.sm}',
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
      gap: '{list.gap.md}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{fonts.fontWeight.demibold}',
      padding: '{list.optionGroup.padding}',
    },
    clearIcon: {
      color: '{form.iconColor}',
    },
    chip: {
      borderRadius: '{form.borderRadius.sm}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  overlaybadge: {
    root: {
      outline: {
        width: '0',
        color: '{transparent}',
      },
    },
  },
  paginator: {
    root: {
      padding: '0 {data.padding.sm}',
      gap: '{data.gap.sm}',
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
      width: '{data.icon.size.5xlg}',
      height: '{data.icon.size.5xlg}',
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
      maxWidth: '{data.width.13xlg}',
    },
  },
  panelmenu: {
    extend: {
      iconSize: '{navigation.submenuIcon.size}',
      extPanel: {
        gap: '{content.gap.xs}',
      },
      extItem: {
        activeBackground: '{navigation.item.activeBackground}',
        activeColor: '{navigation.item.activeColor}',
        caption: {
          color: '{text.mutedColor}',
          gap: '{content.gap.xs}',
        },
      },
    },
    root: {
      gap: '{content.gap.xs}',
      transitionDuration: '{form.transitionDuration}',
    },
    panel: {
      background: '{transparent}',
      borderColor: '{transparent}',
      borderWidth: '{navigation.width.xs}',
      color: '{content.color}',
      padding: '{content.padding.tn}',
      borderRadius: '{content.borderRadius}',
      first: {
        borderWidth:
          '{navifation.width.xs} {navifation.width.xs} 0 {navifation.width.xs}',
        Number: '{navigation.width.xs}',
        topBorderRadius: '{content.borderRadius}',
      },
      last: {
        borderWidth:
          '0 {navifation.width.xs} {navifation.width.xs} {navifation.width.xs}',
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
      indent: '{navigation.padding.xs}',
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
      },
    },
    meter: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      height: '{feedback.height.sm}',
    },
    icon: {
      color: '{text.color}',
    },
    overlay: {
      background: '{overlay.popover.background}',
      borderColor: '{overlay.popover.borderColor}',
      borderRadius: '{overlay.popover.borderRadius}',
      color: '{overlay.popover.color}',
      padding: '{overlay.popover.padding.sm}',
      shadow: '{overlay.popover.shadow}',
    },
    content: {
      gap: '{content.gap.sm}',
    },
  },
  popover: {
    extend: {
      borderWidth: '{overlay.borderWidth}',
    },
    root: {
      background: '{overlay.popover.background}',
      borderColor: '{datatable.filter.overlayPopover.borderColor}',
      color: '{overlay.popover.color}',
      borderRadius: '{overlay.popover.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      gutter: '{overlay.gap.xs}',
      arrowOffset: '{overlay.popover.padding.md}',
    },
    content: {
      padding: '{overlay.popover.padding.sm}',
    },
  },
  progressbar: {
    label: {
      color: '{text.extend.colorPrimaryStatic}',
      fontSize: '{fonts.fontSize.xs}',
      fontWeight: '{fonts.fontWeight.regular}',
    },
    root: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      height: '{feedback.height.lg}',
    },
    value: {
      background: '{primary.color}',
    },
  },
  progressspinner: {
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
      width: '{form.size.2xlg}',
      height: '{form.size.2xlg}',
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
      shadow: '{form.shadow}',
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
      width: '{form.size.lg}',
      height: '{form.size.lg}',
    },
    lg: {
      width: '{form.size.xlg}',
      height: '{form.size.xlg}',
    },
    icon: {
      size: '{form.icon.sm}',
      checkedColor: '{text.extend.colorInverted}',
      checkedHoverColor: '{text.extend.colorInverted}',
      disabledColor: '{text.mutedColor}',
      sm: {
        size: '0',
      },
      lg: {
        size: '0',
      },
    },
  },
  rating: {
    root: {
      gap: '{form.gap.xs}',
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
      size: '{form.icon.xlg}',
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
      size: '{media.size.xs}',
      borderRadius: '{media.borderRadius.xs}',
      focusRing: {
        width: '0',
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
        gap: '{list.gap.md}',
      },
      extOptionGroup: {
        gap: '{list.gap.md}',
      },
      readonlyBackground: '{form.readonlyBackground}',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.md}',
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
      shadow: '{form.shadow}',
      paddingX: '{sizing.form.root.paddingX}',
      paddingY: '{sizing.form.root.paddingY}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
      sm: {
        fontSize: '{sizing.form.sm.fontSize}',
        paddingX: '{sizing.form.sm.paddingX}',
        paddingY: '{sizing.form.sm.paddingY}',
      },
      lg: {
        fontSize: '{sizing.form.lg.fontSize}',
        paddingX: '{sizing.form.lg.paddingX}',
        paddingY: '{sizing.form.lg.paddingY}',
      },
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    dropdown: {
      width: '{form.width.md}',
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
      gap: '{list.gap.sm}',
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
      gutterStart: '-{formField.padding.xs}',
      gutterEnd: '{formField.padding.xs}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  selectbutton: {
    extend: {
      paddingX: '{controls.padding.xs}',
      paddingY: '{controls.padding.xs}',
      iconSize: {
        sm: '{controls.iconOnly.xs}',
        md: '{controls.iconOnly.sm}',
        lg: '{controls.iconOnly.md}',
        xlg: '{controls.iconOnly.xlg}',
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
      borderRadius: '{form.borderRadius.max}',
    },
  },
  skeleton: {
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
      size: '{form.size.xs}',
    },
    range: {
      background: '{surface.900}',
    },
    handle: {
      width: '{form.size.xlg}',
      height: '{form.size.xlg}',
      borderRadius: '{form.borderRadius.max}',
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
        borderRadius: '{form.borderRadius.max}',
        hoverBackground: '{surface.900}',
        width: '{form.size.md}',
        height: '{form.size.md}',
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
      size: '{form.size.xs}',
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
        gap: '{feedback.gap.xs}',
      },
      extStepNumber: {
        invalidBackground: '{error.400}',
        invalidColor: '{error.900}',
        invalidBorderColor: '{error.400}',
      },
    },
    root: {
      transitionDuration: '{feedback.transitionDuration}',
    },
    separator: {
      background: '{content.borderColor}',
      activeBackground: '{form.focusBorderPrimaryColor}',
      margin: '0 0 0 1.625rem',
      size: '{form.size.tn}',
    },
    step: {
      padding: '{feedback.padding.md}',
      gap: '{feedback.gap.sm}',
    },
    stepHeader: {
      padding: '0',
      borderRadius: '0',
      gap: '{feedback.gap.sm}',
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
      size: '{form.size.2xlg}',
      fontSize: '{fonts.fontSize.base}',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '{form.borderRadius.max}',
      shadow: 'none',
    },
    steppanels: {
      padding: '{feedback.padding.lg}',
    },
    steppanel: {
      background: '{content.background}',
      color: '{content.color}',
      padding: '0',
      indent: '0',
    },
  },
  steps: {
    itemLink: {
      gap: '{form.gap.xs}',
    },
    itemLabel: {
      fontWeight: '{fonts.fontWeight.regular}',
    },
    itemNumber: {
      background: '{content.background}',
      size: '{form.size.3xlg}',
      fontSize: '{fonts.fontSize.base}',
      fontWeight: '{fonts.fontWeight.bold}',
      borderRadius: '{form.borderRadius.max}',
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
      borderWidth: '0 0 {data.width.tn} 0',
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
      padding: '{content.padding.sm}',
      fontWeight: '{fonts.fontWeight.demibold}',
      margin: '0',
      gap: '{content.gap.sm}',
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
      padding: '{spacing.4}',
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
      width: '{controls.iconOnly.md}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    activeBar: {
      height: '0.07142857142857142rem',
      bottom: '-1',
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
        width: '{feedback.width.xs}',
      },
      extCloseButton: {
        width: '{feedback.width.tn}',
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
      width: '{messages.toast.width}',
      borderWidth: '{feedback.width.tn}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    icon: {
      size: '{feedback.icon.size.2xlg}',
    },
    content: {
      padding: '{feedback.padding.lg}',
      gap: '{feedback.gap.lg}',
    },
    text: {
      gap: '{feedback.gap.xs}',
    },
    summary: {
      fontWeight: '{fonts.fontWeight.bold}',
      fontSize: '{fonts.fontSize.base}',
    },
    detail: {
      fontWeight: '{fonts.fontWeight.regular}',
      fontSize: '{fonts.fontSize.sm}',
    },
    closeButton: {
      width: '{feedback.icon.size.xlg}',
      height: '{feedback.icon.size.xlg}',
      borderRadius: '{controls.borderRadius.sm}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '{feedback.icon.size.sm}',
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
      fontSize: '{fonts.fontSize.xs}',
      fontWeight: '{fonts.fontWeight.regular}',
      padding: '{media.padding.xs} {media.padding.sm}',
      gap: '{media.gap.xs}',
      borderRadius: '{media.size.xs}',
      roundedBorderRadius: '{media.borderRadius.lg}',
    },
    icon: {
      size: '{media.icon.size.sm}',
    },
  },
  textarea: {
    extend: {
      readonlyBackground: '{form.readonlyBackground}',
      borderWidth: '{form.borderWidth}',
      iconSize: '{form.icon.md}',
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
      shadow: '{form.shadow}',
      paddingX: '{form.padding.sm}',
      paddingY: '{form.padding.sm}',
      borderRadius: '{form.borderRadius.md}',
      transitionDuration: '{form.transitionDuration}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    sm: {
      fontSize: '{fonts.fontSize.base}',
      paddingX: '{form.padding.xs}',
      paddingY: '{form.padding.xs}',
    },
    lg: {
      fontSize: '{fonts.fontSize.base}',
      paddingX: '{form.padding.md}',
      paddingY: '{form.padding.md}',
    },
  },
  tieredmenu: {
    extend: {
      iconSize: '{navigation.submenuIcon.size}',
      extSubmenu: {
        borderColor: '{content.borderColor}',
        background: '{content.background}',
      },
      extItem: {
        caption: {
          gap: '{content.gap.xs}',
          color: '{text.mutedColor}',
        },
      },
    },
    root: {
      background: '{transparent}',
      borderColor: '{transparent}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{navigation.shadow}',
      transitionDuration: '{feedback.transitionDuration}',
    },
    list: {
      padding: '{navigation.list.padding.sm}',
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
      mobileIndent: '{overlay.popover.padding.sm}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
  },
  timeline: {
    event: {
      minHeight: '{feedback.height.8xlg}',
    },
    vertical: {
      eventContent: {
        padding: '0 {feedback.padding.lg}',
      },
    },
    horizontal: {
      eventContent: {
        padding: '{feedback.padding.lg} 0',
      },
    },
    eventMarker: {
      size: '{feedback.width.lg}',
      borderRadius: '{content.borderRadius}',
      borderWidth: '{feedback.width.xs}',
      background: '{content.background}',
      borderColor: '{primary.color}',
      content: {
        borderRadius: '{content.borderRadius}',
        size: '{feedback.width.md}',
        background: '{transparent}',
        insetShadow: 'none',
      },
    },
    eventConnector: {
      color: '{content.borderColor}',
      size: '{feedback.width.tn}',
    },
  },
  togglebutton: {
    extend: {
      gap: '{form.gap.sm}',
      iconSize: {
        sm: '{controls.iconOnly.xs}',
        md: '{controls.iconOnly.sm}',
        lg: '{controls.iconOnly.md}',
      },
      iconOnlyWidth: '{form.size.4xlg}',
      hoverBorderColor: '{surface.300}',
      checkedHoverColor: '{text.extend.colorInverted}',
      checkedHoverBackground: '{surface.800}',
      checkedHoverBorderColor: '{surface.800}',
      extXlg: {
        padding: '{form.padding.lg} {form.padding.xlg}',
        iconOnlyWidth: '4.071428571428571rem',
      },
      extSm: {
        iconOnlyWidth: '2.142857142857143rem',
      },
      extLg: {
        iconOnlyWidth: '3.5714285714285716rem',
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
      padding: '{form.padding.xs} {form.padding.md}',
      borderRadius: '{form.borderRadius.max}',
      gap: '{form.gap.xs}',
      fontWeight: '{fonts.fontWeight.demibold}',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        fontSize: '{fonts.fontSize.base}',
        padding: '{form.padding.sm} {form.padding.tn}',
      },
      lg: {
        fontSize: '{fonts.fontSize.base}',
        padding: '{form.padding.md} {form.padding.xlg}',
      },
      transitionDuration: '{form.transitionDuration}',
    },
    content: {
      checkedShadow: 'none',
      padding: '0',
      borderRadius: '0',
      sm: {
        padding: '0',
      },
      lg: {
        padding: '0',
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
          checkedHoverBackground: '{surface.500}',
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
      width: '{form.size.4xlg}',
      height: '{form.size.2xlg}',
      borderRadius: '{form.borderRadius.max}',
      gap: '{form.gap.tn}',
      borderWidth: '0',
      shadow: 'none',
      focusRing: {
        width: '{form.focusRing.width}',
        style: '{form.focusRing.style}',
        color: '{form.focusRing.color}',
        offset: '{form.focusRing.offset}',
        shadow: '{focusRing.shadow}',
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
      borderRadius: '{form.borderRadius.max}',
      size: '{form.size.lg}',
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
      gutter: '{feedback.gap.xs}',
      shadow: '{overlay.popover.shadow}',
      padding: '{feedback.padding.md} {feedback.padding.lg} ',
      borderRadius: '{overlay.popover.borderRadius}',
    },
  },
  tree: {
    root: {
      background: '{content.background}',
      color: '{content.color}',
      padding: '{data.padding.lg}',
      gap: '{data.gap.xs}',
      indent: '{data.padding.lg}',
    },
    node: {
      padding: '{data.padding.sm} {data.padding.md}',
      color: '{text.color}',
      selectedColor: '{text.extend.colorInverted}',
      gap: '{data.gap.xs}',
    },
    nodeIcon: {
      selectedColor: '{text.extend.colorInverted}',
    },
    nodeToggleButton: {
      borderRadius: '{data.borderRadius}',
      size: '{data.icon.size.2xlg}',
      selectedHoverBackground: '{surface.900}',
    },
    loadingIcon: {
      size: '{data.icon.size.md}',
    },
    filter: {
      margin: '0 0 {data.padding.sm} 0',
    },
  },
};
