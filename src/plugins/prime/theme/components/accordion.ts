// tokens - `src/plugins/prime/theme/tokens.ts` - Panel -> Accordion

import type { AccordionTokenSections } from '@primeuix/themes/types/accordion';

export const header: AccordionTokenSections.Header = {
  padding:
    '{panel.accordion.accordionHeaderPaddingTopBottom} 0 {panel.accordion.accordionHeaderPaddingTopBottom} 0.25rem',
  fontWeight: '{panel.accordion.accordionHeaderFontWeight}',
};

export const content: AccordionTokenSections.Content = {
  // Если через {panel.accordion.accordionContentPadding}, то не срабатывает
  padding:
    '{panel.accordion.accordionContentPaddingTop} {panel.accordion.accordionContentPaddingRight} {panel.accordion.accordionContentPaddingBottom} {panel.accordion.accordionContentPaddingLeft}',
};

export const colorScheme: AccordionTokenSections.ColorScheme = {
  light: {
    header: {
      color: '{panel.accordion.accordionHeaderTextColor}',
      toggleIcon: {
        color: '{panel.accordion.accordionHeaderTextColor}',
      },
      activeColor: '{panel.accordion.accordionHeaderActiveTextColor}',
    },
  },
};

export const css = () => `
  .p-accordionheader {
    justify-content: start;
  }

  .p-accordionheader .p-accordionheader-toggle-icon {
    order: -1;
    flex-shrink: 0;
    margin-right: 0.5rem;
    transform: rotate(-90deg);
  }
  
  .p-accordionpanel.p-accordionpanel-active .p-accordionheader-toggle-icon {
    transform: rotate(180deg);
  }
  
  .p-accordionpanel:last-child {
    border-bottom: none;
  }
`;

export default { header, content, colorScheme, css };
