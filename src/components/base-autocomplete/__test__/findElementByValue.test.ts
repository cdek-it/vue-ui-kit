import { describe, test, expect } from 'vitest';
import { findElementByValue } from '../helpers';

describe('BaseAutocomplete: findElementByValue', () => {
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
  test('Если items - массив объектов и передан getValue и getTitle, то должен найти соответствующий трансформированный объект', () => {
    const items = [
      { a: 'a', b: 'A' },
      { a: 'b', b: 'B' },
    ];
    const getValue = (item: any) => item.a;
    const getTitle = (item: any) => item.b;
    expect(findElementByValue(items, 'b', getValue, getTitle)).toEqual({
      value: 'b',
      title: 'B',
    });
  });
  test('Если не получается найти соответствующий объект, то должен вернуть null', () => {
    expect(findElementByValue(['a'], 'b')).toBeNull();
  });
});
