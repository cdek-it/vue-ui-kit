const css = ({ dt }: { dt: (token: string) => string }) => `

.p-progressspinner-circle {
  stroke-width: ${dt('progressspinner.root.borderWidth')};
}

.p-progressspinner.p-progressspinner-small,
.p-progressspinner.p-progressspinner-small .p-progressspinner-circle {
  width: ${dt('progressspinner.extend.small')};
  height: ${dt('progressspinner.extend.small')};
}

.p-progressspinner.p-progressspinner-medium,
.p-progressspinner.p-progressspinner-medium .p-progressspinner-circle {
  width: ${dt('progressspinner.extend.medium')};
  height: ${dt('progressspinner.extend.medium')};
}

.p-progressspinner.p-progressspinner-large,
.p-progressspinner.p-progressspinner-large .p-progressspinner-circle {
  width: ${dt('progressspinner.extend.large')};
  height: ${dt('progressspinner.extend.large')};
}

.p-progressspinner.p-progressspinner-xlarge,
.p-progressspinner.p-progressspinner-xlarge .p-progressspinner-circle {
  width: ${dt('progressspinner.extend.xlarge')};
  height: ${dt('progressspinner.extend.xlarge')};
}
  
`;

export default css;
