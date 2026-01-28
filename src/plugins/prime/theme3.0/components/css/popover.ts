export default ({ dt }: { dt: (token: string) => string }) => `
/* Размеры стрелки popover */
.p-popover.p-component::before {
  border-width: 8px;
  margin-left: -8px;
}

.p-popover.p-component::after {
  border-width: 7px;
  margin-left: -7px;
}
`;
