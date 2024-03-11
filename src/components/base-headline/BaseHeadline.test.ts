import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseHeadline from './BaseHeadline.vue';

type SizeT = '1' | '2' | '3' | '4' | '5' | '6' | '7';

const createBaseHeadline = (size?: SizeT) => {
  return mount(BaseHeadline as any, {
    props: {
      size,
    },
  });
};

describe('Unit: BaseHeadline', () => {
  describe('size', () => {
    test.each([
      { size: '1', sizeClass: 'headline-1' },
      { size: '2', sizeClass: 'headline-2' },
      { size: '3', sizeClass: 'headline-3' },
      { size: '4', sizeClass: 'headline-4' },
      { size: '5', sizeClass: 'headline-5' },
      { size: '6', sizeClass: 'headline-6' },
      { size: '7', sizeClass: 'headline-7' },
    ])(
      'Если size = $size, то должен быть класс $sizeClass',
      ({ size, sizeClass }: any) => {
        const wrapper = createBaseHeadline(size);
        expect(wrapper.classes(sizeClass)).toBeTruthy();
      }
    );
  });
});
