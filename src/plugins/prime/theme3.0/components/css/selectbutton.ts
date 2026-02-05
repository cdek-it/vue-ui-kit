const css = ({ dt }: { dt: (token: string) => string }) => `

/* Базовые стили для SelectButton */
.p-selectbutton.p-component {
  background: ${dt('selectbutton.colorScheme.light.extend.background')};
  padding: ${dt('selectbutton.extend.paddingX')} ${dt(
  'selectbutton.extend.paddingY'
)};
  gap: ${dt('selectbutton.extend.gap')};
  font-family: ${dt('fonts.fontFamily.heading')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
}

/* Базовые стили для ToggleButton внутри SelectButton */
.p-selectbutton.p-selectbutton.p-component .p-togglebutton.p-component {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
  line-height: ${dt('fonts.lineHeight.50')};
  height: ${dt('controls.iconOnly.2xlg')};
  border-radius: ${dt('selectbutton.extend.ext.borderRadius')};
}

.p-selectbutton.p-selectbutton.p-component .p-togglebutton .p-togglebutton-label,
.p-selectbutton.p-selectbutton.p-component .p-togglebutton .p-togglebutton-content > span {
  line-height: ${dt('fonts.lineHeight.40')};
}

/* Состояние checked */
.p-selectbutton.p-selectbutton.p-component .p-togglebutton.p-togglebutton.p-togglebutton-checked.p-component,
.p-selectbutton.p-selectbutton.p-component .p-togglebutton.p-togglebutton.p-togglebutton-checked.p-component:hover {
  background: ${dt('selectbutton.extend.checkedBackground')};
  border-radius: ${dt('selectbutton.extend.ext.borderRadius')};
  border-color: ${dt('selectbutton.extend.checkedBorderColor')};
  color: ${dt('selectbutton.extend.checkedColor')};
}

/* Hover для unchecked */
.p-selectbutton.p-selectbutton.p-component .p-togglebutton.p-component:not(:disabled):not(.p-togglebutton-checked):hover {
  border-radius: ${dt('selectbutton.extend.ext.borderRadius')};
  border-color: ${dt('togglebutton.extend.hoverBorderColor')};
}

/* Размер Small */
.p-selectbutton.p-selectbutton.p-selectbutton-sm.p-component .p-togglebutton.p-component {
  line-height: ${dt('fonts.lineHeight.30')};
  height: ${dt('controls.iconOnly.xlg')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-sm.p-component .p-togglebutton .p-togglebutton-label,
.p-selectbutton.p-selectbutton.p-selectbutton-sm.p-component .p-togglebutton .p-togglebutton-content > span {
  line-height: ${dt('fonts.lineHeight.25')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-sm.p-component .p-togglebutton .p-togglebutton-icon,
.p-selectbutton.p-selectbutton.p-selectbutton-sm.p-component .p-togglebutton i {
  font-size: ${dt('selectbutton.extend.iconSize.sm')};
}

/* Размер Medium (Base) */
.p-selectbutton.p-selectbutton.p-component:not(.p-selectbutton-sm):not(.p-selectbutton-lg):not(.p-selectbutton-xlg) .p-togglebutton .p-togglebutton-icon,
.p-selectbutton.p-selectbutton.p-component:not(.p-selectbutton-sm):not(.p-selectbutton-lg):not(.p-selectbutton-xlg) .p-togglebutton i {
  font-size: ${dt('selectbutton.extend.iconSize.md')};
}

/* Размер Large */
.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton.p-component {
  line-height: ${dt('fonts.lineHeight.55')};
  height: ${dt('controls.iconOnly.4xlg')};
  gap: ${dt('togglebutton.extend.gap')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton .p-togglebutton-content {
  gap: ${dt('togglebutton.extend.ext.gap')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton .p-togglebutton-label,
.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton .p-togglebutton-content > span {
  line-height: ${dt('fonts.lineHeight.55')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton .p-togglebutton-icon,
.p-selectbutton.p-selectbutton.p-selectbutton-lg.p-component .p-togglebutton i {
  font-size: ${dt('selectbutton.extend.iconSize.lg')};
}

/* Размер Extra Large */
.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton.p-component {
  font-size: ${dt('fonts.fontSize.2xl')};
  line-height: ${dt('fonts.lineHeight.55')};
  height: ${dt('controls.iconOnly.5xlg')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${dt('togglebutton.extend.gap')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton .p-togglebutton-content {
  gap: ${dt('togglebutton.extend.ext.gap')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton .p-togglebutton-label,
.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton .p-togglebutton-content > span {
  line-height: ${dt('fonts.lineHeight.65')};
}

.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton .p-togglebutton-icon,
.p-selectbutton.p-selectbutton.p-selectbutton-xlg.p-component .p-togglebutton i {
  font-size: ${dt('selectbutton.extend.iconSize.xlg')};
}
`;

export default css;
