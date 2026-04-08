const css = ({ dt }: { dt: (token: string) => string }) => `

/* Label text color */
.p-metergroup-label-text {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.200')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.200')};
  color: ${dt('metergroup.extend.extLabel.color')};
}

/* Label value text */
.p-metergroup-label .p-metergroup-label-text + span {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.200')};
  font-weight: ${dt('fonts.fontWeight.medium')};
  color: ${dt('text.color')};
}

/* PrimeVue sets both width and height as the same percentage via inline style.
   min-height/min-width override height/width per CSS spec — no !important needed. */
.p-metergroup-horizontal .p-metergroup-meter {
  min-height: 100%;
}

.p-metergroup-vertical .p-metergroup-meter {
  min-width: 100%;
}

`;

export default css;
