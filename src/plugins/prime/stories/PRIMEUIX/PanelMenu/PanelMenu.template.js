import PanelMenu from 'primevue/panelmenu';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { PanelMenu },
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
              }
            ]
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
      },
      {
        label: 'Поиск',
        icon: 'pi pi-search'
      },
      {
        separator: true
      },
      {
        label: 'Выход',
        icon: 'pi pi-sign-out'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <PanelMenu :model="items" class="w-full md:w-80" />
    </div>
  `
});

// Множественный
export const MultipleTemplate = () => ({
  components: { PanelMenu },
  setup() {
    const items = ref([
      {
        label: 'Раздел 1',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Подраздел 1.1',
            icon: 'pi pi-user-plus'
          },
          {
            label: 'Подраздел 1.2',
            icon: 'pi pi-user-minus'
          }
        ]
      },
      {
        label: 'Раздел 2',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Подраздел 2.1',
            icon: 'pi pi-sliders-h'
          },
          {
            label: 'Подраздел 2.2',
            icon: 'pi pi-sliders-v'
          }
        ]
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <PanelMenu :model="items" multiple class="w-full md:w-80" />
    </div>
  `
});

