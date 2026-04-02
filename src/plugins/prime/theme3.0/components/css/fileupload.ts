const css = ({ dt }: { dt: (token: string) => string }) => `

/* Контейнер */
.fileupload-container.fileupload-container {
  width: 100%;
}

/* Скрытие нативного input */
.custom-fileupload .p-fileupload > input[type="file"] {
  display: none;
}

/* Header — сброс стандартных стилей PrimeVue */
.custom-fileupload .p-fileupload-header {
  border: 0;
  padding: ${dt('fileupload.header.padding')};
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.header.gap')};
  background: transparent;
}

/* Content — сброс стандартных стилей */
.custom-fileupload .p-fileupload-content {
  border: 0;
  padding: ${dt('fileupload.content.padding')};
  gap: ${dt('fileupload.content.gap')};
}

/* Прогресс-бар */
.custom-fileupload .p-fileupload-progressbar-v2.p-fileupload-progressbar-v2 {
  height: ${dt('fileupload.progressbar.height')};
  background: ${dt('surface.200')};
  border-radius: 100px;
  overflow: hidden;
}

.custom-fileupload .p-fileupload-progressbar-v2.p-fileupload-progressbar-v2 .p-progressbar-value {
  background: ${dt('badge.primary.background')};
  transition: width 0.4s ease;
}

/* Dropzone (drag-and-drop зона) */
.custom-fileupload .p-fileupload-dropzone {
  border: 1px dashed ${dt(
    'fileupload.extend.extContent.highlightBorderDefault'
  )};
  border-radius: ${dt('fileupload.extend.extDragNdrop.borderRadius')};
  padding: ${dt('fileupload.extend.extDragNdrop.padding')};
  background: ${dt('fileupload.extend.extDragNdrop.background')};
  transition: border-color ${dt('fileupload.root.transitionDuration')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${dt('fileupload.content.gap')};
  cursor: pointer;
}

.custom-fileupload .p-fileupload-dropzone:hover {
  border-color: ${dt('fileupload.content.highlightBorderColor')};
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-icon {
  font-size: ${dt('fileupload.extend.extDragNdrop.iconSize')};
  color: ${dt('text.color')};
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-info {
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.extend.extDragNdrop.info.gap')};
  width: 100%;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-title {
  font-size: ${dt('fonts.fontSize.300')};
  font-weight: 700;
  line-height: 1.5;
  color: ${dt('text.color')};
  align-self: center;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-caption {
  display: flex;
  align-items: center;
  gap: ${dt('form.gap.100')};
  font-size: ${dt('fonts.fontSize.200')};
  color: ${dt('text.mutedColor')};
  align-self: center;
}

.custom-fileupload .p-fileupload-dropzone .p-fileupload-dropzone-caption .ti {
  font-size: ${dt('fonts.fontSize.300')};
  line-height: 1;
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
  border-radius: ${dt('fileupload.extend.extDragNdrop.borderRadius')};
  gap: ${dt('fileupload.file.gap')};
  transition: border-color ${dt('fileupload.root.transitionDuration')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-wrap {
  display: flex;
  align-items: center;
  gap: 10.5px;
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-icon {
  font-size: ${dt('fileupload.extend.extDragNdrop.iconSize')};
  color: ${dt('text.color')};
  flex-shrink: 0;
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-info {
  display: flex;
  flex-direction: column;
  gap: ${dt('fileupload.file.info.gap')};
}

.custom-fileupload .p-fileupload-file-card .p-fileupload-file-name {
  font-size: ${dt('fonts.fontSize.300')};
  color: ${dt('text.color')};
  line-height: 1.3;
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
  color: ${dt('text.mutedColor')};
}

/* Uploaded файлы — приглушённый стиль */
.custom-fileupload .p-fileupload-file-card.p-fileupload-file-uploaded {
  opacity: 0.75;
  background: ${dt('surface.50')};
}

/* Footer */
.custom-fileupload .p-fileupload-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Высокая специфичность для p-fileupload-advanced */
.custom-fileupload .p-fileupload-advanced.p-fileupload-advanced {
  border: unset;
  display: flex;
  gap: 7px;
  flex-direction: column;
}

`;

export default css;
