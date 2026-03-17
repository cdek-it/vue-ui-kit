const css = ({ dt }: { dt: (token: string) => string }) => `
.p-avatar.p-component .p-avatar-text {
  font-family: ${dt('fonts.fontFamily.heading')};
  font-weight: ${dt('fonts.fontWeight.demibold')};
  font-size: ${dt('avatar.root.fontSize')};
  line-height: normal;
}

.p-avatar-group[data-pc-name="avatargroup"] .p-avatar[data-pc-name="avatar"] {
  border: ${dt('borderWidth.200')} solid ${dt('avatar.group.borderColor')};
}

.p-avatar-group[data-pc-name="avatargroup"] .p-avatar[data-pc-name="avatar"] + .p-avatar[data-pc-name="avatar"] {
  margin-left: calc(-1 * ${dt('avatar.group.offset')});
}

/* XL offset override */
.p-avatar-group[data-pc-name="avatargroup"] .p-avatar-xl[data-pc-name="avatar"] + .p-avatar-xl[data-pc-name="avatar"] {
  margin-left: calc(-1 * ${dt('avatar.xl.group.offset')});
}
`;

export default css;
