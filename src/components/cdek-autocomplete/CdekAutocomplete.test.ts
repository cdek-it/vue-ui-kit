import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekAutocomplete from './CdekAutocomplete.vue';

class CdekAutocompleteBuilder {
  build() {
    return shallowMount(CdekAutocomplete, {});
  }
}

describe('Unit: CdekAutocomplete', () => {
  test('Should mount', () => {
    const wrapper = new CdekAutocompleteBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });
});
