const css = ({ dt }: { dt: (token: string) => string }) => `

.p-breadcrumb-item-link {
  padding: ${dt('breadcrumb.extend.extItem.padding')};
  font-size: ${dt('fonts.fontSize.base')};
}

.p-breadcrumb-item-link:hover {
  background: ${dt('breadcrumb.extend.hoverBackground')};
}

.p-breadcrumb-item-icon {
  font-size: ${dt('breadcrumb.extend.iconSize')};
}

.p-breadcrumb-item:last-child .p-breadcrumb-item-link {
  opacity: ${dt('opacity.50')};
  pointer-events: none;
  cursor: default;
  
  &:hover {
    background: ${dt('colorScheme.light.transparent')};
  }
}
`;

export default css;
