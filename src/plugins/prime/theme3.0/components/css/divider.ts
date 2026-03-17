const css = ({ dt }: { dt: (token: string) => string }) => `
.p-divider-content {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('fonts.fontSize.100')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
  line-height: ${dt('fonts.lineHeight.150')};
  text-transform: uppercase;
}

.p-divider-content > div {
  display: flex;
  align-items: center;
  gap: ${dt('divider.extend.content.gap')};
}

.p-divider-content i {
  color: ${dt('divider.colorScheme.light.content.color')};
  font-size: ${dt('divider.extend.iconSize')};
}
`;

export default css;
