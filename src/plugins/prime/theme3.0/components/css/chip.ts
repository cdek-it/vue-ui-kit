const css = ({ dt }: { dt: (token: string) => string }) => `
/* Переопределение border для chip */
.p-chip {
  border: 1px solid ${dt('chip.extend.borderColor')};
}

/* Типографика для chip label */
.p-chip-label {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.40')};
}

/* Focus ring для remove icon */
.p-chip-remove-icon:focus-visible {
  outline: ${dt('chip.removeIcon.focusRing.width')} solid ${dt(
  'focusRing.extend.success'
)};
}
`;

export default css;
