import type { CardTokenSections } from '@primeuix/themes/types/card';

const body: CardTokenSections.Body = {
  padding: '{panel.card.cardBodyPadding}',
  gap: '0',
};

export const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-card-content {
    padding: ${dt('panel.card.cardContentPadding')};
  }
  
  .p-card-footer {
     padding: ${dt('panel.card.cardFooterPadding')};
  }
`;

export default {
  body,
  css,
};
