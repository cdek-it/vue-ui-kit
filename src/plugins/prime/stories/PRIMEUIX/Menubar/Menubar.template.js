import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Menubar },
  setup() {
    const items = ref([
      {
        label: 'Главная',
        icon: 'pi pi-home'
      },
      {
        label: 'Функции',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Основные',
            items: [
              {
                label: 'Сохранить',
                icon: 'pi pi-save'
              },
              {
                label: 'Обновить',
                icon: 'pi pi-refresh'
              }
            ]
          },
          {
            label: 'Дополнительные',
            items: [
              {
                label: 'Удалить',
                icon: 'pi pi-trash'
              },
              {
                label: 'Экспорт',
                icon: 'pi pi-external-link'
              }
            ]
          }
        ]
      },
      {
        label: 'Проекты',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Основные',
            icon: 'pi pi-folder'
          },
          {
            label: 'Избранные',
            icon: 'pi pi-star'
          }
        ]
      },
      {
        label: 'Контакты',
        icon: 'pi pi-envelope'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Menubar :model="items" class="w-full" />
    </div>
  `
});

// С контентом
export const ContentTemplate = () => ({
  components: { Menubar, Button },
  setup() {
    const items = ref([
      {
        label: 'Главная',
        icon: 'pi pi-home'
      },
      {
        label: 'О нас',
        icon: 'pi pi-info-circle'
      },
      {
        label: 'Контакты',
        icon: 'pi pi-envelope'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Menubar :model="items" class="w-full">
        <template #start>
          <span class="font-bold text-xl mr-4">LOGO</span>
        </template>
        <template #end>
          <Button label="Войти" />
        </template>
      </Menubar>
    </div>
  `
});

