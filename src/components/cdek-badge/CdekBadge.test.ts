import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekBadge from './CdekBadge.vue';
import type { BadgeProps } from "@/components/cdek-badge/CdekBadge.vue";

class CdekBadgeBuilder {
  build(props: BadgeProps) {
    return shallowMount(CdekBadge, { props });
  }
}
describe('Unit: CdekBadge', () => {
  describe('type', () => {
    test.each([
      { type: undefined, typeClass: 'info' },
      { type: 'success', typeClass: 'success' },
      { type: 'error', typeClass: 'error' },
      { type: 'warning', typeClass: 'warning' },
      { type: 'info', typeClass: 'info' },
      { type: 'disabled', typeClass: 'disabled' },
      { type: 'neutral', typeClass: 'neutral' },
    ])(
      'Если type = $type, то должен быть класс $typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = new CdekBadgeBuilder().build({text: 'Status', type});
        expect(wrapper.classes(typeClass)).toBeTruthy();
      }
    );
  });
  describe('variant', () => {
    test.each([
      { variant: undefined, variantClass: 'light' },
      { variant: 'light', variantClass: 'light' },
      { variant: 'dark', variantClass: 'dark' }
    ])(
      'Если variant = $variant, то должен быть класс $variantClass',
      ({ variant, variantClass }: any) => {
        const wrapper = new CdekBadgeBuilder().build({text: 'Status', variant});
        expect(wrapper.classes(variantClass)).toBeTruthy();
      }
    );
  });
});
