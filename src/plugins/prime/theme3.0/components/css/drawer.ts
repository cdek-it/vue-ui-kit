const css = ({ dt }: { dt: (token: string) => string }) => `

/* Скругление углов */
.p-drawer {
  border-radius: ${dt('drawer.extend.borderRadius')};
}

/* Нижняя граница и отступ */
.p-drawer-header {
  border-bottom: 1px solid ${dt('drawer.extend.borderColor')};
  padding-bottom: ${dt('drawer.extend.extHeader.paddingBottom')};
}

/* Типографика */
.p-drawer-title {
  font-weight: ${dt('drawer.title.fontWeight')};
  font-size: ${dt('drawer.title.fontSize')};
}

/* Кнопки действий в заголовке - расстояние между элементами */
.p-drawer-header-actions {
  gap: ${dt('drawer.extend.extHeader.gap')};
}

/* Боковые drawer (слева/справа) - базовые размеры и отступы от краев экрана */
.p-drawer-left .p-drawer.p-component,
.p-drawer-right .p-drawer.p-component {
  margin: ${dt('drawer.extend.padding')};;
  width: ${dt('drawer.root.width')};
  height: calc(100% - ${dt('drawer.extend.padding')} * 1.75);
}

.p-drawer-left .p-drawer.p-component.p-drawer-sm,
.p-drawer-right .p-drawer.p-component.p-drawer-sm {
  width: ${dt('drawer.sm.width')};
}

.p-drawer-left .p-drawer.p-component.p-drawer-lg,
.p-drawer-right .p-drawer.p-component.p-drawer-lg {
  width: ${dt('drawer.lg.width')};
}

.p-drawer-left .p-drawer.p-component.p-drawer-xlg,
.p-drawer-right .p-drawer.p-component.p-drawer-xlg {
  width: ${dt('drawer.xlg.width')};
}

/* Горизонтальные drawer (сверху/снизу) - базовые размеры и отступы от краев экрана */
.p-drawer-top .p-drawer.p-component,
.p-drawer-bottom .p-drawer.p-component {
  margin: ${dt('drawer.extend.padding')};;
  width: calc(100% - ${dt('drawer.extend.padding')} * 1.75);
}

`;

export default css;
