import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import ExtraMenuItem from './ExtraMenuItem.vue';

describe('ExtraMenuItem disabled actions', () => {
  test.each(['a', 'button'])(
    'blocks disabled %s actions and navigation',
    async (as) => {
      const onClick = vi.fn();
      const wrapper = mount(ExtraMenuItem, {
        props: { as, disabled: true, label: 'Disabled', url: '#target' },
        attrs: { onClick, tabindex: 0 },
        attachTo: document.body,
      });
      const element = wrapper.element as HTMLElement;
      expect(wrapper.attributes('href')).toBeUndefined();
      expect(wrapper.attributes('aria-disabled')).toBe('true');
      expect(wrapper.attributes('tabindex')).toBe('-1');
      element.click();
      expect(onClick).not.toHaveBeenCalled();
      const activate = new KeyboardEvent('keydown', {
        key: 'Enter',
        cancelable: true,
      });
      const tab = new KeyboardEvent('keydown', {
        key: 'Tab',
        cancelable: true,
      });
      element.dispatchEvent(activate);
      element.dispatchEvent(tab);
      expect(activate.defaultPrevented).toBe(true);
      expect(tab.defaultPrevented).toBe(false);
      if (as === 'button') {
        expect((element as HTMLButtonElement).disabled).toBe(true);
      }
      await wrapper.setProps({ disabled: false });
      element.click();
      expect(onClick).toHaveBeenCalledOnce();
      expect(wrapper.attributes('tabindex')).toBe('0');
      wrapper.unmount();
    }
  );
});
