export default ({ dt }: { dt: (token: string) => string }) => `
/* Кастомные стили для Paginator компонента согласно дизайну Figma */

/* Current page report - цвет текста */
.p-paginator .p-paginator-current {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
  color: ${dt('paginator.currentPageReport.color')};
}

/* Page buttons - стили для кнопок страниц */
.p-paginator .p-paginator-page {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.25')};
}
`;
