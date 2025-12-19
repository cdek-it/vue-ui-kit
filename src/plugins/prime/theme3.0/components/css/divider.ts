const css = ({ dt }: { dt: (token: string) => string }) => `

/* Стилизация текста в divider */
.p-divider-content {
  font-family: ${dt('fonts.fontFamily.ttFellows')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
  line-height: ${dt('fonts.lineHeight.15')};
  text-transform: uppercase;
}

/* Дополнительная обертка для контента с иконками */
.p-divider-content > div {
  display: flex;
  align-items: center;
  gap: ${dt('spacing.gap.gap-2')};
}

/* Сброс margin для всех иконок внутри divider-content */
.p-divider-content i {
  margin: 0;
}
`;

export default css;
