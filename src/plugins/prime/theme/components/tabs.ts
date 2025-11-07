import type { TabsTokenSections } from '@primeuix/themes/types/tabs';

const tab: TabsTokenSections.Tab = {
  color: '{panel.tabView.tabviewHeaderTextColor}',
  hoverColor: '{panel.tabView.tabviewHeaderHoverTextColor}',
  fontWeight: '{panel.tabView.tabviewHeaderFontWeight}',
  padding: '{panel.tabView.tabviewHeaderPadding}',
};

export const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-tablist-tab-list {
    gap: ${dt('panel.tabView.tabviewHeaderSpacing')};
  }

  .p-tab {
    display: flex;
    align-items: center;
  }
  
  .p-tab-active {
    border-bottom-width: ${dt('panel.tabView.tabviewHeaderBorderWidth')};
    padding-bottom: calc(1.32142857rem - ${dt(
      'panel.tabView.tabviewHeaderBorderWidth'
    )});
  }
`;

export default {
  tab,
  css,
};
