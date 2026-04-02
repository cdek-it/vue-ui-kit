import FileUpload from 'primevue/fileupload';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Badge from 'primevue/badge';
import { ref } from 'vue';

export const TemplateTemplate = (args) => ({
  components: { FileUpload, ProgressBar, Button, Message, Badge },
  setup() {
    const totalSize = ref(0);
    const totalSizePercent = ref(0);
    const uploadSuccess = ref(false);
    const isUploading = ref(false);

    const formatSize = (bytes) => {
      if (bytes === 0) {
        return '0 B';
      }
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(3)) + ' ' + sizes[i];
    };

    const isImage = (file) => {
      return file.type.startsWith('image/');
    };

    const onSelectedFiles = (event) => {
      totalSize.value = event.files.reduce((acc, f) => acc + f.size, 0);
      totalSizePercent.value = Math.min((totalSize.value / 1000000) * 100, 100);
      uploadSuccess.value = false;
      isUploading.value = event.files.length > 0;
    };

    const onUploader = (event) => {
      setTimeout(() => {
        event.callback();
        totalSize.value = 0;
        totalSizePercent.value = 0;
        uploadSuccess.value = true;
        isUploading.value = false;
      }, 1500);
    };

    const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
      removeFileCallback(index);
      totalSize.value -= file.size;
      totalSizePercent.value = Math.min((totalSize.value / 1000000) * 100, 100);
      if (totalSize.value <= 0) {
        isUploading.value = false;
      }
    };

    const onClearTemplatingUpload = (clearCallback) => {
      clearCallback();
      totalSize.value = 0;
      totalSizePercent.value = 0;
      uploadSuccess.value = false;
      isUploading.value = false;
    };

    return {
      args,
      totalSize,
      totalSizePercent,
      uploadSuccess,
      isUploading,
      formatSize,
      isImage,
      onSelectedFiles,
      onUploader,
      onRemoveTemplatingFile,
      onClearTemplatingUpload,
    };
  },
  template: `
    <div class="fileupload-container custom-fileupload">
      <FileUpload
        name="files[]"
        url="/api/upload"
        :multiple="true"
        accept="image/*,.pdf,.doc,.docx"
        :maxFileSize="1000000"
        customUpload
        @select="onSelectedFiles"
        @uploader="onUploader"
        v-bind="args"
        class="p-fileupload-advanced"
      >
        <template #header="{ chooseCallback, files }">
          <div style="display: flex; flex-direction: column; width: 100%;">

            <!-- Dropzone -->
            <div
              @click="chooseCallback()"
              class="p-fileupload-dropzone"
            >
              <i class="ti ti-upload p-fileupload-dropzone-icon" />
              <div class="p-fileupload-dropzone-info">
                <span class="p-fileupload-dropzone-title">
                  Чтобы загрузить файлы кликните или перетащите их в эту область
                </span>
                <span class="p-fileupload-dropzone-caption">
                  <i class="ti ti-info-circle" />
                  Можно загрузить не более 10 файлов размером 1 MB
                </span>
              </div>
            </div>

          </div>
        </template>

        <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback, uploadCallback, clearCallback }">
          <div style="display: flex; flex-direction: column; gap: var(--p-fileupload-content-gap);">

            <!-- Progress Bar -->
            <ProgressBar
              v-if="isUploading"
              :value="totalSizePercent"
              :showValue="false"
              class="p-fileupload-progressbar-v2"
            />

            <!-- Message об успехе -->
            <Message v-if="uploadSuccess" severity="success" closable @close="uploadSuccess = false">
              Файлы успешно загружены
            </Message>

            <!-- Список файлов (pending) -->
            <div v-if="files.length > 0" class="p-fileupload-file-list">
              <div
                v-for="(file, index) of files"
                :key="file.name + file.type + file.size"
                class="p-fileupload-file-card"
              >
                <div class="p-fileupload-file-wrap">
                  <i v-if="!isImage(file)" class="ti ti-file p-fileupload-file-icon" />
                  <img
                    v-else
                    :src="file.objectURL"
                    :alt="file.name"
                    style="width: 28px; height: 28px; object-fit: cover; border-radius: 4px; flex-shrink: 0;"
                  />
                  <div class="p-fileupload-file-info">
                    <span class="p-fileupload-file-name">{{ file.name }}</span>
                    <span class="p-fileupload-file-size">
                      <i class="ti ti-info-circle" />
                      {{ formatSize(file.size) }}
                    </span>
                  </div>
                  <Badge value="Badge" />
                </div>
                <Button
                  icon="ti ti-trash"
                  text
                  rounded
                  size="small"
                  @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                />
              </div>
            </div>

            <!-- Uploaded файлы -->
            <div v-if="uploadedFiles.length > 0" class="p-fileupload-file-list">
              <div
                v-for="(file, index) of uploadedFiles"
                :key="file.name + file.type + file.size"
                class="p-fileupload-file-card p-fileupload-file-uploaded"
              >
                <div class="p-fileupload-file-wrap">
                  <i class="ti ti-file-check p-fileupload-file-icon" />
                  <div class="p-fileupload-file-info">
                    <span class="p-fileupload-file-name">{{ file.name }}</span>
                    <span class="p-fileupload-file-size">
                      <i class="ti ti-info-circle" />
                      Загружено
                    </span>
                  </div>
                </div>
                <Button
                  icon="ti ti-trash"
                  text
                  rounded
                  size="small"
                  @click="removeUploadedFileCallback(index)"
                />
              </div>
            </div>

            <!-- Footer -->
            <div
              v-if="files.length > 0 || uploadedFiles.length > 0"
              class="p-fileupload-footer"
            >
              <Button
                @click="uploadCallback()"
                label="Отправить"
                severity="primary"
                :disabled="!files.length"
              />
              <Button
                @click="onClearTemplatingUpload(clearCallback)"
                label="Очистить"
                severity="danger"
                text
                :disabled="!files.length && !uploadedFiles.length"
              />
            </div>
          </div>
        </template>

        <template #empty>
          <div v-if="false"></div>
        </template>
      </FileUpload>
    </div>
  `,
});
