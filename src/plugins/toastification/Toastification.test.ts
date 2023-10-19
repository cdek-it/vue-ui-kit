import { flushPromises, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import useToast from './useToast';
import Toastification from '@/plugins/toastification/lib/plugin/install';
import { sleep } from '@/test/helpers';
import { POSITION } from './lib';

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

class ToastificationBuilder {
  build() {
    const app = {
      template: '<div></div>',
    };

    return mount(app as any, {
      attachTo: document.getElementById('app') as HTMLElement,
      global: {
        plugins: [Toastification],
        stubs: {
          'transition-group': false,
        },
      },
    });
  }
}

describe('Unit: Toastification', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <div id="app"></div>
      </div>
    `;
  });

  test('Should mount', () => {
    const wrapper = new ToastificationBuilder().build();

    expect(wrapper.exists()).toBeTruthy();
  });

  test('При вызове тоста - он отображается как info тостер, переданный текст виден', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast({ title: 'text' });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast?.classList.contains('info')).toBeTruthy();

    const text = renderedToast?.querySelector('.toast__title')?.textContent;

    expect(text).toBe('text');
  });

  test('При вызове info тоста - он отображается как info тостер', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast?.classList.contains('info')).toBeTruthy();
  });

  test('При вызове success тоста - он отображается как success тостер', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.success({ title: 'text' });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast?.classList.contains('success')).toBeTruthy();
  });

  test('При вызове error тоста - он отображается как error тостер', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.error({ title: 'text' });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast?.classList.contains('error')).toBeTruthy();
  });

  test('Если передали position, то тост должен отображаться в соотвествующем контейнере', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' }, { position: POSITION.TOP_CENTER });
    await flushPromises();
    const renderedToast = document.querySelector('.top-center');
    expect(renderedToast).not.to.equal(null);
  });

  test('Если передали timeout, то тост пропадает по истечении таймаута', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' }, { timeout: 1000 });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast).toBeDefined();
    // Ждем реакцию на клик
    await sleep(1500);

    const toastAfterClick = document.querySelector('.toast');
    expect(toastAfterClick).toBeNull();
  });

  test('При закрытии тоста через кнопку - он пропадает', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' });

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast).toBeDefined();

    const closeButton = renderedToast?.querySelector(
      '.toast__close'
    ) as HTMLButtonElement;

    closeButton?.click();

    // Ждем реакцию на клик
    await sleep(400);

    const toastAfterClick = document.querySelector('.toast');

    expect(toastAfterClick).toBeNull();
  });

  test('При закрытии тостов через метод - они пропадает', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' });
    toast.info({ title: 'text2' });
    toast.info({ title: 'text3' });

    await flushPromises();

    const renderedToasts = document.querySelectorAll('.toast');

    expect(renderedToasts.length).toBe(3);

    toast.clear();

    // Ждем реакцию
    await sleep(400);

    const newLen = document.querySelectorAll('.toast')?.length;

    expect(newLen).toBe(0);
  });

  test('При закрытии конкретного тоста через метод dismiss - он пропадает', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' });

    const secondToast = toast.info({ title: 'text2' });

    toast.info({ title: 'text3' });

    await flushPromises();

    const renderedToasts = document.querySelectorAll('.toast');

    expect(renderedToasts.length).toBe(3);

    toast.dismiss(secondToast);

    // Ждем реакцию
    await sleep(400);

    const renderedToastsAfterDismiss = document.querySelectorAll('.toast');

    expect(renderedToastsAfterDismiss.length).toBe(2);
  });

  test('При закрытии изменении тоста через метод update - тост обновляется', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast.info({ title: 'text' });

    const secondToast = toast.info({ title: 'text2' });

    toast.info({ title: 'text3' });

    await flushPromises();

    const renderedToasts = document.querySelectorAll('.toast');

    expect(renderedToasts.length).toBe(3);

    toast.update(secondToast, {
      title: 'Новый текст',
    });

    // Ждем реакцию
    await sleep(400);

    const renderedToastsAfterDismiss = document.querySelectorAll('.toast');

    const text = renderedToastsAfterDismiss[1]?.textContent;

    expect(text).toBe('Новый текст');
  });

  test('При передаче строкового параметра, он передается как title', async () => {
    const wrapper = new ToastificationBuilder().build();
    const toast = useToast();

    // Ждем маунта тостеров
    await wrapper.vm.$nextTick();

    toast('Строковый параметр');

    await flushPromises();

    const renderedToast = document.querySelector('.toast');

    expect(renderedToast?.classList.contains('info')).toBeTruthy();

    const text = renderedToast?.querySelector('.toast__title')?.textContent;

    expect(text).toBe('Строковый параметр');
  });
});
