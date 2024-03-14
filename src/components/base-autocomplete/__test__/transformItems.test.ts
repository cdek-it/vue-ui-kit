import { describe, test, expect, vi } from 'vitest';
import { transformItems } from '../helpers';

describe('BaseAutocomplete: transformItems', () => {
  test('Если items=null, то должен вернуть пустой массив', () => {
    expect(transformItems(null)).toEqual([]);
  });
  test('Если передан getValue И getTitle, то должен вернуть массив с объектами обработав их через эти ф-и', () => {
    const getValue = vi.fn(() => 'value');
    const getTitle = vi.fn(() => 'title');

    const items = [0, 1, 2];

    const transformedItems = transformItems(items, getValue, getTitle);

    expect(transformedItems).toEqual([
      { value: 'value', title: 'title' },
      { value: 'value', title: 'title' },
      { value: 'value', title: 'title' },
    ]);

    expect(getValue).toHaveBeenCalledTimes(3);
    expect(getValue.mock.calls[0]).toEqual([0]);

    expect(getTitle).toHaveBeenCalledTimes(3);
    expect(getTitle.mock.calls[2]).toEqual([2]);
  });
  test('Если передан getValue без getTitle, и items - объекты, то должен вернуть тот же массив', () => {
    const getValue = vi.fn(() => 'value');

    const items = [{ value: 'origValue' }];
    expect(transformItems(items, getValue)).toEqual(items);
  });
  test('Если items - объекты, и они переданы без getValue и getTitle, то просто возвращаются', () => {
    const items = [{ a: 'a' }];
    expect(transformItems(items)).toEqual(items);
  });
  test('Если items - массив строк, то должен завернуть строки в объекты с {value, title}', () => {
    const items = ['a', 'b'];
    expect(transformItems(items)).toEqual([
      { value: 'a', title: 'a' },
      { value: 'b', title: 'b' },
    ]);
  });
});
