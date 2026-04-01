const css = ({ dt }: { dt: (token: string) => string }) => `
/* Шрифт для текста кнопки */
.p-button.p-component .p-button-label {
  font-family: ${dt('fonts.fontFamily.heading')};
}

/* Размеры иконок для разных размеров кнопок */
.p-button .p-button-icon {
  font-size: ${dt('button.extend.iconSize.md')};
}

.p-button.p-button-sm .p-button-icon {
  font-size: ${dt('button.extend.iconSize.sm')};
}

.p-button.p-button-lg .p-button-icon {
  font-size: ${dt('button.extend.iconSize.lg')};
}

.p-button.p-component:is(.p-button-xlg, .p-button-xlarge) .p-button-icon,
.p-button-link.p-button:is(.p-button-xlg, .p-button-xlarge) .p-button-icon {
  font-size: ${dt('button.extend.iconSize.lg')};
}

/* Стили для disabled и loading кнопок */
.p-button:is(.p-disabled, :disabled, .p-button-loading) {
    mix-blend-mode: inherit;
    opacity: ${dt('opacity.1000')};
    color: ${dt('button.extend.disabledColor')};
    background: ${dt('button.extend.disabledBackground')};
    border-color: ${dt('button.extend.disabledBackground')};
}

/* disabled outlined кнопки */
.p-button.p-button-outlined:is(.p-disabled, :disabled, .p-button-loading) {
    color: ${dt('button.extend.disabledColor')};
    background: ${dt('transparent')};
    border-color: ${dt('transparent')};
}

/* disabled text кнопки */
.p-button.p-button-text:is(.p-disabled, :disabled, .p-button-loading) {
    color: ${dt('button.extend.disabledColor')};
    background: ${dt('transparent')};
    border-color: ${dt('transparent')};
}

/* disabled link кнопки */
.p-button.p-button-link:is(.p-disabled, :disabled, .p-button-loading) {
    color: ${dt('button.extend.disabledColor')};
    background: ${dt('transparent')};
    border-color: ${dt('transparent')};
}

/* Отступы для link кнопок */
.p-button-link.p-button.p-component:is(.p-button, .p-button-xlg, .p-button-xlarge) {
  padding: ${dt('button.extend.extLink.paddingY')} ${dt(
  'button.extend.extLink.paddingX'
)};
}

.p-button-link.p-button {
  width: min-content;
}

/* Размер шрифта для link кнопки xlg */
.p-button-link.p-button.p-component:is(.p-button-xlg, .p-button-xlarge) {
  font-size: ${dt('fonts.fontSize.600')};
}

/* Стили при наведении на link кнопку */
.p-button.p-button-link:not(:disabled):hover {
  color: ${dt('button.extend.extLink.colorHover')};
}

.p-button.p-button-link:not(:disabled):hover .p-button-label {
text-decoration: none;
}

/* Размеры для icon-only link кнопок */
.p-button-link.p-button-icon-only {
  width: ${dt('button.extend.extLink.base.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.base.iconOnlyWidth')};
}

.p-button-link.p-button-icon-only.p-button-sm {
  width: ${dt('button.extend.extLink.sm.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.sm.iconOnlyWidth')};
}

.p-button-link.p-button-icon-only.p-button-lg {
  width: ${dt('button.extend.extLink.lg.iconOnlyWidth')};
  height: ${dt('button.extend.extLink.lg.iconOnlyWidth')};
}

/* Высота строки для кнопок */
.p-button.p-component.p-button-sm {
  line-height: ${dt('fonts.lineHeight.250')};
}

.p-button.p-component:is(.p-button-lg, .p-button-xlg, .p-button-xlarge) {
  line-height: ${dt('fonts.lineHeight.550')};
}

/* Скругление углов для кнопок large и xlg (кроме rounded) */
.p-button.p-component:is(.p-button-lg, .p-button-xlg, .p-button-xlarge):not(.p-button-rounded) {
  border-radius: ${dt('button.extend.extLg.borderRadius')};
}

.p-button.p-component:is(.p-button-xlg, .p-button-xlarge):not(.p-button-rounded) {
  border-radius: ${dt('button.extend.extXlg.borderRadius')};
}

/* Отступы и размер шрифта для sm кнопки */
.p-button.p-component.p-button-sm:not(.p-button-icon-only):not(.p-button-link) {
  padding: ${dt('button.root.sm.paddingY')} ${dt('button.root.sm.paddingX')};
  font-size: ${dt('button.root.sm.fontSize')};
}

/* Отступы и размер шрифта для lg кнопки */
.p-button.p-component.p-button-lg:not(.p-button-icon-only):not(.p-button-link) {
  padding: ${dt('button.root.lg.paddingY')} ${dt('button.root.lg.paddingX')};
  font-size: ${dt('button.root.lg.fontSize')};
  height: ${dt('button.extend.extLg.height')};
}

/* Отступы и размер шрифта для xlg кнопки */
.p-button.p-component:is(.p-button-xlg, .p-button-xlarge):not(.p-button-icon-only):not(.p-button-link) {
  padding: ${dt('button.extend.extXlg.paddingY')} ${dt(
  'button.extend.extXlg.paddingX'
)};
  font-size: ${dt('fonts.fontSize.500')};
  height: ${dt('button.extend.extXlg.height')};
  gap: ${dt('button.extend.extXlg.gap')};
}

/* Размеры для icon-only кнопок */
.p-button-icon-only {
  width: ${dt('button.root.iconOnlyWidth')};
  height: ${dt('button.root.iconOnlyWidth')};
}

.p-button.p-component.p-button-sm.p-button-icon-only {
  width: ${dt('button.root.sm.iconOnlyWidth')};
  height: ${dt('button.root.sm.iconOnlyWidth')};
}

.p-button.p-component.p-button-lg.p-button-icon-only {
  width: ${dt('button.root.lg.iconOnlyWidth')};
  height: ${dt('button.root.lg.iconOnlyWidth')};
}

.p-button.p-component:is(.p-button-xlg, .p-button-xlarge).p-button-icon-only {
  width: ${dt('button.extend.extXlg.iconOnlyWidth')};
  height: ${dt('button.extend.extXlg.iconOnlyWidth')};
}
`;

export default css;
