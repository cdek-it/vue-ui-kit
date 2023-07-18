import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekChip from './CdekChip.vue';

class CdekChipBuilder {
  build() {
    return shallowMount(CdekChip, {});
  }
}

describe('Unit: CdekChip', () => {
  test('Should mount', () => {
    const wrapper = new CdekChipBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
});
