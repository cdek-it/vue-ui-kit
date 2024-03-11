import { describe, test, expect } from 'vitest';
import { getTitleByValue } from '../helpers';

describe('BaseAutocomplete: getTitleByValue', () => {
  test('Если не переданы items или value, то должен вернуть пустую строку', () => {
    expect(getTitleByValue()).toBe('');
  });
  test('Если items - массив объектов с value и title, то должен вернуть соответствующий title', () => {
    const items = [{ value: 'a', title: 'A' }];
    expect(getTitleByValue(items, 'a')).toEqual('A');
  });
  test('Если items - массив строк, то должен вернуть ту же строку, если она найдена', () => {
    const items = ['a', 'b', 'c'];
    expect(getTitleByValue(items, 'b')).toEqual('b');
  });
  test('Если items - массив объектов и передан getValue и getTitle, то должен вернуть результат getTitle', () => {
    const items = [{ a: 'a', b: 'A' }];
    const getValue = (item: any) => item.a;
    const getTitle = (item: any) => item.b;
    expect(getTitleByValue(items, 'a', getValue, getTitle)).toEqual('A');
  });
  test('Если не получается найти соответствующий объект, то должен вернуть пустую строку', () => {
    expect(getTitleByValue(['a'], 'b')).toBe('');
  });
});
