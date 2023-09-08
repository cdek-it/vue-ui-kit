import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekBadge from './CdekBadge.vue';
import type { IBadgeProps } from '@/components/cdek-badge/CdekBadge.vue';

const createCdekBadge = (props: IBadgeProps, slots: any = '') => {
  return mount(CdekBadge as any, { props, slots });
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

  test('Если передан слот, то его нужно отобразить', () => {
    const wrapper = createCdekBadge(
      {},
      {
        default: '<b>test</b>',
      }
    );

    expect(wrapper.html()).toMatch('<b>test</b>');
  });

  test('Если передан текст, то его нужно отобразить', () => {
    const wrapper = createCdekBadge({ text: 'Status' });
    expect(wrapper.text()).toBe('Status');
  });
});
