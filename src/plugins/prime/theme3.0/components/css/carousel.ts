const css = ({ dt }: { dt: (token: string) => string }) => `
  .p-carousel .p-carousel-prev-button.p-button-secondary,
  .p-carousel .p-carousel-next-button.p-button-secondary {
    background: ${dt('surface.200')};
    color: ${dt('text.color')};
    border-color: transparent;
  }

  .p-carousel .p-carousel-prev-button.p-button-secondary:not(:disabled):hover,
  .p-carousel .p-carousel-next-button.p-button-secondary:not(:disabled):hover {
    background: ${dt('surface.300')};
    color: ${dt('text.color')};
  }

  .p-carousel .p-carousel-prev-button.p-button-secondary:not(:disabled):active,
  .p-carousel .p-carousel-next-button.p-button-secondary:not(:disabled):active {
    background: ${dt('surface.400')};
    color: ${dt('text.color')};
  }

  .p-carousel .p-button-icon-only.p-button-rounded {
    border-radius: ${dt('button.roundedBorderRadius')};
  }

  .p-carousel .p-carousel-item {
    padding-inline: calc(${dt('carousel.content.gap')} / 2);
  }

  /* PrimeVue скрывает неактивные карточки через visibility:hidden после окончания анимации.
     Оставляем отсечение через overflow:hidden на viewport, убирая лишнее скрытие. */
  .p-carousel .p-items-hidden .p-carousel-item {
    visibility: visible;
  }

`;

export default css;
