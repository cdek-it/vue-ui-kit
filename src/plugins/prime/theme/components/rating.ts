export default {
  colorScheme: {
    icon: {
      size: '1.25rem',
      color: '{black.60}',
      hoverColor: '{orange.500}',
      activeColor: '{orange.400}',
    },
  },

  css: ({ dt }: { dt: (key: string) => string }) => `
    .p-rating.p-disabled {
      
    }
  
    .p-rating.p-disabled .p-rating-icon {
      color: ${dt('black.60')};
    }
    
    .p-rating.p-disabled .p-rating-option-active .p-rating-icon {
      color: ${dt('surface.400')};
    }
  `,
};
