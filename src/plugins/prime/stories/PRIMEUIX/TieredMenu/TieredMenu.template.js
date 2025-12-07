import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { TieredMenu },
  setup() {
    const items = ref([
      {
        label: 'Файл',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Создать',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Документ',
                icon: 'pi pi-file'
              },
              {
                label: 'Изображение',
                icon: 'pi pi-image'
              },
              {
                label: 'Видео',
                icon: 'pi pi-video'
              }
            ]
          },
          {
            label: 'Открыть',
            icon: 'pi pi-folder-open'
          },
          {
            separator: true
          },
          {
            label: 'Выход',
            icon: 'pi pi-sign-out'
          }
        ]
      },
      {
        label: 'Правка',
        icon: 'pi pi-pencil',
        items: [
          {
            label: 'Копировать',
            icon: 'pi pi-copy'
          },
          {
            label: 'Удалить',
            icon: 'pi pi-trash'
          }
        ]
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <TieredMenu :model="items" class="w-full md:w-80" />
    </div>
  `
});

// Popup
export const PopupTemplate = () => ({
  components: { TieredMenu, Button },
  setup() {
    const menu = ref();
    const items = ref([
      {
        label: 'Файл',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Создать',
            icon: 'pi pi-plus'
          },
          {
            label: 'Открыть',
            icon: 'pi pi-folder-open'
          }
        ]
      },
      {
        label: 'Правка',
        icon: 'pi pi-pencil',
        items: [
          {
            label: 'Копировать',
            icon: 'pi pi-copy'
          },
          {
            label: 'Удалить',
            icon: 'pi pi-trash'
          }
        ]
      }
    ]);
    
    const toggle = (event) => {
      menu.value.toggle(event);
    };
    
    return { menu, items, toggle };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" @click="toggle" />
      <TieredMenu ref="menu" :model="items" popup />
    </div>
  `
});

