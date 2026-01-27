const css = ({ dt }: { dt: (token: string) => string }) => `

/* Стилизация текста заголовка */
.p-accordionheader {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.base')};
}

/* Иконка chevron перемещается в конец */
.p-accordionheader-toggle-icon {
  font-size: ${dt('accordion.extend.extHeader.iconSize')};
}

/* Иконка chevron в активном состоянии */
.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
  font-size: ${dt('accordion.extend.extHeader.iconSize')};
}

/* Кастомная структура с иконкой в хедере */
.p-accordionheader > div {
  display: flex;
  align-items: center;
  gap: ${dt('accordion.extend.extHeader.gap')};
}

/* Размер кастомных иконок в заголовке */
.p-accordionheader > div > i {
  font-size: ${dt('accordion.extend.extHeader.iconSize')};
}
`;

export default css;
