import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import PBlockToggleButton from './PBlockToggleButton.vue';

interface PBlockToggleButtonBuilder {
  setBaseIcon: (baseIcon: string) => PBlockToggleButtonBuilder;
  setBaseLabel: (baseLabel: string) => PBlockToggleButtonBuilder;
  setOnIcon: (onIcon: string) => PBlockToggleButtonBuilder;
  setOffIcon: (offIcon: string) => PBlockToggleButtonBuilder;
  setOnLabel: (onLabel: string) => PBlockToggleButtonBuilder;
  setOffLabel: (offLabel: string) => PBlockToggleButtonBuilder;
  setModelValue: (modelValue: boolean) => PBlockToggleButtonBuilder;
}

class PBlockToggleButtonBuilder {
  @builderProp
  baseIcon?: string;

  @builderProp
  baseLabel?: string;

  @builderProp
  onIcon?: string;

  @builderProp
  offIcon?: string;

  @builderProp
  onLabel?: string;

  @builderProp
  offLabel?: string;

  @builderProp
  modelValue?: boolean;

  build() {
    return mount(PBlockToggleButton, {
      props: {
        baseIcon: this.baseIcon,
        baseLabel: this.baseLabel,
        onIcon: this.onIcon,
        offIcon: this.offIcon,
        onLabel: this.onLabel,
        offLabel: this.offLabel,
        modelValue: this.modelValue,
      },
    });
  }
}

describe('Unit: PBlockToggleButton', () => {
  test('Если задан baseLabel, то он должен отображаться в тексте кнопки', () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseLabel('Base Label')
      .build();

    expect(wrapper.text()).toContain('Base Label');
  });

  test('Если задан baseLabel, то он должен то он отображается и при нажатии', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseLabel('Base Label')
      .build();

    const label = wrapper.find('.p-togglebutton-label');

    expect(label.text()).toContain('Base Label');

    await label.trigger('click');

    expect(wrapper.classes().includes('p-togglebutton-checked')).toBeTruthy();

    expect(wrapper.text()).toContain('Base Label');
  });

  test('Если задан baseLabel и onLabel, то при нажатии отображается onLabel', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseLabel('Base Label')
      .setOnLabel('On Label')
      .build();

    const label = wrapper.find('.p-togglebutton-label');

    expect(label.text()).toContain('Base Label');

    await label.trigger('click');

    console.log('label', label.html());

    expect(wrapper.classes().includes('p-togglebutton-checked')).toBeTruthy();

    expect(wrapper.text()).toContain('On Label');
  });

  test('Если задан baseLabel и offLabel, то при нажатии отображается baseLabel, по умолчанию отображется offLabel', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseLabel('Base Label')
      .setOffLabel('Off Label')
      .build();

    const label = wrapper.find('.p-togglebutton-label');

    expect(label.text()).toContain('Off Label');

    await label.trigger('click');

    console.log('label', label.html());

    expect(wrapper.classes().includes('p-togglebutton-checked')).toBeTruthy();

    expect(wrapper.text()).toContain('Base Label');
  });

  test('Если задан onLabel и offLabel, то при нажатии отображается onLabel, по умолчанию отображется offLabel', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setOffLabel('Off Label')
      .setOnLabel('On Label')
      .build();

    const label = wrapper.find('.p-togglebutton-label');

    expect(label.text()).toContain('Off Label');

    await label.trigger('click');

    console.log('label', label.html());

    expect(wrapper.classes().includes('p-togglebutton-checked')).toBeTruthy();

    expect(wrapper.text()).toContain('On Label');
  });

  test('Если задана baseIcon, то должна отображаться заданная иконка', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseIcon('ti ti-arrow-down-right')
      .build();

    expect(wrapper.find('.ti-arrow-down-right').exists()).toBeTruthy();
  });

  //
  // test('Если onIcon задан, то он имеет приоритет над baseIcon', () => {
  //   const wrapper = new PBlockToggleButtonBuilder()
  //     .setBaseIcon('ti ti-check')
  //     .setOnIcon('ti ti-star')
  //     .build();
  //   expect(wrapper.find('.ti-star').exists()).toBeTruthy();
  //   expect(wrapper.find('.ti-check').exists()).toBeFalsy();
  // });
  //
  // test('Если offIcon задан, то он имеет приоритет над baseIcon', () => {
  //   const wrapper = new PBlockToggleButtonBuilder()
  //     .setBaseIcon('pi pi-check')
  //     .setOffIcon('pi pi-star')
  //     .build();
  //   expect(wrapper.find('.pi-star').exists()).toBeTruthy();
  //   expect(wrapper.find('.pi-check').exists()).toBeFalsy();
  // });
  //
  // test('Если onLabel задан, то он имеет приоритет над baseLabel', () => {
  //   const wrapper = new PBlockToggleButtonBuilder()
  //     .setBaseLabel('Base Label')
  //     .setOnLabel('On Label')
  //     .build();
  //   expect(wrapper.text()).toContain('On Label');
  //   expect(wrapper.text()).not.toContain('Base Label');
  // });
  //
  // test('Если offLabel задан, то он имеет приоритет над baseLabel', () => {
  //   const wrapper = new PBlockToggleButtonBuilder()
  //     .setBaseLabel('Base Label')
  //     .setOffLabel('Off Label')
  //     .build();
  //   expect(wrapper.text()).toContain('Off Label');
  //   expect(wrapper.text()).not.toContain('Base Label');
  // });
});
