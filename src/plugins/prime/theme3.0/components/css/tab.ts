export default ({ dt }: { dt: (token: string) => string }) => `
/* Кастомные стили для Tab компонента согласно дизайну Figma */

/* Переопределение overflow для видимости активной линии */
.p-tabs .p-tablist.p-tablist,
.p-tabs .p-tablist-content.p-tablist-content,
.p-tabs .p-tablist-viewport.p-tablist-viewport {
  overflow: visible;
}

/* Позиционирование для псевдоэлемента активной границы */
.p-tabs .p-tablist .p-tab {
  position: relative;
}

/* Активная нижняя граница для активного таба */
// .p-tabs .p-tablist .p-tab[data-p-active="true"]::after {
//   content: '';
//   position: absolute;
//   bottom: -1px;
//   left: 0;
//   right: 0;
//   height: 2px;
//   background: ${dt('tabs.activeBar.background')};
// }

/* Типографика для label таба */
.p-tabs .p-tablist .p-tab {
  display: flex;
  align-items: center;
  gap: ${dt('tabs.tab.gap')};
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('fonts.fontSize.base')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
}

/* Стили для tablist с правильной границей */
.p-tabs .p-tablist {
  border-bottom: 2px solid ${dt('tabs.tablist.borderColor')};
}

/* Отключенное состояние с opacity */
.p-tabs .p-tablist .p-tab[data-p-disabled="true"] {
  opacity: 0.5;
}
`;
