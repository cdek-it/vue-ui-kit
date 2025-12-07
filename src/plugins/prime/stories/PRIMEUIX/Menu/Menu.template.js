import Menu from 'primevue/menu';
import Button from 'primevue/button';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      {
        label: 'Обновить',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Удалить',
        icon: 'pi pi-times'
      },
      {
        separator: true
      },
      {
        label: 'Главная',
        icon: 'pi pi-home'
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Menu :model="items" class="w-full md:w-80" />
    </div>
  `
});

// Группы
export const GroupTemplate = () => ({
  components: { Menu },
  setup() {
    const items = ref([
      {
        label: 'Документы',
        items: [
          {
            label: 'Новый',
            icon: 'pi pi-plus'
          },
          {
            label: 'Поиск',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'Профиль',
        items: [
          {
            label: 'Настройки',
            icon: 'pi pi-cog'
          },
          {
            label: 'Выход',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Menu :model="items" class="w-full md:w-80" />
    </div>
  `
});

// С кнопкой
export const PopupTemplate = () => ({
  components: { Menu, Button },
  setup() {
    const menu = ref();
    const items = ref([
      {
        label: 'Обновить',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Удалить',
        icon: 'pi pi-times'
      },
      {
        separator: true
      },
      {
        label: 'Главная',
        icon: 'pi pi-home'
      }
    ]);
    
    const toggle = (event) => {
      menu.value.toggle(event);
    };
    
    return { menu, items, toggle };
  },
  template: `
    <div class="flex justify-center p-4">
      <Button label="Показать" icon="pi pi-bars" @click="toggle" />
      <Menu ref="menu" :model="items" popup />
    </div>
  `
});

// С иконками
export const IconsTemplate = () => ({
  components: { Menu },
  setup() {
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
          },
          {
            label: 'Сохранить',
            icon: 'pi pi-save'
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
            label: 'Вырезать',
            icon: 'pi pi-times'
          },
          {
            label: 'Вставить',
            icon: 'pi pi-file'
          }
        ]
      }
    ]);
    
    return { items };
  },
  template: `
    <div class="flex justify-center p-4">
      <Menu :model="items" class="w-full md:w-80" />
    </div>
  `
});

