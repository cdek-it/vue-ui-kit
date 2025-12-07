import Chip from 'primevue/chip';
import Avatar from 'primevue/avatar';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Chip },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Chip label="Действие" />
        <Chip label="Комедия" />
        <Chip label="Мистика" />
        <Chip label="Триллер" />
      </div>
    </div>
  `
});

// Иконка
export const IconTemplate = () => ({
  components: { Chip },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" />
      </div>
    </div>
  `
});

// Изображение
export const ImageTemplate = () => ({
  components: { Chip },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Chip label="Эми Элснер" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Асия Джаваянт" image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
        <Chip label="Оня Малимба" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
      </div>
    </div>
  `
});

// Удаляемый
export const RemovableTemplate = () => ({
  components: { Chip },
  setup() {
    const { ref } = require('vue');
    const visible1 = ref(true);
    const visible2 = ref(true);
    const visible3 = ref(true);
    
    return { visible1, visible2, visible3 };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Chip v-if="visible1" label="Действие" removable @remove="visible1 = false" />
        <Chip v-if="visible2" label="Комедия" removable @remove="visible2 = false" />
        <Chip v-if="visible3" label="Мистика" removable @remove="visible3 = false" />
      </div>
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Chip },
  template: `
    <div class="flex justify-center p-4">
      <div class="flex flex-wrap gap-2">
        <Chip>
          <span class="font-bold">Пользователь: </span>
          <span class="ml-2">user@example.com</span>
        </Chip>
        <Chip>
          <i class="pi pi-star-fill mr-2"></i>
          <span class="font-bold">5.0</span>
        </Chip>
      </div>
    </div>
  `
});

