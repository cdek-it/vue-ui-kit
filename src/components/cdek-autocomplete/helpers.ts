import type { ItemsUnion, Item, Value, FetchFunction, SearchFn } from './types';

export enum KeyboardKeys {
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter',
  Escape = 'Escape',
}

/**
 * Приоритет проверки по порядку
 *
 * Поиск производим по изначальной структуре, дабы выдавать правильный результат в
 * событии select (должны отдавать изначально переданный формат)
 */
export enum SearchType {
  // С помощью `fetchItems`
  ByFetch,
  // `items` - string[], поиск по строке
  ByItemText,
  // `items` - T, получаем `title` через `getTitle`, поиск по `title`
  ByItemGetTitle,
  // `items` - { value: string | number, title: string }[], поиск по `title`
  ByItemTitle,
  // Ни один из способов не сработал
  Error,
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

export const getSearchType = (
  fetchItems?: FetchFunction,
  items?: ItemsUnion
) => {
  if (fetchItems) {
    return SearchType.ByFetch;
  }

  if (!items) {
    return SearchType.Error;
  }

  if (typeof items[0] === 'string') {
    return SearchType.ByItemText;
  }

  if (typeof items[0] === 'object' && 'title' in items[0]) {
    return SearchType.ByItemTitle;
  }

  return SearchType.Error;
};

export const searchByItemText = (query: string, items: string[]) => {
  return Promise.resolve(
    items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  );
};

export const searchByItemTitle = (query: string, items: Item[]) => {
  return Promise.resolve(
    items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  );
};

export const getSearchFn = (type: SearchType, fetchItems?: FetchFunction) => {
  if (type === SearchType.ByFetch && fetchItems) {
    return fetchItems as SearchFn;
  }

  if (type === SearchType.ByItemText) {
    return searchByItemText as SearchFn;
  }

  if (type === SearchType.ByItemTitle) {
    return searchByItemTitle as SearchFn;
  }

  return () => Promise.resolve([]);
};
