import { describe, test, expect } from 'vitest';
import { searchByItemTitle } from '../helpers';

describe('BaseAutocomplete: searchByItemTitle', () => {
  test('Должен вернуть promise возвращающий все элементы, в которых title начинаются с введенного текста', () => {
    const promise = searchByItemTitle('a', [
      { title: 'ab', value: 'ab' },
      { title: 'b', value: 'b' },
      { title: 'ac', value: 'ac' },
    ]);
    expect(promise).resolves.toEqual([
      { title: 'ab', value: 'ab' },
      { title: 'ac', value: 'ac' },
    ]);
  });
  test('Должен вернуть promise возвращающий пустой массив, если нет элементов, в которых title начинаются с введенного текста', () => {
    const promise = searchByItemTitle('a', [
      { title: 'b', value: 'b' },
      { title: 'c', value: 'c' },
    ]);
    expect(promise).resolves.toEqual([]);
  });
  test('Должен вернуть promise возвращающий все элементы, в которых title начинаются с введенного текста независимо от регистра', () => {
    const promise = searchByItemTitle('a', [
      { title: 'Ab', value: 'ab' },
      { title: 'b', value: 'b' },
      { title: 'Ac', value: 'b' },
    ]);
    expect(promise).resolves.toEqual([
      { title: 'Ab', value: 'ab' },
      { title: 'Ac', value: 'b' },
    ]);
  });
  test('Должен вернуть promise возвращающий все элементы, в которых title включает в себя введенный текст', () => {
    const promise = searchByItemTitle('a', [
      { title: 'cat', value: 'cat' },
      { title: 'b', value: 'b' },
      { title: 'bac', value: 'bac' },
    ]);
    expect(promise).resolves.toEqual([
      { title: 'cat', value: 'cat' },
      { title: 'bac', value: 'bac' },
    ]);
  });
});
