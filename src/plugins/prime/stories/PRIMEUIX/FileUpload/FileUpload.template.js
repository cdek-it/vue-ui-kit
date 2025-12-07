import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { FileUpload },
  setup() {
    const onUpload = () => {
      alert('Файл загружен');
    };
    
    return { onUpload };
  },
  template: `
    <div class="flex justify-center p-4">
      <FileUpload 
        name="demo[]" 
        url="/api/upload" 
        @upload="onUpload" 
        :multiple="true" 
        accept="image/*" 
        :maxFileSize="1000000"
        class="w-full md:w-[600px]"
      >
        <template #empty>
          <p>Перетащите файлы сюда для загрузки.</p>
        </template>
      </FileUpload>
    </div>
  `
});

// Авто загрузка
export const AutoTemplate = () => ({
  components: { FileUpload },
  template: `
    <div class="flex justify-center p-4">
      <FileUpload 
        mode="basic" 
        name="demo[]" 
        url="/api/upload" 
        accept="image/*" 
        :maxFileSize="1000000" 
        auto
        chooseLabel="Выбрать"
        class="w-full md:w-80"
      />
    </div>
  `
});

// Пользовательская загрузка
export const CustomTemplate = () => ({
  components: { FileUpload, Button },
  setup() {
    const totalSize = ref(0);
    const totalSizePercent = ref(0);
    const files = ref([]);
    
    const onSelectedFiles = (event) => {
      files.value = event.files;
      files.value.forEach((file) => {
        totalSize.value += parseInt(file.size);
      });
    };
    
    return { totalSize, totalSizePercent, files, onSelectedFiles };
  },
  template: `
    <div class="flex justify-center p-4">
      <FileUpload 
        name="demo[]" 
        @select="onSelectedFiles" 
        :multiple="true" 
        accept="image/*" 
        :maxFileSize="1000000"
        customUpload
        class="w-full md:w-[600px]"
      >
        <template #empty>
          <p>Перетащите файлы сюда для загрузки.</p>
        </template>
      </FileUpload>
    </div>
  `
});

