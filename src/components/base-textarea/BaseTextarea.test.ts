import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import builderProp from '@/test/decorators';
import BaseTextarea from './BaseTextarea.vue';

interface ExtraMethods {
  setModelValue: (val: string) => BaseTextareaBuilder;
  setLabel: (val: string) => BaseTextareaBuilder;
  setValidRes: (val: true | string) => BaseTextareaBuilder;
  setHideErrorMessage: (val: boolean) => BaseTextareaBuilder;
  setDisabled: (val: boolean) => BaseTextareaBuilder;
  setTip: (val: string) => BaseTextareaBuilder;
  setResize: (val: string) => BaseTextareaBuilder;
  setHeight: (val: number) => BaseTextareaBuilder;
}

interface BaseTextareaBuilder extends ExtraMethods {}

class BaseTextareaBuilder {
  @builderProp modelValue: string = '';
  @builderProp label?: string;
  @builderProp validRes?: true | string;
  @builderProp hideErrorMessage?: boolean;
  @builderProp disabled?: boolean;
  @builderProp tip?: string;
  @builderProp resize?: string;
  @builderProp height?: number;

  attrs: Record<string, string> = {};

  setPlaceholder(placeholder: string) {
    this.attrs.placeholder = placeholder;
    return this;
  }

  setAttr(key: string, value: string) {
    this.attrs[key] = value;
    return this;
  }

  build() {
    const wrapper = mount(BaseTextarea as any, {
      props: {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
        label: this.label,
        validRes: this.validRes,
        hideErrorMessage: this.hideErrorMessage,
        disabled: this.disabled,
        resize: this.resize,
        height: this.height,
      },
      slots: {
        tip: this.tip || '',
      },
      attrs: this.attrs,
    });

    return wrapper;
  }
}

describe('Unit: BaseTextarea', () => {
  test('Should mount', () => {
    const wrapper = new BaseTextareaBuilder().build();
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Компонент поддерживает v-model', async () => {
    const wrapper = new BaseTextareaBuilder()
      .setModelValue('initialText')
      .build();
    await wrapper.find('textarea').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });

  test('Если resize = "user", то textarea может менять размер', () => {
    const wrapper = new BaseTextareaBuilder().setResize('user').build();
    const textarea = wrapper.find('.prefix-textarea__textarea');
    expect(
      textarea.classes('prefix-textarea__textarea_resizable')
    ).toBeTruthy();
  });

  describe('label', () => {
    test('Если label = "Комментарий", то лейбл должен содержать "Комментарий"', () => {
      const wrapper = new BaseTextareaBuilder().setLabel('Комментарий').build();
      const label = wrapper.find('.prefix-textarea__label');
      expect(label.text()).toBe('Комментарий');
    });
    test('Если label не передан, то лейбл должен отсутствовать', () => {
      const wrapper = new BaseTextareaBuilder().build();
      const label = wrapper.find('.prefix-textarea__label');
      expect(label.exists()).toBeFalsy();
    });
    test('Если modelValue содержит значение и передан label, то лейбл должен сохранить верхнее положение', async () => {
      const wrapper = new BaseTextareaBuilder().setLabel('Комментарий').build();
      await wrapper.find('textarea').setValue('test');
      const label = wrapper.find('.prefix-textarea__label');
      expect(label.classes('prefix-textarea__label_filled')).toBeTruthy();
    });
    test('Если modelValue не содержит значение и передан label, то лейбл должен быть посередине', async () => {
      const wrapper = new BaseTextareaBuilder()
        .setLabel('Комментарий')
        .setModelValue('initialText')
        .build();
      const label = wrapper.find('.prefix-textarea__label');
      await wrapper.find('textarea').setValue('');
      expect(label.classes('prefix-textarea__label_filled')).toBeFalsy();
    });
    test('Если label не передан, то placeholder всегда виден', () => {
      const wrapper = new BaseTextareaBuilder().build();
      const textarea = wrapper.find('.prefix-textarea__textarea');
      expect(
        textarea.classes('prefix-textarea__textarea_no-label')
      ).toBeTruthy();
    });
  });

  describe('validRes', () => {
    test('Если validRes - строка, то должны добавляться стили для состояния ошибки', () => {
      const wrapper = new BaseTextareaBuilder()
        .setLabel('Лейбл')
        .setValidRes('Ошибка')
        .build();
      const control = wrapper.find('.prefix-textarea__control');
      expect(control.classes('prefix-textarea__control_error')).toBeTruthy();
      const label = wrapper.find('.prefix-textarea__label');
      expect(label.classes('prefix-textarea__label_error')).toBeTruthy();
      const textarea = wrapper.find('.prefix-textarea__textarea');
      expect(textarea.classes('prefix-textarea__textarea_error')).toBeTruthy();
    });

    test('Если validRes = "Ошибка", то должен показываться текст "Ошибка"', () => {
      const wrapper = new BaseTextareaBuilder().setValidRes('Ошибка').build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
    });

    test('Если validRes = "Ошибка" и hideErrorMessage = true то текст "Ошибка" не должен показываться', () => {
      const wrapper = new BaseTextareaBuilder()
        .setValidRes('Ошибка')
        .setHideErrorMessage(true)
        .build();
      const error = wrapper.find('.error');
      expect(error.text()).toBe('Ошибка');
      expect(error.attributes('style')).toBe('display: none;');
    });

    test('Если validRes - html, то блоки вставляются как html', () => {
      const wrapper = new BaseTextareaBuilder()
        .setLabel('Лейбл')
        .setValidRes('<p> Тестовый html </p>')
        .build();

      const error = wrapper.find('.error');

      expect(error.html()).toMatch('<p> Тестовый html </p>');

      expect(error.text()).toBe('Тестовый html');
    });
  });

  describe('placeholder', () => {
    test('Если placeholder = "Комментарий", то этот placeholder должен быть передан на textarea', () => {
      const wrapper = new BaseTextareaBuilder()
        .setPlaceholder('Комментарий')
        .build();
      const textarea = wrapper.find('.prefix-textarea__textarea');
      expect(textarea.attributes('placeholder')).toBe('Комментарий');
    });
    test('Если передан placeholder, то у корневого элемента не должно быть атрибута placeholder', () => {
      const wrapper = new BaseTextareaBuilder()
        .setPlaceholder('Комментарий')
        .build();
      expect(wrapper.attributes('placeholder')).toBeFalsy();
    });
  });

  test('Если maxlength = "3", то атрибут maxlength должен быть передан на textarea', () => {
    const wrapper = new BaseTextareaBuilder().setAttr('maxlength', '3').build();
    const textarea = wrapper.find('.prefix-textarea__textarea');
    expect(textarea.attributes('maxlength')).toBe('3');
  });

  test('Если в слот #tip передана строка "Пояснение или помощь", то должна показываться подсказка с текстом "Пояснение или помощь"', () => {
    const wrapper = new BaseTextareaBuilder()
      .setTip('Пояснение или помощь')
      .build();
    const tip = wrapper.find('.prefix-textarea__tip');
    expect(tip.text()).toBe('Пояснение или помощь');
  });

  describe('disabled', () => {
    test('Если передан disabled, то компонент должен стилизоваться под состояние disabled', () => {
      const wrapper = new BaseTextareaBuilder().setDisabled(true).build();
      const textareaContainer = wrapper.find('.prefix-textarea__control');
      expect(
        textareaContainer.classes('prefix-textarea__control_disabled')
      ).toBeTruthy();
    });
    test('Если передан disabled, то на textarea должен добавиться атрибут "disabled"', () => {
      const wrapper = new BaseTextareaBuilder().setDisabled(true).build();
      const textarea = wrapper.find('.prefix-textarea__textarea');
      expect(textarea.attributes('disabled')).toBe('');
    });
  });

  test('Если нет disabled то лейбл отслеживает hover и focus эффект', () => {
    const wrapper = new BaseTextareaBuilder().setLabel('Лейбл').build();
    const textareaContainer = wrapper.find('.prefix-textarea__control');
    expect(
      textareaContainer.classes('prefix-textarea__control_user-event')
    ).toBeTruthy();
  });
});
