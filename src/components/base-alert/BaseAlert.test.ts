import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import BaseAlert from './BaseAlert.vue';
import builderProp from '@/test/decorators';

import AlertTriangleIcon from './icons/alert-triangle.svg?component';
import CheckIcon from './icons/check.svg?component';
import BanIcon from './icons/ban.svg?component';
import InfoCircleIcon from './icons/info-circle.svg?component';

interface ExtraMethods {
  setTitle: (val: string) => BaseAlertBuilder;
  setType: (val: string) => BaseAlertBuilder;
  setDefaultSlot: (val: string) => BaseAlertBuilder;
  setHeaderSlot: (val: string) => BaseAlertBuilder;
  setStyle: (val: string) => BaseAlertBuilder;
}

interface BaseAlertBuilder extends ExtraMethods {}

class BaseAlertBuilder {
  @builderProp
  title?: string;

  @builderProp
  type?: string;

  @builderProp
  defaultSlot?: string;

  @builderProp
  headerSlot?: string;

  @builderProp
  style?: string;

  build() {
    return mount(BaseAlert as any, {
      props: {
        title: this.title,
        type: this.type,
        style: this.style,
      },
      slots: {
        default: this.defaultSlot || '',
        header: this.headerSlot || '',
      },
    });
  }
}

describe('Unit: CdekAlert', () => {
  test('component renders with default props', () => {
    const wrapper = new BaseAlertBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('prefix-alert--attention');
    expect(wrapper.classes()).toContain('prefix-alert_surface');
  });

  test('component renders title', () => {
    const wrapper = new BaseAlertBuilder().setTitle('Test Title').build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.prefix-alert__title').text()).toBe('Test Title');
    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(true);
  });

  test('component renders with custom type', () => {
    const wrapper = new BaseAlertBuilder().setType('positive').build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('prefix-alert--positive');
    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true);
  });

  test('component renders with content', () => {
    const wrapper = new BaseAlertBuilder()
      .setDefaultSlot('Test content')
      .build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test content');
  });

  test('component icon changes when type prop changes', async () => {
    const wrapper = new BaseAlertBuilder().build();

    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'positive' });
    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'negative' });
    expect(wrapper.findComponent(BanIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'info' });
    expect(wrapper.findComponent(InfoCircleIcon).exists()).toBe(true);
  });

  test('component renders just header slot without icon', () => {
    const wrapper = new BaseAlertBuilder().setHeaderSlot('Test Title').build();

    expect(wrapper.find('.prefix-alert__title').text()).toBe('Test Title');
    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(false);
  });

  test('renders with style set to line', () => {
    const wrapper = new BaseAlertBuilder().setStyle('line').build();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('prefix-alert_line');
  });
});
