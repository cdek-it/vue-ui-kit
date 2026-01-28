export default ({ dt }: { dt: (token: string) => string }) => `

/* Label – стилизация текста */
.p-metergroup .p-metergroup-label {
  font-family: ${dt('fonts.fontFamily')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  color: ${dt('metergroup.extend.extLabel.color')};
}
`;
