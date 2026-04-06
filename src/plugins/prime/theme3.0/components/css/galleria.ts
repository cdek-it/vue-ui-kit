const css = ({ dt }: { dt: (token: string) => string }) => `

.p-galleria .p-galleria-caption {
  background: ${dt('galleria.caption.background')};
  padding: ${dt('spacing.2x')};
}


.p-galleria-mask.p-overlay-mask .p-galleria-nav-button {
  top: 0%;
}

.p-galleria-mask.p-overlay-mask .p-galleria-items .p-galleria-nav-button {
  top: 50%;
}

`;

export default css;
