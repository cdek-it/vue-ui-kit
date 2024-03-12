import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseSpinner from './BaseSpinner.vue';

type SizeT = 'small' | 'medium' | 'big' | number;

const createBaseSpinner = (color?: string, size?: SizeT) => {
  return mount(BaseSpinner, {
    props: {
      color,
      size,
    },
  });
};

describe('Unit: BaseSpinner', () => {
  describe('color', () => {
    test('Если color = white, то цвет должен быть white', () => {
      const wrapper = createBaseSpinner('white');
      expect(wrapper.classes('white')).toBe(true);
    });

    test('Если color = #000000, то цвет должен быть #000000', () => {
      const wrapper = createBaseSpinner('#000000');
      expect(wrapper.attributes('style')).toBe('--spinner-color: #000000;');
    });
  });
  describe('size', () => {
    test.each([
      { size: undefined, resultSize: '24' },
      { size: 'medium', resultSize: '32' },
      { size: 'big', resultSize: '48' },
      { size: 56, resultSize: '56' },
    ])(
      'Если size = $size, то размер должен быть $resultSize',
      ({ size, resultSize }: any) => {
        const wrapper = createBaseSpinner(undefined, size);
        expect(wrapper.attributes('width')).toBe(resultSize);
        expect(wrapper.attributes('height')).toBe(resultSize);
      }
    );
  });
});
