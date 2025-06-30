export default {
  panel: {
    padding: 0,
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-panelmenu.p-component > .p-panelmenu-panel {
      border: none;
    }
    
    .p-panelmenu-panel > .p-disabled {
      background: ${dt('ButtonDisabledDisabledButtonBg')};
      border-radius: calc(${dt('menuItemMenuitemBorderRadius')} * 1px);
      border: 1px solid ${dt('buttonDisabledDisabledButtonBorderColor')};
    }
    
    .p-panelmenu-panel > .p-disabled .p-panelmenu-submenu-icon {
      color: ${dt('buttonDisabledDisabledButtonTextColor')};
    }
  `,
};
