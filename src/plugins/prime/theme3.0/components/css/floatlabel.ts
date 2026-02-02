const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовый контейнер FloatLabel */
.p-floatlabel-in {
  display: block;
  position: relative;
}

/* Размер иконки внутри FloatLabel (приоритизация) */
.p-floatlabel-in.p-floatlabel-in .p-iconfield .p-inputicon {
  font-size: ${dt('floatlabel.extend.iconSize')};
  width: ${dt('floatlabel.extend.iconSize')};
  height: ${dt('floatlabel.extend.iconSize')};
}

/* Padding для input элементов внутри FloatLabel (приоритизация) */
.p-floatlabel-in.p-floatlabel-in .p-inputtext,
.p-floatlabel-in.p-floatlabel-in .p-textarea,
.p-floatlabel-in.p-floatlabel-in .p-select-label,
.p-floatlabel-in.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in.p-floatlabel-in .p-multiselect-label:has(.p-chip),
.p-floatlabel-in.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in.p-floatlabel-in .p-treeselect-label {
  padding-block-start: ${dt('floatlabel.inside.input.paddingTop')};
  padding-block-end: ${dt('floatlabel.inside.input.paddingBottom')};
}

/* Позиция и стили label в активном состоянии (приоритизация) */
.p-floatlabel-in.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in.p-floatlabel-in:has(.p-inputwrapper-filled) label {
  top: ${dt('floatlabel.inside.active.top')};
  font-size: ${dt('floatlabel.root.active.fontSize')};
  font-weight: ${dt('floatlabel.root.active.fontWeight')};
}
`;

export default css;
