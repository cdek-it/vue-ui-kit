import ContextMenu from 'primevue/contextmenu';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { ContextMenu },
  setup() {
    const cm = ref();
    const items = ref([
      {
        label: 'Сохранить',
        icon: 'pi pi-save'
      },
      {
        label: 'Обновить',
        icon: 'pi pi-refresh'
      },
      {
        separator: true
      },
      {
        label: 'Удалить',
        icon: 'pi pi-trash'
      }
    ]);
    
    const onRightClick = (event) => {
      cm.value.show(event);
    };
    
    return { cm, items, onRightClick };
  },
  template: `
    <div class="flex justify-center p-4">
      <ContextMenu ref="cm" :model="items" />
      <div 
        @contextmenu="onRightClick" 
        class="border-2 border-dashed border-surface-200 rounded-lg p-8 text-center cursor-pointer"
        style="min-width: 300px; min-height: 200px;"
      >
        <p class="m-0">Щелкните правой кнопкой мыши, чтобы открыть контекстное меню</p>
      </div>
    </div>
  `
});

// С изображением
export const ImageTemplate = () => ({
  components: { ContextMenu },
  setup() {
    const cm = ref();
    const items = ref([
      {
        label: 'Просмотр',
        icon: 'pi pi-search'
      },
      {
        label: 'Обновить',
        icon: 'pi pi-refresh'
      },
      {
        separator: true
      },
      {
        label: 'Скачать',
        icon: 'pi pi-download'
      },
      {
        label: 'Удалить',
        icon: 'pi pi-trash'
      }
    ]);
    
    const onImageRightClick = (event) => {
      cm.value.show(event);
    };
    
    return { cm, items, onImageRightClick };
  },
  template: `
    <div class="flex justify-center p-4">
      <ContextMenu ref="cm" :model="items" />
      <img 
        @contextmenu="onImageRightClick" 
        src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg" 
        alt="Nature" 
        class="rounded-lg cursor-pointer"
        style="max-width: 300px;"
      />
    </div>
  `
});

