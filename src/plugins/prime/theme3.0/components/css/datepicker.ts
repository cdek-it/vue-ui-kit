const css = ({ dt }: { dt: (token: string) => string }) => `
.p-datepicker.p-datepicker, .p-datepicker-panel.p-datepicker-panel,
.p-datepicker-calendar-container.p-datepicker-calendar-container,
.p-datepicker-calendar.p-datepicker-calendar {
  width: fit-content; 
  min-width: max-content; 
  max-width: none;
}
.p-datepicker.p-datepicker { display: inline-flex; }
.p-datepicker-panel.p-datepicker-panel {
  box-shadow: ${dt('datepicker.panel.shadow')};
}
.p-datepicker-calendar-container.p-datepicker-calendar-container { display: block; width: 100%; }
.p-datepicker-calendar.p-datepicker-calendar { display: flex; flex-direction: column; width: 100%; }
.p-datepicker-header.p-datepicker-header {
  gap: ${dt('datepicker.title.gap')};
  padding: ${dt('datepicker.header.padding')};
}
.p-datepicker-month-select { min-width: ${dt(
  'datepicker.extend.extSelectMonth.minWidth'
)}; }
.p-datepicker-year-select { min-width: ${dt(
  'datepicker.extend.extSelectYear.minWidth'
)}; }
.p-datepicker-header.p-datepicker-header .p-button-text {
  width: ${dt('datepicker.dropdown.width')}; 
  height: ${dt('datepicker.dropdown.width')};
  padding: 0; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}
.p-datepicker-day.p-datepicker-today.p-datepicker-today:not(.p-datepicker-day-selected) {
  border: ${dt('form.borderWidth')} solid ${dt(
  'datepicker.extend.extToday.borderColor'
)};
}
.p-datepicker-day.p-datepicker-today.p-datepicker-today:not(.p-datepicker-day-selected):hover {
  background: ${dt('datepicker.extend.extToday.hoverBackground')};
}
.p-datepicker-day-selected.p-datepicker-day-selected:hover {
  background: ${dt('datepicker.extend.extDate.selectedHoverBackground')};
}
.p-datepicker-day-view.p-datepicker-day-view {
  width: auto; 
  border-collapse: separate; 
  table-layout: auto;
  margin: ${dt('datepicker.dayView.margin')};
}
.p-datepicker-time-picker.p-datepicker-time-picker {
  min-width: ${dt('datepicker.extend.extTimePicker.minWidth')};
  color: ${dt('datepicker.extend.extTimePicker.color')};
}
`;
export default css;
