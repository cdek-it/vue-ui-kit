export default {
  accordion: {
    header: {
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      activeColor: '{theme.text.color}',
      activeHoverColor: '{theme.text.hoverColor}',
      borderColor: '{theme.content.borderColor}',
      padding: '1rem 0 1rem 0',
      fontWeight: '0',
      borderRadius: '0rem',
      borderWidth: '0rem 0rem 0rem 0rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      toggleIcon: {
        color: '{theme.text.color}',
        hoverColor: '{theme.text.hoverColor}',
        activeColor: '{theme.text.color}',
        activeHoverColor: '{theme.text.hoverColor}',
      },
      last: {
        bottomBorderRadius: '{semantic.content.borderRadius}',
        activeBottomBorderRadius: '0rem',
      },
      first: {
        borderWidth: '0rem',
        topBorderRadius: '{semantic.content.borderRadius}',
      },
    },
    root: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    panel: {
      borderWidth: '0rem',
      borderColor: '{theme.content.background}',
    },
    colorScheme: {
      light: {
        header: {
          background: '{theme.surface.extend.transparent}',
          hoverBackground: '{theme.surface.extend.transparent}',
          activeBackground: '{theme.surface.extend.transparent}',
          activeHoverBackground: '{theme.surface.extend.transparent}',
        },
      },
    },
    content: {
      borderWidth: '1px 0 0 0',
      borderColor: '{theme.content.borderColor}',
      background: '{theme.content.background}',
      color: '{theme.text.color}',
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
          background: '{theme.formField.background}',
          hoverBackground: '{theme.formField.background}',
          activeBackground: '{theme.formField.background}',
          color: '{theme.formField.color}',
          hoverColor: '{theme.formField.color}',
          activeColor: '{theme.formField.color}',
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
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      filledHoverBackground: '{theme.formField.filledHoverBackground}',
      filledFocusBackground: '{theme.formField.filledFocusBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.formField.color}',
      disabledColor: '{theme.formField.disabledColor}',
      placeholderColor: '{theme.formField.placeholderColor}',
      invalidPlaceholderColor: '{theme.formField.invalidPlaceholderColor}',
      shadow: '{theme.formField.shadow}',
      paddingX: '{semantic.formField.paddingX}',
      paddingY: '{semantic.formField.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    overlay: {
      background: '{theme.overlay.select.background}',
      borderColor: '{theme.overlay.select.borderColor}',
      borderRadius: '{semantic.overlay.select.borderRadius}',
      color: '{theme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
    },
    option: {
      focusBackground: '{theme.list.option.focusBackground}',
      selectedBackground: '{theme.list.option.selectedBackground}',
      selectedFocusBackground: '{theme.list.option.selectedFocusBackground}',
      color: '{theme.list.option.color}',
      focusColor: '{theme.list.option.focusColor}',
      selectedColor: '{theme.list.option.selectedColor}',
      selectedFocusColor: '{theme.list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
    },
    optionGroup: {
      background: '{theme.list.optionGroup.background}',
      color: '{theme.list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.optionGroup.padding}',
    },
    dropdown: {
      width: '100%',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      activeBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      borderRadius: '{semantic.formField.borderRadius}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{semantic.formField.focusRing.shadow}',
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
      padding: '{semantic.list.option.padding}',
    },
  },
  avatar: {
    extend: {
      borderColor: '{theme.formField.borderColor}',
    },
    root: {
      width: '2rem',
      height: '2rem',
      fontSize: '1rem',
      color: '{theme.text.extend.colorPrimaryStatic}',
      background: '{theme.primary.color}',
      borderRadius: '{primitive.borderRadius.md}',
    },
    icon: {
      size: '1rem',
    },
    group: {
      borderColor: '{theme.content.background}',
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
      fontSize: '1rem',
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
          color: '{theme.text.extend.colorPrimaryStatic}',
          background: '{theme.primary.color}',
        },
        secondary: {
          color: '{theme.text.extend.colorInverted}',
          background: '{theme.surface.900}',
        },
        success: {
          color: '{theme.extend.palette.success.900}',
          background: '{theme.extend.palette.success.300}',
        },
        info: {
          color: '{theme.extend.palette.info.900}',
          background: '{theme.extend.palette.info.300}',
        },
        warn: {
          color: '{theme.extend.palette.warn.900}',
          background: '{theme.extend.palette.warn.300}',
        },
        danger: {
          color: '{theme.extend.palette.error.900}',
          background: '{theme.extend.palette.error.300}',
        },
      },
    },
    extend: {
      extDot: {
        success: {
          background: '{primitive.colors.green.400}',
        },
        info: {
          background: '{theme.extend.palette.info.400}',
        },
        warn: {
          background: '{theme.extend.palette.warn.400}',
        },
        danger: {
          background: '{theme.extend.palette.error.400}',
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
      borderRadius: '{primitive.borderRadius.xl}',
      padding: '0.5357rem',
      fontSize: '0.75rem',
      fontWeight: '400',
      minWidth: '1.5rem',
      height: '1.5rem',
    },
    dot: {
      size: '0.5rem',
    },
    sm: {
      fontSize: '0.625rem',
      minWidth: '0rem',
      height: '0rem',
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
      hoverBackground: '{theme.surface.100}',
    },
    root: {
      padding: '0.25rem',
      background: '{theme.surface.extend.transparent}',
      gap: '0rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    focusRing: {
      width: '{semantic.focusRing.width}',
      style: '{semantic.focusRing.style}',
      color: '{semantic.focusRing.color}',
      offset: '{semantic.focusRing.offset}',
      shadow: '{semantic.focusRing.shadow}',
    },
    item: {
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      borderRadius: '{primitive.borderRadius.xs}',
      gap: '{semantic.navigation.item.gap}',
      icon: {
        color: '{theme.text.color}',
        hoverColor: '{theme.text.hoverColor}',
      },
    },
    separator: {
      color: '{theme.text.color}',
    },
  },
  button: {
    extend: {
      extOutlined: {
        danger: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        warn: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        info: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        help: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        success: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
      },
      disabledBackground: '{theme.formField.disabledBackground}',
      disabledColor: '{theme.formField.disabledColor}',
      extText: {
        danger: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        warn: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        info: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        help: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
        success: {
          focusBackground: '{theme.surface.extend.transparent}',
        },
      },
      extLink: {
        background: '{theme.surface.extend.transparent}',
        colorHover: '{theme.text.hoverColor}',
        paddingX: '0rem',
        paddingY: '0.25rem',
        sm: {
          iconOnlyWidth: '1rem',
        },
        base: {
          iconOnlyWidth: '1.5357rem',
        },
        lg: {
          iconOnlyWidth: '1.75rem',
        },
        xlg: {
          iconOnlyWidth: '2rem',
        },
      },
      extSm: {
        borderRadius: '{primitive.borderRadius.md}',
        gap: '0.5rem',
      },
      extLg: {
        borderRadius: '{primitive.borderRadius.lg}',
        gap: '0.75rem',
      },
      extXlg: {
        borderRadius: '{primitive.borderRadius.lg}',
        gap: '0.75rem',
        iconOnlyWidth: '4.0714rem',
        paddingX: '1.5rem',
        paddingY: '1.25rem',
      },
    },
    colorScheme: {
      light: {
        root: {
          primary: {
            background: '{theme.primary.color}',
            hoverBackground: '{theme.primary.hoverColor}',
            activeBackground: '{theme.primary.color}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.text.extend.colorPrimaryStatic}',
            hoverColor: '{theme.text.extend.colorPrimaryStatic}',
            activeColor: '{theme.text.extend.colorPrimaryStatic}',
            focusRing: {
              color: '{semantic.primary.200}',
              shadow: '{semantic.focusRing.shadow}',
            },
          },
          secondary: {
            background: '{theme.surface.900}',
            hoverBackground: '{theme.surface.800}',
            activeBackground: '{theme.surface.900}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.text.extend.colorInverted}',
            hoverColor: '{theme.text.extend.colorInverted}',
            activeColor: '{theme.text.extend.colorInverted}',
            focusRing: {
              color: '{semantic.primary.200}',
              shadow: '{semantic.focusRing.shadow}',
            },
          },
          contrast: {
            background: '{theme.surface.200}',
            hoverBackground: '{theme.surface.300}',
            activeBackground: '{theme.surface.200}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.text.color}',
            hoverColor: '{theme.text.color}',
            activeColor: '{theme.text.color}',
            focusRing: {
              color: '{semantic.primary.200}',
              shadow: '{semantic.focusRing.shadow}',
            },
          },
          info: {
            background: '{theme.extend.palette.info.300}',
            hoverBackground: '{theme.extend.palette.info.400}',
            activeBackground: '{theme.extend.palette.info.300}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.info.900}',
            hoverColor: '{theme.extend.palette.info.950}',
            activeColor: '{theme.extend.palette.info.900}',
          },
          success: {
            background: '{theme.extend.palette.success.300}',
            hoverBackground: '{theme.extend.palette.success.400}',
            activeBackground: '{theme.extend.palette.success.300}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.success.900}',
            hoverColor: '{theme.extend.palette.success.950}',
            activeColor: '{theme.extend.palette.success.900}',
          },
          warn: {
            background: '{theme.extend.palette.warn.300}',
            hoverBackground: '{theme.extend.palette.warn.400}',
            activeBackground: '{theme.extend.palette.warn.300}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.warn.900}',
            hoverColor: '{theme.extend.palette.warn.950}',
            activeColor: '{theme.extend.palette.warn.900}',
          },
          help: {
            background: '{theme.extend.palette.help.300}',
            hoverBackground: '{theme.extend.palette.help.400}',
            activeBackground: '{theme.extend.palette.help.300}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.help.900}',
            hoverColor: '{theme.extend.palette.help.950}',
            activeColor: '{theme.extend.palette.help.900}',
          },
          danger: {
            background: '{theme.extend.palette.error.300}',
            hoverBackground: '{theme.extend.palette.error.400}',
            activeBackground: '{theme.extend.palette.error.300}',
            borderColor: '{theme.surface.extend.transparent}',
            hoverBorderColor: '{theme.surface.extend.transparent}',
            activeBorderColor: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.error.900}',
            hoverColor: '{theme.extend.palette.error.950}',
            activeColor: '{theme.extend.palette.error.900}',
          },
        },
        outlined: {
          primary: {
            hoverBackground: '{semantic.primary.50}',
            activeBackground: '{semantic.primary.100}',
            borderColor: '{semantic.primary.200}',
            color: '{primitive.colors.green.500}',
          },
          success: {
            hoverBackground: '{theme.extend.palette.success.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            borderColor: '{theme.extend.palette.success.600}',
            color: '{theme.extend.palette.success.600}',
          },
          info: {
            hoverBackground: '{theme.extend.palette.info.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            borderColor: '{theme.extend.palette.info.600}',
            color: '{theme.extend.palette.info.600}',
          },
          warn: {
            hoverBackground: '{theme.extend.palette.warn.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            borderColor: '{theme.extend.palette.warn.600}',
            color: '{theme.extend.palette.warn.600}',
          },
          help: {
            hoverBackground: '{theme.extend.palette.help.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            borderColor: '{theme.extend.palette.help.600}',
            color: '{theme.extend.palette.help.600}',
          },
          danger: {
            hoverBackground: '{theme.extend.palette.error.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            borderColor: '{theme.extend.palette.error.600}',
            color: '{theme.extend.palette.error.600}',
          },
        },
        text: {
          primary: {
            hoverBackground: '{theme.surface.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.text.color}',
          },
          success: {
            hoverBackground: '{theme.extend.palette.success.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.success.600}',
          },
          info: {
            hoverBackground: '{theme.extend.palette.info.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.info.600}',
          },
          warn: {
            hoverBackground: '{theme.extend.palette.warn.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.warn.600}',
          },
          help: {
            hoverBackground: '{theme.extend.palette.help.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.help.600}',
          },
          danger: {
            hoverBackground: '{theme.extend.palette.error.100}',
            activeBackground: '{theme.surface.extend.transparent}',
            color: '{theme.extend.palette.error.600}',
          },
        },
        link: {
          color: '{theme.text.color}',
          hoverColor: '{theme.text.hoverColor}',
          activeColor: '{theme.text.color}',
        },
      },
    },
    root: {
      borderRadius: '{primitive.borderRadius.md}',
      roundedBorderRadius: '2rem',
      gap: '0.5rem',
      paddingX: '1rem',
      paddingY: '0.5rem',
      iconOnlyWidth: '2.5rem',
      raisedShadow:
        '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      badgeSize: '1rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        offset: '{semantic.focusRing.offset}',
      },
      sm: {
        iconOnlyWidth: '2rem',
        paddingX: '0.75rem',
        paddingY: '0.5rem',
      },
      lg: {
        iconOnlyWidth: '3.5714rem',
        paddingX: '1.5rem',
        paddingY: '1rem',
      },
      label: {
        fontWeight: '600',
      },
    },
  },
  card: {
    extend: {
      borderColor: '{theme.content.borderColor}',
    },
    root: {
      background: '{theme.content.background}',
      borderRadius: '{primitive.borderRadius.lg}',
      color: '{theme.content.color}',
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
      fontWeight: '700',
    },
    subtitle: {
      color: '{theme.text.mutedColor}',
    },
  },
  carousel: {
    colorScheme: {
      light: {
        indicator: {
          background: '{theme.surface.300}',
          hoverBackground: '{theme.surface.400}',
          activeBackground: '{theme.surface.900}',
        },
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
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
      borderRadius: '{primitive.borderRadius.xl}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{rating.focusRing.shadow}',
      },
    },
  },
  checkbox: {
    root: {
      borderRadius: '{primitive.borderRadius.sm}',
      extend: {
        borderWidth: '0.0714rem',
      },
      width: '1.5rem',
      height: '1.5rem',
      background: '{theme.formField.background}',
      checkedBackground: '{theme.surface.900}',
      checkedHoverBackground: '{theme.surface.800}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderPrimaryColor}',
      focusBorderColor: '{theme.formField.focusBorderPrimaryColor}',
      checkedBorderColor: '{theme.surface.900}',
      checkedHoverBorderColor: '{theme.surface.800}',
      checkedFocusBorderColor: '{theme.primary.color}',
      checkedDisabledBorderColor: '{theme.formField.borderColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      shadow: '{theme.formField.shadow}',
      focusRing: {
        focusRing: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
      sm: {
        width: '1rem',
        height: '1rem',
      },
      lg: {
        width: '1.25rem',
        height: '1.25rem',
      },
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    icon: {
      size: '1rem',
      color: '{theme.formField.color}',
      checkedColor: '{theme.primary.contrastColor}',
      checkedHoverColor: '{theme.primary.contrastColor}',
      disabledColor: '{theme.formField.disabledColor}',
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
      borderColor: '{theme.surface.extend.transparent}',
    },
    root: {
      borderRadius: '{primitive.borderRadius.sm}',
      paddingX: '0.5rem',
      paddingY: '0.25rem',
      gap: '0.5rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.200}',
          color: '{theme.text.color}',
        },
        icon: {
          color: '{theme.text.color}',
        },
        removeIcon: {
          color: '{theme.text.color}',
        },
      },
    },
    image: {
      width: '0rem',
      height: '0rem',
    },
    icon: {
      size: '1rem',
    },
    removeIcon: {
      size: '1rem',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.primary.200}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{semantic.formField.focusRing.shadow}',
      },
    },
  },
  confirmdialog: {
    extend: {
      extIcon: {
        success: '{theme.extend.palette.success.500}',
        info: '{theme.extend.palette.info.500}',
        help: '{theme.extend.palette.help.500}',
        warn: '{theme.extend.palette.warn.500}',
        danger: '{theme.extend.palette.error.500}',
      },
    },
    icon: {
      size: '1.5rem',
      color: '{theme.overlay.modal.color}',
    },
    content: {
      gap: '0rem',
    },
  },
  confirmpopup: {
    root: {
      background: '{semantic_color-cheme.overlay.popover.background}',
      color: '{semantic_color-cheme.overlay.popover.color}',
      shadow: '{semantic.overlay.popover.shadow}',
      gutter: '10px',
      arrowOffset: '1.25rem',
    },
    content: {
      padding: '{semantic.overlay.popover.padding}',
      gap: '1rem',
    },
    icon: {
      size: '1.5rem',
      color: '{semantic_color-cheme.overlay.popover.color}',
    },
    footer: {
      gap: '0.5rem',
      padding:
        '0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}',
    },
  },
  contextmenu: {
    root: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      shadow: '{semantic.overlay.navigation.shadow}',
    },
    list: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
    },
    item: {
      padding: '{semantic.navigation.item.padding}',
      gap: '{semantic.navigation.item.gap}',
    },
    submenu: {
      mobileIndent: '1.25rem',
    },
  },
  datatable: {
    colorScheme: {
      light: {
        root: {
          color: '{theme.text.color}',
          borderColor: '{theme.content.borderColor}',
        },
        header: {
          background: '{theme.surface.50}',
          color: '{theme.text.color}',
        },
        headerCell: {
          background: '{theme.surface.50}',
          hoverBackground: '{theme.surface.100}',
          color: '{theme.text.color}',
        },
        footer: {
          background: '{theme.surface.100}',
          color: '{theme.text.color}',
        },
        footerCell: {
          background: '{theme.content.hoverBackground}',
          color: '{theme.text.color}',
        },
        row: {
          stripedBackground: '{theme.content.hoverBackground}',
        },
        bodyCell: {
          selectedBorderColor: '{theme.content.borderColor}',
        },
      },
    },
    extended: {
      extHeaderCell: {
        selectedHoverBackground: '{theme.surface.800}',
      },
      extRow: {
        selectedHoverBackground: '{theme.surface.800}',
        stripedHoverBackground: '{theme.surface.100}',
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
    header: {
      borderColor: '{theme.content.borderColor}',
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
      selectedBackground: '{theme.highlight.background}',
      borderColor: '{theme.content.borderColor}',
      hoverColor: '{theme.text.hoverColor}',
      selectedColor: '{theme.highlight.color}',
      gap: '0.5rem',
      padding: '1rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
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
      fontWeight: '700',
    },
    row: {
      background: '{theme.content.background}',
      hoverBackground: '{theme.content.hoverBackground}',
      selectedBackground: '{theme.highlight.background}',
      color: '{theme.content.color}',
      hoverColor: '{theme.content.hoverColor}',
      selectedColor: '{theme.highlight.color}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
    },
    bodyCell: {
      borderColor: '{theme.content.borderColor}',
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    footerCell: {
      borderColor: '{theme.content.borderColor}',
      padding: '1rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
    },
    columnFooter: {
      fontWeight: '700',
    },
    dropPoint: {
      color: '{theme.highlight.background}',
    },
    footer: {
      borderColor: '{theme.content.borderColor}',
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
      color: '{theme.highlight.background}',
    },
    sortIcon: {
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      size: '1rem',
    },
    loadingIcon: {
      size: '2rem',
    },
    rowToggleButton: {
      hoverBackground: '{theme.content.hoverBackground}',
      selectedHoverBackground: '{theme.content.hoverBackground}',
      color: '{theme.text.color}',
      hoverColor: '{theme.text.color}',
      selectedHoverColor: '{theme.text.color}',
      size: '2rem',
      borderRadius: '{semantic.content.borderRadius}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    filter: {
      inlineGap: '0.5rem',
      rule: {
        borderColor: '{theme.content.borderColor}',
      },
      constraintList: {
        padding: '{semantic.list.padding}',
        gap: '{semantic.list.gap}',
      },
      constraint: {
        focusBackground: '{theme.list.option.focusBackground}',
        selectedBackground: '{theme.list.option.selectedBackground}',
        selectedFocusBackground: '{theme.list.option.selectedFocusBackground}',
        color: '{theme.list.option.color}',
        focusColor: '{theme.list.option.focusColor}',
        selectedColor: '{theme.list.option.selectedColor}',
        selectedFocusColor: '{theme.list.option.selectedFocusColor}',
        padding: '{semantic.list.option.padding}',
        borderRadius: '{semantic.list.option.borderRadius}',
        separator: {
          borderColor: '{theme.content.borderColor}',
        },
      },
      overlaySelect: {
        background: '{theme.overlay.select.background}',
        color: '{theme.overlay.select.color}',
        borderColor: '{theme.overlay.select.borderColor}',
        borderRadius: '{semantic.overlay.select.borderRadius}',
        shadow: '{semantic.overlay.select.shadow}',
      },
      overlayPopover: {
        background: '{theme.overlay.popover.background}',
        color: '{theme.overlay.popover.color}',
        borderColor: '{theme.overlay.select.borderColor}',
        borderRadius: '{semantic.overlay.select.borderRadius}',
        shadow: '{semantic.overlay.popover.shadow}',
        padding: '{semantic.overlay.popover.padding}',
        gap: '{semantic.list.gap}',
      },
    },
    paginatorTop: {
      borderColor: '{theme.formField.borderColor}',
      borderWidth: '0 0 1px 0',
    },
    paginatorBottom: {
      borderWidth: '0 0 1px 0',
      borderColor: '{theme.content.borderColor}',
    },
  },
  dataview: {
    root: {
      borderWidth: '1px',
      borderRadius: '4px',
      padding: '0rem',
      borderColor: '#ffffff',
    },
    header: {
      borderWidth: '0 0 1px 0',
      padding: '0.875rem 1.125rem',
      borderRadius: '5px 5px 0 0',
      color: '{semantic_color-cheme.text.color}',
    },
    content: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      borderColor: '#ffffff',
      borderWidth: '0rem',
      padding: '0rem',
      borderRadius: '5px',
    },
    footer: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
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
          background: '{theme.content.background}',
          hoverBackground: '{theme.navigation.item.focusBackground}',
          activeBackground: '{theme.navigation.item.activeBackground}',
          color: '{theme.navigation.item.color}',
          hoverColor: '{theme.navigation.item.focusColor}',
          activeColor: '{theme.navigation.item.activeColor}',
        },
        today: {
          background: '{theme.content.background}',
          color: '{theme.text.color}',
        },
      },
    },
    extend: {
      extDate: {
        selectedHoverBackground: '{semantic.primary.600}',
      },
      extToday: {
        borderColor: '{theme.content.borderColor}',
        hoverBackground: '{theme.content.hoverBackground}',
      },
      extTimePicker: {
        minWidth: '2.8571rem',
        color: '{theme.content.color}',
      },
      extTitle: {
        width: '15rem',
      },
    },
    panel: {
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      color: '{theme.content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: '{semantic.overlay.popover.shadow}',
      padding: '{semantic.overlay.popover.padding}',
    },
    header: {
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      color: '{theme.content.color}',
      padding: '0 0 0.5rem 0',
    },
    title: {
      gap: '0.5rem',
      fontWeight: '700',
    },
    selectMonth: {
      hoverBackground: '{theme.content.hoverBackground}',
      color: '{theme.content.color}',
      hoverColor: '{theme.content.hoverColor}',
      borderRadius: '{semantic.content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    dropdown: {
      width: '2.5rem',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.borderColor}',
      activeBorderColor: '{theme.formField.borderColor}',
      borderRadius: '{semantic.formField.borderRadius}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
      sm: {
        width: '0rem',
      },
      lg: {
        width: '0rem',
      },
    },
    inputIcon: {
      color: '{theme.formField.iconColor}',
    },
    group: {
      borderColor: '{theme.content.borderColor}',
      gap: '{semantic.overlay.popover.padding}',
    },
    selectYear: {
      hoverBackground: '{theme.content.hoverBackground}',
      color: '{theme.content.color}',
      hoverColor: '{theme.content.hoverColor}',
      borderRadius: '{semantic.content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    dayView: {
      margin: '0rem 0rem 0rem 0rem',
    },
    weekDay: {
      padding: '0.25rem',
      fontWeight: '700',
      color: '{theme.content.color}',
    },
    date: {
      hoverBackground: '{theme.content.hoverBackground}',
      selectedBackground: '{semantic.primary.500}',
      rangeSelectedBackground: '{theme.highlight.background}',
      color: '{theme.content.color}',
      hoverColor: '{theme.content.color}',
      selectedColor: '{theme.text.extend.colorPrimaryStatic}',
      rangeSelectedColor: '{theme.text.extend.colorSecondaryStatic}',
      width: '2rem',
      height: '2rem',
      borderRadius: '0.375rem',
      padding: '0.25rem',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
    monthView: {
      margin: '0rem 0rem 0rem 0rem',
    },
    month: {
      padding: '0rem',
      borderRadius: '0rem',
    },
    yearView: {
      margin: '0rem 0rem 0rem 0rem',
    },
    year: {
      padding: '0rem',
      borderRadius: '0rem',
    },
    buttonbar: {
      padding: '0rem 0rem 0rem 0rem',
      borderColor: '{theme.content.borderColor}',
    },
    timePicker: {
      padding: '1.5rem 0.75rem 0.75rem 0.75rem',
      borderColor: '{theme.content.borderColor}',
      gap: '0.5rem',
      buttonGap: '0.25rem',
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
  },
  dialog: {
    root: {
      background: '{theme.overlay.modal.background}',
      borderColor: '{theme.overlay.modal.borderColor}',
      color: '{theme.overlay.modal.color}',
      borderRadius: '{semantic.overlay.modal.borderRadius}',
      shadow: '{theme.overlay.popover.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding} {overlay.modal.padding} 1rem {overlay.modal.padding}',
      gap: '0rem',
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
      borderColor: '{theme.content.borderColor}',
    },
    content: {
      background: '{theme.content.background}',
      color: '{theme.text.mutedColor}',
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
      borderRadius: '{semantic.overlay.popover.borderRadius}',
      extHeader: {
        gap: '0.5rem',
        borderColor: '{drawer.root.borderColor}',
      },
      width: '{sizing.sizingDrawer.width}',
    },
    root: {
      background: '{theme.overlay.modal.background}',
      borderColor: '{theme.overlay.modal.borderColor}',
      color: '{theme.overlay.modal.color}',
      shadow: '{semantic.overlay.modal.shadow}',
    },
    header: {
      padding:
        '{overlay.modal.padding} {overlay.modal.padding} 14 {overlay.modal.padding} ',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    content: {
      padding: '{semantic.overlay.modal.padding}',
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
          background: '{theme.surface.0}',
          color: '{theme.text.color}',
        },
      },
    },
    extend: {
      extDragNdrop: {
        background: '{theme.surface.0}',
        padding: '1rem',
        borderRadius: '{semantic.formField.borderRadius}',
        gap: '0.5rem',
        info: {
          gap: '0.25rem',
        },
      },
      extContent: {
        borderRadius: '{primitive.borderRadius.md}',
        highlightBorderDefault: '{theme.formField.borderColor}',
      },
    },
    root: {
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      color: '{theme.content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    header: {
      borderColor: '{theme.content.borderColor}',
      borderWidth: '0rem',
      padding: '0rem',
      borderRadius: '0rem',
      gap: '0.5rem',
    },
    content: {
      highlightBorderColor: '{theme.surface.900}',
      padding: '0rem',
      gap: '0.5rem',
    },
    file: {
      padding: '0.5rem',
      gap: '0.5rem',
      borderColor: '{theme.formField.borderColor}',
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
      iconSize: '{semantic.iconSizeLarge}',
    },
    root: {
      color: '{theme.formField.floatLabelColor}',
      focusColor: '{theme.formField.floatLabelFocusColor}',
      activeColor: '{theme.formField.floatLabelActiveColor}',
      invalidColor: '{theme.formField.floatLabelInvalidColor}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      positionX: '{semantic.formField.paddingX}',
      positionY: '{semantic.formField.paddingY}',
      fontWeight: '500',
      active: {
        fontSize: '0.8571rem',
        fontWeight: '500',
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
        paddingBottom: '{semantic.formField.paddingY}',
      },
      active: {
        top: '{semantic.formField.paddingY}',
      },
    },
    on: {
      borderRadius: '0rem',
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
          background: '{theme.surface.100}',
        },
        thumbnailNavButton: {
          hoverBackground: '{primitive.colors.extend.white.20}',
          color: '{theme.text.color}',
          hoverColor: '{theme.text.hoverColor}',
        },
        indicatorButton: {
          background: '{theme.surface.300}',
          hoverBackground: '{theme.surface.400}',
        },
      },
    },
    root: {
      borderWidth: '1px',
      borderColor: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    navButton: {
      background: '{theme.surface.extend.transparent}',
      hoverBackground: '{primitive.colors.extend.white.20}',
      color: '{theme.text.extend.colorInverted}',
      hoverColor: '{theme.text.extend.colorInverted}',
      size: '4rem',
      gutter: '0.5rem',
      prev: {
        borderRadius: '{semantic.navigation.item.borderRadius}',
      },
      next: {
        borderRadius: '{semantic.navigation.item.borderRadius}',
      },
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
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
      borderRadius: '{semantic.content.borderRadius}',
      gutter: '0.5rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    thumbnailNavButtonIcon: {
      size: '1rem',
    },
    caption: {
      background: '{primitive.colors.extend.white.50}',
      color: '{theme.text.color}',
      padding: '0.5rem',
    },
    indicatorList: {
      gap: '0.5rem',
      padding: '1rem',
    },
    indicatorButton: {
      width: '0.5rem',
      height: '0.5rem',
      activeBackground: '{theme.surface.900}',
      borderRadius: '{semantic.content.borderRadius}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    insetIndicatorList: {
      background: '{primitive.colors.extend.black.50}',
    },
    insetIndicatorButton: {
      background: '{primitive.colors.extend.white.10}',
      hoverBackground: '{primitive.colors.extend.white.20}',
      activeBackground: '{primitive.colors.extend.white.50}',
    },
    closeButton: {
      size: '4rem',
      gutter: '0.5rem',
      background: '{primitive.colors.extend.white.10}',
      hoverBackground: '{primitive.colors.extend.white.20}',
      color: '{theme.text.extend.colorInverted}',
      hoverColor: '{theme.text.extend.colorInverted}',
      borderRadius: '{primitive.borderRadius.lg}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
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
          background: '{theme.extend.palette.success.50}',
          borderColor: '{theme.extend.palette.success.500}',
          color: '{theme.text.color}',
          shadow: 'none',
          outlined: {
            color: '{theme.text.color}',
            borderColor: '{theme.extend.palette.success.500}',
          },
          closeButton: {
            hoverBackground: '{theme.extend.palette.success.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '{theme.text.color}',
          },
        },
        outlined: {
          root: {
            borderWidth: '0rem',
          },
          closeButton: {
            hoverBackground: '#ffffff',
            focusRing: {
              color: '{semantic.focusRing.color}',
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
            padding: '0rem',
          },
        },
        warn: {
          background: '{theme.extend.palette.warn.50}',
          borderColor: '{theme.extend.palette.warn.500}',
          color: '{theme.text.color}',
          shadow: 'none',
          outlined: {
            color: '{theme.text.color}',
            borderColor: '{theme.extend.palette.warn.500}',
          },
          closeButton: {
            hoverBackground: '{theme.extend.palette.warn.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '{theme.text.color}',
          },
        },
        error: {
          background: '{theme.extend.palette.error.50}',
          borderColor: '{theme.extend.palette.error.500}',
          color: '{theme.text.color}',
          shadow: 'none',
          outlined: {
            color: '{theme.text.color}',
            borderColor: '{theme.extend.palette.error.500}',
          },
          closeButton: {
            hoverBackground: '{theme.extend.palette.error.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '{theme.text.color}',
          },
        },
        secondary: {
          borderColor: '#ffffff',
          shadow: 'none',
          closeButton: {
            hoverBackground: '#ffffff',
            focusRing: {
              color: '{semantic.focusRing.color}',
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
              color: '{semantic.focusRing.color}',
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
          background: '{theme.extend.palette.info.50}',
          borderColor: '{theme.extend.palette.info.500}',
          color: '{theme.text.color}',
          shadow: 'none',
          outlined: {
            color: '{theme.text.color}',
            borderColor: '{theme.extend.palette.info.500}',
          },
          closeButton: {
            hoverBackground: '{theme.extend.palette.info.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
          simple: {
            color: '{theme.text.color}',
          },
        },
      },
    },
    extend: {
      width: '{sizing.sizingMessage.width}',
      extText: {
        gap: '0.25rem',
      },
      extInfo: {
        color: '{theme.extend.palette.info.500}',
        closeButton: {
          color: '{theme.extend.palette.info.500}',
          borderColor: '{theme.extend.palette.info.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extAccentLine: {
        width: '0.25rem',
      },
      extCloseButton: {
        width: '0.0714rem',
      },
      extSuccess: {
        color: '{theme.extend.palette.success.500}',
        closeButton: {
          color: '{theme.extend.palette.success.500}',
          borderColor: '{theme.extend.palette.success.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extWarn: {
        color: '{theme.extend.palette.warn.500}',
        closeButton: {
          color: '{theme.extend.palette.warn.500}',
          borderColor: '{theme.extend.palette.warn.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extError: {
        color: '{theme.extend.palette.error.500}',
        closeButton: {
          color: '{theme.extend.palette.error.500}',
          borderColor: '{theme.extend.palette.error.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
    },
    root: {
      borderRadius: '{semantic.content.borderRadius}',
      borderWidth: '0.0714rem',
      transitionDuration: '{semantic.transitionDuration}',
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
      fontWeight: '500',
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
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        offset: '{semantic.focusRing.offset}',
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
          background: '{theme.surface.extend.transparent}',
          borderColor: '{theme.formField.borderColor}',
          color: '{theme.text.mutedColor}',
        },
      },
    },
    addon: {
      borderRadius: '{semantic.formField.borderRadius}',
      padding: '0.75rem',
      minWidth: '2.5rem',
    },
  },
  inputnumber: {
    colorScheme: {
      light: {
        button: {
          background: '{theme.surface.extend.transparent}',
          hoverBackground: '{theme.content.hoverBackground}',
          activeBackground: '{theme.surface.extend.transparent}',
          borderColor: '{theme.formField.borderColor}',
          hoverBorderColor: '{theme.formField.borderColor}',
          activeBorderColor: '{theme.formField.borderColor}',
          color: '{theme.text.color}',
          hoverColor: '{theme.text.hoverColor}',
          activeColor: '{theme.text.color}',
        },
      },
    },
    extend: {
      extButton: {
        height: '2.5rem',
      },
    },
    transitionDuration: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    button: {
      width: '2.5rem',
      borderRadius: '{semantic.formField.borderRadius}',
      verticalPadding: '{semantic.formField.paddingY}',
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
      width: '0rem',
    },
    lg: {
      width: '0rem',
    },
  },
  inputtext: {
    extend: {
      readonlyBackground: '{theme.formField.readonlyBackground}',
      iconSize: '{semantic.iconSizeMedium}',
      extXlg: {
        fontSize: '{sizing.sizingInputtext.root.fontSize}',
        paddingX: '{sizing.sizingInputtext.root.paddingX}',
        paddingY: '{sizing.sizingInputtext.root.paddingY}',
      },
    },
    root: {
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      filledHoverBackground: '{theme.formField.filledHoverBackground}',
      filledFocusBackground: '{theme.formField.filledFocusBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.text.color}',
      disabledColor: '{theme.formField.disabledColor}',
      placeholderColor: '{theme.formField.placeholderColor}',
      invalidPlaceholderColor: '{theme.formField.invalidPlaceholderColor}',
      shadow: '{theme.formField.shadow}',
      paddingX: '{sizing.sizingInputtext.root.paddingX}',
      paddingY: '{sizing.sizingInputtext.root.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{sizing.sizingInputtext.root.fontSize}',
        paddingX: '{sizing.sizingInputtext.root.paddingX}',
        paddingY: '{sizing.sizingInputtext.root.paddingY}',
      },
      lg: {
        fontSize: '{sizing.sizingInputtext.root.fontSize}',
        paddingX: '{sizing.sizingInputtext.root.paddingX}',
        paddingY: '{sizing.sizingInputtext.root.paddingY}',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
  },
  listbox: {
    colorScheme: {
      light: {
        option: {
          stripedBackground: '{theme.surface.50}',
        },
      },
    },
    extend: {
      extOption: {
        label: {
          gap: '0.25rem',
        },
        caption: {
          color: '{theme.text.mutedColor}',
          stripedColor: '{theme.text.mutedColor}',
        },
      },
    },
    root: {
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      borderColor: '{theme.formField.borderColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.formField.color}',
      disabledColor: '{theme.formField.disabledColor}',
      shadow: '{theme.formField.shadow}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
      header: {
        padding: '{semantic.list.header.padding}',
      },
    },
    option: {
      focusBackground: '{theme.list.option.focusBackground}',
      selectedBackground: '{theme.list.option.selectedBackground}',
      selectedFocusBackground: '{theme.list.option.selectedFocusBackground}',
      color: '{theme.list.option.color}',
      focusColor: '{theme.list.option.focusColor}',
      selectedColor: '{theme.list.option.selectedColor}',
      selectedFocusColor: '{theme.list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
    },
    optionGroup: {
      background: '{theme.list.optionGroup.background}',
      color: '{theme.list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.option.padding}',
    },
    checkmark: {
      color: '{theme.list.option.color}',
      gutterStart: '-0.5rem',
      gutterEnd: '0.5rem',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  megamenu: {
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.extend.transparent}',
        },
      },
    },
    extend: {
      extItem: {
        caption: {
          color: '{theme.text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      borderColor: '{theme.surface.extend.transparent}',
      borderRadius: '{semantic.content.borderRadius}',
      color: '{theme.content.color}',
      gap: '0.25rem',
      transitionDuration: '{semantic.transitionDuration}',
      verticalOrientation: {
        padding: '{semantic.navigation.list.padding}',
        gap: '{semantic.navigation.list.gap}',
      },
      horizontalOrientation: {
        padding: '{semantic.navigation.list.padding}',
        gap: '{semantic.navigation.list.gap}',
      },
    },
    baseItem: {
      borderRadius: '{semantic.content.borderRadius}',
      padding: '{semantic.navigation.item.padding}',
    },
    item: {
      focusBackground: '{theme.navigation.item.focusBackground}',
      activeBackground: '{theme.navigation.item.activeBackground}',
      color: '{theme.navigation.item.color}',
      focusColor: '{theme.navigation.item.focusColor}',
      activeColor: '{theme.navigation.item.activeColor}',
      padding: '{semantic.navigation.item.padding}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      gap: '{semantic.navigation.item.gap}',
      icon: {
        color: '{theme.navigation.item.icon.color}',
        focusColor: '{theme.navigation.item.icon.focusColor}',
        activeColor: '{theme.navigation.item.icon.activeColor}',
      },
    },
    overlay: {
      padding: '0.25rem',
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      color: '{theme.content.color}',
      shadow: '{semantic.overlay.navigation.shadow}',
      gap: '0rem',
    },
    submenu: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
    },
    submenuLabel: {
      padding: '{semantic.navigation.submenuLabel.padding}',
      fontWeight: '{semantic.navigation.submenuLabel.fontWeight}',
      background: '{theme.navigation.submenuLabel.background}',
      color: '{theme.navigation.submenuLabel.color}',
    },
    submenuIcon: {
      size: '{semantic.navigation.submenuIcon.size}',
      color: '{theme.navigation.submenuIcon.color}',
      focusColor: '{theme.navigation.submenuIcon.focusColor}',
      activeColor: '{theme.navigation.submenuIcon.activeColor}',
    },
    separator: {
      borderColor: '{theme.content.borderColor}',
    },
    mobileButton: {
      borderRadius: '{semantic.navigation.item.borderRadius}',
      size: '2rem',
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      hoverBackground: '{theme.content.hoverBackground}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
  },
  menu: {
    extend: {
      paddingX: '0.25rem',
      paddingY: '0.25rem',
      extItem: {
        caption: {
          color: '{theme.text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      color: '{theme.content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: '{semantic.overlay.navigation.shadow}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    list: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
    },
    item: {
      focusBackground: '{theme.navigation.item.focusBackground}',
      color: '{theme.navigation.item.color}',
      focusColor: '{theme.navigation.item.focusColor}',
      padding: '{semantic.navigation.item.padding}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      gap: '{semantic.navigation.item.gap}',
      icon: {
        color: '{theme.navigation.item.icon.color}',
        focusColor: '{theme.navigation.item.icon.focusColor}',
      },
    },
    submenuLabel: {
      padding: '{semantic.navigation.submenuLabel.padding}',
      fontWeight: '{semantic.navigation.submenuLabel.fontWeight}',
      background: '{theme.navigation.submenuLabel.background}',
      color: '{theme.navigation.submenuLabel.color}',
    },
    separator: {
      borderColor: '{theme.content.borderColor}',
    },
  },
  menubar: {
    extend: {
      extItem: {
        caption: {
          color: '{theme.text.mutedColor}',
          gap: '0.25rem',
        },
      },
      extSubmenuLabel: {
        padding: '{semantic.navigation.submenuLabel.padding}',
        fontWeight: '{semantic.navigation.submenuLabel.fontWeight}',
        background: '{theme.navigation.submenuLabel.background}',
        color: '{theme.navigation.submenuLabel.color}',
      },
    },
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.extend.transparent}',
        },
      },
    },
    root: {
      borderColor: '{theme.surface.extend.transparent}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      color: '{theme.content.color}',
      gap: '0.25rem',
      padding: '{semantic.navigation.list.padding}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    baseItem: {
      borderRadius: '{semantic.navigation.item.borderRadius}',
      padding: '0.5rem 0.75rem',
    },
    item: {
      focusBackground: '{theme.navigation.item.focusBackground}',
      activeBackground: '{theme.navigation.item.activeBackground}',
      color: '{theme.navigation.item.color}',
      focusColor: '{theme.navigation.item.focusColor}',
      activeColor: '{theme.navigation.item.activeColor}',
      padding: '{semantic.navigation.item.padding}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      gap: '{semantic.navigation.item.gap}',
      icon: {
        color: '{theme.navigation.item.icon.color}',
        focusColor: '{theme.navigation.item.icon.focusColor}',
        activeColor: '{theme.navigation.item.icon.activeColor}',
      },
    },
    submenu: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: '{semantic.overlay.navigation.shadow}',
      mobileIndent: '0.75rem',
      icon: {
        size: '{semantic.navigation.submenuIcon.size}',
        color: '{theme.navigation.submenuIcon.color}',
        focusColor: '{theme.navigation.submenuIcon.focusColor}',
        activeColor: '{theme.navigation.submenuIcon.activeColor}',
      },
    },
    separator: {
      borderColor: '{theme.content.borderColor}',
    },
    mobileButton: {
      borderRadius: '{semantic.navigation.item.borderRadius}',
      size: '2rem',
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      hoverBackground: '{theme.content.hoverBackground}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
  },
  metergroup: {
    extend: {
      extLabel: {
        color: '{theme.text.mutedColor}',
      },
    },
    root: {
      borderRadius: '{semantic.content.borderRadius}',
      gap: '0.75rem',
    },
    meters: {
      size: '0.5rem',
      background: '{theme.content.borderColor}',
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
      paddingX: '0.3571rem',
      paddingY: '0.3571rem',
    },
    root: {
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      filledHoverBackground: '{theme.formField.filledHoverBackground}',
      filledFocusBackground: '{theme.formField.filledFocusBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.formField.color}',
      disabledColor: '{theme.formField.disabledColor}',
      placeholderColor: '{theme.formField.placeholderColor}',
      invalidPlaceholderColor: '{theme.formField.invalidPlaceholderColor}',
      shadow: '{theme.formField.shadow}',
      paddingX: '{semantic.formField.paddingX}',
      paddingY: '{semantic.formField.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{semantic.formField.sm.fontSize}',
        paddingX: '{semantic.formField.sm.paddingY}',
        paddingY: '{semantic.formField.sm.paddingY}',
      },
      lg: {
        fontSize: '{semantic.formField.lg.fontSize}',
        paddingX: '{semantic.formField.lg.paddingX}',
        paddingY: '{semantic.formField.lg.paddingY}',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
    dropdown: {
      width: '0.75rem',
      color: '{theme.formField.iconColor}',
    },
    overlay: {
      background: '{datatable.filter.overlaySelect.background}',
      borderColor: '{theme.overlay.select.borderColor}',
      borderRadius: '{datatable.filter.overlaySelect.borderRadius}',
      color: '{datatable.filter.overlaySelect.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    readonlyBackground: '{theme.formField.readonlyBackground}',
    list: {
      padding: '{semantic.list.padding}',
      header: {
        padding: '{semantic.list.header.padding}',
      },
      gap: '{semantic.list.gap}',
    },
    option: {
      focusBackground: '{theme.list.option.focusBackground}',
      selectedBackground: '{theme.list.option.selectedBackground}',
      selectedFocusBackground: '{theme.list.option.selectedFocusBackground}',
      color: '{theme.list.option.color}',
      focusColor: '{theme.list.option.focusColor}',
      selectedColor: '{theme.list.option.selectedColor}',
      selectedFocusColor: '{theme.list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
      gap: '0.5rem',
    },
    optionGroup: {
      background: '{theme.list.optionGroup.background}',
      color: '{theme.list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.optionGroup.padding}',
    },
    clearIcon: {
      color: '{theme.formField.iconColor}',
    },
    chip: {
      borderRadius: '{primitive.borderRadius.sm}',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  paginator: {
    root: {
      padding: '0 0.5rem',
      gap: '0.5rem',
      borderRadius: '{semantic.content.borderRadius}',
      background: '{theme.surface.extend.transparent}',
      color: '{theme.content.color}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    navButton: {
      background: '{theme.surface.extend.transparent}',
      hoverBackground: '{theme.content.hoverBackground}',
      selectedBackground: '{theme.highlight.background}',
      color: '{theme.text.color}',
      hoverColor: '{theme.text.hoverColor}',
      selectedColor: '{theme.text.extend.colorInverted}',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '{semantic.content.borderRadius}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        focus: '{semantic.focusRing.shadow}',
      },
    },
    currentPageReport: {
      color: '{theme.text.mutedColor}',
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
        activeBackground: '{theme.navigation.item.activeBackground}',
        activeColor: '{theme.navigation.item.activeColor}',
        caption: {
          color: '{theme.text.mutedColor}',
          gap: '0.25rem',
        },
      },
    },
    root: {
      gap: '0.25rem',
      transitionDuration: '{semantic.transitionDuration}',
    },
    panel: {
      background: '{theme.surface.extend.transparent}',
      borderColor: '{theme.surface.extend.transparent}',
      borderWidth: '0.0714rem',
      color: '{theme.content.color}',
      padding: '0.25rem',
      borderRadius: '{semantic.content.borderRadius}',
      first: {
        borderWidth: '1px 1px 0 1px',
        topBorderRadius: '{semantic.content.borderRadius}',
      },
      last: {
        borderWidth: '0 1px 1px 1px',
        topBorderRadius: '{semantic.content.borderRadius}',
      },
    },
    item: {
      focusBackground: '{theme.navigation.item.focusBackground}',
      color: '{theme.navigation.item.color}',
      focusColor: '{theme.navigation.item.focusColor}',
      gap: '0.5rem',
      padding: '{semantic.navigation.item.padding}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      icon: {
        color: '{theme.navigation.item.icon.color}',
        focusColor: '{theme.navigation.item.icon.focusColor}',
      },
    },
    submenu: {
      indent: '0.75rem',
    },
    separator: {
      borderColor: '{theme.content.borderColor}',
    },
    submenuIcon: {
      color: '{theme.navigation.submenuIcon.color}',
      focusColor: '{theme.navigation.submenuIcon.focusColor}',
    },
  },
  password: {
    colorScheme: {
      light: {
        strength: {
          weakBackground: '{theme.extend.palette.error.500}',
          mediumBackground: '{theme.extend.palette.warn.500}',
          strongBackground: '{theme.extend.palette.success.600}',
        },
      },
    },
    meter: {
      background: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      height: '0.5rem',
    },
    icon: {
      color: '{theme.text.color}',
    },
    overlay: {
      background: '{theme.overlay.popover.background}',
      borderColor: '{theme.overlay.popover.borderColor}',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
      color: '{theme.overlay.popover.color}',
      padding: '{semantic.overlay.popover.padding}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    content: {
      gap: '0.5rem',
    },
  },
  popover: {
    root: {
      background: '{theme.overlay.popover.background}',
      borderColor: '{datatable.filter.overlayPopover.borderColor}',
      color: '{theme.overlay.popover.color}',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
      shadow: '{semantic.overlay.popover.shadow}',
      gutter: '0.25rem',
      arrowOffset: '1.25rem',
    },
    content: {
      padding: '{semantic.overlay.popover.padding}',
    },
  },
  progressbar: {
    label: {
      color: '{theme.text.extend.colorPrimaryStatic}',
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    root: {
      background: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      height: '1rem',
    },
    value: {
      background: '{theme.primary.color}',
    },
  },
  progressspinner: {
    colorScheme: {
      light: {
        root: {
          colorOne: '{theme.extend.palette.success.500}',
          colorTwo: '{theme.extend.palette.info.500}',
          colorThree: '{theme.extend.palette.error.500}',
          colorFour: '{theme.extend.palette.warn.500}',
        },
      },
    },
  },
  radiobutton: {
    root: {
      width: '1.5rem',
      height: '1.5rem',
      background: '{theme.formField.background}',
      checkedBackground: '{theme.surface.900}',
      checkedHoverBackground: '{theme.surface.800}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderPrimaryColor}',
      focusBorderColor: '{theme.formField.borderColor}',
      checkedBorderColor: '{theme.surface.900}',
      checkedHoverBorderColor: '{theme.formField.hoverBorderPrimaryColor}',
      checkedFocusBorderColor: '{theme.formField.focusBorderPrimaryColor}',
      checkedDisabledBorderColor: '{theme.formField.borderColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      shadow: '{theme.formField.shadow}',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    focusRing: {
      width: '0.25rem',
      style: '{semantic.focusRing.style}',
      color: '{semantic.focusRing.color}',
      offset: '{semantic.focusRing.offset}',
      shadow: '{semantic.formField.focusRing.shadow}',
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
      size: '0.8571rem',
      checkedColor: '{theme.text.extend.colorInverted}',
      checkedHoverColor: '{theme.text.extend.colorInverted}',
      disabledColor: '{theme.text.mutedColor}',
      sm: {
        size: '0rem',
      },
      lg: {
        size: '0rem',
      },
    },
  },
  rating: {
    root: {
      gap: '0.5rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    focusRing: {
      width: '{semantic.formField.focusRing.width}',
      style: '{semantic.formField.focusRing.style}',
      color: '{semantic.formField.focusRing.color}',
      offset: '{semantic.formField.focusRing.offset}',
      shadow: '{theme.formField.shadow}',
    },
    icon: {
      size: '1.5rem',
      color: '{theme.surface.500}',
      hoverColor: '{theme.extend.palette.warn.500}',
      activeColor: '{theme.extend.palette.warn.500}',
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
          background: '{theme.surface.300}',
        },
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
    bar: {
      size: '0.5rem',
      borderRadius: '{primitive.borderRadius.sm}',
      focusRing: {
        width: '0rem',
        style: '{semantic.focusRing.style}',
        color: '#ffffff',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
  },
  select: {
    extend: {
      extOption: {
        background: '{theme.list.option.background}',
        gap: '0.5rem',
      },
      extOptionGroup: {
        gap: '0.5rem',
      },
      readonlyBackground: '{theme.formField.readonlyBackground}',
    },
    root: {
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      filledHoverBackground: '{theme.formField.filledHoverBackground}',
      filledFocusBackground: '{theme.formField.filledFocusBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.text.color}',
      disabledColor: '{theme.formField.disabledColor}',
      placeholderColor: '{theme.formField.placeholderColor}',
      invalidPlaceholderColor: '{theme.formField.invalidPlaceholderColor}',
      shadow: '{theme.formField.shadow}',
      paddingX: '{sizing.sizingSelect.root.paddingX}',
      paddingY: '{sizing.sizingSelect.root.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{sizing.sizingSelect.root.fontSize}',
        paddingX: '{sizing.sizingSelect.root.paddingX}',
        paddingY: '{sizing.sizingSelect.root.paddingY}',
      },
      lg: {
        fontSize: '{sizing.sizingSelect.root.fontSize}',
        paddingX: '{sizing.sizingSelect.root.paddingX}',
        paddingY: '{sizing.sizingSelect.root.paddingY}',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
    dropdown: {
      width: '2.5rem',
      color: '{theme.formField.iconColor}',
    },
    overlay: {
      background: '{theme.overlay.select.background}',
      borderColor: '{theme.overlay.select.borderColor}',
      borderRadius: '{semantic.overlay.select.borderRadius}',
      color: '{theme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
      header: {
        padding: '{semantic.list.header.padding}',
      },
    },
    option: {
      focusBackground: '{theme.list.option.focusBackground}',
      selectedBackground: '{theme.list.option.selectedBackground}',
      selectedFocusBackground: '{theme.list.option.selectedFocusBackground}',
      color: '{theme.list.option.color}',
      focusColor: '{theme.list.option.focusColor}',
      selectedColor: '{theme.list.option.selectedColor}',
      selectedFocusColor: '{theme.list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
    },
    optionGroup: {
      background: '{theme.list.optionGroup.background}',
      color: '{theme.list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.option.padding}',
    },
    clearIcon: {
      color: '{theme.formField.iconColor}',
    },
    checkmark: {
      color: '{theme.list.option.color}',
      gutterStart: '-0.5rem',
      gutterEnd: '0.5rem',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  selectbutton: {
    colorScheme: {
      light: {
        root: {
          invalidBorderColor: '{theme.formField.invalidBorderColor}',
        },
      },
    },
    extend: {
      background: '{theme.surface.200}',
    },
    root: {
      borderRadius: '{primitive.borderRadius.rounded}',
    },
  },
  skeleton: {
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.200}',
          animationBackground: '{theme.surface.100}',
        },
      },
    },
    root: {
      borderRadius: '{semantic.content.borderRadius}',
    },
  },
  slider: {
    colorScheme: {
      handle: {
        content: {
          background: '{theme.surface.0}',
        },
      },
    },
    root: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    track: {
      background: '{theme.content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      size: '0.25rem',
    },
    range: {
      background: '{theme.surface.900}',
    },
    handle: {
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '{primitive.borderRadius.xl}',
      background: '{theme.surface.900}',
      hoverBackground: '{theme.surface.900}',
      content: {
        borderRadius: '{primitive.borderRadius.xl}',
        hoverBackground: '{theme.surface.900}',
        width: '0.75rem',
        height: '0.75rem',
        shadow: 'none',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
  },
  splitter: {
    colorScheme: {
      light: {
        handle: {
          background: '{theme.surface.900}',
        },
      },
    },
    gutter: {
      background: '{theme.surface.100}',
    },
    root: {
      background: '{theme.content.background}',
      borderColor: '{theme.content.borderColor}',
      color: '{theme.content.color}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    handle: {
      size: '0.25rem',
      borderRadius: '{semantic.content.borderRadius}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
  },
  stepper: {
    extend: {
      extCaption: {
        gap: '0.25rem',
      },
      extStepNumber: {
        invalidBackground: '{theme.extend.palette.error.400}',
        invalidColor: '{theme.extend.palette.error.900}',
        invalidBorderColor: '{theme.extend.palette.error.400}',
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
    separator: {
      background: '{theme.content.borderColor}',
      activeBackground: '{theme.formField.focusBorderPrimaryColor}',
      margin: '0 0 0 1.625rem',
      size: '0.0714rem',
    },
    step: {
      padding: '0.5rem',
      gap: '0.5rem',
    },
    stepHeader: {
      padding: '0rem',
      borderRadius: '0rem',
      gap: '0.5rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    stepTitle: {
      color: '{theme.text.color}',
      activeColor: '{theme.text.color}',
      fontWeight: '500',
    },
    stepNumber: {
      background: '{theme.content.background}',
      activeBackground: '{theme.primary.color}',
      borderColor: '{theme.content.borderColor}',
      activeBorderColor: '{theme.primary.color}',
      color: '{theme.text.color}',
      activeColor: '{theme.text.extend.colorPrimaryStatic}',
      size: '1.5rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: 'none',
    },
    steppanels: {
      padding: '1rem',
    },
    steppanel: {
      background: '{theme.content.background}',
      color: '{theme.content.color}',
      padding: '0rem',
      indent: '0rem',
    },
  },
  steps: {
    itemLink: {
      gap: '0.5rem',
    },
    itemLabel: {
      fontWeight: '500',
    },
    itemNumber: {
      background: '{semantic_color-cheme.content.background}',
      size: '2.25rem',
      fontSize: '1.125rem',
      fontWeight: '500',
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
          background: '{theme.surface.extend.transparent}',
          hoverBackground: '{theme.surface.extend.transparent}',
          activeBackground: '{theme.surface.extend.transparent}',
        },
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
    tablist: {
      borderWidth: '0 0 2px 0',
      background: '{theme.surface.extend.transparent}',
      borderColor: '{theme.content.borderColor}',
    },
    tab: {
      borderWidth: '0rem',
      borderColor: '{theme.content.borderColor}',
      hoverBorderColor: '{theme.content.borderColor}',
      activeBorderColor: '{theme.formField.focusBorderPrimaryColor}',
      color: '{theme.text.mutedColor}',
      hoverColor: '{theme.text.color}',
      activeColor: '{theme.text.color}',
      padding: '1rem',
      fontWeight: '700',
      margin: '0 0 -1px 0',
      gap: '0.5rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    tabpanel: {
      background: '{theme.surface.extend.transparent}',
      color: '{theme.text.color}',
      padding: '1rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    navButton: {
      background: '{theme.content.background}',
      color: '{theme.content.color}',
      hoverColor: '{theme.content.hoverColor}',
      width: '1.5rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    activeBar: {
      height: '0.1429rem',
      bottom: '-1',
      background: '{theme.content.color}',
    },
  },
  toast: {
    colorScheme: {
      light: {
        info: {
          background: '{theme.extend.palette.info.50}',
          borderColor: '{theme.extend.palette.info.500}',
          color: '{theme.text.color}',
          detailColor: '{theme.text.color}',
          shadow: '{semantic.overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{theme.extend.palette.info.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
        },
        success: {
          background: '{theme.extend.palette.success.50}',
          borderColor: '{theme.extend.palette.success.500}',
          color: '{theme.text.color}',
          detailColor: '{theme.text.color}',
          shadow: '{semantic.overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{theme.extend.palette.success.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
        },
        warn: {
          background: '{theme.extend.palette.warn.50}',
          borderColor: '{theme.extend.palette.warn.500}',
          color: '{theme.text.color}',
          detailColor: '{theme.text.color}',
          shadow: '{semantic.overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{theme.extend.palette.warn.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
        },
        error: {
          background: '{theme.extend.palette.error.50}',
          borderColor: '{theme.extend.palette.error.500}',
          color: '{theme.text.color}',
          detailColor: '{theme.text.color}',
          shadow: '{semantic.overlay.popover.shadow}',
          closeButton: {
            hoverBackground: '{theme.extend.palette.error.200}',
            focusRing: {
              color: '{semantic.focusRing.color}',
              shadow: 'none',
            },
          },
        },
        secondary: {
          shadow: '{semantic.overlay.popover.shadow}',
        },
        contrast: {
          shadow: '{semantic.overlay.popover.shadow}',
        },
      },
    },
    extend: {
      extInfo: {
        color: '{theme.extend.palette.info.500}',
        closeButton: {
          color: '{theme.extend.palette.info.500}',
          borderColor: '{theme.extend.palette.info.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extAccentLine: {
        width: '0.25rem',
      },
      extCloseButton: {
        width: '0.0714rem',
      },
      extSuccess: {
        color: '{theme.extend.palette.success.500}',
        closeButton: {
          color: '{theme.extend.palette.success.500}',
          borderColor: '{theme.extend.palette.success.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extWarn: {
        color: '{theme.extend.palette.warn.500}',
        closeButton: {
          color: '{theme.extend.palette.warn.500}',
          borderColor: '{theme.extend.palette.warn.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
      extError: {
        color: '{theme.extend.palette.error.500}',
        closeButton: {
          color: '{theme.extend.palette.error.500}',
          borderColor: '{theme.extend.palette.error.500}',
        },
        caption: {
          color: '{theme.text.color}',
        },
      },
    },
    root: {
      width: '{sizing.sizingToast.width}',
      borderWidth: '0.0714rem',
      borderRadius: '{semantic.content.borderRadius}',
      transitionDuration: '{semantic.transitionDuration}',
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
      fontWeight: '500',
      fontSize: '1rem',
    },
    detail: {
      fontWeight: '500',
      fontSize: '0.875rem',
    },
    closeButton: {
      width: '2rem',
      height: '2rem',
      borderRadius: '{primitive.borderRadius.md}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        offset: '{semantic.focusRing.offset}',
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
          background: '{semantic.primary.500}',
          color: '{theme.text.color}',
        },
        secondary: {
          background: '{theme.surface.200}',
          color: '{theme.text.color}',
        },
        success: {
          background: '{theme.extend.palette.success.400}',
          color: '{theme.extend.palette.success.900}',
        },
        info: {
          background: '{theme.extend.palette.info.300}',
          color: '{theme.extend.palette.info.900}',
        },
        warn: {
          background: '{theme.extend.palette.warn.300}',
          color: '{theme.extend.palette.warn.900}',
        },
        danger: {
          background: '{theme.extend.palette.error.300}',
          color: '{theme.extend.palette.error.900}',
        },
      },
    },
    root: {
      fontSize: '0.875rem',
      fontWeight: '700',
      padding: '0.285rem 0.5rem',
      gap: '0.25rem',
      borderRadius: '{primitive.borderRadius.sm}',
      roundedBorderRadius: '{primitive.borderRadius.xl}',
    },
    icon: {
      size: '0.875rem',
    },
  },
  textarea: {
    extend: {
      readonlyBackground: '{theme.formField.readonlyBackground}',
    },
    root: {
      background: '{theme.formField.background}',
      disabledBackground: '{theme.formField.disabledBackground}',
      filledBackground: '{theme.formField.filledBackground}',
      filledHoverBackground: '{theme.formField.filledHoverBackground}',
      filledFocusBackground: '{theme.formField.filledFocusBackground}',
      borderColor: '{theme.formField.borderColor}',
      hoverBorderColor: '{theme.formField.hoverBorderSecondaryColor}',
      focusBorderColor: '{theme.formField.focusBorderSecondaryColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      color: '{theme.formField.color}',
      disabledColor: '{theme.formField.disabledColor}',
      placeholderColor: '{theme.formField.placeholderColor}',
      invalidPlaceholderColor: '{theme.formField.invalidPlaceholderColor}',
      shadow: '{theme.formField.shadow}',
      paddingX: '{semantic.formField.paddingX}',
      paddingY: '{semantic.formField.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
    },
    sm: {
      fontSize: '0rem',
      paddingX: '0rem',
      paddingY: '0rem',
    },
    lg: {
      fontSize: '0rem',
      paddingX: '0rem',
      paddingY: '0rem',
    },
  },
  tieredmenu: {
    extend: {
      extSubmenu: {
        borderColor: '{theme.content.borderColor}',
        background: '{theme.content.background}',
      },
      extItem: {
        caption: {
          gap: '0.25rem',
          color: '{theme.text.mutedColor}',
        },
      },
    },
    root: {
      background: '{theme.surface.extend.transparent}',
      borderColor: '{theme.surface.extend.transparent}',
      color: '{theme.content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: '{semantic.overlay.navigation.shadow}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    list: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
    },
    item: {
      focusBackground: '{theme.navigation.item.focusBackground}',
      activeBackground: '{theme.navigation.item.activeBackground}',
      color: '{theme.navigation.item.color}',
      focusColor: '{theme.navigation.item.focusColor}',
      activeColor: '{theme.navigation.item.activeColor}',
      padding: '{semantic.navigation.item.padding}',
      borderRadius: '{semantic.navigation.item.borderRadius}',
      gap: '{semantic.navigation.item.gap}',
      icon: {
        color: '{theme.navigation.item.icon.color}',
        focusColor: '{theme.navigation.item.icon.focusColor}',
        activeColor: '{theme.navigation.item.icon.activeColor}',
      },
    },
    submenu: {
      mobileIndent: '0.75rem',
    },
    separator: {
      borderColor: '{theme.content.borderColor}',
    },
  },
  timeline: {
    event: {
      minHeight: '42.5',
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
      borderRadius: '{semantic.content.borderRadius}',
      borderWidth: '0.25rem',
      background: '{theme.content.background}',
      borderColor: '{theme.primary.color}',
      content: {
        borderRadius: '{semantic.content.borderRadius}',
        size: '0.75rem',
        background: '{theme.surface.extend.transparent}',
        insetShadow: 'none',
      },
    },
    eventConnector: {
      color: '{theme.content.borderColor}',
      size: '0.0714rem',
    },
  },
  togglebutton: {
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.200}',
        },
      },
    },
    extend: {
      gap: '0.75rem',
      extXlg: {
        padding: '1.25rem 1.5rem',
        iconOnlyWidth: '4.0714rem',
      },
      iconOnlyWidth: '2.5rem',
      extSm: {
        iconOnlyWidth: '2.1429rem',
      },
      hoverBorderColor: '{theme.surface.300}',
      checkedHoverColor: '{theme.text.extend.colorInverted}',
      checkedHoverBackground: '{theme.surface.800}',
      checkedHoverBorderColor: '{theme.surface.800}',
      extLg: {
        iconOnlyWidth: '3.5714rem',
      },
    },
    root: {
      padding: '0.5rem 1rem',
      borderRadius: '{primitive.borderRadius.rounded}',
      gap: '0.5rem',
      fontWeight: '500',
      hoverBackground: '{theme.surface.300}',
      borderColor: '{theme.surface.200}',
      color: '{theme.text.color}',
      hoverColor: '{theme.text.color}',
      checkedBackground: '{theme.surface.900}',
      checkedColor: '{theme.text.extend.colorInverted}',
      checkedBorderColor: '{theme.surface.900}',
      disabledBackground: '{theme.formField.disabledBackground}',
      disabledBorderColor: '{theme.formField.disabledBackground}',
      disabledColor: '{theme.formField.disabledColor}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
      sm: {
        fontSize: '{semantic.formField.sm.fontSize}',
        padding: '0.75rem 0.25rem',
      },
      lg: {
        fontSize: '{semantic.formField.sm.fontSize}',
        padding: '1rem 1.5rem',
      },
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    icon: {
      color: '{theme.text.color}',
      hoverColor: '{theme.text.color}',
      checkedColor: '{theme.text.extend.colorInverted}',
      disabledColor: '{theme.formField.disabledColor}',
    },
    content: {
      checkedBackground: '{theme.surface.extend.transparent}',
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
          background: '{theme.surface.400}',
          hoverBackground: '{theme.surface.500}',
          disabledBackground: '{theme.formField.disabledBackground}',
          checkedBackground: '{theme.surface.900}',
          checkedHoverBackground: '{theme.surface.500}',
        },
        handle: {
          background: '{theme.formField.backgroundHandler}',
          hoverBackground: '{theme.formField.backgroundHandler}',
          disabledBackground: '{theme.formField.disabledColor}',
          checkedBackground: '{theme.surface.0}',
          checkedHoverBackground: '{theme.surface.0}',
          color: '{theme.text.color}',
          hoverColor: '{theme.text.color}',
          checkedColor: '{theme.text.color}',
          checkedHoverColor: '{theme.text.color}',
        },
      },
    },
    root: {
      width: '2.5rem',
      height: '1.5rem',
      borderRadius: '{primitive.borderRadius.xl}',
      gap: '0.1429rem',
      borderWidth: '0rem',
      shadow: 'none',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.primary.200}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{theme.formField.shadow}',
      },
      borderColor: '{theme.surface.extend.transparent}',
      hoverBorderColor: '{theme.surface.extend.transparent}',
      checkedBorderColor: '{theme.surface.extend.transparent}',
      checkedHoverBorderColor: '{theme.surface.extend.transparent}',
      invalidBorderColor: '{theme.formField.invalidBorderColor}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      slideDuration: '0.2s',
    },
    handle: {
      borderRadius: '7.1429rem',
      size: '1.25rem',
    },
  },
  tooltip: {
    colorScheme: {
      light: {
        root: {
          background: '{theme.surface.900}',
          color: '{theme.text.extend.colorInverted}',
        },
      },
    },
    root: {
      maxWidth: '17rem',
      gutter: '0.25rem',
      shadow: '{theme.overlay.popover.shadow}',
      padding: '0.5rem 1rem',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
    },
  },
  tree: {
    root: {
      background: '{theme.content.background}',
      color: '{theme.content.color}',
      padding: '1rem',
      gap: '2px',
      indent: '1rem',
    },
    node: {
      padding: '0.375rem 0.625rem',
      color: '{theme.text.color}',
      selectedColor: '{theme.text.extend.colorInverted}',
      gap: '0.25rem',
    },
    nodeIcon: {
      selectedColor: '{theme.text.extend.colorInverted}',
    },
    nodeToggleButton: {
      borderRadius: '50%',
      size: '1.75rem',
      selectedHoverBackground: '{theme.surface.900}',
    },
    loadingIcon: {
      size: '2rem',
    },
    filter: {
      margin: '0 0 0.5rem 0',
    },
  },
};
