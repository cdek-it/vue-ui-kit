const css = ({ dt }: { dt: (token: string) => string }) => `

.p-chip {
  border: ${dt('chip.extend.borderWidth')} solid ${dt(
  'chip.extend.borderColor'
)};
}

.p-chip-label {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.300')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.400')};
}

.p-chip-remove-icon:focus-visible {
  outline: ${dt('chip.removeIcon.focusRing.width')} solid ${dt(
  'chip.removeIcon.focusRing.color'
)};
}

.p-chip[disabled="true"] {
  opacity: ${dt('effects.opacity.50')};
  pointer-events: none;
}

.p-chip[disabled="true"] .p-chip-remove-icon {
  pointer-events: none;
}

`;

export default css;
