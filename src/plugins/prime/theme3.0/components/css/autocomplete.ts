const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовый контейнер */
.p-autocomplete {
  width: 100%;
}

.p-autocomplete:has(input:disabled) .p-autocomplete-input,
.p-autocomplete:has(input:disabled) .p-autocomplete-input-multiple,
.p-autocomplete:has(input:disabled) .p-autocomplete-dropdown {
  border-color: ${dt('form.borderColor')};
}

/* Настройка инпута и границ */
.p-autocomplete .p-autocomplete-input {
  width: 100%;
  padding: ${dt('autocomplete.root.paddingY')} ${dt(
  'autocomplete.root.paddingX'
)};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Монолитный вид (убираем внутренние границы при наличии dropdown) */
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
  border-right-width: 0;
}

.p-autocomplete .p-autocomplete-dropdown {
  border-left-width: 0;
}

/* Состояния: Hover синхронизация (акцентный цвет) */
.p-autocomplete.p-component:not(:has(input:disabled)):hover .p-inputtext.p-autocomplete-input,
.p-autocomplete.p-component:not(:has(input:disabled)):hover .p-autocomplete-dropdown,
.p-autocomplete.p-component:not(:has(input:disabled)):has(.p-autocomplete-input:hover) .p-autocomplete-dropdown {
  border-color: ${dt('form.hoverBorderSecondaryColor')};
}

/* Состояния: Focus синхронизация */
.p-autocomplete:has(.p-autocomplete-input:focus) .p-autocomplete-dropdown {
  border-color: ${dt('form.focusBorderSecondaryColor')};
}

/* Иконки: цвет и позиционирование */
.p-autocomplete-clear-icon,
.p-autocomplete-dropdown .p-icon {
  color: var(--p-form-field-icon-color);
}

.p-autocomplete.p-component:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
  inset-inline-end: ${dt('form.width.300')};
}



/* Multiple-режим, Чипсы и Опции */
.p-autocomplete .p-autocomplete-input-multiple {
  line-height: ${dt('fonts.lineHeight.250')};
  padding: ${dt('autocomplete.root.paddingY')} ${dt(
  'autocomplete.root.paddingX'
)};
}

.p-autocomplete .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
  /* Полностью симметричные отступы (высота = ширина) */
  padding: calc(${dt('autocomplete.root.paddingY')} - 5px);
}

/* Убираем вертикальные отступы у контейнера инпута в multiple режиме */
.p-autocomplete .p-autocomplete-input-chip {
  padding-block-start: 0;
  padding-block-end: 0;
}

/* Внутренний инпут внутри multiple режима */
.p-autocomplete .p-autocomplete-input-multiple [data-pc-section="input"] {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0;
  margin: 0;
  line-height: inherit;
}

.p-autocomplete .p-autocomplete-chip,
.p-autocomplete-option {
  gap: ${dt('autocomplete.extend.extOption.gap')};
}

.p-autocomplete-option-group {
  gap: ${dt('autocomplete.extend.extOptionGroup.gap')};
}

.p-chip.p-chip:has(.p-chip-remove-icon) {
  padding-inline-end: ${dt('chip.root.paddingX')};
}

/* Поддержка размеров: sm, lg, xlg (как в InputText) */
/* Специфичность (0,3,0) гарантирует приоритет */
.p-autocomplete.p-component .p-inputtext-sm.p-autocomplete-input,
.p-autocomplete.p-component .p-inputtext-sm.p-autocomplete-input-multiple {
  font-size: ${dt('form.sm.fontSize')};
  padding: ${dt('form.sm.paddingY')} ${dt('form.paddingX')};
}

.p-autocomplete.p-component .p-inputtext-sm.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
  padding: calc(${dt('form.sm.paddingY')} - 4.75px);
}

.p-autocomplete.p-component .p-inputtext-lg.p-autocomplete-input,
.p-autocomplete.p-component .p-inputtext-lg.p-autocomplete-input-multiple {
  font-size: ${dt('form.lg.fontSize')};
  padding: ${dt('form.lg.paddingY')} ${dt('form.paddingX')};
}

.p-autocomplete.p-component .p-inputtext-lg.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
  /* Симметричные отступы (-4.75px) для достижения итоговой высоты 55.5px */
  padding: calc(${dt('form.lg.paddingY')} - 4.75px);
}

.p-autocomplete.p-component .p-inputtext-xlg.p-autocomplete-input,
.p-autocomplete.p-component .p-inputtext-xlg.p-autocomplete-input-multiple {
  font-size: ${dt('form.xlg.fontSize')};
  padding: ${dt('form.xlg.paddingY')} ${dt('form.paddingX')};
}

.p-autocomplete.p-component .p-inputtext-xlg.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
  /* Симметричные отступы (-4.75px) для достижения итоговой высоты 62.5px */
  padding: calc(${dt('form.xlg.paddingY')} - 4.75px);
}

.p-autocomplete.p-component .p-inputtext-xlg .p-autocomplete-chip {
  padding-top: ${dt('spacing.2x')};
  padding-bottom: ${dt('spacing.2x')};
  font-size: ${dt('fonts.fontSize.300')};
}
`;

export default css;
