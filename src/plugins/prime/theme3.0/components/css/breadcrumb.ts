const css = ({ dt }: { dt: (token: string) => string }) => `

.p-breadcrumb-item-link {
  padding: ${dt('spacing.padding.p-1')};
  font-size: ${dt('fonts.fontSize.base')};
}

.p-breadcrumb-item-link:hover {
  background: ${dt('breadcrumb.extend.hoverBackground')};
}

.p-breadcrumb-item:last-child .p-breadcrumb-item-link {
  opacity: ${dt('opacity.muted')};
  pointer-events: none;
}
`;

export default css;
