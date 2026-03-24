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

  color: ${dt('divider.colorScheme.light.content.color')};
  font-size: ${dt('divider.extend.iconSize')};
}

/* Vertical Alignment */
.p-divider-vertical.p-divider-top .p-divider-content {
  top: 0;
  transform: translateY(0);
}

.p-divider-vertical.p-divider-bottom .p-divider-content {
  top: auto;
  bottom: 0;
  transform: translateY(0);
}

.p-divider-vertical.p-divider-center .p-divider-content {
  top: 50%;
  transform: translateY(-50%);
}
`;

export default css;
