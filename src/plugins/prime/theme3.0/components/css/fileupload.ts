const css = ({ dt }: { dt: (token: string) => string }) => `

/* Dropzone (drag-and-drop зона) */
.custom-fileupload .p-fileupload-dropzone {
  border: ${dt('form.borderWidth')} dashed ${dt(
  'fileupload.extend.extContent.highlightBorderDefault'
)};
  border-radius: ${dt('fileupload.extend.extDragNdrop.borderRadius')};
  padding: ${dt('fileupload.extend.extDragNdrop.padding')};
  background: ${dt('fileupload.extend.extDragNdrop.background')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${dt('fileupload.content.gap')};
  cursor: pointer;
}

.custom-fileupload .p-fileupload-dropzone,
.custom-fileupload .p-fileupload-file-card {
  transition: border-color ${dt('fileupload.root.transitionDuration')};
  border-radius: ${dt('fileupload.extend.extDragNdrop.borderRadius')};
}

.custom-fileupload .p-fileupload-dropzone:hover {
  border-color: ${dt('fileupload.content.highlightBorderColor')};
}

.custom-fileupload .p-fileupload-dropzone-icon,
.custom-fileupload .p-fileupload-file-icon {
  font-size: ${dt('fileupload.extend.extDragNdrop.iconSize')};
  color: ${dt('text.color')};
}

.custom-fileupload .p-fileupload-file-icon {
  flex-shrink: 0;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-info {
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.extend.extDragNdrop.info.gap')};
  width: 100%;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-title {
  font-size: ${dt('fonts.fontSize.300')};
  font-weight: ${dt('fonts.fontWeight.bold')};
  line-height: ${dt('fonts.lineHeight.500')};
  color: ${dt('text.color')};
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-caption {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.100')};
  font-size: ${dt('fonts.fontSize.200')};
  color: ${dt('text.mutedColor')};
}

.custom-fileupload .p-fileupload-dropzone-title,
.custom-fileupload .p-fileupload-dropzone-caption {
  align-self: center;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-caption .ti {
  font-size: ${dt('fonts.fontSize.300')};
  line-height: ${dt('fonts.lineHeight.250')};
}

/* Список файлов */
.custom-fileupload .p-fileupload-file-list {
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.fileList.gap')};
}

/* Карточка файла */
.custom-fileupload .p-fileupload-file-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${dt('fileupload.file.padding')};
  border: 1px solid ${dt('fileupload.file.borderColor')};
  gap: ${dt('fileupload.file.gap')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-wrap {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.300')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-info {
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.file.info.gap')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-name {
  font-size: ${dt('fonts.fontSize.300')};
  color: ${dt('text.color')};
  line-height: ${dt('fonts.lineHeight.400')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-size {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.100')};
  font-size: ${dt('fonts.fontSize.200')};
  color: ${dt('text.mutedColor')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-size .ti {
  font-size: ${dt('fonts.fontSize.300')};
}

/* Uploaded файлы — приглушённый стиль */
.custom-fileupload .p-fileupload-file-card.p-fileupload-file-uploaded {
  opacity: ${dt('opacity.500')};
  background: ${dt('surface.50')};
}

/* Footer */
.custom-fileupload .p-fileupload-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Message после отправки */
.custom-fileupload .p-message .p-message-content {
  align-items: center;
}

/* Высокая специфичность для p-fileupload-advanced */
.custom-fileupload .p-fileupload-advanced.p-fileupload-advanced {
  border: unset;
  display: flex;
  gap: ${dt('form.gap.200')};
  flex-direction: column;
}

`;

export default css;
