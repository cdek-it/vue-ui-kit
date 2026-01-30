import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

export const Template = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToast = (severity, icon) => {
      toast.add({
        severity,
        summary: 'Message',
        detail: 'caption',
        life: 5000,
        icon,
      });
    };

    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-bell' },
    ];

    return {
      args,
      showToast,
      severities,
    };
  },
  template: `
    <div>
      <Toast />
      <div class="flex flex-col gap-4">
        <Button
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :label="'Show ' + type + ' toast'"
          @click="showToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const CustomContainer = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showCustomToast = (severity, icon) => {
      toast.add({
        severity,
        summary: 'Message',
        detail: 'caption',
        life: 5000,
        icon,
      });
    };

    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-bell' },
    ];

    return {
      args,
      showCustomToast,
      severities,
    };
  },
  template: `
    <div>
      <Toast>
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-message-caption">{{ message.detail }}</div>
            </div>
            <Button
              class="p-toast-close-button"
              icon="ti ti-x"
              variant="text"
              rounded
              @click="closeCallback"
            />
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <Button
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :label="'Show ' + type + ' toast with custom container'"
          @click="showCustomToast(type, icon)"
        />
      </div>
    </div>
  `,
});

export const WithContent = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();

    const showToastWithContent = (severity, icon) => {
      toast.add({
        severity,
        summary: 'Message',
        detail: 'caption',
        life: 5000,
        icon,
      });
    };

    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-bell' },
    ];

    return {
      args,
      showToastWithContent,
      severities,
    };
  },
  template: `
    <div>
      <Toast>
        <template #container="{ message, closeCallback }">
          <div class="p-toast-message-content">
            <div class="p-toast-accent-line"></div>
            <i :class="message.icon + ' p-toast-message-icon'"></i>
            <div class="p-toast-message-text">
              <span class="p-toast-summary">{{ message.summary }}</span>
              <div class="p-toast-message-caption">{{ message.detail }}</div>
              <div class="mt-4">
                <div class="text-sm">CONTENT</div>
              </div>
              <div class="flex gap-2 mt-2">
                <div class="text-sm">Cell 1</div>
                <div class="text-sm">Cell 2</div>
              </div>
            </div>
            <Button
              class="p-toast-close-button"
              icon="ti ti-x"
              variant="text"
              rounded
              @click="closeCallback"
            />
          </div>
        </template>
      </Toast>
      <div class="flex flex-col gap-4">
        <Button
          v-for="({ type, icon }, index) in severities"
          :key="index"
          :label="'Show ' + type + ' toast with content'"
          @click="showToastWithContent(type, icon)"
        />
      </div>
    </div>
  `,
});
