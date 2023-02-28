import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekSelect from './CdekSelect.vue';

class CdekSelectBuilder {
  build() {
    return shallowMount(CdekSelect, {});
  }
}

describe('Unit: CdekSelect', () => {
  test('Should mount', () => {
    const wrapper = new CdekSelectBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
});
