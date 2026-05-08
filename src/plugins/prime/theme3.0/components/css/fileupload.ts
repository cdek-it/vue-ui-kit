const css = ({ dt }: { dt: (token: string) => string }) => `

.p-fileupload {
  display: flex;
  flex-direction: column;
  gap: ${dt('form.gap.200')};
  border: unset;
}

.p-fileupload .p-fileupload-header {
  padding: 0;
}

.p-fileupload .p-fileupload-content {
  padding: 0;
  border: unset;
}

.p-fileupload .p-message .p-message-content {
  align-items: center;
}

`;

export default css;
