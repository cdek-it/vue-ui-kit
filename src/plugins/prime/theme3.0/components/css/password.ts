const css = ({ dt }: { dt: (token: string) => string }) => `

/* Общие стили контейнеров */
.p-password,
.custom-password-wrapper {
  width: fit-content;
}

.custom-password-wrapper {
  position: relative;
}

/* Иконки управления */
.p-password-toggle-mask-icon, 
.p-icon.p-password-toggle-mask-icon.p-password-unmask-icon {
  cursor: pointer;
}

/* Оверлей и контент */
.p-password-overlay {
  border-width: ${dt('password.extend.borderWidth')};
}

.p-password-meter-text {
  color: ${dt('text.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-weight: ${dt('fonts.fontWeight.medium')};
}

/* Правила валидации (Flex-группировка) */
.p-password-rules,
.p-password-rule {
  display: flex;
  gap: ${dt('password.content.gap')};
}

.p-password-rules {
  flex-direction: column;
}

.p-password-rule {
  align-items: center;
  font-size: ${dt('fonts.fontSize.sm')};
  color: ${dt('password.overlay.color')};
}

/* Цвета иконок валидации */
.p-password-rule .ti-circle-check { color: ${dt(
  'password.colorScheme.light.strength.strongBackground'
)}; }
.p-password-rule .ti-circle-x { color: ${dt(
  'password.colorScheme.light.strength.weakBackground'
)}; }

/* Резервирование места под иконки в инпуте */
.p-password:has(.p-password-toggle-mask-icon) .p-password-input.p-inputtext, 
.custom-password-wrapper .p-password .p-inputtext {
  padding-inline-end: calc(${dt('form.padding.sm')} * 3 + ${dt(
  'form.icon.md'
)});
}

/* Позиционирование и размеры кастомной иконки очистки */
.custom-password-wrapper .custom-clear-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${dt('password.colorScheme.light.icon.color')};
  inset-inline-end: calc(${dt('form.padding.sm')} * 1.5 + ${dt(
  'inputtext.extend.iconSize'
)});
  font-size: ${dt('inputtext.extend.iconSize')}; 
  width: ${dt('inputtext.extend.iconSize')};
  height: ${dt('inputtext.extend.iconSize')};
}
`;

export default css;
