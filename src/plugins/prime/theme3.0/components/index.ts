// import accordion from './accordion';

export default {
  accordion: {
    root: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    panel: {
      borderWidth: '0rem',
      borderColor: '{content.background}',
    },
    header: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      activeColor: '{text.color}',
      activeHoverColor: '{text.hoverColor}',
      padding: '0 1rem 0 1rem',
      fontWeight: '0',
      borderRadius: '0rem',
      borderWidth: '0rem 0rem 0rem 0rem',
      borderColor: '{content.borderColor}',
      background: '{surface.extend.transparent}',
      hoverBackground: '{surface.extend.transparent}',
      activeBackground: '{surface.extend.transparent}',
      activeHoverBackground: '{surface.extend.transparent}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      toggleIcon: {
        color: '{text.color}',
        hoverColor: '{text.hoverColor}',
        activeColor: '{text.color}',
        activeHoverColor: '{text.hoverColor}',
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
    content: {
      borderWidth: '1px 0 0 0',
      borderColor: '{content.borderColor}',
      background: '{content.background}',
      color: '{text.color}',
      padding: '0, 0, 1rem, 1.75rem',
    },
  },
  autocomplete: {
    extend: {
      option: {
        gap: '0.5rem',
        background: '{list.option.background}',
      },
      optionGroup: {
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
      paddingX: '{semantic.formField.paddingX}',
      paddingY: '{semantic.formField.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    overlay: {
      background: '{overlay.select.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{semantic.overlay.select.borderRadius}',
      color: '{overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
    },
    option: {
      focusBackground: '{list.option.focusBackground}',
      selectedBackground: '{list.option.selectedBackground}',
      selectedFocusBackground: '{list.option.selectedFocusBackground}',
      color: '{list.option.color}',
      focusColor: '{list.option.focusColor}',
      selectedColor: '{list.option.selectedColor}',
      selectedFocusColor: '{list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.optionGroup.padding}',
    },
    dropdown: {
      width: '100%',
      background: '{formField.background}',
      hoverBackground: '{formField.background}',
      activeBackground: '{formField.background}',
      color: '{formField.color}',
      hoverColor: '{formField.color}',
      activeColor: '{formField.color}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.hoverBorderSecondaryColor}',
      activeBorderColor: '{formField.focusBorderSecondaryColor}',
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
      focusBackground: '{chip.root.background}',
      focusColor: '{chip.root.color}',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  avatar: {
    root: {
      width: '2rem',
      height: '2rem',
      fontSize: '1rem',
      color: '{text.extend.colorPrimaryStatic}',
      background: '{primary.color}',
      borderRadius: '{primitive.borderRadius.md}',
    },
    icon: {
      size: '1rem',
    },
    group: {
      borderColor: '{formField.borderColor}',
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
      extend: {
        dot: {
          success: {
            background: '{primitive.colors.green.400}',
          },
          info: {
            background: '{extend.pallete.info.400}',
          },
          warn: {
            background: '{extend.pallete.warn.400}',
          },
          danger: {
            background: '{extend.pallete.danger.400}',
          },
        },
      },
    },
    sm: {
      fontSize: '0.625rem',
      minWidth: '1.25rem',
      height: '1.25rem',
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
    primary: {
      color: '{text.extend.colorPrimaryStatic}',
      background: '{primary.color}',
    },
    secondary: {
      color: '{text.extend.colorInverted}',
      background: '{surface.900}',
    },
    success: {
      color: '{extend.pallete.success.900}',
      background: '{extend.pallete.success.300}',
    },
    info: {
      color: '{extend.pallete.info.900}',
      background: '{extend.pallete.info.300}',
    },
    warn: {
      color: '{extend.pallete.warn.900}',
      background: '{extend.pallete.warn.300}',
    },
    danger: {
      color: '{extend.pallete.danger.900}',
      background: '{extend.pallete.danger.300}',
    },
  },
  breadcrumb: {
    extend: {
      hoverBackground: '{surface.100}',
    },
    root: {
      padding: '0.25rem',
      background: '{surface.extend.transparent}',
      gap: '0rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    focusRing: {
      width: '#ffffff',
      style: '{semantic.focusRing.style}',
      color: '#ffffff',
      offset: '{semantic.focusRing.offset}',
      shadow: '{semantic.focusRing.shadow}',
    },
    item: {
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      borderRadius: '{primitive.borderRadius.xs}',
      gap: '{semantic.navigation.item.gap}',
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
      outlined: {
        danger: {
          focusBackground: '{surface.extend.transparent}',
        },
        warn: {
          focusBackground: '{surface.extend.transparent}',
        },
        info: {
          focusBackground: '{surface.extend.transparent}',
        },
        help: {
          focusBackground: '{surface.extend.transparent}',
        },
        success: {
          focusBackground: '{surface.extend.transparent}',
        },
      },
      disabledBackground: '{formField.disabledBackground}',
      disabledColor: '{formField.disabledColor}',
      text: {
        danger: {
          focusBackground: '{surface.extend.transparent}',
        },
        warn: {
          focusBackground: '{surface.extend.transparent}',
        },
        info: {
          focusBackground: '{surface.extend.transparent}',
        },
        help: {
          focusBackground: '{surface.extend.transparent}',
        },
        success: {
          focusBackground: '{surface.extend.transparent}',
        },
      },
      link: {
        background: '{surface.extend.transparent}',
        colorHover: '{text.hoverColor}',
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
      root: {
        sm: {
          borderRadius: '{primitive.borderRadius.md}',
          gap: '0.5rem',
        },
        lg: {
          borderRadius: '{primitive.borderRadius.lg}',
          gap: '0.75rem',
        },
        xlg: {
          borderRadius: '{primitive.borderRadius.lg}',
          gap: '0.75rem',
          iconOnlyWidth: '4.0714rem',
          paddingX: '1.5rem',
          paddingY: '1.25rem',
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
      primary: {
        background: '{primary.color}',
        hoverBackground: '{primary.hoverColor}',
        activeBackground: '{primary.color}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{text.extend.colorPrimaryStatic}',
        hoverColor: '{text.extend.colorPrimaryStatic}',
        activeColor: '{text.extend.colorPrimaryStatic}',
        focusRing: {
          color: '{semantic.primary.200}',
          shadow: '{semantic.focusRing.shadow}',
        },
      },
      secondary: {
        background: '{surface.900}',
        hoverBackground: '{surface.800}',
        activeBackground: '{surface.900}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{text.extend.colorInverted}',
        hoverColor: '{text.extend.colorInverted}',
        activeColor: '{text.extend.colorInverted}',
        focusRing: {
          color: '{semantic.primary.200}',
          shadow: '{semantic.focusRing.shadow}',
        },
      },
      contrast: {
        background: '{surface.200}',
        hoverBackground: '{surface.300}',
        activeBackground: '{surface.200}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{text.color}',
        hoverColor: '{text.color}',
        activeColor: '{text.color}',
        focusRing: {
          color: '{semantic.primary.200}',
          shadow: '{semantic.focusRing.shadow}',
        },
      },
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
      info: {
        background: '{extend.pallete.info.300}',
        hoverBackground: '{extend.pallete.info.400}',
        activeBackground: '{extend.pallete.info.300}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{extend.pallete.info.900}',
        hoverColor: '{extend.pallete.info.950}',
        activeColor: '{extend.pallete.info.900}',
      },
      success: {
        background: '{extend.pallete.success.300}',
        hoverBackground: '{extend.pallete.success.400}',
        activeBackground: '{extend.pallete.success.300}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{extend.pallete.success.900}',
        hoverColor: '{extend.pallete.success.950}',
        activeColor: '{extend.pallete.success.900}',
      },
      warn: {
        background: '{extend.pallete.warn.300}',
        hoverBackground: '{extend.pallete.warn.400}',
        activeBackground: '{extend.pallete.warn.300}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{extend.pallete.warn.900}',
        hoverColor: '{extend.pallete.warn.950}',
        activeColor: '{extend.pallete.warn.900}',
      },
      help: {
        background: '{extend.pallete.help.300}',
        hoverBackground: '{extend.pallete.help.400}',
        activeBackground: '{extend.pallete.help.300}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{extend.pallete.help.900}',
        hoverColor: '{extend.pallete.help.950}',
        activeColor: '{extend.pallete.help.900}',
      },
      danger: {
        background: '{extend.pallete.danger.300}',
        hoverBackground: '{extend.pallete.danger.400}',
        activeBackground: '{extend.pallete.danger.300}',
        borderColor: '{surface.extend.transparent}',
        hoverBorderColor: '{surface.extend.transparent}',
        activeBorderColor: '{surface.extend.transparent}',
        color: '{extend.pallete.danger.900}',
        hoverColor: '{extend.pallete.danger.950}',
        activeColor: '{extend.pallete.danger.900}',
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
        hoverBackground: '{extend.pallete.success.100}',
        activeBackground: '{surface.extend.transparent}',
        borderColor: '{extend.pallete.success.600}',
        color: '{extend.pallete.success.600}',
      },
      info: {
        hoverBackground: '{extend.pallete.info.100}',
        activeBackground: '{surface.extend.transparent}',
        borderColor: '{extend.pallete.info.600}',
        color: '{extend.pallete.info.600}',
      },
      warn: {
        hoverBackground: '{extend.pallete.warn.100}',
        activeBackground: '{surface.extend.transparent}',
        borderColor: '{extend.pallete.warn.600}',
        color: '{extend.pallete.warn.600}',
      },
      help: {
        hoverBackground: '{extend.pallete.help.100}',
        activeBackground: '{surface.extend.transparent}',
        borderColor: '{extend.pallete.help.600}',
        color: '{extend.pallete.help.600}',
      },
      danger: {
        hoverBackground: '{extend.pallete.danger.100}',
        activeBackground: '{surface.extend.transparent}',
        borderColor: '{extend.pallete.danger.600}',
        color: '{extend.pallete.danger.600}',
      },
    },
    text: {
      primary: {
        hoverBackground: '{surface.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{text.color}',
      },
      success: {
        hoverBackground: '{extend.pallete.success.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{extend.pallete.success.600}',
      },
      info: {
        hoverBackground: '{extend.pallete.info.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{extend.pallete.info.600}',
      },
      warn: {
        hoverBackground: '{extend.pallete.warn.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{extend.pallete.warn.600}',
      },
      help: {
        hoverBackground: '{extend.pallete.help.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{extend.pallete.help.600}',
      },
      danger: {
        hoverBackground: '{extend.pallete.danger.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{extend.pallete.danger.600}',
      },
    },
    link: {
      primary: {
        hoverBackground: '{surface.100}',
        activeBackground: '{surface.extend.transparent}',
        color: '{text.color}',
      },
      success: {
        hoverBackground: '{primitive.colors.green.50}',
        activeBackground: '{primitive.colors.green.100}',
        color: '{primitive.colors.green.500}',
      },
      info: {
        hoverBackground: '{primitive.colors.sky.50}',
        activeBackground: '{primitive.colors.sky.100}',
        color: '{primitive.colors.sky.500}',
      },
      warn: {
        hoverBackground: '{primitive.colors.orange.50}',
        activeBackground: '{primitive.colors.orange.100}',
        color: '{primitive.colors.orange.500}',
      },
      help: {
        hoverBackground: '{primitive.colors.purple.50}',
        activeBackground: '{primitive.colors.purple.100}',
        color: '{primitive.colors.purple.500}',
      },
      danger: {
        hoverBackground: '{primitive.colors.red.50}',
        activeBackground: '{primitive.colors.red.100}',
        color: '{primitive.colors.red.500}',
      },
    },
  },
  card: {
    extend: {
      borderColor: '{content.borderColor}',
    },
    root: {
      background: '{content.background}',
      borderRadius: '{primitive.borderRadius.lg}',
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
      fontWeight: '700',
    },
    subtitle: {
      color: '{text.mutedColor}',
    },
  },
  carousel: {
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
      background: '{surface.300}',
      hoverBackground: '{surface.400}',
      activeBackground: '{surface.900}',
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
  cascadeselect: {
    dropdown: {
      width: '2.5rem',
    },
    overlay: {
      background: '{semantic_color-cheme.overlay.select.background}',
      color: '{semantic_color-cheme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
      mobileIndent: '1.25rem',
    },
    option: {
      padding: '{semantic.list.option.padding}',
      icon: {
        size: '0.875rem',
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
        focusRing: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        width: '1rem',
        height: '1rem',
      },
      lg: {
        width: '1.25rem',
        height: '1.25rem',
      },
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
      borderColor: '{surface.extend.transparent}',
    },
    root: {
      borderRadius: '{primitive.borderRadius.sm}',
      paddingX: '0.5rem',
      paddingY: '0.25rem',
      gap: '0.5rem',
      transitionDuration: '{semantic.formField.transitionDuration}',
      background: '{surface.200}',
      color: '{text.color}',
    },
    image: {
      width: '0rem',
      height: '0rem',
    },
    icon: {
      size: '1rem',
      color: '{text.color}',
    },
    removeIcon: {
      size: '1rem',
      color: '{text.color}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.primary.200}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{semantic.formField.focusRing.shadow}',
      },
    },
  },
  colorpicker: {
    preview: {
      width: '1.75rem',
      height: '1.75rem',
    },
    panel: {
      shadow: '{semantic.overlay.popover.shadow}',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
    },
  },
  confirmdialog: {
    extend: {
      icon: {
        success: '{extend.pallete.success.500}',
        info: '{extend.pallete.info.500}',
        help: '{extend.pallete.help.500}',
        warn: '{extend.pallete.warn.500}',
        danger: '{extend.pallete.danger.500}',
      },
    },
    icon: {
      size: '1.5rem',
      color: '{overlay.modal.color}',
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
    root: {
      transitionDuration: '{semantic.transitionDuration}',
      borderColor: '{content.borderColor}',
    },
    header: {
      background: '#ffffff',
      color: '{text.color}',
      borderColor: '{content.borderColor}',
      borderWidth: '1px 0 1px 0',
      padding: '0.75rem 1rem',
      sm: {
        padding: '0.375rem 0.5rem',
      },
      lg: {
        padding: '1rem 1.25rem',
      },
    },
    headerCell: {
      background: '#ffffff',
      hoverBackground: '#ffffff',
      selectedBackground: '#ffffff',
      borderColor: '#ffffff',
      color: '{text.color}',
      hoverColor: '#ffffff',
      selectedColor: '{semantic_color-cheme.highlight.color}',
      gap: '0rem',
      padding: '0.75rem 1rem',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
      sm: {
        padding: '0.375rem 0.5rem',
      },
      lg: {
        padding: '1rem 1.25rem',
      },
    },
    columnTitle: {
      fontWeight: '700',
    },
    row: {
      background: '{content.background}',
      stripedBackground: '#ffffff',
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{highlight.background}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      selectedColor: '{highlight.color}',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: 'inset {focus.ring.shadow}',
      },
    },
    bodyCell: {
      borderColor: '{content.borderColor}',
      selectedBorderColor: '#f0fff3',
      padding: '0.75rem 1rem',
      sm: {
        padding: '0.375rem 0.5rem',
      },
      lg: {
        padding: '1rem 1.25rem',
      },
    },
    footerCell: {
      background: '#ffffff',
      color: '{text.color}',
      borderColor: '#ffffff',
      padding: '0.75rem 1rem',
      sm: {
        padding: '0.375rem 0.5rem',
      },
      lg: {
        padding: '1rem 1.25rem',
      },
    },
    columnFooter: {
      fontWeight: '700',
    },
    footer: {
      background: '#ffffff',
      color: '{text.color}',
      borderColor: '{content.borderColor}',
      borderWidth: '0 0 1px 0',
      padding: '0.75rem 1rem',
      sm: {
        padding: '0.375rem 0.5rem',
      },
      lg: {
        padding: '1rem 1.25rem',
      },
    },
    dropPoint: {
      color: '#ffffff',
    },
    columnResizer: {
      width: '0rem',
    },
    resizeIndicator: {
      width: '1px',
      color: '#ffffff',
    },
    sortIcon: {
      color: '#ffffff',
      hoverColor: '#ffffff',
      size: '0rem',
    },
    loadingIcon: {
      size: '0rem',
    },
    rowToggleButton: {
      hoverBackground: '{content.hoverBackground}',
      selectedHoverBackground: '{content.background}',
      color: '{text.mutedColor}',
      hoverColor: '{text.color}',
      selectedHoverColor: '#ffffff',
      size: '0rem',
      borderRadius: '50%',
      focusRing: {
        width: '{semantic.focusRing.width}',
        style: '{semantic.focusRing.style}',
        color: '{semantic.focusRing.color}',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
    filter: {
      inlineGap: '0rem',
      rule: {
        borderColor: '#ffffff',
      },
      constraintList: {
        padding: '{semantic.list.padding}',
        gap: '{semantic.list.gap}',
      },
      constraint: {
        focusBackground: '#ffffff',
        selectedBackground: '#ffffff',
        selectedFocusBackground: '#ffffff',
        color: '#ffffff',
        focusColor: '#ffffff',
        selectedColor: '#ffffff',
        selectedFocusColor: '#ffffff',
        padding: '{semantic.list.option.padding}',
        borderRadius: '{semantic.list.option.borderRadius}',
        separator: {
          borderColor: '{content.borderColor}',
        },
      },
      overlaySelect: {
        background: '{overlay.select.background}',
        color: '{overlay.select.color}',
        borderColor: '{overlay.select.borderColor}',
        borderRadius: '{semantic.overlay.select.borderRadius}',
        shadow: '{semantic.overlay.select.shadow}',
      },
      overlayPopover: {
        background: '{overlay.popover.background}',
        color: '{overlay.popover.color}',
        borderColor: '{overlay.select.borderColor}',
        borderRadius: '{semantic.overlay.select.borderRadius}',
        shadow: '{semantic.overlay.popover.shadow}',
        padding: '{semantic.overlay.popover.padding}',
        gap: '0rem',
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
      padding: '0rem',
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
    extend: {
      date: {
        selectedHoverBackground: '{semantic.primary.600}',
      },
      today: {
        borderColor: '{content.borderColor}',
        hoverBackground: '{content.hoverBackground}',
      },
      title: {
        width: '15rem',
      },
      timePicker: {
        minWidth: '2.8571rem',
        color: '{content.color}',
      },
    },
    root: {
      transitionDuration: '{semantic.transitionDuration}',
    },
    panel: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      shadow: '{semantic.overlay.popover.shadow}',
      padding: '{semantic.overlay.popover.padding}',
    },
    header: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      padding: '0 0 0.5rem 0',
    },
    title: {
      gap: '0.5rem',
      fontWeight: '700',
    },
    dropdown: {
      background: '#ffffff',
      hoverBackground: '#ffffff',
      activeBackground: '#ffffff',
      color: '#ffffff',
      hoverColor: '#ffffff',
      activeColor: '#ffffff',
      width: '2.5rem',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.borderColor}',
      activeBorderColor: '{formField.borderColor}',
      borderRadius: '{semantic.formField.borderRadius}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
      sm: {
        width: '0rem',
      },
      lg: {
        width: '0rem',
      },
    },
    today: {
      background: '#ffffff',
      color: '#ffffff',
    },
    inputIcon: {
      color: '{formField.iconColor}',
    },
    selectMonth: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{semantic.content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    group: {
      borderColor: '{content.borderColor}',
      gap: '{semantic.overlay.popover.padding}',
    },
    selectYear: {
      hoverBackground: '{content.hoverBackground}',
      color: '{content.color}',
      hoverColor: '{content.hoverColor}',
      borderRadius: '{semantic.content.borderRadius}',
      padding: '0.375rem 0.625rem',
    },
    dayView: {
      margin: '0rem 0rem 0rem 0rem',
    },
    weekDay: {
      padding: '0.25rem',
      fontWeight: '700',
      color: '{content.color}',
    },
    date: {
      hoverBackground: '{content.hoverBackground}',
      selectedBackground: '{semantic.primary.500}',
      rangeSelectedBackground: '{highlight.background}',
      color: '{content.color}',
      hoverColor: '{content.color}',
      selectedColor: '{text.extend.colorPrimaryStatic}',
      rangeSelectedColor: '{text.extend.colorPrimaryStatic}',
      width: '2rem',
      height: '2rem',
      borderRadius: '0.375rem',
      padding: '0.25rem',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
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
      borderColor: '{content.borderColor}',
    },
    timePicker: {
      padding: '1.5rem 0.75rem 0.75rem 0.75rem',
      borderColor: '{content.borderColor}',
      gap: '0.5rem',
      buttonGap: '0.25rem',
    },
  },
  dialog: {
    root: {
      background: '{overlay.modal.background}',
      borderColor: '{overlay.modal.borderColor}',
      color: '{overlay.modal.color}',
      borderRadius: '{semantic.overlay.modal.borderRadius}',
      shadow: '{overlay.popover.shadow}',
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
  dock: {
    root: {
      background: '#ffffff',
      borderColor: '#ffffff',
      padding: '0.5rem',
    },
    item: {
      padding: '0.5rem',
      size: '3rem',
    },
  },
  drawer: {
    root: {
      background: '{semantic_color-cheme.overlay.modal.background}',
      color: '{semantic_color-cheme.overlay.modal.color}',
      shadow: '{semantic.overlay.modal.shadow}',
    },
    header: {
      padding: '{semantic.overlay.modal.padding}',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    content: {
      padding:
        '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
    },
    footer: {
      padding: '{semantic.overlay.modal.padding}',
    },
  },
  editor: {
    toolbarItem: {
      hoverColor: '{semantic_color-cheme.text.color}',
    },
    overlay: {
      background: '{semantic_color-cheme.overlay.select.background}',
      color: '{semantic_color-cheme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
      padding: '{semantic.list.padding}',
    },
    overlayOption: {
      padding: '{semantic.list.option.padding}',
    },
    content: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
    },
  },
  fieldset: {
    root: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      padding: '0.75rem 1.125rem 1.125rem 1.125rem',
    },
    legend: {
      borderWidth: '1px',
      padding: '0.625rem 0.875rem',
      gap: '0.5rem',
      fontWeight: '700',
      color: '{semantic_color-cheme.text.color}',
    },
    content: {
      padding: '0rem',
    },
  },
  fileupload: {
    extend: {
      dragNDrop: {
        background: '{surface.0}',
        padding: '1rem',
        borderRadius: '{semantic.formField.borderRadius}',
        gap: '0.5rem',
        info: {
          gap: '0.25rem',
        },
      },
      content: {
        borderRadius: '{primitive.borderRadius.md}',
        highlightBorderDefault: '{formField.borderColor}',
      },
    },
    root: {
      background: '{content.background}',
      borderColor: '{content.borderColor}',
      color: '{content.color}',
      borderRadius: '{semantic.content.borderRadius}',
      transitionDuration: '{semantic.transitionDuration}',
    },
    header: {
      background: '{surface.0}',
      color: '{text.color}',
      borderColor: '{content.borderColor}',
      borderWidth: '0rem',
      padding: '0rem',
      borderRadius: '0rem',
      gap: '0.5rem',
    },
    content: {
      highlightBorderColor: '{surface.900}',
      padding: '0rem',
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
      iconSize: '{semantic.iconSizeLarge}',
    },
    root: {
      color: '{formField.floatLabelColor}',
      focusColor: '{formField.floatLabelFocusColor}',
      activeColor: '{formField.floatLabelActiveColor}',
      invalidColor: '{formField.floatLabelInvalidColor}',
      transitionDuration: '0.2s',
      positionX: '{semantic.formField.paddingX}',
      positionY: '{semantic.formField.paddingY}',
      fontWeight: '500',
      active: {
        fontSize: '35.7143rem',
        fontWeight: '500',
      },
    },
    over: {
      active: {
        over: '-19.25',
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
    root: {
      borderWidth: '1px',
    },
    navButton: {
      background: '#ffffff',
      hoverBackground: '#ffffff',
      size: '3rem',
      gutter: '0rem',
    },
    navIcon: {
      size: '1.5rem',
    },
    thumbnailsContent: {
      padding: '1rem 0.25rem',
    },
    thumbnailNavButton: {
      size: '2rem',
      gutter: '0.5rem',
    },
    thumbnailNavButtonIcon: {
      size: '1rem',
    },
    caption: {
      background: '#ffffff',
      padding: '1rem',
    },
    indicatorList: {
      gap: '0.5rem',
      padding: '1rem',
    },
    indicatorButton: {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
    },
    insetIndicatorList: {
      background: '#ffffff',
    },
    insetIndicatorButton: {
      background: '#ffffff',
      hoverBackground: '#ffffff',
      activeBackground: '#ffffff',
    },
    closeButton: {
      size: '3rem',
      gutter: '0.5rem',
      background: '#ffffff',
      hoverBackground: '#ffffff',
      borderRadius: '50%',
    },
    closeButtonIcon: {
      size: '1.5rem',
    },
  },
  image: {
    toolbar: {
      blur: '8px',
      background: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: '1px',
      padding: '.5rem',
      gap: '0.5rem',
    },
    action: {
      hoverBackground: '#ffffff',
      size: '3rem',
      iconSize: '1.5rem',
    },
  },
  imagecompare: {
    handle: {
      size: '15px',
      hoverSize: '30px',
      background: '#ffffff',
      hoverBackground: '#ffffff',
      borderColor: '#ffffff',
      hoverBorderColor: '#ffffff',
      borderWidth: '3px',
      borderRadius: '50%',
    },
  },
  inlinemessage: {
    root: {
      gap: '0.5rem',
    },
    text: {
      fontWeight: '500',
    },
    icon: {
      size: '1.125rem',
    },
    info: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.blue.600}',
      shadow: 'none',
    },
    success: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.green.600}',
      shadow: 'none',
    },
    warn: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.yellow.600}',
      shadow: 'none',
    },
    error: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.red.600}',
      shadow: 'none',
    },
    secondary: {
      shadow: 'none',
    },
    contrast: {
      shadow: 'none',
    },
  },
  inputgroup: {
    addon: {
      borderRadius: '{semantic.formField.borderRadius}',
      padding: '0.75rem',
      minWidth: '2.5rem',
      background: '{surface.extend.transparent}',
      borderColor: '{formField.borderColor}',
      color: '{text.mutedColor}',
    },
  },
  inputnumber: {
    transitionDuration: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    extend: {
      button: {
        height: '2.5rem',
      },
    },
    button: {
      background: '{surface.extend.transparent}',
      hoverBackground: '{content.hoverBackground}',
      activeBackground: '{surface.extend.transparent}',
      borderColor: '{formField.borderColor}',
      hoverBorderColor: '{formField.borderColor}',
      activeBorderColor: '{formField.borderColor}',
      color: '{text.color}',
      hoverColor: '{text.hoverColor}',
      activeColor: '{text.color}',
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
  listbox: {
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
    },
    option: {
      padding: '{semantic.list.option.padding}',
    },
    checkmark: {
      gutterStart: '-0.5rem',
      gutterEnd: '0.5rem',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  megamenu: {
    root: {
      borderColor: '#ffffff',
      color: '{semantic_color-cheme.content.color}',
      gap: '0.5rem',
    },
    baseItem: {
      padding: '0.75rem 1rem',
    },
    item: {
      padding: '{semantic.navigation.item.padding}',
      gap: '{semantic.navigation.item.gap}',
    },
    overlay: {
      padding: '0rem',
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      shadow: '{semantic.overlay.navigation.shadow}',
      gap: '0.5rem',
    },
    submenu: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
    },
    mobileButton: {
      borderRadius: '50%',
      size: '2rem',
    },
  },
  menu: {
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
  },
  menubar: {
    root: {
      borderColor: '#ffffff',
      color: '{semantic_color-cheme.content.color}',
      gap: '0.5rem',
      padding: '0.75rem 1rem',
    },
    baseItem: {
      padding: '0.75rem 1rem',
    },
    item: {
      padding: '{semantic.navigation.item.padding}',
      gap: '{semantic.navigation.item.gap}',
    },
    submenu: {
      padding: '{semantic.navigation.list.padding}',
      gap: '{semantic.navigation.list.gap}',
      background: '{semantic_color-cheme.content.background}',
      shadow: '{semantic.overlay.navigation.shadow}',
      mobileIndent: '1.25rem',
    },
    mobileButton: {
      borderRadius: '50%',
      size: '2rem',
    },
  },
  message: {
    root: {
      borderWidth: '1px',
    },
    content: {
      padding: '0.75rem 1rem',
      gap: '0.5rem',
    },
    text: {
      fontSize: '1rem',
      fontWeight: '500',
    },
    icon: {
      size: '1.25rem',
    },
    closeButton: {
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
    },
    closeIcon: {
      size: '1rem',
    },
    info: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.blue.600}',
      shadow: 'none',
    },
    success: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.green.600}',
      shadow: 'none',
    },
    warn: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.yellow.600}',
      shadow: 'none',
    },
    error: {
      background: '#ffffff',
      borderColor: '#ffffff',
      color: '{primitive.colors.red.600}',
      shadow: 'none',
    },
    secondary: {
      borderColor: '#ffffff',
      shadow: 'none',
    },
    contrast: {
      borderColor: '#ffffff',
      shadow: 'none',
    },
  },
  metergroup: {
    root: {
      gap: '1rem',
    },
    meters: {
      size: '0.625rem',
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
      horizontalGap: '1rem',
    },
  },
  multiselect: {
    dropdown: {
      width: '2.5rem',
    },
    overlay: {
      background: '{semantic_color-cheme.overlay.select.background}',
      color: '{semantic_color-cheme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    list: {
      padding: '{semantic.list.padding}',
      gap: '{semantic.list.gap}',
    },
    option: {
      padding: '{semantic.list.option.padding}',
      gap: '0.5rem',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  orderlist: {
    root: {
      gap: '1.125rem',
    },
    controls: {
      gap: '0.5rem',
    },
  },
  organizationchart: {
    root: {
      gutter: '0.75rem',
    },
    node: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      selectedColor: '{semantic_color-cheme.highlight.color}',
      padding: '1rem 1.25rem',
      toggleablePadding: '1rem 1.25rem 1.5rem 1.25rem',
    },
    nodeToggleButton: {
      background: '{semantic_color-cheme.content.background}',
      hoverColor: '{semantic_color-cheme.text.color}',
      size: '1.75rem',
      borderRadius: '50%',
    },
    connector: {
      height: '24px',
    },
  },
  paginator: {
    root: {
      padding: '0.5rem 1rem',
      gap: '0.25rem',
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
    },
    navButton: {
      background: '#ffffff',
      selectedColor: '{semantic_color-cheme.highlight.color}',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
    },
    jumpToPageInput: {
      maxWidth: '2.5rem',
    },
  },
  panel: {
    root: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
    },
    header: {
      borderWidth: '0 0 1px 0',
      padding: '1.125rem',
      borderRadius: '5px 5px 0 0',
      color: '{semantic_color-cheme.text.color}',
    },
    toggleableHeader: {
      padding: '0.25rem 1.125rem',
    },
    title: {
      fontWeight: '700',
    },
    content: {
      padding: '1.125rem',
    },
    footer: {
      padding: '1.125rem',
    },
  },
  panelmenu: {
    root: {
      gap: '0rem',
    },
    panel: {
      background: '{semantic_color-cheme.content.background}',
      borderWidth: '1px',
      color: '{semantic_color-cheme.content.color}',
      padding: '0.25rem 0.25rem',
      borderRadius: '0rem',
    },
    item: {
      gap: '0.5rem',
      padding: '{semantic.navigation.item.padding}',
    },
    submenu: {
      indent: '1rem',
    },
  },
  password: {
    meter: {
      background: '{content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      height: '0.5rem',
    },
    icon: {
      color: '{text.color}',
    },
    overlay: {
      background: '{overlay.popover.background}',
      borderColor: '{overlay.popover.borderColor}',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
      color: '{overlay.popover.color}',
      padding: '{semantic.overlay.popover.padding}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    content: {
      gap: '0.5rem',
    },
    strength: {
      weakBackground: '{extend.pallete.danger.500}',
      mediumBackground: '{extend.pallete.warn.500}',
      strongBackground: '{extend.pallete.success.600}',
    },
  },
  picklist: {
    root: {
      gap: '1.125rem',
    },
    controls: {
      gap: '0.5rem',
    },
  },
  popover: {
    root: {
      background: '{semantic_color-cheme.overlay.popover.background}',
      color: '{semantic_color-cheme.overlay.popover.color}',
      shadow: '{semantic.overlay.popover.shadow}',
      gutter: '10px',
      arrowOffset: '1.25rem',
    },
    content: {
      padding: '{semantic.overlay.popover.padding}',
    },
  },
  progressbar: {
    label: {
      color: '{text.extend.colorPrimaryStatic}',
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    root: {
      background: '{content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      height: '1rem',
    },
    value: {
      background: '{primary.color}',
    },
  },
  progressspinner: {
    root: {
      colorOne: '{extend.pallete.success.500}',
      colorTwo: '{extend.pallete.info.500}',
      colorThree: '{extend.pallete.danger.500}',
      colorFour: '{extend.pallete.warn.500}',
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
      size: '0.75rem',
      checkedColor: '{text.extend.colorInverted}',
      checkedHoverColor: '{text.extend.colorInverted}',
      disabledColor: '{text.mutedColor}',
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
      shadow: '{formField.shadow}',
    },
    icon: {
      size: '1.5rem',
      color: '{surface.500}',
      hoverColor: '{extend.pallete.warn.500}',
      activeColor: '{extend.pallete.warn.500}',
    },
  },
  ripple: {
    root: {
      background: '#ffffff',
    },
  },
  scrollpanel: {
    root: {
      transitionDuration: '{semantic.transitionDuration}',
      background: '{surface.300}',
    },
    bar: {
      size: '0.5rem',
      borderRadius: '{primitive.borderRadius.sm}',
      focusRing: {
        width: '0rem',
        string: '{semantic.focusRing.style}',
        color: '#ffffff',
        offset: '{semantic.focusRing.offset}',
        shadow: '{semantic.focusRing.shadow}',
      },
    },
  },
  select: {
    extend: {
      option: {
        background: '{list.option.background}',
        gap: '0.5rem',
      },
      optionGroup: {
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
      paddingX: '{sizing.select.root.paddingX}',
      paddingY: '{sizing.select.root.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{sizing.select.root.fontSize}',
        paddingX: '{sizing.select.root.paddingX}',
        paddingY: '{sizing.select.root.paddingY}',
      },
      lg: {
        fontSize: '{sizing.select.root.fontSize}',
        paddingX: '{sizing.select.root.paddingX}',
        paddingY: '{sizing.select.root.paddingY}',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
    dropdown: {
      width: '100%',
      color: '{formField.iconColor}',
    },
    overlay: {
      background: '{overlay.select.background}',
      borderColor: '{overlay.select.borderColor}',
      borderRadius: '{semantic.overlay.select.borderRadius}',
      color: '{overlay.select.color}',
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
      focusBackground: '{list.option.focusBackground}',
      selectedBackground: '{list.option.selectedBackground}',
      selectedFocusBackground: '{list.option.selectedFocusBackground}',
      color: '{list.option.color}',
      focusColor: '{list.option.focusColor}',
      selectedColor: '{list.option.selectedColor}',
      selectedFocusColor: '{list.option.selectedFocusColor}',
      padding: '{semantic.list.option.padding}',
      borderRadius: '{semantic.list.option.borderRadius}',
    },
    optionGroup: {
      background: '{list.optionGroup.background}',
      color: '{list.optionGroup.color}',
      fontWeight: '{semantic.list.optionGroup.fontWeight}',
      padding: '{semantic.list.option.padding}',
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
      padding: '{semantic.list.option.padding}',
    },
  },
  skeleton: {
    root: {
      background: '{surface.200}',
      animationBackground: '{surface.100}',
      borderRadius: '{semantic.content.borderRadius}',
    },
  },
  slider: {
    root: {
      transitionDuration: '{semantic.formField.transitionDuration}',
    },
    track: {
      background: '{content.borderColor}',
      borderRadius: '{semantic.content.borderRadius}',
      size: '0.25rem',
    },
    range: {
      background: '{surface.900}',
    },
    handle: {
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '{primitive.borderRadius.xl}',
      background: '{surface.900}',
      hoverBackground: '{surface.900}',
      content: {
        borderRadius: '{primitive.borderRadius.xl}',
        background: '{surface.0}',
        hoverBackground: '{surface.900}',
        width: '0.75rem',
        height: '0.75rem',
        shadow: 'none',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
  },
  speeddial: {
    root: {
      gap: '0.5rem',
    },
  },
  splitbutton: {
    root: {
      roundedBorderRadius: '2rem',
      raisedShadow:
        '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    },
  },
  splitter: {
    root: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
    },
    handle: {
      size: '24px',
    },
  },
  stepper: {
    separator: {
      margin: '0 0 0 1.625rem',
      size: '2px',
    },
    step: {
      padding: '0.5rem',
      gap: '1rem',
    },
    stepHeader: {
      padding: '0rem',
      gap: '0.5rem',
    },
    stepTitle: {
      fontWeight: '500',
    },
    stepNumber: {
      background: '{semantic_color-cheme.content.background}',
      size: '2.25rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      borderRadius: '50%',
      shadow: 'none',
    },
    steppanels: {
      padding: '0.875rem 0.5rem 1.125rem 0.5rem',
    },
    steppanel: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      padding: '0rem',
      indent: '1rem',
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
  tabmenu: {
    tablist: {
      borderWidth: '0rem',
      background: '{semantic_color-cheme.content.background}',
    },
    item: {
      borderWidth: '2px 0 0 0',
      borderColor: '#ffffff',
      hoverBorderColor: '#ffffff',
      hoverColor: '{semantic_color-cheme.text.color}',
      padding: '1rem 1.25rem',
      fontWeight: '600',
      margin: '0rem',
      gap: '0.5rem',
    },
    itemIcon: {
      hoverColor: '{semantic_color-cheme.text.color}',
    },
    activeBar: {
      height: '0rem',
      bottom: '0',
      background: '#ffffff',
    },
  },
  tabs: {
    tablist: {
      borderWidth: '0rem',
      background: '{semantic_color-cheme.content.background}',
    },
    tab: {
      borderWidth: '2px 0 0 0',
      borderColor: '#ffffff',
      hoverBorderColor: '#ffffff',
      hoverColor: '{semantic_color-cheme.text.color}',
      padding: '1rem 1.25rem',
      fontWeight: '700',
      margin: '0rem',
      gap: '0.5rem',
    },
    tabpanel: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      padding: '0.875rem 1.125rem 1.125rem 1.125rem',
    },
    navButton: {
      background: '{semantic_color-cheme.content.background}',
      hoverColor: '{semantic_color-cheme.text.color}',
      width: '2.5rem',
      shadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)',
    },
    activeBar: {
      height: '0rem',
      bottom: '0',
      background: '#ffffff',
    },
  },
  tabview: {
    tabList: {
      background: '{semantic_color-cheme.content.background}',
    },
    tab: {
      hoverColor: '{semantic_color-cheme.text.color}',
    },
    tabPanel: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
    },
    navButton: {
      background: '{semantic_color-cheme.content.background}',
      hoverColor: '{semantic_color-cheme.text.color}',
      shadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)',
    },
  },
  tag: {
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
    primary: {
      background: '{semantic.primary.500}',
      color: '{text.color}',
    },
    secondary: {
      background: '{surface.200}',
      color: '{text.color}',
    },
    success: {
      background: '{extend.pallete.success.400}',
      color: '{extend.pallete.success.900}',
    },
    info: {
      background: '{extend.pallete.info.300}',
      color: '{extend.pallete.info.900}',
    },
    warn: {
      background: '{extend.pallete.warn.300}',
      color: '{extend.pallete.warn.900}',
    },
    danger: {
      background: '{extend.pallete.danger.300}',
      color: '{extend.pallete.danger.900}',
    },
  },
  terminal: {
    root: {
      height: '18rem',
    },
    prompt: {
      gap: '0.25rem',
    },
    commandResponse: {
      margin: '2px 0',
    },
  },
  tieredmenu: {
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
  timeline: {
    event: {
      minHeight: '5rem',
    },
    eventMarker: {
      size: '1.125rem',
      borderRadius: '50%',
      borderWidth: '2px',
      background: '{semantic_color-cheme.content.background}',
    },
    eventConnector: {
      size: '2px',
    },
  },
  toast: {
    root: {
      width: '25rem',
      borderWidth: '0 0 0 6px',
      blur: '1.5px',
    },
    icon: {
      size: '1.25rem',
    },
    content: {
      padding: '{semantic.overlay.popover.padding}',
      gap: '0.5rem',
    },
    text: {
      gap: '0.5rem',
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
      borderRadius: '50%',
    },
    closeIcon: {
      size: '1rem',
    },
    info: {
      background: '#ffffff',
      borderColor: '{primitive.colors.blue.500}',
      color: '{primitive.colors.blue.600}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    success: {
      background: '#ffffff',
      borderColor: '{primitive.colors.green.500}',
      color: '{primitive.colors.green.600}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    warn: {
      background: '#ffffff',
      borderColor: '{primitive.colors.yellow.500}',
      color: '{primitive.colors.yellow.600}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    error: {
      background: '#ffffff',
      borderColor: '{primitive.colors.red.500}',
      color: '{primitive.colors.red.600}',
      shadow: '{semantic.overlay.popover.shadow}',
    },
    secondary: {
      shadow: '{semantic.overlay.popover.shadow}',
    },
    contrast: {
      shadow: '{semantic.overlay.popover.shadow}',
    },
  },
  togglebutton: {
    extend: {
      gap: '0.75rem',
      xlg: {
        padding: '1.25rem 1.5rem',
        iconOnlyWidth: '4.0714rem',
      },
      iconOnlyWidth: '2.5rem',
      sm: {
        iconOnlyWidth: '2.1429rem',
      },
      hoverBorderColor: '{surface.300}',
      checkedHoverColor: '{text.extend.colorInverted}',
      checkedHoverBackground: '{surface.800}',
      checkedHoverBorderColor: '{surface.800}',
      lg: {
        iconOnlyWidth: '3.5714rem',
      },
    },
    root: {
      padding: '1rem 0.5rem',
      borderRadius: '{primitive.borderRadius.rounded}',
      gap: '0.5rem',
      fontWeight: '500',
      background: '{surface.200}',
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
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{semantic.formField.sm.fontSize}',
        padding: '0.75rem 0.25rem',
      },
      lg: {
        fontSize: '{semantic.formField.sm.fontSize}',
        padding: '1rem 1.5rem',
      },
    },
    icon: {
      color: '{text.color}',
      hoverColor: '{text.color}',
      checkedColor: '{text.extend.colorInverted}',
      disabledColor: '{formField.disabledColor}',
    },
    content: {
      checkedBackground: '{surface.extend.transparent}',
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
    root: {
      background: '{surface.400}',
      hoverBackground: '{surface.500}',
      disabledBackground: '{formField.disabledBackground}',
      checkedBackground: '{surface.900}',
      checkedHoverBackground: '{surface.500}',
      width: '2.5rem',
      height: '1.5rem',
      borderRadius: '{primitive.borderRadius.xl}',
      gap: '0.1429rem',
      borderWidth: '0rem',
      shadow: '{semantic.formField.focusRing.shadow}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        string: '{semantic.formField.focusRing.style}',
        color: '{semantic.primary.200}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
      borderColor: '{surface.extend.transparent}',
      hoverBorderColor: '{surface.extend.transparent}',
      checkedBorderColor: '{surface.extend.transparent}',
      checkedHoverBorderColor: '{surface.extend.transparent}',
      invalidBorderColor: '{formField.invalidBorderColor}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      slideDuration: '0.2s',
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
      borderRadius: '7.1429rem',
      size: '1.25rem',
    },
  },
  toolbar: {
    root: {
      color: '{semantic_color-cheme.content.color}',
      gap: '0.5rem',
      padding: '0.75rem',
    },
  },
  tooltip: {
    root: {
      background: '{surface.900}',
      color: '{text.extend.colorInverted}',
      maxWidth: '17rem',
      gutter: '0.25rem',
      shadow: '{overlay.popover.shadow}',
      padding: '0.5rem 1rem',
      borderRadius: '{semantic.overlay.popover.borderRadius}',
    },
  },
  tree: {
    root: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      padding: '1rem',
      gap: '2px',
      indent: '1rem',
    },
    node: {
      padding: '0.375rem 0.625rem',
      color: '{semantic_color-cheme.text.color}',
      selectedColor: '{semantic_color-cheme.highlight.color}',
      gap: '0.25rem',
    },
    nodeIcon: {
      selectedColor: '{semantic_color-cheme.highlight.color}',
    },
    nodeToggleButton: {
      borderRadius: '50%',
      size: '1.75rem',
      selectedHoverBackground: '{semantic_color-cheme.content.background}',
    },
    loadingIcon: {
      size: '2rem',
    },
    filter: {
      margin: '0 0 0.5rem 0',
    },
  },
  treeselect: {
    dropdown: {
      width: '2.5rem',
    },
    overlay: {
      background: '{semantic_color-cheme.overlay.select.background}',
      color: '{semantic_color-cheme.overlay.select.color}',
      shadow: '{semantic.overlay.select.shadow}',
    },
    tree: {
      padding: '{semantic.list.padding}',
    },
    emptyMessage: {
      padding: '{semantic.list.option.padding}',
    },
  },
  treetable: {
    header: {
      borderWidth: '1px 0 1px 0',
      padding: '0.75rem 1rem',
      color: '{semantic_color-cheme.text.color}',
    },
    headerCell: {
      selectedColor: '{semantic_color-cheme.highlight.color}',
      gap: '0.5rem',
      padding: '0.75rem 1rem',
      color: '{semantic_color-cheme.text.color}',
    },
    columnTitle: {
      fontWeight: '700',
    },
    row: {
      background: '{semantic_color-cheme.content.background}',
      color: '{semantic_color-cheme.content.color}',
      selectedColor: '{semantic_color-cheme.highlight.color}',
    },
    bodyCell: {
      padding: '0.75rem 1rem',
      gap: '0.5rem',
      selectedBorderColor: '{semantic.primary.100}',
    },
    footerCell: {
      padding: '0.75rem 1rem',
      color: '{semantic_color-cheme.text.color}',
    },
    columnFooter: {
      fontWeight: '700',
    },
    footer: {
      borderWidth: '0 0 1px 0',
      padding: '0.75rem 1rem',
      color: '{semantic_color-cheme.text.color}',
    },
    columnResizer: {
      width: '0.5rem',
    },
    resizeIndicator: {
      width: '1px',
    },
    sortIcon: {
      size: '0.875rem',
    },
    loadingIcon: {
      size: '2rem',
    },
    nodeToggleButton: {
      selectedHoverBackground: '{semantic_color-cheme.content.background}',
      hoverColor: '{semantic_color-cheme.text.color}',
      size: '1.75rem',
      borderRadius: '50%',
    },
    paginatorTop: {
      borderWidth: '0 0 1px 0',
    },
    paginatorBottom: {
      borderWidth: '0 0 1px 0',
    },
  },
  inputtext: {
    extend: {
      readonlyBackground: '{formField.readonlyBackground}',
      iconSize: '{semantic.iconSizeMedium}',
      xlg: {
        fontSize: '{sizing.inputtext.root.fontSize}',
        paddingX: '{sizing.inputtext.root.paddingX}',
        paddingY: '{sizing.inputtext.root.paddingY}',
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
      paddingX: '{sizing.inputtext.root.paddingX}',
      paddingY: '{sizing.inputtext.root.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      sm: {
        fontSize: '{sizing.inputtext.root.fontSize}',
        paddingX: '{sizing.inputtext.root.paddingX}',
        paddingY: '{sizing.inputtext.root.paddingY}',
      },
      lg: {
        fontSize: '{sizing.inputtext.root.fontSize}',
        paddingX: '{sizing.inputtext.root.paddingX}',
        paddingY: '{sizing.inputtext.root.paddingY}',
      },
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
      },
    },
  },
  selectbutton: {
    extend: {
      background: '{surface.200}',
    },
    root: {
      borderradius3: '{primitive.borderRadius.rounded}',
      invalidBorderColor: '{formField.invalidBorderColor}',
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
      paddingX: '{semantic.formField.paddingX}',
      paddingY: '{semantic.formField.paddingY}',
      borderRadius: '{semantic.formField.borderRadius}',
      transitionDuration: '{semantic.formField.transitionDuration}',
      focusRing: {
        width: '{semantic.formField.focusRing.width}',
        style: '{semantic.formField.focusRing.style}',
        color: '{semantic.formField.focusRing.color}',
        offset: '{semantic.formField.focusRing.offset}',
        shadow: '{formField.shadow}',
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
};
