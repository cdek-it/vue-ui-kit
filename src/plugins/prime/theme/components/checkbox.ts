export default {
  root: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '3.5px',
  },
  css: ({ dt }: { dt: (key: string) => string }) => `
    .p-checkbox[data-p-indeterminate] {
      --p-checkbox-background: ${dt('primary.color')};
      --p-checkbox-border-color: ${dt('primary.color')};
      --p-checkbox-icon-color: ${dt('primary.contrast.color')};
      --p-checkbox-focus-border-color: ${dt('primary.color')};
    }

    .p-checkbox[data-p-indeterminate]:not(.p-disabled):has(.p-checkbox-input:hover) {
      --p-checkbox-background: ${dt('primary.hover.color')};
    }

    .p-checkbox.p-checkbox-checked.p-disabled,
    .p-checkbox[data-p-indeterminate].p-disabled {
      --p-checkbox-disabled-background: ${dt('surface.600')};
      --p-checkbox-icon-disabled-color: ${dt('primary.contrast.color')};
      --p-checkbox-checked-disabled-border-color: ${dt('surface.600')};
    }
  `,
};
