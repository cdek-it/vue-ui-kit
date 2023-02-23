import { shallowMount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekToaster from './CdekToaster.vue';
import { dti } from '@/test/helpers';

type TypeT = 'info' | 'success' | 'error';

class CdekToasterBuilder {
  type?: TypeT;
  title: string = '';
  text?: string;
  button?: {
    text: string;
    action: () => void;
    loading?: boolean;
  };
  icon?: any;
  withoutIcon?: boolean;

  setType(type: TypeT) {
    this.type = type;
    return this;
  }
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setText(text: string) {
    this.text = text;
    return this;
  }
  private setDefaultButton() {
    if (!this.button) {
      this.button = {
        text: '',
        action: vi.fn(),
      };
    }
  }
  setButtonText(buttonText: string) {
    this.setDefaultButton();
    (this.button as any).text = buttonText;
    return this;
  }
  setButtonAction(buttonAction: () => void) {
    this.setDefaultButton();
    (this.button as any).action = buttonAction;
    return this;
  }
  toggleButtonLoading() {
    this.setDefaultButton();
    (this.button as any).loading = !(this.button as any).loading;
    return this;
  }
  setIcon(icon: any) {
    this.icon = icon;
    return this;
  }
  toggleWithoutIcon() {
    this.withoutIcon = !this.withoutIcon;
    return this;
  }

  buttonStub = {
    template: `<button data-test-id="button"><slot /></button>`,
  };

  build() {
    return shallowMount(CdekToaster, {
      props: {
        type: this.type,
        title: this.title,
        text: this.text,
        button: this.button,
        icon: this.icon,
        withoutIcon: this.withoutIcon,
      },
      global: {
        stubs: {
          CdekButton: this.buttonStub,
        },
      },
    });
  }
}

describe('Unit: CdekToast', () => {
  describe('type', () => {
    test.each([
      { type: undefined, typeClass: 'info' },
      { type: 'info', typeClass: 'info' },
      { type: 'success', typeClass: 'success' },
      { type: 'error', typeClass: 'error' },
    ])(
      'Если type = $type, то на родителе должен быть класс $typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = new CdekToasterBuilder().setType(type).build();
        expect(wrapper.classes(typeClass)).toBe(true);
      }
    );
  });
  test('Если title передан, то содержимое должно передаваться в заголовок тоста', () => {
    const wrapper = new CdekToasterBuilder().setTitle('Заголовок').build();
    const titleContainer = wrapper.find('.toast__title');
    expect(titleContainer.text()).toBe('Заголовок');
  });
  test('Если text передан, то содержимое должно передавать в текст тоста', () => {
    const wrapper = new CdekToasterBuilder().setText('Текст сообщения').build();
    const textContainer = wrapper.find('.toast__text');
    expect(textContainer.text()).toBe('Текст сообщения');
  });
  test('Если text не передан, то элемент с текстом тоста не должен существовать', () => {
    const wrapper = new CdekToasterBuilder().build();
    const textContainer = wrapper.find('.toast__text');
    expect(textContainer.exists()).toBeFalsy();
  });
  test('Если withoutIcon не передан, то иконка отрисовывается', () => {
    const wrapper = new CdekToasterBuilder().build();
    const icon = wrapper.find('.toast__icon');
    expect(icon.exists()).toBeTruthy();
  });
  test('Если withoutIcon = true, то иконка не отрисовывается', () => {
    const wrapper = new CdekToasterBuilder().toggleWithoutIcon().build();
    const icon = wrapper.find('.toast__icon');
    expect(icon.exists()).toBeFalsy();
  });
  test('Если не передан button, то компонент CdekButton не должен существовать', () => {
    const wrapper = new CdekToasterBuilder().build();
    const button = wrapper.find(dti('button'));
    expect(button.exists()).toBeFalsy();
  });
  test('Если передан button, то компонент CdekButton должен существовать', () => {
    const wrapper = new CdekToasterBuilder().setButtonText('').build();
    const button = wrapper.find(dti('button'));
    expect(button.exists()).toBeTruthy();
  });
  test('Если button.text = "click", то в CdekButton слот должен быть "click"', () => {
    const wrapper = new CdekToasterBuilder().setButtonText('click').build();
    const button = wrapper.find(dti('button'));
    expect(button.text()).toBe('click');
  });
  test('Если в button.action передана функция, то на клик по CdekButton она должна срабатывать', () => {
    const buttonAction = vi.fn();
    const wrapper = new CdekToasterBuilder()
      .setButtonText('click')
      .setButtonAction(buttonAction)
      .build();
    const button = wrapper.find(dti('button'));
    button.trigger('click');
    expect(buttonAction).toBeCalled();
  });
  test('Если button.loading = true, то атрибут loading компонента CdekButton должен быть true', () => {
    const wrapper = new CdekToasterBuilder().toggleButtonLoading().build();
    const button = wrapper.find(dti('button'));
    expect(button.attributes('loading')).toBeTruthy();
  });
});
