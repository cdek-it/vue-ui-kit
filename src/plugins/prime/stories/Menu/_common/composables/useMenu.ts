import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';
import {
  baseMenuItems,
  selectedClass,
} from '@/plugins/prime/stories/Menu/_common/consts';

export const useMenu = () => {
  const items = ref<MenuItem[]>(baseMenuItems as MenuItem[]);

  // Убираем класс selectedClass со всех элементов рекурсивно
  const clearSelectedClass = (menuItems: MenuItem[]) => {
    menuItems.forEach((item) => {
      if (item.class?.includes(selectedClass)) {
        item.class =
          item.class
            .split(' ')
            .filter((c: string) => c !== selectedClass)
            .join(' ')
            .trim() || undefined;
      }
      if (item.items) {
        clearSelectedClass(item.items as MenuItem[]);
      }
    });
  };

  // Обработчик клика
  const onClickItem = (item: MenuItem) => {
    clearSelectedClass(items.value); // убираем класс со всех элементов
    item.class = item.class ? `${item.class} ${selectedClass}` : selectedClass;
  };

  // Добавляем command ко всем элементам
  const addCommandHandler = (menuItems: MenuItem[]) => {
    menuItems.forEach((item) => {
      item.command = () => onClickItem(item);
      if (item.items) {
        addCommandHandler(item.items as MenuItem[]);
      }
    });
  };

  addCommandHandler(items.value);

  return {
    items,
  };
};
