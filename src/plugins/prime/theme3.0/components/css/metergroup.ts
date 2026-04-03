const css = ({ dt }: { dt: (token: string) => string }) => `

.p-metergroup-label-text {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.200')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.200')};
  color: ${dt('metergroup.extend.extLabel.color')};
}

.p-metergroup-label .p-metergroup-label-text + span {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.200')};
  font-weight: ${dt('fonts.fontWeight.medium')};
  color: ${dt('text.color')};
}

.p-metergroup-horizontal .p-metergroup-meter {
  min-height: 100%;
}

.p-metergroup-vertical .p-metergroup-meter {
  min-width: 100%;
}

`;

export default css;
