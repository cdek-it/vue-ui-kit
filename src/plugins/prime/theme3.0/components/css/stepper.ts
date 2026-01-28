export default ({ dt }: { dt: (token: string) => string }) => `

/* Caption - gap */
.p-stepper .p-step-title {
  display: flex;
  flex-direction: column;
  gap: ${dt('stepper.extend.extCaption.gap')};
  line-height: ${dt('fonts.lineHeight.20')};
}

/* Caption - text-sm/font-normal */
.p-stepper .p-step-title .caption-secondary {
  display: flex;
  justify-content: flex-start;
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: normal;
  color: ${dt('text.mutedColor')};
}

/* Номер шага - text-base/font-medium */
.p-stepper .p-step-number {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.medium')};
  line-height: ${dt('fonts.lineHeight.15')};
}

/* Border для номера шага */
.p-stepper .p-step-number.p-step-number {
  border-width: ${dt('stepper.extend.extStepNumber.borderWidth')};
}

/* Прозрачный фон для панелей */
.p-stepper .p-steppanel {
  background: ${dt('colorScheme.light.transparent')};
}
`;
