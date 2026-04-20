const css = ({ dt }: { dt: (token: string) => string }) => `

.p-datepicker.p-datepicker {
  display: inline-flex;
  position: relative;
  max-width: fit-content;
}

.p-datepicker-panel.p-datepicker-panel {
  box-shadow: ${dt('datepicker.panel.shadow')};
  overflow: hidden;
}

.p-datepicker-header.p-datepicker-header {
  gap: ${dt('datepicker.title.gap')};
  padding: ${dt('datepicker.header.padding')};
}

.p-datepicker-year-select {
  min-width: ${dt('datepicker.extend.extSelectYear.minWidth')};
}

.p-datepicker-header.p-datepicker-header .p-button-text {
  width: ${dt('datepicker.dropdown.width')};
  height: ${dt('datepicker.dropdown.width')};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-datepicker-today.p-datepicker-today > .p-datepicker-day:not(.p-datepicker-day-selected) {
  border: ${dt('form.borderWidth')} solid ${dt(
  'datepicker.extend.extToday.borderColor'
)};
}

.p-datepicker-today.p-datepicker-today:hover > .p-datepicker-day:not(.p-datepicker-day-selected),
.p-datepicker-day-preview.p-datepicker-day-preview:not(.p-datepicker-day-selected) {
  background: ${dt('datepicker.extend.extToday.hoverBackground')};
}

.p-datepicker-day-preview.p-datepicker-day-preview:not(.p-datepicker-day-selected) {
  color: ${dt('datepicker.date.color')};
}

.p-datepicker-day-view.p-datepicker-day-view {
  width: stretch;
  border-collapse: separate;
  table-layout: auto;
  margin: ${dt('datepicker.dayView.margin')};
}

.p-datepicker-time-picker.p-datepicker-time-picker {
  min-width: ${dt('datepicker.extend.extTimePicker.minWidth')};
  color: ${dt('datepicker.extend.extTimePicker.color')};
}

.p-datepicker-buttonbar.p-datepicker-buttonbar .p-button.p-button {
  background: transparent;
  color: ${dt('button.colorScheme.light.text.primary.color')};
  border: 0 none;
  font-family: ${dt('fonts.fontFamily.heading')};
  font-weight: ${dt('button.root.label.fontWeight')};
  transition: background-color ${dt('button.root.transitionDuration')};
}

.p-datepicker-buttonbar.p-datepicker-buttonbar .p-button.p-button:not(:disabled):hover {
  background: ${dt('button.colorScheme.light.text.primary.hoverBackground')};
  color: ${dt('button.colorScheme.light.text.primary.color')};
}

.p-datepicker-buttonbar.p-datepicker-buttonbar .p-button.p-button:not(:disabled):active {
  background: ${dt('button.colorScheme.light.text.primary.activeBackground')};
  color: ${dt('button.colorScheme.light.text.primary.color')};
}

.p-datepicker.p-datepicker:has(.p-datepicker-clear-icon) .p-datepicker-clear-icon {
  position: absolute;
  right: ${dt('datepicker.dropdown.width')};
  cursor: pointer;
  z-index: 1;
}

.p-datepicker.p-datepicker:not(.p-inputwrapper-filled) .p-datepicker-clear-icon,
.p-datepicker.p-datepicker:has(.p-datepicker-input:placeholder-shown) .p-datepicker-clear-icon {
  display: none;
}

:is(.p-datepicker-month-select, .p-datepicker-year-select) .p-select-dropdown {
  color: ${dt('datepicker.inputIcon.color')};
}

:is(.p-datepicker-month-select, .p-datepicker-year-select) .p-select-label {
  width: ${dt('sizing.24x')};
}

`;

export default css;
