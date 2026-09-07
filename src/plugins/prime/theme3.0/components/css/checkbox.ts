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

/* Focus ring с зеленым цветом для валидных состояний */
.p-checkbox.p-component:not(.p-disabled):not(.p-checkbox-checked):not(.p-invalid):has(.p-checkbox-input:focus-visible) .p-checkbox-box,
.p-checkbox.p-checkbox-checked:not(.p-disabled):not(.p-invalid):has(.p-checkbox-input:focus-visible) .p-checkbox-box,
.p-checkbox[data-p-indeterminate].p-component:not(.p-disabled):not(.p-invalid):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
  box-shadow: 0 0 0 ${dt('checkbox.root.focusRing.focusRing')} ${dt(
  'focusRing.extend.success'
)};
}

/* Focus ring с красным цветом для состояний с ошибкой */
.p-invalid .p-checkbox-box,
.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible).p-invalid .p-checkbox-box,
.p-checkbox-checked.p-invalid .p-checkbox-box,
.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible).p-invalid .p-checkbox-box,
.p-checkbox[data-p-indeterminate].p-invalid .p-checkbox-box,
.p-checkbox[data-p-indeterminate]:not(.p-disabled):has(.p-checkbox-input:focus-visible).p-invalid .p-checkbox-box {
  box-shadow: 0 0 0 ${dt('focusRing.width')} ${dt('focusRing.extend.invalid')};
}
`;

export default css;
