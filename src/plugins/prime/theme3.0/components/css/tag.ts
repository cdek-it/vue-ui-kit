const css = ({ dt }: { dt: (token: string) => string }) => `
/* Шрифт для текста тега */
.p-tag {
  font-family: ${dt('fonts.fontFamily.base')};
  line-height: ${dt('fonts.lineHeight.25')};
}

`;

export default css;
