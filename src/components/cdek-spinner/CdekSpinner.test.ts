import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSpinner from './CdekSpinner.vue';

type SizeT = 'small' | 'medium' | 'big' | number;

const createCdekSpinner = (color?: string, size?: SizeT) => {
  return mount(CdekSpinner, {
    props: {
      color,
      size,
    },
  });
};

describe('Unit: CdekSpinner', () => {
  describe('color', () => {
    test.todo('Если color = white, то цвет должен быть white');
    const wrapper = createCdekSpinner('white');
    expect(wrapper.classes('white')).toBe(true);
  });
  describe('color', () => {
    test.todo('Если color = #000000, то цвет должен быть #000000');
    const wrapper = createCdekSpinner('#000000');
    expect(wrapper.attributes('style')).toBe('--spinner-color: #000000;');
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
        const wrapper = createCdekSpinner(undefined, size);
        expect(wrapper.attributes('width')).toBe(resultSize);
        expect(wrapper.attributes('height')).toBe(resultSize);
      }
    );
  });
});
