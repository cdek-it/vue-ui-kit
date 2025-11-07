export default {
  checkmark: {
    gutterStart: 0,
    gutterEnd: '0.5rem',
  },

  css: ({ dt }: { dt: (token: string) => string }) => `
    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-disabled).p-focus:not(:hover) {
       box-shadow: 0px 0px 0px 0.25rem ${dt('primary.200')};
       background: ${dt('surface.ground')};
    }
    
    .p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected:hover {
      background: ${dt('primary.800')};
    }
    
    .p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected:not(.p-disabled).p-focus:not(:hover) {
       background: ${dt('primary.700')};
    }
    
    .p-listbox-option-selected > .p-listbox-option-check-icon {
      color: ${dt('list.option.selected.color')};
    }
    
    .p-listbox.p-disabled .p-listbox-list .p-listbox-option.p-listbox-option-selected {
      background: ${dt('surface.600')};
    }
  `,
};
