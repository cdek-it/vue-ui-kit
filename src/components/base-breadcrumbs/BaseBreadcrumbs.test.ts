import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import BaseBreadcrumbs from './BaseBreadcrumbs.vue';

interface ExtraMethods {
  setDefault: (val: string) => BaseBreadcrumbsBuilder;
}

interface BaseBreadcrumbsBuilder extends ExtraMethods {}

class BaseBreadcrumbsBuilder {
  @builderProp
  default = '';

  build() {
    return mount(BaseBreadcrumbs, {
      slots: {
        default: this.default,
      },
    });
  }
}

describe('Unit: BaseBreadcrumbs', () => {
  test('Should mount', () => {
    const wrapper = new BaseBreadcrumbsBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Если передан слот, то его нужно отобразить', () => {
    const wrapper = new BaseBreadcrumbsBuilder()
      .setDefault('<a>test</a>')
      .build();
    const slottedLink = wrapper.find('a');

    expect(slottedLink.exists()).toBeTruthy();
    expect(slottedLink.text()).toBe('test');
  });
});
