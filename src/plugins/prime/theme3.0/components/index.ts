export default {
  accordion: {
    header: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      activeColor: '{text.color}',
      activeHoverColor: '{text.hoverColor}',
      borderColor: '{transparent}',
      padding: '1rem 0 1rem 0',
      fontWeight: '700',
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
      transitionDuration: '{formField.transitionDuration}',
    },
    panel: {
      borderWidth: '0 0 0.07142857142857142rem 0',
      borderColor: '{formField.borderColor}',
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
      borderWidth: '1px 0 0 0',
      borderColor: '{transparent}',
      background: '{transparent}',
      color: '{text.color}',
      padding: '0 0 1rem 1.75rem',
    },
  },
  autocomplete: {
    colorScheme: {
      light: {
        chip: {
          focusBackground: '{chip.colorScheme.light.root.background}',
          focusColor: '{chip.colorScheme.light.root.color}',
        },
        dropdown: {
          background: '{formField.background}',
          hoverBackground: '{formField.background}',
          activeBackground: '{formField.background}',
          color: '{formField.color}',
          hoverColor: '{formField.color}',
          activeColor: '{formField.color}',
        },
      },
    },
    extend: {
      extOption: {
        gap: '0.5rem',
      },
      extOptionGroup: {
        gap: '0.5rem',
      },
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      filledHoverBackground: '{formField.filledHoverBackground}',
      filledFocusBackground: '{formField.filledFocusBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{formField.color}',
      disabledColor: '{formField.disabledColor}',
      placeholderColor: '{formField.placeholderColor}',
      invalidPlaceholderColor: '{formField.invalidPlaceholderColor}',
      shadow: '{formField.shadow}',
      paddingX: '{formField.paddingX}',
      paddingY: '{formField.paddingY}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
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
      gap: '{list.gap}',
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
      fontWeight: '{list.optionGroup.fontWeight}',
      padding: '{list.optionGroup.padding}',
    },
    dropdown: {
      width: '100%',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      activeBorderColor: '{formField.focusBorderSecondaryColor}',
      borderRadius: '{formField.borderRadius}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.focusRing.shadow}',
      },
      sm: {
        width: '2rem',
      },
      lg: {
        width: '3rem',
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
      borderColor: '{formField.borderColor}',
    },
    root: {
      width: '2rem',
      height: '2rem',
      fontSize: '1rem',
      color: '{text.extend.colorPrimaryStatic}',
      background: '{primary.color}',
      borderRadius: '{borderRadius.md}',
    },
    icon: {
      size: '1rem',
    },
    group: {
      borderColor: '{content.background}',
      offset: '-0.75rem',
    },
    lg: {
      width: '2.5rem',
      height: '2.5rem',
      fontSize: '1rem',
      icon: {
        size: '1rem',
      },
      group: {
        offset: '-1rem',
      },
    },
    xl: {
      width: '3.5rem',
      height: '3.5rem',
      fontSize: '1.125rem',
      icon: {
        size: '1.5rem',
      },
      group: {
        offset: '-1.5rem',
      },
    },
  },
  badge: {
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
          size: '0.75rem',
        },
        xlg: {
          size: '1rem',
        },
      },
    },
    root: {
      borderRadius: '{borderRadius.xl}',
      padding: '0.5357142857142857rem',
      fontSize: '0.75rem',
      fontWeight: '28.571428571428573rem',
      minWidth: '1.5rem',
      height: '1.5rem',
    },
    dot: {
      size: '0.5rem',
    },
    sm: {
      fontSize: '0.625rem',
      minWidth: '0',
      height: '0',
    },
    lg: {
      fontSize: '0.875rem',
      minWidth: '1.75rem',
      height: '1.75rem',
    },
    xl: {
      fontSize: '1rem',
      minWidth: '2rem',
      height: '2rem',
    },
  },
  breadcrumb: {
    extend: {
      hoverBackground: '{surface.100}',
    },
    root: {
      padding: '0.25rem',
      background: '{transparent}',
      gap: '0',
      transitionDuration: '{formField.transitionDuration}',
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
      borderRadius: '{borderRadius.xs}',
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
      disabledBackground: '{formField.disabledBackground}',
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
      disabledColor: '{formField.disabledColor}',
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
        paddingY: '0.25rem',
        sm: {
          iconOnlyWidth: '1rem',
        },
        base: {
          iconOnlyWidth: '1.5357142857142858rem',
        },
        lg: {
          iconOnlyWidth: '1.75rem',
        },
        xlg: {
          iconOnlyWidth: '2rem',
        },
      },
      extSm: {
        borderRadius: '{borderRadius.md}',
        gap: '0.5rem',
      },
      extLg: {
        borderRadius: '{borderRadius.lg}',
        gap: '0.75rem',
      },
      extXlg: {
        borderRadius: '{borderRadius.lg}',
        gap: '0.75rem',
        iconOnlyWidth: '4.071428571428571rem',
        paddingX: '1.5rem',
        paddingY: '1.25rem',
      },
    },
    colorScheme: {
      light: {
        root: {
          primary: {
            background: '{primary.color}',
            hoverBackground: '{primary.hoverColor}',
            activeBackground: '{primary.color}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorPrimaryStatic}',
            hoverColor: '{text.extend.colorPrimaryStatic}',
            activeColor: '{text.extend.colorPrimaryStatic}',
            focusRing: {
              color: '{primary.200}',
              shadow: '{focusRing.shadow}',
            },
          },
          secondary: {
            background: '{surface.900}',
            hoverBackground: '{surface.800}',
            activeBackground: '{surface.900}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.extend.colorInverted}',
            hoverColor: '{text.extend.colorInverted}',
            activeColor: '{text.extend.colorInverted}',
            focusRing: {
              color: '{primary.200}',
              shadow: '{focusRing.shadow}',
            },
          },
          contrast: {
            background: '{surface.200}',
            hoverBackground: '{surface.300}',
            activeBackground: '{surface.200}',
            borderColor: '{transparent}',
            hoverBorderColor: '{transparent}',
            activeBorderColor: '{transparent}',
            color: '{text.color}',
            hoverColor: '{text.color}',
            activeColor: '{text.color}',
            focusRing: {
              color: '{primary.200}',
              shadow: '{focusRing.shadow}',
            },
          },
          info: {
            background: '{info.300}',
            hoverBackground: '{info.400}',
            activeBackground: '{info.300}',
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
            activeBackground: '{success.300}',
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
            activeBackground: '{warn.300}',
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
            activeBackground: '{help.300}',
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
            activeBackground: '{error.300}',
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
            hoverBackground: '{primary.50}',
            activeBackground: '{primary.100}',
            borderColor: '{primary.200}',
            color: '{colors.solid.green.500}',
          },
          success: {
            hoverBackground: '{success.100}',
            activeBackground: '{transparent}',
            borderColor: '{success.600}',
            color: '{success.600}',
          },
          info: {
            hoverBackground: '{info.100}',
            activeBackground: '{transparent}',
            borderColor: '{info.600}',
            color: '{info.600}',
          },
          warn: {
            hoverBackground: '{warn.100}',
            activeBackground: '{transparent}',
            borderColor: '{warn.600}',
            color: '{warn.600}',
          },
          help: {
            hoverBackground: '{help.100}',
            activeBackground: '{transparent}',
            borderColor: '{help.600}',
            color: '{help.600}',
          },
          danger: {
            hoverBackground: '{error.100}',
            activeBackground: '{transparent}',
            borderColor: '{error.600}',
            color: '{error.600}',
          },
        },
        text: {
          primary: {
            hoverBackground: '{surface.100}',
            activeBackground: '{transparent}',
            color: '{text.color}',
          },
          success: {
            hoverBackground: '{success.100}',
            activeBackground: '{transparent}',
            color: '{success.600}',
          },
          info: {
            hoverBackground: '{info.100}',
            activeBackground: '{transparent}',
            color: '{info.600}',
          },
          warn: {
            hoverBackground: '{warn.100}',
            activeBackground: '{transparent}',
            color: '{warn.600}',
          },
          help: {
            hoverBackground: '{help.100}',
            activeBackground: '{transparent}',
            color: '{help.600}',
          },
          danger: {
            hoverBackground: '{error.100}',
            activeBackground: '{transparent}',
            color: '{error.600}',
          },
        },
        link: {
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
          activeColor: '{text.color}',
        },
      },
    },
    root: {
      borderRadius: '{borderRadius.md}',
      roundedBorderRadius: '2rem',
      gap: '0.5rem',
      paddingX: '1rem',
      paddingY: '0.5rem',
      iconOnlyWidth: '2.5rem',
      raisedShadow:
        '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      badgeSize: '1rem',
      transitionDuration: '{formField.transitionDuration}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
      sm: {
        iconOnlyWidth: '2rem',
        paddingX: '0.75rem',
        paddingY: '0.5rem',
      },
      lg: {
        iconOnlyWidth: '3.5714285714285716rem',
        paddingX: '1.5rem',
        paddingY: '1rem',
      },
      label: {
        fontWeight: '{typography.fontWeight.bold}',
      },
    },
  },
  card: {
    extend: {
      borderColor: '{content.borderColor}',
    },
    root: {
      background: '{content.background}',
      borderRadius: '{borderRadius.lg}',
      color: '{content.color}',
      shadow: '0 .125rem .25rem rgba(0,0,0,.075)',
    },
    body: {
      padding: '1rem',
      gap: '1rem',
    },
    caption: {
      gap: '0.25rem',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '50rem',
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
      transitionDuration: '{transitionDuration}',
    },
    content: {
      gap: '0.5rem',
    },
    indicatorList: {
      padding: '1rem',
      gap: '0.5rem',
    },
    indicator: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '{borderRadius.xl}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{rating.focusRing.shadow}',
      },
    },
  },
  checkbox: {
    root: {
      borderRadius: '{borderRadius.sm}',
      extend: {
        borderWidth: '0.07142857142857142rem',
      },
      width: '1.5rem',
      height: '1.5rem',
      background: '{formField.background}',
      checkedBackground: '{surface.900}',
      checkedHoverBackground: '{surface.800}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderPrimaryColor}',
      focusBorderColor: '{formField.focusBorderPrimaryColor}',
      checkedBorderColor: '{surface.900}',
      checkedHoverBorderColor: '{surface.800}',
      checkedFocusBorderColor: '{primary.color}',
      checkedDisabledBorderColor: '{formField.borderColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      shadow: '{formField.shadow}',
      focusRing: {
        focusRing: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
      sm: {
        width: '1rem',
        height: '1rem',
      },
      lg: {
        width: '1.25rem',
        height: '1.25rem',
      },
      transitionDuration: '{formField.transitionDuration}',
    },
    icon: {
      size: '1rem',
      color: '{formField.color}',
      checkedColor: '{primary.contrastColor}',
      checkedHoverColor: '{primary.contrastColor}',
      disabledColor: '{formField.disabledColor}',
      sm: {
        size: '0.75rem',
      },
      lg: {
        size: '1.25rem',
      },
    },
  },
  chip: {
    extend: {
      borderColor: '{transparent}',
    },
    root: {
      borderRadius: '{borderRadius.sm}',
      paddingX: '0.5rem',
      paddingY: '0.25rem',
      gap: '0.5rem',
      transitionDuration: '{formField.transitionDuration}',
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
      size: '1rem',
    },
    removeIcon: {
      size: '1rem',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{primary.200}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.focusRing.shadow}',
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
      size: '1.5rem',
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
      gutter: '10px',
      arrowOffset: '1.25rem',
    },
    content: {
      padding: '{overlay.popover.padding}',
      gap: '1rem',
    },
    icon: {
      size: '1.5rem',
      color: '{overlay.popover.color}',
    },
    footer: {
      gap: '0.5rem',
      padding:
        '0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}',
    },
  },
  contextmenu: {
    root: {
      background: '{content.background}',
      color: '{content.color}',
      shadow: '{overlay.navigation.shadow}',
    },
    list: {
      padding: '{navigation.list.padding}',
      gap: '{navigation.list.gap}',
    },
    item: {
      padding: '{navigation.item.padding}',
      gap: '{navigation.item.gap}',
    },
    submenu: {
      mobileIndent: '1.25rem',
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
      transitionDuration: '{transitionDuration}',
    },
    header: {
      borderColor: '{content.borderColor}',
      borderWidth: '1px 0 1px 0',
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    headerCell: {
      selectedBackground: '{highlight.background}',
      borderColor: '{content.borderColor}',
      hoverColor: '{text.hoverColor}',
      selectedColor: '{highlight.color}',
      gap: '0.5rem',
      padding: '1rem',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    columnTitle: {
      fontWeight: '50rem',
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
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    footerCell: {
      borderColor: '{content.borderColor}',
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    columnFooter: {
      fontWeight: '50rem',
    },
    dropPoint: {
      color: '{highlight.background}',
    },
    footer: {
      borderColor: '{content.borderColor}',
      borderWidth: '0 0 1px 0',
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    columnResizer: {
      width: '0.5rem',
    },
    resizeIndicator: {
      width: '1px',
      color: '{highlight.background}',
    },
    sortIcon: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      size: '1rem',
    },
    loadingIcon: {
      size: '2rem',
    },
    rowToggleButton: {
      hoverBackground: '{content.hoverBackground}',
      selectedHoverBackground: '{content.hoverBackground}',
      color: '{text.color}',
      hoverColor: '{text.color}',
      selectedHoverColor: '{text.color}',
      size: '2rem',
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
      inlineGap: '0.5rem',
      rule: {
        borderColor: '{content.borderColor}',
      },
      constraintList: {
        padding: '{list.padding}',
        gap: '{list.gap}',
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
        padding: '{overlay.popover.padding}',
        gap: '{list.gap}',
      },
    },
    paginatorTop: {
      borderColor: '{formField.borderColor}',
      borderWidth: '0 0 1px 0',
    },
    paginatorBottom: {
      borderWidth: '0 0 1px 0',
      borderColor: '{content.borderColor}',
    },
  },
  dataview: {
    root: {
      borderWidth: '1px',
      borderRadius: '4px',
      padding: '0',
      borderColor: '#ffffff',
    },
    header: {
      borderWidth: '0 0 1px 0',
      padding: '0.875rem 1.125rem',
      borderRadius: '5px 5px 0 0',
      color: '{text.color}',
    },
    content: {
      background: '{content.background}',
      color: '{content.color}',
      borderColor: '#ffffff',
      borderWidth: '0',
      padding: '0',
      borderRadius: '5px',
    },
    footer: {
      background: '{content.background}',
      color: '{content.color}',
      borderWidth: '1px 0 0 0',
      padding: '0.875rem 1.125rem',
      borderRadius: '0 0 5px 5px',
    },
    paginatorTop: {
      borderWidth: '0 0 1px 0',
    },
    paginatorBottom: {
      borderWidth: '1px 0 0 0',
    },
  },
  datepicker: {
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
    extend: {
      extDate: {
        selectedHoverBackground: '{primary.600}',
      },
      extToday: {
        borderColor: '{content.borderColor}',
        hoverBackground: '{content.hoverBackground}',
      },
      extTimePicker: {
        minWidth: '2.857142857142857rem',
        color: '{content.color}',
      },
      extTitle: {
        width: '15rem',
      },
    },
    panel: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      padding: '{overlay.popover.padding}',
    },
    header: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      padding: '0 0 0.5rem 0',
    },
    title: {
      gap: '0.5rem',
      fontWeight: '50rem',
    },
    inputIcon: {
      color: '{formField.iconColor}',
    },
    selectMonth: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    dropdown: {
      width: '2.5rem',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.borderColor}',
      activeBorderColor: '{formField.borderColor}',
      borderRadius: '{formField.borderRadius}',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
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
      gap: '{overlay.popover.padding}',
    },
    selectYear: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    dayView: {
      margin: '0 0 0 0',
    },
    weekDay: {
      padding: '0.25rem',
      fontWeight: '50rem',
      color: '{content.color}',
    },
    date: {
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{primary.500}',
      rangeSelectedBackground: '{highlight.background}',
      color: '{content.color}',
      hoverColor: '{content.color}',
      selectedColor: '{text.extend.colorPrimaryStatic}',
      rangeSelectedColor: '{text.extend.colorSecondaryStatic}',
      width: '2rem',
      height: '2rem',
      borderRadius: '0.375rem',
      padding: '0.25rem',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
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
      padding: '1.5rem 0.75rem 0.75rem 0.75rem',
      borderColor: '{content.borderColor}',
      gap: '0.5rem',
      buttonGap: '0.25rem',
    },
    root: {
      transitionDuration: '{transitionDuration}',
    },
  },
  dialog: {
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      borderRadius: '{overlay.modal.borderRadius}',
      shadow: '{overlay.popover.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding} {overlay.modal.padding} 1rem {overlay.modal.padding}',
      gap: '0',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '1.25rem',
    },
    content: {
      padding: '1.5rem',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
      gap: '0.5rem',
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
      margin: '1rem 0',
      padding: '0 1rem',
      content: {
        padding: '0 0.5rem',
      },
    },
    vertical: {
      margin: '0 1rem',
      padding: '1rem 0',
      content: {
        padding: '0.5rem 0',
      },
    },
  },
  drawer: {
    extend: {
      borderRadius: '{overlay.popover.borderRadius}',
      extHeader: {
        gap: '0.5rem',
        borderColor: '{drawer.root.borderColor}',
      },
      width: '{sizingDrawer.width}',
    },
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      shadow: '{overlay.modal.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding} {overlay.modal.padding} 14 {overlay.modal.padding} ',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '42.857142857142854rem',
    },
    content: {
      padding: '{overlay.modal.padding}',
    },
    footer: {
      padding:
        '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding} ',
    },
  },
  fileupload: {
    colorScheme: {
      light: {
        header: {
          background: '{surface.0}',
          color: '{text.color}',
        },
      },
    },
    extend: {
      extDragNdrop: {
        background: '{surface.0}',
        padding: '1rem',
        borderRadius: '{formField.borderRadius}',
        gap: '0.5rem',
        info: {
          gap: '0.25rem',
        },
      },
      extContent: {
        borderRadius: '{borderRadius.md}',
        highlightBorderDefault: '{formField.borderColor}',
      },
    },
    root: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{transitionDuration}',
    },
    header: {
      borderColor: '{content.borderColor}',
      borderWidth: '0',
      padding: '0',
      borderRadius: '0',
      gap: '0.5rem',
    },
    content: {
      highlightBorderColor: '{surface.900}',
      padding: '0',
      gap: '0.5rem',
    },
    file: {
      padding: '0.5rem',
      gap: '0.5rem',
      borderColor: '{formField.borderColor}',
      info: {
        gap: '0.25rem',
      },
    },
    fileList: {
      gap: '0.5rem',
    },
    progressbar: {
      height: '0.5rem',
    },
    basic: {
      gap: '0.5rem',
    },
  },
  floatlabel: {
    extend: {
      height: '4rem',
      iconSize: '{iconSizeLarge}',
    },
    root: {
      color: '{formField.floatLabelColor}',
      focusColor: '{formField.floatLabelFocusColor}',
      activeColor: '{formField.floatLabelActiveColor}',
      invalidColor: '{formField.floatLabelInvalidColor}',
      transitionDuration: '{formField.transitionDuration}',
      positionX: '{formField.paddingX}',
      positionY: '{formField.paddingY}',
      fontWeight: '35.714285714285715rem',
      active: {
        fontSize: '0.8571428571428571rem',
        fontWeight: '35.714285714285715rem',
      },
    },
    over: {
      active: {
        top: '0.5rem',
      },
    },
    inside: {
      input: {
        paddingTop: '1.875rem',
        paddingBottom: '{formField.paddingY}',
      },
      active: {
        top: '{formField.paddingY}',
      },
    },
    on: {
      borderRadius: '0',
      active: {
        padding: '0 0.125rem',
        background: '#ffffff',
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
      borderWidth: '1px',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{transitionDuration}',
    },
    navButton: {
      background: '{transparent}',
      hoverBackground: '{colors.alpha.white.20}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      size: '4rem',
      gutter: '0.5rem',
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
      size: '2rem',
    },
    thumbnailsContent: {
      padding: '0.25rem',
    },
    thumbnailNavButton: {
      size: '2rem',
      borderRadius: '{content.borderRadius}',
      gutter: '0.5rem',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    thumbnailNavButtonIcon: {
      size: '1rem',
    },
    caption: {
      background: '{colors.alpha.white.50}',
      color: '{text.color}',
      padding: '0.5rem',
    },
    indicatorList: {
      gap: '0.5rem',
      padding: '1rem',
    },
    indicatorButton: {
      width: '0.5rem',
      height: '0.5rem',
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
      size: '4rem',
      gutter: '0.5rem',
      background: '{colors.alpha.white.10}',
      hoverBackground: '{colors.alpha.white.20}',
      color: '{text.extend.colorInverted}',
      hoverColor: '{text.extend.colorInverted}',
      borderRadius: '{borderRadius.lg}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    closeButtonIcon: {
      size: '2rem',
    },
  },
  message: {
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
              shadow: 'none',
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
            hoverBackground: '#ffffff',
            focusRing: {
              color: '{focusRing.color}',
              shadow: 'none',
            },
          },
          outlined: {
            color: '#ffffff',
            borderColor: '#ffffff',
          },
          simple: {
            color: '#ffffff',
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
              shadow: 'none',
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
              shadow: 'none',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
        secondary: {
          borderColor: '#ffffff',
          shadow: 'none',
          closeButton: {
            hoverBackground: '#ffffff',
            focusRing: {
              color: '{focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '#ffffff',
          },
          outlined: {
            color: '#ffffff',
            borderColor: '#ffffff',
          },
        },
        contrast: {
          borderColor: '#ffffff',
          shadow: 'none',
          closeButton: {
            hoverBackground: '#ffffff',
            focusRing: {
              color: '{focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '#ffffff',
          },
          outlined: {
            color: '#ffffff',
            borderColor: '#ffffff',
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
              shadow: 'none',
            },
          },
          simple: {
            color: '{text.color}',
          },
        },
      },
    },
    extend: {
      width: '{sizingMessage.width}',
      extText: {
        gap: '0.25rem',
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
        width: '0.25rem',
      },
      extCloseButton: {
        width: '0.07142857142857142rem',
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
    root: {
      borderRadius: '{content.borderRadius}',
      borderWidth: '0.07142857142857142rem',
      transitionDuration: '{transitionDuration}',
    },
    content: {
      padding: '1rem',
      gap: '1rem',
      sm: {
        padding: '1rem',
      },
      lg: {
        padding: '1rem',
      },
    },
    text: {
      fontSize: '1rem',
      fontWeight: '35.714285714285715rem',
      sm: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1rem',
      },
    },
    icon: {
      size: '2.25rem',
      sm: {
        size: '2.25rem',
      },
      lg: {
        size: '2.25rem',
      },
    },
    closeButton: {
      width: '2rem',
      height: '2rem',
      borderRadius: '0.75rem',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '1rem',
      sm: {
        size: '1rem',
      },
      lg: {
        size: '1rem',
      },
    },
  },
  inputgroup: {
    colorScheme: {
      light: {
        addon: {
          background: '{transparent}',
          borderColor: '{formField.borderColor}',
          color: '{text.mutedColor}',
        },
      },
    },
    addon: {
      borderRadius: '{formField.borderRadius}',
      padding: '0.75rem',
      minWidth: '2.5rem',
    },
  },
  inputnumber: {
    colorScheme: {
      light: {
        button: {
          background: '{transparent}',
          hoverBackground: '{content.hoverBackground}',
          activeBackground: '{transparent}',
          borderColor: '{formField.borderColor}',
          hoverBorderColor: '{formField.borderColor}',
          activeBorderColor: '{formField.borderColor}',
          color: '{text.color}',
          hoverColor: '{text.hoverColor}',
          activeColor: '{text.color}',
        },
      },
    },
    extend: {
      extButton: {
        height: '2.5rem',
      },
    },
    transitionDuration: {
      transitionDuration: '{formField.transitionDuration}',
    },
    button: {
      width: '2.5rem',
      borderRadius: '{formField.borderRadius}',
      verticalPadding: '{formField.paddingY}',
    },
  },
  inputotp: {
    extend: {
      height: '2.5rem',
    },
    root: {
      gap: '0.5rem',
    },
    input: {
      width: '2.5rem',
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
      readonlyBackground: '{formField.readonlyBackground}',
      iconSize: '{iconSizeMedium}',
      extXlg: {
        fontSize: '{sizingInputtext.root.fontSize}',
        paddingX: '{sizingInputtext.root.paddingX}',
        paddingY: '{sizingInputtext.root.paddingY}',
      },
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      filledHoverBackground: '{formField.filledHoverBackground}',
      filledFocusBackground: '{formField.filledFocusBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{text.color}',
      disabledColor: '{formField.disabledColor}',
      placeholderColor: '{formField.placeholderColor}',
      invalidPlaceholderColor: '{formField.invalidPlaceholderColor}',
      shadow: '{formField.shadow}',
      paddingX: '{sizingInputtext.root.paddingX}',
      paddingY: '{sizingInputtext.root.paddingY}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
      sm: {
        fontSize: '{sizingInputtext.root.fontSize}',
        paddingX: '{sizingInputtext.root.paddingX}',
        paddingY: '{sizingInputtext.root.paddingY}',
      },
      lg: {
        fontSize: '{sizingInputtext.root.fontSize}',
        paddingX: '{sizingInputtext.root.paddingX}',
        paddingY: '{sizingInputtext.root.paddingY}',
      },
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
  },
  listbox: {
    colorScheme: {
      light: {
        option: {
          stripedBackground: '{surface.50}',
        },
      },
    },
    extend: {
      extOption: {
        label: {
          gap: '0.25rem',
        },
        caption: {
          color: '{text.mutedColor}',
          stripedColor: '{text.mutedColor}',
        },
      },
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      borderColor: '{formField.borderColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{formField.color}',
      disabledColor: '{formField.disabledColor}',
      shadow: '{formField.shadow}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
    },
    list: {
      padding: '{list.padding}',
      gap: '{list.gap}',
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
      fontWeight: '{list.optionGroup.fontWeight}',
      padding: '{list.option.padding}',
    },
    checkmark: {
      color: '{list.option.color}',
      gutterStart: '-0.5rem',
      gutterEnd: '0.5rem',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  megamenu: {
    colorScheme: {
      light: {
        root: {
          background: '{transparent}',
        },
      },
    },
    extend: {
      extItem: {
        caption: {
          color: '{text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      borderColor: '{transparent}',
      borderRadius: '{content.borderRadius}',
      color: '{content.color}',
      gap: '0.25rem',
      transitionDuration: '{transitionDuration}',
      verticalOrientation: {
        padding: '{navigation.list.padding}',
        gap: '{navigation.list.gap}',
      },
      horizontalOrientation: {
        padding: '{navigation.list.padding}',
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
      padding: '0.25rem',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      color: '{content.color}',
      shadow: '{overlay.navigation.shadow}',
      gap: '0',
    },
    submenu: {
      padding: '{navigation.list.padding}',
      gap: '{navigation.list.gap}',
    },
    submenuLabel: {
      padding: '{navigation.submenuLabel.padding}',
      fontWeight: '{navigation.submenuLabel.fontWeight}',
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
      size: '2rem',
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
      paddingY: '0.25rem',
      extItem: {
        caption: {
          color: '{text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.navigation.shadow}',
      transitionDuration: '{transitionDuration}',
    },
    list: {
      padding: '{navigation.list.padding}',
      gap: '{navigation.list.gap}',
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      gap: '{navigation.item.gap}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
      },
    },
    submenuLabel: {
      padding: '{navigation.submenuLabel.padding}',
      fontWeight: '{navigation.submenuLabel.fontWeight}',
      background: '{navigation.submenuLabel.background}',
      color: '{navigation.submenuLabel.color}',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
  },
  menubar: {
    extend: {
      extItem: {
        caption: {
          color: '{text.mutedColor}',
          gap: '0.25rem',
        },
      },
      extSubmenuLabel: {
        padding: '{navigation.submenuLabel.padding}',
        fontWeight: '{navigation.submenuLabel.fontWeight}',
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
      gap: '0.25rem',
      padding: '{navigation.list.padding}',
      transitionDuration: '{transitionDuration}',
    },
    baseItem: {
      borderRadius: '{navigation.item.borderRadius}',
      padding: '0.5rem 0.75rem',
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
      padding: '{navigation.list.padding}',
      gap: '{navigation.list.gap}',
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.navigation.shadow}',
      mobileIndent: '0.75rem',
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
      size: '2rem',
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
      gap: '0.75rem',
    },
    meters: {
      size: '0.5rem',
      background: '{content.borderColor}',
    },
    label: {
      gap: '0.5rem',
    },
    labelMarker: {
      size: '0.5rem',
    },
    labelIcon: {
      size: '1rem',
    },
    labelList: {
      verticalGap: '0.5rem',
      horizontalGap: '0.75rem',
    },
  },
  multiselect: {
    extend: {
      paddingX: '0.35714285714285715rem',
      paddingY: '0.35714285714285715rem',
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      filledHoverBackground: '{formField.filledHoverBackground}',
      filledFocusBackground: '{formField.filledFocusBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{formField.color}',
      disabledColor: '{formField.disabledColor}',
      placeholderColor: '{formField.placeholderColor}',
      invalidPlaceholderColor: '{formField.invalidPlaceholderColor}',
      shadow: '{formField.shadow}',
      paddingX: '{formField.paddingX}',
      paddingY: '{formField.paddingY}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
      sm: {
        fontSize: '{formField.sm.fontSize}',
        paddingX: '{formField.sm.paddingY}',
        paddingY: '{formField.sm.paddingY}',
      },
      lg: {
        fontSize: '{formField.lg.fontSize}',
        paddingX: '{formField.lg.paddingX}',
        paddingY: '{formField.lg.paddingY}',
      },
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
    dropdown: {
      width: '0.75rem',
      color: '{formField.iconColor}',
    },
    overlay: {
      background: '{datatable.filter.overlaySelect.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{datatable.filter.overlaySelect.borderRadius}',
      color: '{datatable.filter.overlaySelect.color}',
      shadow: '{overlay.select.shadow}',
    },
    readonlyBackground: '{formField.readonlyBackground}',
    list: {
      padding: '{list.padding}',
      header: {
        padding: '{list.header.padding}',
      },
      gap: '{list.gap}',
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
      gap: '0.5rem',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{list.optionGroup.fontWeight}',
      padding: '{list.optionGroup.padding}',
    },
    clearIcon: {
      color: '{formField.iconColor}',
    },
    chip: {
      borderRadius: '{borderRadius.sm}',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  paginator: {
    root: {
      padding: '0 0.5rem',
      gap: '0.5rem',
      borderRadius: '{content.borderRadius}',
      background: '{transparent}',
      color: '{content.color}',
      transitionDuration: '{transitionDuration}',
    },
    navButton: {
      background: '{transparent}',
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{highlight.background}',
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      selectedColor: '{text.extend.colorInverted}',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        focus: '{focusRing.shadow}',
      },
    },
    currentPageReport: {
      color: '{text.mutedColor}',
    },
    jumpToPageInput: {
      maxWidth: '5rem',
    },
  },
  panelmenu: {
    extend: {
      extPanel: {
        gap: '0.25rem',
      },
      extItem: {
        activeBackground: '{navigation.item.activeBackground}',
        activeColor: '{navigation.item.activeColor}',
        caption: {
          color: '{text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      gap: '0.25rem',
      transitionDuration: '{transitionDuration}',
    },
    panel: {
      background: '{transparent}',
      borderColor: '{transparent}',
      borderWidth: '0.07142857142857142rem',
      color: '{content.color}',
      padding: '0.25rem',
      borderRadius: '{content.borderRadius}',
      first: {
        borderWidth: '1px 1px 0 1px',
        topBorderRadius: '{content.borderRadius}',
      },
      last: {
        borderWidth: '0 1px 1px 1px',
        topBorderRadius: '{content.borderRadius}',
      },
    },
    item: {
      focusBackground: '{navigation.item.focusBackground}',
      color: '{navigation.item.color}',
      focusColor: '{navigation.item.focusColor}',
      gap: '0.5rem',
      padding: '{navigation.item.padding}',
      borderRadius: '{navigation.item.borderRadius}',
      icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focusColor}',
      },
    },
    submenu: {
      indent: '0.75rem',
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
      height: '0.5rem',
    },
    icon: {
      color: '{text.color}',
    },
    overlay: {
      background: '{overlay.popover.background}',
      borderColor: '{overlay.popover.borderColor}',
      borderRadius: '{overlay.popover.borderRadius}',
      color: '{overlay.popover.color}',
      padding: '{overlay.popover.padding}',
      shadow: '{overlay.popover.shadow}',
    },
    content: {
      gap: '0.5rem',
    },
  },
  popover: {
    root: {
      background: '{overlay.popover.background}',
      borderColor: '{datatable.filter.overlayPopover.borderColor}',
      color: '{overlay.popover.color}',
      borderRadius: '{overlay.popover.borderRadius}',
      shadow: '{overlay.popover.shadow}',
      gutter: '0.25rem',
      arrowOffset: '1.25rem',
    },
    content: {
      padding: '{overlay.popover.padding}',
    },
  },
  progressbar: {
    label: {
      color: '{text.extend.colorPrimaryStatic}',
      fontSize: '0.875rem',
      fontWeight: '42.857142857142854rem',
    },
    root: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      height: '1rem',
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
      width: '1.5rem',
      height: '1.5rem',
      background: '{formField.background}',
      checkedBackground: '{surface.900}',
      checkedHoverBackground: '{surface.800}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderPrimaryColor}',
      focusBorderColor: '{formField.borderColor}',
      checkedBorderColor: '{surface.900}',
      checkedHoverBorderColor: '{formField.hoverBorderPrimaryColor}',
      checkedFocusBorderColor: '{formField.focusBorderPrimaryColor}',
      checkedDisabledBorderColor: '{formField.borderColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      shadow: '{formField.shadow}',
      transitionDuration: '{formField.transitionDuration}',
    },
    focusRing: {
      width: '0.25rem',
      style: '{focusRing.style}',
      color: '{focusRing.color}',
      offset: '{focusRing.offset}',
      shadow: '{formField.focusRing.shadow}',
    },
    sm: {
      width: '1rem',
      height: '1rem',
    },
    lg: {
      width: '1.25rem',
      height: '1.25rem',
    },
    icon: {
      size: '0.8571428571428571rem',
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
      gap: '0.5rem',
      transitionDuration: '{formField.transitionDuration}',
    },
    focusRing: {
      width: '{formField.focusRing.width}',
      style: '{formField.focusRing.style}',
      color: '{formField.focusRing.color}',
      offset: '{formField.focusRing.offset}',
      shadow: '{formField.shadow}',
    },
    icon: {
      size: '1.5rem',
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
      transitionDuration: '{transitionDuration}',
    },
    bar: {
      size: '0.5rem',
      borderRadius: '{borderRadius.sm}',
      focusRing: {
        width: '0',
        style: '{focusRing.style}',
        color: '#ffffff',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
  },
  select: {
    extend: {
      extOption: {
        background: '{list.option.background}',
        gap: '0.5rem',
      },
      extOptionGroup: {
        gap: '0.5rem',
      },
      readonlyBackground: '{formField.readonlyBackground}',
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      filledHoverBackground: '{formField.filledHoverBackground}',
      filledFocusBackground: '{formField.filledFocusBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{text.color}',
      disabledColor: '{formField.disabledColor}',
      placeholderColor: '{formField.placeholderColor}',
      invalidPlaceholderColor: '{formField.invalidPlaceholderColor}',
      shadow: '{formField.shadow}',
      paddingX: '{sizingSelect.root.paddingX}',
      paddingY: '{sizingSelect.root.paddingY}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
      sm: {
        fontSize: '{sizingSelect.root.fontSize}',
        paddingX: '{sizingSelect.root.paddingX}',
        paddingY: '{sizingSelect.root.paddingY}',
      },
      lg: {
        fontSize: '{sizingSelect.root.fontSize}',
        paddingX: '{sizingSelect.root.paddingX}',
        paddingY: '{sizingSelect.root.paddingY}',
      },
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
    dropdown: {
      width: '2.5rem',
      color: '{formField.iconColor}',
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
      gap: '{list.gap}',
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
      fontWeight: '{list.optionGroup.fontWeight}',
      padding: '{list.option.padding}',
    },
    clearIcon: {
      color: '{formField.iconColor}',
    },
    checkmark: {
      color: '{list.option.color}',
      gutterStart: '-0.5rem',
      gutterEnd: '0.5rem',
    },
    emptyMessage: {
      padding: '{list.option.padding}',
    },
  },
  selectbutton: {
    colorScheme: {
      light: {
        root: {
          invalidBorderColor: '{formField.invalidBorderColor}',
        },
      },
    },
    extend: {
      background: '{surface.200}',
    },
    root: {
      borderRadius: '{borderRadius.rounded}',
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
      transitionDuration: '{formField.transitionDuration}',
    },
    track: {
      background: '{content.borderColor}',
      borderRadius: '{content.borderRadius}',
      size: '0.25rem',
    },
    range: {
      background: '{surface.900}',
    },
    handle: {
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '{borderRadius.xl}',
      background: '{surface.900}',
      hoverBackground: '{surface.900}',
      content: {
        borderRadius: '{borderRadius.xl}',
        hoverBackground: '{surface.900}',
        width: '0.75rem',
        height: '0.75rem',
        shadow: 'none',
      },
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
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
      transitionDuration: '{transitionDuration}',
    },
    handle: {
      size: '0.25rem',
      borderRadius: '{content.borderRadius}',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
  },
  stepper: {
    extend: {
      extCaption: {
        gap: '0.25rem',
      },
      extStepNumber: {
        invalidBackground: '{error.400}',
        invalidColor: '{error.900}',
        invalidBorderColor: '{error.400}',
      },
    },
    root: {
      transitionDuration: '{transitionDuration}',
    },
    separator: {
      background: '{content.borderColor}',
      activeBackground: '{formField.focusBorderPrimaryColor}',
      margin: '0 0 0 1.625rem',
      size: '0.07142857142857142rem',
    },
    step: {
      padding: '0.5rem',
      gap: '0.5rem',
    },
    stepHeader: {
      padding: '0',
      borderRadius: '0',
      gap: '0.5rem',
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
      fontWeight: '35.714285714285715rem',
    },
    stepNumber: {
      background: '{content.background}',
      activeBackground: '{primary.color}',
      borderColor: '{content.borderColor}',
      activeBorderColor: '{primary.color}',
      color: '{text.color}',
      activeColor: '{text.extend.colorPrimaryStatic}',
      size: '1.5rem',
      fontSize: '1.125rem',
      fontWeight: '35.714285714285715rem',
      borderRadius: '{content.borderRadius}',
      shadow: 'none',
    },
    steppanels: {
      padding: '1rem',
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
      gap: '0.5rem',
    },
    itemLabel: {
      fontWeight: '35.714285714285715rem',
    },
    itemNumber: {
      background: '{content.background}',
      size: '2.25rem',
      fontSize: '1.125rem',
      fontWeight: '35.714285714285715rem',
      borderRadius: '50%',
      shadow: 'none',
    },
  },
  tabs: {
    colorScheme: {
      light: {
        navButton: {
          shadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)',
        },
        tab: {
          background: '{transparent}',
          hoverBackground: '{transparent}',
          activeBackground: '{transparent}',
        },
      },
    },
    root: {
      transitionDuration: '{transitionDuration}',
    },
    tablist: {
      borderWidth: '0 0 2px 0',
      background: '{transparent}',
      borderColor: '{content.borderColor}',
    },
    tab: {
      borderWidth: '0',
      borderColor: '{content.borderColor}',
      hoverBorderColor: '{content.borderColor}',
      activeBorderColor: '{formField.focusBorderPrimaryColor}',
      color: '{text.mutedColor}',
      hoverColor: '{text.color}',
      activeColor: '{text.color}',
      padding: '1rem',
      fontWeight: '50rem',
      margin: '0 0 -1px 0',
      gap: '0.5rem',
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
      padding: '1rem',
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
      width: '1.5rem',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        color: '{focusRing.color}',
        offset: '{focusRing.offset}',
        shadow: '{focusRing.shadow}',
      },
    },
    activeBar: {
      height: '0.14285714285714285rem',
      bottom: '-1',
      background: '{content.color}',
    },
  },
  toast: {
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
              shadow: 'none',
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
              shadow: 'none',
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
              shadow: 'none',
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
        width: '0.25rem',
      },
      extCloseButton: {
        width: '0.07142857142857142rem',
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
    root: {
      width: '{sizingToast.width}',
      borderWidth: '0.07142857142857142rem',
      borderRadius: '{content.borderRadius}',
      transitionDuration: '{transitionDuration}',
    },
    icon: {
      size: '2.25rem',
    },
    content: {
      padding: '1rem',
      gap: '1rem',
    },
    text: {
      gap: '0.25rem',
    },
    summary: {
      fontWeight: '35.714285714285715rem',
      fontSize: '1rem',
    },
    detail: {
      fontWeight: '35.714285714285715rem',
      fontSize: '0.875rem',
    },
    closeButton: {
      width: '2rem',
      height: '2rem',
      borderRadius: '{borderRadius.md}',
      focusRing: {
        width: '{focusRing.width}',
        style: '{focusRing.style}',
        offset: '{focusRing.offset}',
      },
    },
    closeIcon: {
      size: '1rem',
    },
  },
  tag: {
    colorScheme: {
      light: {
        primary: {
          background: '{primary.500}',
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
      fontSize: '0.875rem',
      fontWeight: '50rem',
      padding: '0.285rem 0.5rem',
      gap: '0.25rem',
      borderRadius: '{borderRadius.sm}',
      roundedBorderRadius: '{borderRadius.xl}',
    },
    icon: {
      size: '0.875rem',
    },
  },
  textarea: {
    extend: {
      readonlyBackground: '{formField.readonlyBackground}',
    },
    root: {
      background: '{formField.background}',
      disabledBackground: '{formField.disabledBackground}',
      filledBackground: '{formField.filledBackground}',
      filledHoverBackground: '{formField.filledHoverBackground}',
      filledFocusBackground: '{formField.filledFocusBackground}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      color: '{formField.color}',
      disabledColor: '{formField.disabledColor}',
      placeholderColor: '{formField.placeholderColor}',
      invalidPlaceholderColor: '{formField.invalidPlaceholderColor}',
      shadow: '{formField.shadow}',
      paddingX: '{formField.paddingX}',
      paddingY: '{formField.paddingY}',
      borderRadius: '{formField.borderRadius}',
      transitionDuration: '{formField.transitionDuration}',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
    sm: {
      fontSize: '0',
      paddingX: '0',
      paddingY: '0',
    },
    lg: {
      fontSize: '0',
      paddingX: '0',
      paddingY: '0',
    },
  },
  tieredmenu: {
    extend: {
      extSubmenu: {
        borderColor: '{content.borderColor}',
        background: '{content.background}',
      },
      extItem: {
        caption: {
          gap: '0.25rem',
          color: '{text.mutedColor}',
        },
      },
    },
    root: {
      background: '{transparent}',
      borderColor: '{transparent}',
      color: '{content.color}',
      borderRadius: '{content.borderRadius}',
      shadow: '{overlay.navigation.shadow}',
      transitionDuration: '{transitionDuration}',
    },
    list: {
      padding: '{navigation.list.padding}',
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
      mobileIndent: '0.75rem',
    },
    separator: {
      borderColor: '{content.borderColor}',
    },
  },
  timeline: {
    event: {
      minHeight: '3.0357142857142856rem',
    },
    vertical: {
      eventContent: {
        padding: '0 1rem',
      },
    },
    horizontal: {
      eventContent: {
        padding: '1rem 0',
      },
    },
    eventMarker: {
      size: '1rem',
      borderRadius: '{content.borderRadius}',
      borderWidth: '0.25rem',
      background: '{content.background}',
      borderColor: '{primary.color}',
      content: {
        borderRadius: '{content.borderRadius}',
        size: '0.75rem',
        background: '{transparent}',
        insetShadow: 'none',
      },
    },
    eventConnector: {
      color: '{content.borderColor}',
      size: '0.07142857142857142rem',
    },
  },
  togglebutton: {
    colorScheme: {
      light: {
        root: {
          background: '{surface.200}',
        },
      },
    },
    extend: {
      gap: '0.75rem',
      extXlg: {
        padding: '1.25rem 1.5rem',
        iconOnlyWidth: '4.071428571428571rem',
      },
      iconOnlyWidth: '2.5rem',
      extSm: {
        iconOnlyWidth: '2.142857142857143rem',
      },
      hoverBorderColor: '{surface.300}',
      checkedHoverColor: '{text.extend.colorInverted}',
      checkedHoverBackground: '{surface.800}',
      checkedHoverBorderColor: '{surface.800}',
      extLg: {
        iconOnlyWidth: '3.5714285714285716rem',
      },
    },
    root: {
      padding: '0.5rem 1rem',
      borderRadius: '{borderRadius.rounded}',
      gap: '0.5rem',
      fontWeight: '35.714285714285715rem',
      hoverBackground: '{surface.300}',
      borderColor: '{surface.200}',
      color: '{text.color}',
      hoverColor: '{text.color}',
      checkedBackground: '{surface.900}',
      checkedColor: '{text.extend.colorInverted}',
      checkedBorderColor: '{surface.900}',
      disabledBackground: '{formField.disabledBackground}',
      disabledBorderColor: '{formField.disabledBackground}',
      disabledColor: '{formField.disabledColor}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{formField.focusRing.color}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
      sm: {
        fontSize: '{formField.sm.fontSize}',
        padding: '0.75rem 0.25rem',
      },
      lg: {
        fontSize: '{formField.sm.fontSize}',
        padding: '1rem 1.5rem',
      },
      transitionDuration: '{formField.transitionDuration}',
    },
    icon: {
      color: '{text.color}',
      hoverColor: '{text.color}',
      checkedColor: '{text.extend.colorInverted}',
      disabledColor: '{formField.disabledColor}',
    },
    content: {
      checkedBackground: '{transparent}',
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
          disabledBackground: '{formField.disabledBackground}',
          checkedBackground: '{surface.900}',
          checkedHoverBackground: '{surface.500}',
        },
        handle: {
          background: '{formField.backgroundHandler}',
          hoverBackground: '{formField.backgroundHandler}',
          disabledBackground: '{formField.disabledColor}',
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
      width: '2.5rem',
      height: '1.5rem',
      borderRadius: '{borderRadius.xl}',
      gap: '0.14285714285714285rem',
      borderWidth: '0',
      shadow: 'none',
      focusRing: {
        width: '{formField.focusRing.width}',
        style: '{formField.focusRing.style}',
        color: '{primary.200}',
        offset: '{formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
      borderColor: '{transparent}',
      hoverBorderColor: '{transparent}',
      checkedBorderColor: '{transparent}',
      checkedHoverBorderColor: '{transparent}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      transitionDuration: '{formField.transitionDuration}',
      slideDuration: '0.2s',
    },
    handle: {
      borderRadius: '7.142857142857143rem',
      size: '1.25rem',
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
      maxWidth: '17rem',
      gutter: '0.25rem',
      shadow: '{overlay.popover.shadow}',
      padding: '0.5rem 1rem',
      borderRadius: '{overlay.popover.borderRadius}',
    },
  },
  tree: {
    root: {
      background: '{content.background}',
      color: '{content.color}',
      padding: '1rem',
      gap: '2px',
      indent: '1rem',
    },
    node: {
      padding: '0.375rem 0.625rem',
      color: '{text.color}',
      selectedColor: '{text.extend.colorInverted}',
      gap: '0.25rem',
    },
    nodeIcon: {
      selectedColor: '{text.extend.colorInverted}',
    },
    nodeToggleButton: {
      borderRadius: '50%',
      size: '1.75rem',
      selectedHoverBackground: '{surface.900}',
    },
    loadingIcon: {
      size: '2rem',
    },
    filter: {
      margin: '0 0 0.5rem 0',
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
};
