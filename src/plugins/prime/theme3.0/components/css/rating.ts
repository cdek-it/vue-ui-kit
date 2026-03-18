const css = ({ dt }: { dt: (token: string) => string }) => `

.p-rating-wrapper {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.200')};
}

.p-rating-wrapper > :is(i, [class*="icon"]) {
  font-size: ${dt('form.icon.500')};
}

`;

export default css;
