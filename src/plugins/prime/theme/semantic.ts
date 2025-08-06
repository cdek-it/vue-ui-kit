import { primaryColor, semanticColors } from './primitive';

export default {
  primary: primaryColor,
  formField: {
    borderRadius: '7px',
    lgFontSize: '1.25rem',
  },
  colorScheme: {
    light: {
      ...semanticColors.light,
      content: {
        background: '{surface.ground}',
      },
      focusRingColor: '{primary.200}',
      formField: {
        background: '{form.inputText.input.bg}',
        disabledBackground: '{button.disabled.disabled.button.bg}',
        disabledColor: '{black.80}',
        placeholderColor: '{form.inputText.input.placeholder.text.color}',
        borderColor: '{form.inputText.input.borderColor}',
        hoverBorderColor: '{primary.color}',
        invalid: {
          placeholderColor: '{form.inputText.input.placeholder.text.color}',
          borderColor: '{danger.400}',
        },
        color: '{form.inputText.input.text.color}',
        focusRing: {
          color: '{primary.200}',
          width: '0.25rem',
          style: 'solid',
        },
        icon: {
          color: '{form.inputText.input.placeholder.text.color}',
        },
        floatLabel: {
          color: '{general.text.secondary.color}',
        },
        focus: {
          border: {
            color: '{surface.border}',
          },
        },
      },
      list: {
        gap: '0.25rem',
        option: {
          focus: {
            background: '{surface.100}',
            color: '{listBox.input.listItem.textColor}',
          },
          selected: {
            background: '{primary.700}',
            color: '{surface.ground}',
            focus: {
              color: '{surface.ground}',
              background: '{primary.700}',
            },
          },
        },
      },
      overlay: {
        select: {
          background: '{surface.ground}',
        },
        popover: {
          background: '{surface.ground}',
        },
      },
      navigation: {
        item: {
          focus: {
            background: '{menuItemMenuitemHoverBg}',
            color: `{menuItemMenuitemHoverTextColor}`,
          },
          icon: {
            focus: {
              color: '{menuItemMenuitemActiveIconColor}',
            },
          },
        },
        submenu: {
          icon: {
            size: '1.25rem',
            color: '{menuItemMenuitemHoverIconColor}',
            focus: {
              color: '{menuItemMenuitemHoverIconColor}',
            },
          },
        },
      },
      stepper: {
        stepsItemBg: '{surface.ground}',
        stepsItemBorderColor: '{surface.border}',
      },
    },
    dark: {
      ...semanticColors.dark,
      content: {
        background: '{surface.ground}',
      },
      focusRingColor: '{primary.200}',
      formField: {
        background: '{form.inputText.input.bg}',
        disabledBackground: '{button.disabled.disabled.button.bg}',
        placeholderColor: '{form.inputText.input.placeholder.text.color}',
        borderColor: '{form.inputText.input.borderColor}',
        hoverBorderColor: '{primary.color}',
        invalid: {
          placeholderColor: '{form.inputText.input.placeholder.text.color}',
          borderColor: '{danger.400}',
        },
        color: '{form.inputText.input.text.color}',
        focusRing: {
          color: '{primary.200}',
          width: '0.25rem',
          style: 'solid',
        },
        icon: {
          color: '{form.inputText.input.placeholder.text.color}',
        },
        floatLabel: {
          color: '{general.text.secondary.color}',
        },
        focus: {
          border: {
            color: '{surface.border}',
          },
        },
      },
      list: {
        gap: '0.25rem',
        option: {
          focus: {
            background: '{surface.100}',
            color: '{listBox.input.listItem.textColor}',
          },
          selected: {
            background: '{primary.700}',
            color: '{surface.ground}',
            focus: {
              color: '{surface.ground}',
              background: '{primary.700}',
            },
          },
        },
      },
      overlay: {
        select: {
          background: '{surface.ground}',
        },
        popover: {
          background: '{surface.ground}',
        },
      },
      stepper: {
        stepsItemBg: '{surface.ground}',
        stepsItemBorderColor: '{surface.border}',
      },
    },
  },
  stepper: {
    stepsItemBg: '{surface.ground}',
    stepsItemBorderColor: '{surface.border}',
  },
  focusRing: {
    width: '3.5px',
    style: 'solid',
    offset: '0',
  },
};
