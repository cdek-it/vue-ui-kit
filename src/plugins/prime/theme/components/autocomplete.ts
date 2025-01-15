export default {
  focusBorderColor: '{surface.200}',

  css: ({ dt }: { dt: (key: string) => string }) => `
    .p-autocomplete-input-chip {
      padding-inline: 0.5rem;
    }
    
    .p-autocomplete-chip.p-chip {
      padding-block: 0;
      height: 1.75rem;
    }
    
    .p-autocomplete-input-chip[role="option"] {
      margin-left: calc(-0.5 * var(--p-autocomplete-padding-y));
    }
    
    .p-autocomplete.p-disabled {
      .p-chip-remove-icon {
        outline: none;
      }
    }
  `,
};
