import { describe, test, expect, vi } from 'vitest';
import { searchByGetTitleFn } from '../helpers';

const getTitle = vi.fn((_) => _.a);

describe('CdekAutocomplete: searchByItemTitle', () => {
  test('Должен вернуть promise возвращающий все элементы, в которых getTitle начинаются с введенного текста', () => {
    const promise = searchByGetTitleFn(getTitle, 'a', [
      { a: 'ab', value: 'ab' },
      { a: 'b', value: 'b' },
      { a: 'ac', value: 'ac' },
    ]);
    expect(promise).resolves.toEqual([
      { a: 'ab', value: 'ab' },
      { a: 'ac', value: 'ac' },
    ]);
  });
  test('Должен вернуть promise возвращающий пустой массив, если нет элементов, в которых getTitle начинаются с введенного текста', () => {
    const promise = searchByGetTitleFn(getTitle, 'a', [
      { a: 'b', value: 'b' },
      { a: 'c', value: 'c' },
    ]);
    expect(promise).resolves.toEqual([]);
  });
  test('Должен вернуть promise возвращающий все элементы, в которых getTitle начинаются с введенного текста независимо от регистра', () => {
    const promise = searchByGetTitleFn(getTitle, 'a', [
      { a: 'Ab', value: 'ab' },
      { a: 'b', value: 'b' },
      { a: 'Ac', value: 'b' },
    ]);
    expect(promise).resolves.toEqual([
      { a: 'Ab', value: 'ab' },
      { a: 'Ac', value: 'b' },
    ]);
  });
  test('Должен вернуть promise возвращающий все элементы, в которых getTitle включает в себя введенный текст', () => {
    const promise = searchByGetTitleFn(getTitle, 'a', [
      { a: 'cat', value: 'cat' },
      { a: 'b', value: 'b' },
      { a: 'bac', value: 'bac' },
    ]);
    expect(promise).resolves.toEqual([
      { a: 'cat', value: 'cat' },
      { a: 'bac', value: 'bac' },
    ]);
  });
});
