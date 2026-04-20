<script setup lang="ts">
import { ref } from 'vue';
import FileUpload, {
  type FileUploadProps,
  type FileUploadSelectEvent,
  type FileUploadUploadEvent,
  type FileUploadUploaderEvent,
  type FileUploadErrorEvent,
  type FileUploadRemoveEvent,
  type FileUploadRemoveUploadedFile,
  type FileUploadBeforeUploadEvent,
  type FileUploadBeforeSendEvent,
  type FileUploadProgressEvent,
} from 'primevue/fileupload';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Message from 'primevue/message';

interface IPBlockFileUpload extends /* @vue-ignore */ FileUploadProps {}

withDefaults(defineProps<IPBlockFileUpload>(), {
  name: 'files[]',
  url: '/api/upload',
  multiple: true,
  customUpload: true,
});

const emit = defineEmits<{
  (e: 'select', event: FileUploadSelectEvent): void;
  (e: 'upload', event: FileUploadUploadEvent): void;
  (e: 'uploader', event: FileUploadUploaderEvent): void;
  (e: 'error', event: FileUploadErrorEvent): void;
  (e: 'before-upload', event: FileUploadBeforeUploadEvent): void;
  (e: 'before-send', event: FileUploadBeforeSendEvent): void;
  (e: 'progress', event: FileUploadProgressEvent): void;
  (e: 'clear'): void;
  (e: 'remove', event: FileUploadRemoveEvent): void;
  (e: 'removeUploadedFile', event: FileUploadRemoveUploadedFile): void;
}>();

type PreviewFile = File & { objectURL?: string };

const totalSize = ref(0);
const totalSizePercent = ref(0);
const uploadSuccess = ref(false);
const isUploading = ref(false);
const uploadCb = ref<(() => void) | null>(null);
const clearCb = ref<(() => void) | null>(null);

const formatSize = (bytes: number) => {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(3)) + ' ' + sizes[i];
};

const isImage = (file: File) => file.type.startsWith('image/');

const onSelectedFiles = (event: FileUploadSelectEvent) => {
  const files = event.files as File[];
  totalSize.value = files.reduce((acc, f) => acc + f.size, 0);
  uploadSuccess.value = false;
  isUploading.value = files.length > 0;
  totalSizePercent.value = 0;
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    totalSizePercent.value = Math.min(progress, 100);
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 40);
  emit('select', event);
};

// Mock-обработчик загрузки: никаких реальных сетевых запросов (red-lines #18).
const onUploader = (event: FileUploadUploaderEvent) => {
  // eslint-disable-next-line no-console
  console.log('[PBlockFileUpload] uploader (mock)', event);
  setTimeout(() => {
    if (clearCb.value) {
      clearCb.value();
    }
    totalSize.value = 0;
    totalSizePercent.value = 0;
    uploadSuccess.value = true;
    isUploading.value = false;
  }, 1500);
  emit('uploader', event);
};

const storeCallbacks = (upload: () => void, clear: () => void) => {
  uploadCb.value = upload;
  clearCb.value = clear;
};

const onRemoveFile = (
  file: File,
  removeFileCallback: (index: number) => void,
  index: number
) => {
  removeFileCallback(index);
  totalSize.value -= file.size;
  totalSizePercent.value = Math.min((totalSize.value / 1000000) * 100, 100);
  if (totalSize.value <= 0) {
    isUploading.value = false;
  }
};

const onClearUpload = () => {
  if (clearCb.value) {
    clearCb.value();
  }
  totalSize.value = 0;
  totalSizePercent.value = 0;
  uploadSuccess.value = false;
  isUploading.value = false;
};
</script>

<template>
  <FileUpload
    v-bind="$attrs"
    @select="onSelectedFiles"
    @uploader="onUploader"
    @upload="emit('upload', $event)"
    @error="emit('error', $event)"
    @before-upload="emit('before-upload', $event)"
    @before-send="emit('before-send', $event)"
    @progress="emit('progress', $event)"
    @clear="emit('clear')"
    @remove="emit('remove', $event)"
    @remove-uploaded-file="emit('removeUploadedFile', $event)"
  >
    <template #header="{ uploadCallback, clearCallback, chooseCallback }">
      <div
        class="fu-header"
        :ref="() => storeCallbacks(uploadCallback, clearCallback)"
      >
        <div class="fu-dropzone" @click="chooseCallback()">
          <i class="ti ti-upload fu-dropzone__icon" />
          <div class="fu-dropzone__info">
            <span class="fu-dropzone__title">
              Чтобы загрузить файлы кликните или перетащите их в эту область
            </span>
            <span class="fu-dropzone__caption">
              <i class="ti ti-info-circle" />
              Можно загрузить не более 10 файлов размером 1 MB
            </span>
          </div>
        </div>
      </div>
    </template>

    <template
      #content="{
        files,
        uploadedFiles,
        removeUploadedFileCallback,
        removeFileCallback,
      }"
    >
      <div class="fu-content">
        <ProgressBar
          v-if="isUploading"
          :value="totalSizePercent"
          :showValue="false"
        />

        <Message
          v-if="uploadSuccess"
          severity="success"
          icon="ti ti-circle-check"
          closable
          @close="uploadSuccess = false"
        >
          Файлы успешно загружены
        </Message>

        <div v-if="files.length > 0" class="fu-file-list">
          <div
            v-for="(file, index) of files as PreviewFile[]"
            :key="file.name + file.type + file.size"
            class="fu-file-card"
          >
            <div class="fu-file-card__wrap">
              <i v-if="!isImage(file)" class="ti ti-file fu-file-card__icon" />
              <img
                v-else-if="file.objectURL"
                :src="file.objectURL"
                :alt="file.name"
                class="fu-file-card__thumbnail"
              />
              <div class="fu-file-card__info">
                <span class="fu-file-card__name">{{ file.name }}</span>
                <span class="fu-file-card__size">
                  <i class="ti ti-info-circle" />
                  {{ formatSize(file.size) }}
                </span>
              </div>
            </div>
            <Button
              icon="ti ti-trash"
              text
              rounded
              size="small"
              @click="onRemoveFile(file, removeFileCallback, index)"
            />
          </div>
        </div>

        <div v-if="uploadedFiles.length > 0" class="fu-file-list">
          <div
            v-for="(file, index) of uploadedFiles"
            :key="file.name + file.type + file.size"
            class="fu-file-card fu-file-card--uploaded"
          >
            <div class="fu-file-card__wrap">
              <i class="ti ti-file-check fu-file-card__icon" />
              <div class="fu-file-card__info">
                <span class="fu-file-card__name">{{ file.name }}</span>
                <span class="fu-file-card__size">Загружено</span>
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

        <div
          v-if="files.length > 0 || uploadedFiles.length > 0"
          class="fu-footer"
        >
          <Button
            label="Отправить"
            severity="primary"
            :disabled="!files.length"
            @click="uploadCb?.()"
          />
          <Button
            label="Очистить"
            severity="danger"
            text
            :disabled="!files.length && !uploadedFiles.length"
            @click="onClearUpload()"
          />
        </div>
      </div>
    </template>

    <template #empty>
      <slot name="empty" />
    </template>
    <template #chooseicon>
      <slot name="chooseicon" />
    </template>
    <template #uploadicon>
      <slot name="uploadicon" />
    </template>
    <template #cancelicon>
      <slot name="cancelicon" />
    </template>
    <template #fileremoveicon="scope">
      <slot name="fileremoveicon" v-bind="scope" />
    </template>
    <template #filelabel="scope">
      <slot name="filelabel" v-bind="scope" />
    </template>
  </FileUpload>
</template>

<style scoped>
.fu-header {
  width: 100%;
}

.fu-dropzone {
  border: var(--p-form-border-width) dashed
    var(--p-fileupload-extend-ext-content-highlight-border-default);
  border-radius: var(--p-fileupload-extend-ext-drag-n-drop-border-radius);
  padding: var(--p-fileupload-extend-ext-drag-n-drop-padding);
  background: var(--p-fileupload-extend-ext-drag-n-drop-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--p-fileupload-content-gap);
  cursor: pointer;
  transition: border-color var(--p-fileupload-root-transition-duration);
}

.fu-dropzone:hover {
  border-color: var(--p-fileupload-content-highlight-border-color);
}

.fu-dropzone__icon {
  font-size: var(--p-fileupload-extend-ext-drag-n-drop-icon-size);
  color: var(--p-text-color);
}

.fu-dropzone__info {
  display: flex;
  flex-direction: column;
  gap: var(--p-fileupload-extend-ext-drag-n-drop-info-gap);
  width: 100%;
}

.fu-dropzone__title {
  font-size: var(--p-fonts-font-size-300);
  font-weight: var(--p-fonts-font-weight-bold);
  line-height: var(--p-fonts-line-height-500);
  color: var(--p-text-color);
  align-self: center;
}

.fu-dropzone__caption {
  display: flex;
  align-items: center;
  gap: var(--p-form-gap-100);
  font-size: var(--p-fonts-font-size-200);
  color: var(--p-text-muted-color);
  align-self: center;
}

.fu-dropzone__caption .ti {
  font-size: var(--p-fonts-font-size-300);
  line-height: var(--p-fonts-line-height-250);
}

.fu-content {
  display: flex;
  flex-direction: column;
  gap: var(--p-fileupload-content-gap);
}

.fu-file-list {
  display: flex;
  flex-direction: column;
  gap: var(--p-fileupload-file-list-gap);
}

.fu-file-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--p-fileupload-file-padding);
  border: var(--p-form-border-width) solid var(--p-fileupload-file-border-color);
  border-radius: var(--p-fileupload-extend-ext-drag-n-drop-border-radius);
  gap: var(--p-fileupload-file-gap);
  transition: border-color var(--p-fileupload-root-transition-duration);
}

.fu-file-card--uploaded {
  opacity: var(--p-opacity-500);
  background: var(--p-surface-50);
}

.fu-file-card__wrap {
  display: flex;
  align-items: center;
  gap: var(--p-form-gap-300);
}

.fu-file-card__icon {
  font-size: var(--p-fileupload-extend-ext-file-icon-size);
  color: var(--p-text-color);
  flex-shrink: 0;
}

.fu-file-card__thumbnail {
  width: var(--p-fileupload-extend-ext-file-icon-size);
  height: var(--p-fileupload-extend-ext-file-icon-size);
  object-fit: cover;
  border-radius: var(--p-fileupload-extend-ext-content-border-radius);
  flex-shrink: 0;
}

.fu-file-card__info {
  display: flex;
  flex-direction: column;
  gap: var(--p-fileupload-file-info-gap);
}

.fu-file-card__name {
  font-size: var(--p-fonts-font-size-300);
  color: var(--p-text-color);
  line-height: var(--p-fonts-line-height-400);
}

.fu-file-card__size {
  display: flex;
  align-items: center;
  gap: var(--p-form-gap-100);
  font-size: var(--p-fonts-font-size-200);
  color: var(--p-text-muted-color);
}

.fu-file-card__size .ti {
  font-size: var(--p-fonts-font-size-300);
}

.fu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
