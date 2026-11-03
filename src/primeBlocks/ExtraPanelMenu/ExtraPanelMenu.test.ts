import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import ExtraPanelMenu from './ExtraPanelMenu.vue';

const model = [{ key: 'root', label: 'Root', items: [{ label: 'Child' }] }];

describe('ExtraPanelMenu icon slots', () => {
  test('routes headericon to roots and itemicon to children', () => {
    const wrapper = mount(ExtraPanelMenu, {
      props: { model, expandedKeys: { root: true } },
      slots: {
        headericon: '<span data-header>{{ params.item.label }}</span>',
        itemicon: '<span data-item>{{ params.item.label }}</span>',
      },
    });
    expect(wrapper.get('.p-panelmenu-header [data-header]').text()).toBe(
      'Root'
    );
    expect(wrapper.find('.p-panelmenu-header [data-item]').exists()).toBe(
      false
    );
    expect(wrapper.get('.p-panelmenu-content [data-item]').text()).toBe(
      'Child'
    );
    expect(wrapper.find('.p-panelmenu-content [data-header]').exists()).toBe(
      false
    );
  });
});
