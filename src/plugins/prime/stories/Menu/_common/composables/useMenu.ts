import { ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';
import {
  baseMenuItems,
  selectedMenuItemClass,
} from '@/plugins/prime/stories/Menu/_common/consts';
import { cloneDeep } from 'lodash';

export const useMenu = () => {
  const items = ref<MenuItem[]>(cloneDeep(baseMenuItems) as MenuItem[]);

  // Убираем selectedClass со всех пунктов рекурсивно
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

  // Рекурсивно ищем путь до элемента
  const findPath = (
    menuItems: MenuItem[],
    target: MenuItem,
    path: number[] = []
  ): number[] | null => {
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      if (item === target) {
        return [...path, i];
      }
      if (item.items) {
        const childPath = findPath(item.items as MenuItem[], target, [
          ...path,
          i,
        ]);
        if (childPath) {
          return childPath;
        }
      }
    }
    return null;
  };

  // Обработчик клика
  const onClickItem = (item: MenuItem) => {
    clearSelectedClass(items.value);

    const path = findPath(items.value, item);
    if (!path) {
      return;
    }

    let currentItems = items.value;
    for (const idx of path) {
      const current = currentItems[idx];
      if (!current) {
        break;
      }
      current.class = current.class
        ? `${current.class} ${selectedClass}`
        : selectedClass;
      currentItems = (current.items as MenuItem[]) || [];
    }
  };

  // Рекурсивно добавляем command
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
