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
.p-floatlabel-in.p-floatlabel-in :is(.p-inputtext, .p-textarea, .p-select-label, .p-multiselect-label, .p-autocomplete-input-multiple, .p-cascadeselect-label, .p-treeselect-label) {
  padding-block: ${dt('floatlabel.inside.input.paddingTop')} ${dt(
  'floatlabel.inside.input.paddingBottom'
)};
}

/* Позиция и стили label в активном состоянии (приоритизация) */
.p-floatlabel-in.p-floatlabel-in:has(:is(input:focus, input.p-filled, textarea:focus, textarea.p-filled, .p-inputwrapper-focus, .p-inputwrapper-filled)) label {
  top: ${dt('floatlabel.inside.active.top')};
  font-size: ${dt('floatlabel.root.active.fontSize')};
  font-weight: ${dt('floatlabel.root.active.fontWeight')};
}
`;

export default css;
