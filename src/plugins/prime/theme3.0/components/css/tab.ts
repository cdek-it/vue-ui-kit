export default ({ dt }: { dt: (token: string) => string }) => `
/* Переопределение overflow для видимости активной линии */
.p-tabs .p-tablist.p-tablist,
.p-tabs .p-tablist-content.p-tablist-content,
.p-tabs .p-tablist-viewport.p-tablist-viewport {
  overflow: visible;
}

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
  border-bottom: 0.15rem solid ${dt('tabs.tablist.borderColor')};
}
`;
