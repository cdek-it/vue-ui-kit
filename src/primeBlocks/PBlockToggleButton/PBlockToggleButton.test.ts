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

    expect(wrapper.classes().includes('p-togglebutton-checked')).toBeTruthy();

    expect(wrapper.text()).toContain('On Label');
  });

  test('Если задана baseIcon, то должна отображаться заданная иконка', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseIcon('ti ti-arrow-down-right')
      .build();

    expect(wrapper.find('.ti-arrow-down-right').exists()).toBeTruthy();
  });

  test('Если задана baseIcon, то должна отображаться заданная иконка и при нажатии', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseIcon('ti ti-arrow-down-right')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(icon.exists()).toBeTruthy();
    expect(wrapper.find('.ti-arrow-down-right').exists()).toBeTruthy();

    await icon.trigger('click');

    expect(wrapper.find('.ti-arrow-down-right').exists()).toBeTruthy();
  });

  test('Если задана baseIcon и onIcon, то при нажатии отображается OnIcon', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseIcon('ti ti-arrow-down-right')
      .setOnIcon('ti ti-star')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(icon.exists()).toBeTruthy();
    expect(wrapper.find('.ti-arrow-down-right').exists()).toBeTruthy();

    await icon.trigger('click');

    expect(wrapper.find('.ti-star').exists()).toBeTruthy();
  });

  test('Если задана offIcon, то должна отображаться по умолчанию', () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setOffIcon('ti ti-lock')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(icon.exists()).toBeTruthy();
    expect(wrapper.find('.ti-lock').exists()).toBeTruthy();
  });

  test('Если задана onIcon, то она отображается после нажатия', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setOnIcon('ti ti-unlock')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(icon.exists()).toBeTruthy();
    expect(wrapper.find('.ti-unlock').exists()).toBeFalsy();

    await icon.trigger('click');

    expect(wrapper.find('.ti-unlock').exists()).toBeTruthy();
  });

  test('Если задана offIcon, она отображается снова после повторного нажатия', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setOffIcon('ti ti-lock')
      .setOnIcon('ti ti-unlock')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(wrapper.find('.ti-lock').exists()).toBeTruthy();

    await icon.trigger('click');

    expect(wrapper.find('.ti-unlock').exists()).toBeTruthy();

    await icon.trigger('click');

    expect(wrapper.find('.ti-lock').exists()).toBeTruthy();
  });

  test('Если заданы baseIcon, onIcon и offIcon, то отображаются onIcon и offIcon', async () => {
    const wrapper = new PBlockToggleButtonBuilder()
      .setBaseIcon('ti ti-arrow-down-right')
      .setOnIcon('ti ti-star')
      .setOffIcon('ti ti-lock')
      .build();

    const icon = wrapper.find('.p-togglebutton-icon');

    expect(wrapper.find('.ti-lock').exists()).toBeTruthy();

    // Нажатие для перехода в активное состояние
    await icon.trigger('click');

    // Проверка отображения baseIcon и onIcon
    expect(wrapper.find('.ti-star').exists()).toBeTruthy();

    // Повторное нажатие возвращает исходные иконки
    await icon.trigger('click');
    expect(wrapper.find('.ti-lock').exists()).toBeTruthy();
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
