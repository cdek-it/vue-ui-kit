const css = ({ dt }: { dt: (token: string) => string }) => `
.p-card {
  border: 1px solid ${dt('card.extend.borderColor')};
}

.p-card .p-card-body {
  display: flex;
  flex-direction: column;
  gap: ${dt('card.body.gap')};
  padding: ${dt('card.body.padding')};
}

.p-card .p-card-caption {
  display: flex;
  flex-direction: column;
  gap: ${dt('card.caption.gap')};
}

.p-card .p-card-title {
  font-size: ${dt('card.title.fontSize')};
  font-weight: ${dt('card.title.fontWeight')};
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: 1.5;
  color: ${dt('card.color')};
}

.p-card .p-card-subtitle {
  color: ${dt('card.subtitle.color')};
  font-size: ${dt('fonts.fontSize.sm')};
  font-family: ${dt('fonts.fontFamily.heading')};
  line-height: 1.5;
}

.p-card .p-card-content {
  display: flex;
  flex-direction: column;
}

.p-card .p-card-footer {
  display: flex;
  flex-direction: column;
}

/* Inline variant (без тени) */
.p-card.p-card-inline {
  box-shadow: none;
}
`;

export default css;
