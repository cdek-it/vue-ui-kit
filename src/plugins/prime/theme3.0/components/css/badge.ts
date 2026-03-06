const css = ({ dt }: { dt: (token: string) => string }) => `
.p-badge {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-size: ${dt('badge.root.fontSize')};
  font-weight: ${dt('badge.root.fontWeight')};
}

.p-badge-dot.p-badge-success {
  background: ${dt('badge.extend.extDot.success.background')};
}

.p-badge-dot.p-badge-info {
  background: ${dt('badge.extend.extDot.info.background')};
}

.p-badge-dot.p-badge-warn {
  background: ${dt('badge.extend.extDot.warn.background')};
}

.p-badge-dot.p-badge-danger {
  background: ${dt('badge.extend.extDot.danger.background')};
}

.p-badge-dot.p-badge-lg {
  width: ${dt('badge.extend.extDot.lg.size')};
  height: ${dt('badge.extend.extDot.lg.size')};
  min-width: ${dt('badge.extend.extDot.lg.size')};
  min-height: ${dt('badge.extend.extDot.lg.size')};
}

.p-badge-dot.p-badge-xl {
  width: ${dt('badge.extend.extDot.xlg.size')};
  height: ${dt('badge.extend.extDot.xlg.size')};
  min-width: ${dt('badge.extend.extDot.xlg.size')};
  min-height: ${dt('badge.extend.extDot.xlg.size')};
}
`;

export default css;
