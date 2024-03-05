import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekAlert from './CdekAlert.vue';
import builderProp from '@/test/decorators';

import AlertTriangleIcon from './icons/alert-triangle.svg?component';
import CheckIcon from './icons/check.svg?component';
import BanIcon from './icons/ban.svg?component';
import InfoCircleIcon from './icons/info-circle.svg?component';

interface ExtraMethods {
  setTitle: (val: string) => CdekAlertBuilder;
  setType: (val: string) => CdekAlertBuilder;
  setDefaultSlot: (val: string) => CdekAlertBuilder;
  setHeaderSlot: (val: string) => CdekAlertBuilder;
}

interface CdekAlertBuilder extends ExtraMethods {}

class CdekAlertBuilder {
  @builderProp
  title?: string;

  @builderProp
  type?: string;

  @builderProp
  defaultSlot?: string;

  @builderProp
  headerSlot?: string;

  build() {
    return mount(CdekAlert as any, {
      props: {
        title: this.title,
        type: this.type,
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
    const wrapper = new CdekAlertBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('cdek-alert--attention');
  });

  test('component renders title', () => {
    const wrapper = new CdekAlertBuilder().setTitle('Test Title').build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.cdek-alert__title').text()).toBe('Test Title');
    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(true);
  });

  test('component renders with custom type', () => {
    const wrapper = new CdekAlertBuilder().setType('positive').build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('cdek-alert--positive');
    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true);
  });

  test('component renders with content', () => {
    const wrapper = new CdekAlertBuilder()
      .setDefaultSlot('Test content')
      .build();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test content');
  });

  test('component icon changes when type prop changes', async () => {
    const wrapper = new CdekAlertBuilder().build();

    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'positive' });
    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'negative' });
    expect(wrapper.findComponent(BanIcon).exists()).toBe(true);

    await wrapper.setProps({ type: 'info' });
    expect(wrapper.findComponent(InfoCircleIcon).exists()).toBe(true);
  });

  test('component renders just header slot without icon', () => {
    const wrapper = new CdekAlertBuilder().setHeaderSlot('Test Title').build();

    expect(wrapper.find('.cdek-alert__title').text()).toBe('Test Title');
    expect(wrapper.findComponent(AlertTriangleIcon).exists()).toBe(false);
  });
});
