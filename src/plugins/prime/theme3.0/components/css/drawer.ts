const css = ({ dt }: { dt: (token: string) => string }) => `

/* Скругление углов */
.p-drawer {
  border-radius: ${dt('drawer.extend.borderRadius')};
}

/* Нижняя граница и отступ */
.p-drawer-header {
  border-bottom: ${dt('drawer.extend.borderWidth')} solid ${dt(
  'drawer.extend.extHeader.borderColor'
)};
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
  margin: ${dt('drawer.extend.margin')};
  width: ${dt('drawer.extend.width')};
  height: calc(100% - ${dt('drawer.extend.margin')} * ${dt(
  'drawer.extend.scale'
)});
}

.p-drawer-left .p-drawer.p-component.p-drawer-sm,
.p-drawer-right .p-drawer.p-component.p-drawer-sm {
  width: ${dt('drawer.extend.overlayWidth.sm')};
}

.p-drawer-left .p-drawer.p-component.p-drawer-lg,
.p-drawer-right .p-drawer.p-component.p-drawer-lg {
  width: ${dt('drawer.extend.overlayWidth.lg')};
}

.p-drawer-left .p-drawer.p-component.p-drawer-xlg,
.p-drawer-right .p-drawer.p-component.p-drawer-xlg {
  width: ${dt('drawer.extend.overlayWidth.xlg')};
}

/* Горизонтальные drawer (сверху/снизу) - базовые размеры и отступы от краев экрана */
.p-drawer-top .p-drawer.p-component,
.p-drawer-bottom .p-drawer.p-component {
  margin: ${dt('drawer.extend.margin')};
  width: calc(100% - ${dt('drawer.extend.margin')} * ${dt(
  'drawer.extend.scale'
)});
}

`;

export default css;
