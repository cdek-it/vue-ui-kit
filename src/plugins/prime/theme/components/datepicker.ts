export default {
  date: {
    borderRadius: '7px',
    width: '2.143rem',
    height: '2.143rem',
    padding: '0.25rem 0.454rem',
  },
  buttonbar: {
    padding: 0,
  },
  timePicker: {
    padding: 0,
  },
  colorScheme: {
    today: {
      background: '{surface.transparent}',
    },
  },
  css: ({ dt }: { dt: (key: string) => string }) => `
  .p-datepicker-day-selected:hover {
    background: ${dt('primary.hover.color')}
  }
  
  .p-datepicker-today > .p-datepicker-day:not(.p-datepicker-day-selected) {
    color: ${dt('{black.60}')};
    border-color: ${dt('{surface.100}')};
  }
  
  .p-datepicker-today:hover > .p-datepicker-day {
    border-color: ${dt('{surface.hover}')};
  }
  
  .p-datepicker-header {
    border-block-end: none;
  }
  
  .p-datepicker-title > button[class*="p-datepicker-select-"]:hover {
    background: ${dt('{surface.transparent}')};
    color: ${dt('primary.700')};
  }
  
  .p-datepicker-time-picker {
    border-block-start: none;
  }
  
  .p-datepicker-panel .p-button.p-button-icon-only {
    background: ${dt('{surface.transparent}')};
    color: ${dt('{general.actionIconColor}')};
    border-radius: 7px;
    width: 2rem;
    height: 2rem;
  }
  
  .p-datepicker-panel .p-button.p-button-icon-only:disabled {
    border-color: ${dt('{surface.transparent}')};
  }
  
  .p-datepicker-panel .p-button:not(:disabled):not(:active).p-button-icon-only:hover {
    background: ${dt('{surface.hover}')};
    color: ${dt('{general.actionIconColor}')};
    box-shadow: none;
  }
  
  .p-datepicker-time-picker .p-button:not(:disabled):not(:active):hover {
    box-shadow: none;
  }
  
  .p-datepicker-time-picker .p-button:focus-visible {
    outline: none;
  }
  
  .p-datepicker-buttonbar {
    border-block-start: none;
  }
  `,
};
