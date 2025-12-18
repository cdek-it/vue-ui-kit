const css = ({ dt }: { dt: (token: string) => string }) => `
.p-breadcrumb.p-component {
  padding: ${dt('breadcrumb.root.padding')};
  background: ${dt('breadcrumb.root.background')};
  transition-duration: ${dt('breadcrumb.root.transitionDuration')};
}

.p-breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
}

.p-breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0;
}

.p-breadcrumb-item-link {
  display: inline-flex;
  align-items: center;
  gap: ${dt('breadcrumb.item.gap')};
  padding: 0.25rem 0.25rem;
  border-radius: ${dt('breadcrumb.item.borderRadius')};
  color: ${dt('breadcrumb.item.color')};
  text-decoration: none;
  font-size: ${dt('fonts.fontSize.sm')};
  line-height: 1.29;
  transition: all ${dt('breadcrumb.root.transitionDuration')};
}

.p-breadcrumb-item-link:hover {
  color: ${dt('breadcrumb.item.hoverColor')};
  background: ${dt('breadcrumb.extend.hoverBackground')};
}

.p-breadcrumb-item-link:focus-visible {
  outline: none;
  box-shadow: ${dt('breadcrumb.focusRing.shadow')};
  outline-offset: ${dt('breadcrumb.focusRing.offset')};
}

.p-breadcrumb-item:last-child .p-breadcrumb-item-link {
  opacity: 0.6;
  pointer-events: none;
}

.p-breadcrumb-item:last-child .p-breadcrumb-item-link:hover {
  background: transparent;
  color: ${dt('breadcrumb.item.color')};
  cursor: default;
}

.p-breadcrumb-item-icon {
  color: ${dt('breadcrumb.item.icon.color')};
  font-size: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
  color: ${dt('breadcrumb.item.icon.hoverColor')};
}

.p-breadcrumb-separator {
  color: ${dt('breadcrumb.separator.color')};
  display: inline-flex;
  align-items: center;
  font-size: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
}
`;

export default css;
