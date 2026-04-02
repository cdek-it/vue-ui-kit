import { TemplateTemplate } from './FileUpload.template';

export default {
  title: 'Prime/Form/FileUpload',
  parameters: {
    docs: {
      description: {
        component:
          'Компонент загрузки файлов с кастомным шаблоном, поддержкой drag-and-drop, прогресс-бара и предпросмотра файлов.',
      },
    },
    designTokens: {
      prefix: '--p-fileupload',
    },
  },
};

export const Template = {
  render: TemplateTemplate.bind({}),
  parameters: {
    docs: {
      source: {
        code: `
<FileUpload
  name="files[]"
  url="/api/upload"
  :multiple="true"
  accept="image/*,.pdf,.doc,.docx"
  :maxFileSize="1000000"
  customUpload
  @select="onSelectedFiles"
  @uploader="onUploader"
>
  <template #header="{ chooseCallback, files }">
    <div style="display: flex; flex-direction: column; width: 100%;">
      <!-- Dropzone -->
      <div @click="chooseCallback()" class="p-fileupload-dropzone">
        <i class="ti ti-upload p-fileupload-dropzone-icon" />
        <div class="p-fileupload-dropzone-info">
          <span class="p-fileupload-dropzone-title">Чтобы загрузить файлы кликните или перетащите их в эту область</span>
          <span class="p-fileupload-dropzone-caption"><i class="ti ti-info-circle" />Можно загрузить не более 10 файлов размером 1 MB</span>
        </div>
      </div>
      <!-- Progress Bar -->
      <ProgressBar :value="totalSizePercent" :showValue="false" class="p-fileupload-progressbar-v2" />
    </div>
  </template>
  <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback, uploadCallback, clearCallback }">
    <!-- ... content template ... -->
  </template>
</FileUpload>`,
      },
    },
  },
};
