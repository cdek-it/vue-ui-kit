// tokens - `src/plugins/prime/theme/tokens.ts` - Panel -> Accordion

// Шаблон вставки токена: { prefix + token }
// Префикс токена - PanelAccordion
// Пример: {PanelAccordion + accordionHeaderTextColor} = {PanelAccordionAccordionHeaderTextColor}
// При слиянии префикса и токена, имя токена указываем с заглавной буквы

export default {
  root: {
    header: {
      padding:
        '{PanelAccordionAccordionHeaderPaddingTopBottom} 0 {PanelAccordionAccordionHeaderPaddingTopBottom} 0.25rem',
      font: {
        weight: '{PanelAccordionAccordionHeaderFontWeight}',
      },
    },
  },

  colorScheme: {
    light: {
      root: {
        header: {
          color: '{PanelAccordionAccordionHeaderTextColor}',
          toggle: {
            icon: {
              color: '{PanelAccordionAccordionHeaderTextColor}',
            },
          },
          active: {
            color: '{PanelAccordionAccordionHeaderActiveTextColor}',
          },
        },
      },
    },
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-accordionheader {
      justify-content: start;
    }

    .p-accordionheader .p-accordionheader-toggle-icon {
      order: -1;
      margin-right: 0.5rem;
      transform: rotate(-90deg);
    }
    
    .p-accordionpanel.p-accordionpanel-active .p-accordionheader-toggle-icon {
      transform: rotate(180deg);
    }
    
    .p-accordionpanel.p-disabled {
      opacity: 1;
      mix-blend-mode: unset;
    }

    .p-accordionpanel.p-disabled .p-accordionheader,
    .p-accordionpanel.p-disabled .p-accordionheader-toggle-icon {
      color: rgb(163, 163, 163);
    }
    
    .p-accordionpanel:last-child {
      border-bottom: none;
    }
  `,
};
