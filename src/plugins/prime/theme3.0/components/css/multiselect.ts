const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили */
.p-multiselect {
  width: 100%;
  border-width: ${dt('multiselect.extend.borderWidth')};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Readonly состояние */
.p-multiselect[readonly] {
  background: ${dt('multiselect.extend.readonlyBackground')};
  cursor: default;
  pointer-events: none;
}

/* Исправление паддинга для чипа с иконкой удаления */
.p-multiselect .p-chip:has(.p-chip-remove-icon) {
  padding-inline-end: ${dt('chip.root.paddingX')};
}

/* Совместимость с FloatLabel variant="in" */
.p-floatlabel-in .p-multiselect .p-multiselect-label {
  padding-block-start: ${dt('floatlabel.in.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.in.input.paddingBottom')};
}

/* Размер XLarge — класс добавляется вручную через :class в шаблоне */
.p-multiselect.p-component.p-multiselect-xlg .p-multiselect-label {
  font-size: ${dt('inputtext.extend.extXlg.fontSize')};
  padding-block: ${dt('inputtext.extend.extXlg.paddingY')};
  padding-inline: ${dt('inputtext.extend.extXlg.paddingX')};
}

/* Специфичные отступы для режима чипов (расчет на основе Autocomplete для сохранения высоты) */
.p-multiselect.p-component.p-multiselect-display-chip .p-multiselect-label:has(.p-chip) {
  padding-block: calc(${dt('multiselect.root.paddingY')} - 7px);
  padding-inline: calc(${dt('multiselect.root.paddingX')} - 7px);
}

.p-multiselect.p-component.p-multiselect-sm.p-multiselect-display-chip .p-multiselect-label:has(.p-chip) {
  padding-block: calc(${dt('multiselect.root.sm.paddingY')} - 7px);
  padding-inline: calc(${dt('multiselect.root.sm.paddingX')} - 7px);
}

.p-multiselect.p-component.p-multiselect-lg.p-multiselect-display-chip .p-multiselect-label:has(.p-chip) {
  padding-block: calc(${dt('multiselect.root.lg.paddingY')} - 7px);
  padding-inline: calc(${dt('multiselect.root.lg.paddingX')} - 7px);
}

.p-multiselect.p-component.p-multiselect-xlg.p-multiselect-display-chip .p-multiselect-label:has(.p-chip) {
  padding-block: calc(${dt('inputtext.extend.extXlg.paddingY')} - 7px);
  padding-inline: calc(${dt('inputtext.extend.extXlg.paddingX')} - 7px);
}
`;

export default css;
