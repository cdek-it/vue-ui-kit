const css = ({ dt }: { dt: (token: string) => string }) => `
/* Переопределение ширины border для checkbox */
.p-checkbox-box {
  border-width: ${dt('checkbox.root.extend.borderWidth')};
}

/* Состояние indeterminate - фон и border как у checked */
.p-checkbox[data-p-indeterminate] .p-checkbox-box {
  background: ${dt('checkbox.root.checkedBackground')};
  border-color: ${dt('checkbox.root.checkedBorderColor')};
}

/* Состояние indeterminate - цвет иконки как у checked */
.p-checkbox[data-p-indeterminate] .p-checkbox-icon {
  color: ${dt('checkbox.icon.checkedColor')};
}

/* Состояние hover для indeterminate */
.p-checkbox[data-p-indeterminate]:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
  background: ${dt('checkbox.root.checkedHoverBackground')};
  border-color: ${dt('checkbox.root.checkedHoverBorderColor')};
}

`;

export default css;
