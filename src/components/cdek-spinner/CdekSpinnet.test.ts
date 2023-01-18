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
    test.each([
      { color: undefined, resultColor: '#1AB248' },
      { color: 'white', resultColor: '#FFFFFF' },
      { color: '#000000', resultColor: '#000000' },
    ])(
      'Если color = $color, то цвет должен быть $resultColor',
      ({ color, resultColor }) => {
        const wrapper = createCdekSpinner(color);

        const stops = wrapper.findAll('stop');
        expect(stops[0].attributes('stop-color')).toBe(resultColor);
        expect(stops[1].attributes('stop-color')).toBe(resultColor);

        const circles = wrapper.findAll('circle');
        expect(circles[0].attributes('stroke')).toBe(resultColor);
        expect(circles[1].attributes('fill')).toBe(resultColor);
      }
    );
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
