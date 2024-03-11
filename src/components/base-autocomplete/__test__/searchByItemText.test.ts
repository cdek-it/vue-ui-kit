import { describe, test, expect } from 'vitest';
import { searchByItemText } from '../helpers';

describe('BaseAutocomplete: searchByItemText', () => {
  test('Должен вернуть promise возвращающий все элементы, которые начинаются с введенного текста', () => {
    const promise = searchByItemText('a', ['ab', 'b', 'ac']);
    expect(promise).resolves.toEqual(['ab', 'ac']);
  });
  test('Должен вернуть promise возвращающий пустой массив, если нет элементов, начинающихся с введенного текста', () => {
    const promise = searchByItemText('a', ['b', 'c']);
    expect(promise).resolves.toEqual([]);
  });
  test('Должен вернуть promise возвращающий все элементы, которые начинаются с введенного текста независимо от регистра', () => {
    const promise = searchByItemText('a', ['Ab', 'b', 'Ac']);
    expect(promise).resolves.toEqual(['Ab', 'Ac']);
  });
  test('Должен вернуть promise возвращающий все элементы, которые включают в себя введенный текст', () => {
    const promise = searchByItemText('a', ['cat', 'b', 'bac']);
    expect(promise).resolves.toEqual(['cat', 'bac']);
  });
});
