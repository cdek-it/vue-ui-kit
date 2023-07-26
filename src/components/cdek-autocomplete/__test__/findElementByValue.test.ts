import { describe, test, expect } from 'vitest';
import { findElementByValue } from '../helpers';

describe('CdekAutocomplete: findElementByValue', () => {
  test('Если не переданы items или value, то вернется null', () => {
    expect(findElementByValue()).toBeNull();
  });
  test('Если items - массив объектов с value, то должен по этому полю найти нужный объект', () => {
    const items = [{ value: 'a' }, { value: 'b' }, { value: 'c' }];
    expect(findElementByValue(items, 'b')).toEqual(items[1]);
    expect(findElementByValue(items, 'c')).toEqual(items[2]);
  });
  test('Если items - массив строк, то должен найти соответствующий трансформированный объект', () => {
    const items = ['a', 'b', 'c'];
    expect(findElementByValue(items, 'b')).toEqual({
      value: 'b',
      title: 'b',
    });
  });
  test.todo(
    'Если items - массив объектов и передан getValue и getTitle, то должен найти соответствующий объект'
  );
  test('Если не получается найти соответствующий объект, то должен вернуть null', () => {
    expect(findElementByValue(['a'], 'b')).toBeNull();
  });
});
