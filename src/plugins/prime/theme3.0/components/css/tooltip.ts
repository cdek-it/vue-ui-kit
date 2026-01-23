const css = ({ dt }: { dt: (token: string) => string }) => `
/* Типографика для Tooltip */
.p-tooltip .p-tooltip-text {
  font-family: ${dt('fonts.fontFamily.base')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.regular')};
  line-height: ${dt('fonts.lineHeight.30')};
}
`;

export default css;
