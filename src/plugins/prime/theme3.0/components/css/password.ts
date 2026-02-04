const css = ({ dt }: { dt: (token: string) => string }) => `

/* Ограничение ширины контейнера по размеру содержимого */
.p-password {
  width: fit-content;
}

.p-password-toggle-mask-icon, .p-icon.p-password-toggle-mask-icon.p-password-unmask-icon {
  cursor: pointer;
}

/* Overlay с индикатором силы пароля */
.p-password-overlay {
  border-width: ${dt('password.extend.borderWidth')};
}

/* Обёртка для кастомной иконки */
.custom-password-wrapper {
  position: relative;
  width: fit-content;
}

/* padding для input в обёртке */
.custom-password-wrapper .p-password .p-inputtext {
  padding-right: calc(${dt('form.padding.sm')} * 3 + ${dt(
  'inputtext.extend.iconSize'
)} * 2);
}

/* Увеличиваем специфичность для переопределения дефолтных стилей */
.p-password:has(.p-password-toggle-mask-icon) .p-password-input.p-inputtext {
  padding-inline-end: calc(${dt('form.padding.sm')} * 3 + ${dt(
  'form.icon.md'
)});
}

/* Позиция кастомной иконки */
.custom-password-wrapper .custom-clear-icon {
  color: ${dt('password.colorScheme.light.icon.color')};
  z-index: 10;
  inset-inline-end: calc(${dt('form.padding.sm')} * 1.5 + ${dt(
  'inputtext.extend.iconSize'
)});
  font-size: ${dt('inputtext.extend.iconSize')}; 
  width: ${dt('inputtext.extend.iconSize')};
  height: ${dt('inputtext.extend.iconSize')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
`;

export default css;
