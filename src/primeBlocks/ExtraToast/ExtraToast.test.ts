import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, expect, test } from 'vitest';
import PrimeVue from 'primevue/config';
import ToastService, { type ToastServiceMethods } from 'primevue/toastservice';
import ExtraToast from './ExtraToast.vue';

describe('ExtraToast template precedence', () => {
  test('renders messageicon inside the default message and preserves message override', async () => {
    const wrapper = mount(ExtraToast, {
      props: { group: 'icon-test' },
      slots: { messageicon: '<span data-custom-icon>★</span>' },
      global: { plugins: [PrimeVue, ToastService], stubs: { teleport: true } },
    });
    (
      wrapper.vm.$.appContext.config.globalProperties
        .$toast as ToastServiceMethods
    ).add({
      group: 'icon-test',
      severity: 'success',
      summary: 'Saved',
      detail: 'Details',
    });
    await nextTick();
    expect(wrapper.get('[data-custom-icon]').text()).toBe('★');
    expect(wrapper.get('.p-toast-summary').text()).toBe('Saved');
    expect(wrapper.find('.extra-toast__accent-line').exists()).toBe(true);
    wrapper.unmount();
    const custom = mount(ExtraToast, {
      props: { group: 'message-test' },
      slots: {
        message: '<span data-message>Custom message</span>',
        messageicon: '<span data-custom-icon>★</span>',
      },
      global: { plugins: [PrimeVue, ToastService], stubs: { teleport: true } },
    });
    (
      custom.vm.$.appContext.config.globalProperties
        .$toast as ToastServiceMethods
    ).add({ group: 'message-test', summary: 'Saved' });
    await nextTick();
    expect(custom.get('[data-message]').text()).toBe('Custom message');
    expect(custom.find('[data-custom-icon]').exists()).toBe(false);
    custom.unmount();
  });
});
