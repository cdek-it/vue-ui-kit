import type { ItemsUnion, Item, Value } from './types';

export enum KeyboardKeys {
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter',
  Escape = 'Escape',
}

export const transformItems = (items: ItemsUnion | null = null) => {
  if (!items) {
    return [];
  }

  if (typeof items[0] === 'object') {
    return items as Item[];
  }

  return items.map((item) => ({ value: item, title: item } as Item));
};

export const findElementByValue = (items?: ItemsUnion, value?: Value) => {
  if (!items || !value) {
    return null;
  }

  const transformedItems = transformItems(items);

  const el = transformedItems.find((item) => item.value === value);

  return el || null;
};

export const getTitleByValue = (items?: ItemsUnion, value?: Value) => {
  const el = findElementByValue(items, value);
  return el ? el.title : '';
};
