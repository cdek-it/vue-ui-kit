import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekBadge from './CdekBadge.vue';
import type { BadgeProps } from '@/components/cdek-badge/CdekBadge.vue';

const createCdekBadge = (props: BadgeProps) => {
  return mount(CdekBadge, { props });
};

describe('Unit: CdekBadge', () => {
  describe('type', () => {
    test.each([
      { type: undefined, typeClass: 'info' },
      { type: 'positive', typeClass: 'positive' },
      { type: 'negative', typeClass: 'negative' },
      { type: 'process', typeClass: 'process' },
      { type: 'info', typeClass: 'info' },
      { type: 'deactive', typeClass: 'deactive' },
      { type: 'neutral', typeClass: 'neutral' },
    ])(
      'Если type = $type, то должен быть класс $typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = createCdekBadge({ text: 'Status', type });
        expect(wrapper.classes(typeClass)).toBeTruthy();
      }
    );
  });
  describe('variant', () => {
    test.each([
      { variant: undefined, variantClass: 'light' },
      { variant: 'light', variantClass: 'light' },
      { variant: 'dark', variantClass: 'dark' },
    ])(
      'Если variant = $variant, то должен быть класс $variantClass',
      ({ variant, variantClass }: any) => {
        const wrapper = createCdekBadge({
          text: 'Status',
          variant,
        });
        expect(wrapper.classes(variantClass)).toBeTruthy();
      }
    );
  });
});
