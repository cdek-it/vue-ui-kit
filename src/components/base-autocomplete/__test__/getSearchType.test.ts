import { describe, test, expect, vi } from 'vitest';
import { getSearchType, SearchType } from '../helpers';

describe('getSearchType', () => {
  test('Если передан fetchItems, то должен вернуть SearchType.ByFetch', () => {
    expect(getSearchType(vi.fn(), [], vi.fn())).toBe(SearchType.ByFetch);
  });
  test('Если нет fetchItems и items, то должен вернуть SearchType.Error', () => {
    expect(getSearchType(undefined, undefined, vi.fn())).toBe(SearchType.Error);
  });
  test('Если нет fetchItems, но есть items и getTitle, то должен вернуть SearchType.ByItemGetTitle', () => {
    expect(getSearchType(undefined, [], vi.fn())).toBe(
      SearchType.ByItemGetTitle
    );
  });
  test('Если нет fetchItems и getTitle, но есть items как массив строк, то должен вернуть SearchType.ByItemText', () => {
    expect(getSearchType(undefined, ['a', 'b', 'c'], undefined)).toBe(
      SearchType.ByItemText
    );
  });
  test('Если нет fetchItems и getTitle, но есть items как массив объектов со свойством title, то должен вернуть SearchType.ByItemTitle', () => {
    expect(
      getSearchType(undefined, [{ value: 'a', title: 'A' }], undefined)
    ).toBe(SearchType.ByItemTitle);
  });
  test('Если items это массив объектов без title и нет getTitle, то должен вернуть SearchType.Error', () => {
    expect(getSearchType(undefined, [{ value: 'a' }], undefined)).toBe(
      SearchType.Error
    );
  });
});
