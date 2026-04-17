const css = ({ dt }: { dt: (token: string) => string }) => `
 
  /* Иконки управления */
  .p-password-toggle-mask-icon, 
  .p-icon.p-password-toggle-mask-icon.p-password-unmask-icon { cursor: pointer; }

  /* Оверлей и индикатор */
  .p-password-overlay { 
    border-width: ${dt('password.extend.borderWidth')};
  }

  .p-password-meter-text { 
    color: ${dt('text.color')}; 
    font-size: ${dt('fonts.fontSize.200')}; 
    font-weight: ${dt('fonts.fontWeight.medium')}; 
  }

  /* Стили для кастомного контента */
  .p-password-rules {
    display: flex;
    flex-direction: column;
    gap: ${dt('password.content.gap')};
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .p-password-rule { 
    display: flex;
    align-items: center; 
    gap: ${dt('content.gap.200')};
    font-size: ${dt('fonts.fontSize.100')};
  }

  /* Состояния иконок */
  .p-password-rule i {
    font-size: ${dt('fonts.fontSize.200')};
  }

  .p-password-rule .ti-circle { color: ${dt('surface.400')}; }
  .p-password-rule .ti-circle-check { 
    color: ${dt('password.colorScheme.light.strength.strongBackground')}; 
  }
  .p-password-rule .ti-circle-x { 
    color: ${dt('password.colorScheme.light.strength.weakBackground')}; 
  }

`;

export default css;
