export default {
  root: {
    padding: 0,
    gap: '{menuItemMenuitemSpacing}',
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-menubar {
      border: none;
    }
  
    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
      background: ${dt('menuItemMenuitemHoverBg')};
      color: ${dt('menuItemMenuitemHoverTextColor')};
    }
    
    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
      color: ${dt('menuItemMenuitemHoverIconColor')};
    }
    
    .p-menubar-item.p-menuitem-checked > .p-menubar-item-content {
      background: ${dt('menuItemMenuitemActiveBg')};
      color: ${dt('menuItemMenuitemActiveTextColor')};
    }
    
    .p-menubar-item.p-menuitem-checked > .p-menubar-item-content .p-menubar-submenu-icon {
      color: ${dt('menuItemMenuitemActiveTextColor')};
    }
    
    .p-menubar-item.p-menuitem-checked > .p-menubar-item-content:hover  {
      background: ${dt('menuItemMenuitemActiveHoverBg')};
      color: ${dt('menuItemMenuitemActiveTextColor')};
    }
    
    .p-menubar-item.p-menuitem-checked > .p-menubar-item-content:hover .p-menubar-submenu-icon{
      color: ${dt('MenuItemMenuitemActiveIconColor')};
    }
    
    .p-menubar-item.p-disabled {
      background: ${dt('ButtonDisabledDisabledButtonBg')};
      border-radius: calc(${dt('menuItemMenuitemBorderRadius')} * 1px);
      border: 1px solid ${dt('buttonDisabledDisabledButtonBorderColor')};
    }
    
    .p-menubar-item.p-disabled .p-menubar-item-icon{
      color: ${dt('buttonDisabledDisabledButtonTextColor')};
    }
  `,
};
