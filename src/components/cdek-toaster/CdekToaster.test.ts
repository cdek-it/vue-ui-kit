import { shallowMount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import CdekToaster from './CdekToaster.vue';

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
    console.log('this.button.text: ', (this.button as any).text);
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
      'Если type = $type, то должен быть класс .$typeClass',
      ({ type, typeClass }: any) => {
        const wrapper = new CdekToasterBuilder().setType(type).build();
        expect(wrapper.classes(typeClass)).toBe(true);
      }
    );
  });
  test('Если title = "Заголовок", то элемент с классом .toast__title должен содержать текст "Заголовок"', () => {
    const wrapper = new CdekToasterBuilder().setTitle('Заголовок').build();
    const titleContainer = wrapper.find('.toast__title');
    expect(titleContainer.text()).toBe('Заголовок');
  });
  test('Если text = "Текст сообщения", то элемент с классом .toast__text должен содержать текст "Текст сообщения"', () => {
    const wrapper = new CdekToasterBuilder().setText('Текст сообщения').build();
    const textContainer = wrapper.find('.toast__text');
    expect(textContainer.text()).toBe('Текст сообщения');
  });
  test('Если text = undefined, то элемент с классом .toast__text не должен существовать', () => {
    const wrapper = new CdekToasterBuilder().build();
    const textContainer = wrapper.find('.toast__text');
    expect(textContainer.exists()).toBeFalsy();
  });
  test('Если withoutIcon = true, то элемент с классом .toast__icon не должен существовать', () => {
    const wrapper = new CdekToasterBuilder().toggleWithoutIcon().build();
    const icon = wrapper.find('.toast__icon');
    expect(icon.exists()).toBeFalsy();
  });
  test('Если button = undefined, то компонент cdek-button-stub не должен существовать', () => {
    const wrapper = new CdekToasterBuilder().build();
    const button = wrapper.find('cdek-button-stub');
    expect(button.exists()).toBeFalsy();
  });
  test('Если button = {text: "click", action: () => {}}, то компонент cdek-button-stub должен существовать', () => {
    const wrapper = new CdekToasterBuilder().setButtonText('click').build();
    const button = wrapper.find('cdek-button-stub');
    expect(button.exists()).toBeTruthy();
  });
  // TODO: разобраться, какого хуя button.text пустой
  test('Если button.text = "click", то атрибут "text" компонента cdek-button-stub должен быть "click"', () => {
    const wrapper = new CdekToasterBuilder().setButtonText('click').build();
    const button = wrapper.find('cdek-button-stub');
    expect(button.text()).toBe('click');
  });
  // TODO: разобраться, какого хуя button.action пустой
  test('Если button.action = () => {console.log("CLICK")}}, то атрибут "action" компонента cdek-button-stub должен быть "action: () => {console.log("CLICK")}"', () => {
    const wrapper = new CdekToasterBuilder()
      .setButtonText('click')
      .setButtonAction(() => {
        console.log('CLICK');
      })
      .build();
    const button = wrapper.find('cdek-button-stub');
    expect(button.attributes('@click')).toBe(() => {
      console.log('CLICK');
    });
  });
  test('Если button.loading = true, то атрибут loading компонента cdek-button-stub должен быть true', () => {
    const wrapper = new CdekToasterBuilder().toggleButtonLoading().build();
    const button = wrapper.find('cdek-button-stub');
    console.log(wrapper.html());
    expect(button.attributes('loading')).toBeTruthy();
  });
});
