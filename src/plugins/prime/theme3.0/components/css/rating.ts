const css = ({ dt }: { dt: (token: string) => string }) => `

.p-rating-wrapper {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.xs')};
}

.p-rating-wrapper > :is(i, [class*="icon"]) {
  font-size: ${dt('form.icon.xlg')};
}
`;

export default css;
