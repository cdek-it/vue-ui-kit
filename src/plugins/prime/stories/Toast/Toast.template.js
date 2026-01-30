import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    const inlineMessages = ref([
      {
        severity: 'info',
        icon: 'ti ti-info-circle',
        summary: 'Message',
        detail: 'caption',
        id: 1,
      },
      {
        severity: 'success',
        icon: 'ti ti-circle-check',
        summary: 'Message',
        detail: 'caption',
        id: 2,
      },
      {
        severity: 'warn',
        icon: 'ti ti-alert-triangle',
        summary: 'Message',
        detail: 'caption',
        id: 3,
      },
      {
        severity: 'error',
        icon: 'ti ti-bell',
        summary: 'Message',
        detail: 'caption',
        id: 4,
      },
    ]);

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
      inlineMessages,
    };
  },
  template: `
    <div>
      <Toast />
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Inline Preview</h3>
        <div class="flex flex-col gap-4">
          <div
            v-for="message in inlineMessages"
            :key="message.id"
            :class="'p-toast-message p-toast-message-' + message.severity"
            style="width: 280px; border-width: 1px; border-radius: 10.5px; box-shadow: 0 3.5px 7px rgba(24, 26, 31, 0.2);"
          >
            <div class="p-toast-message-content" style="padding: 14px; gap: 14px; display: flex; align-items: flex-start;">
              <i :class="message.icon + ' p-toast-message-icon'" style="font-size: 31.5px;"></i>
              <div class="p-toast-message-text" style="flex: 1; display: flex; flex-direction: column; gap: 3.5px;">
                <span class="p-toast-summary" style="font-weight: 700; font-size: 14px;">{{ message.summary }}</span>
                <div class="p-toast-detail" style="font-size: 12.25px;">{{ message.detail }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Interactive Toasts</h3>
        <div class="flex flex-col gap-4">
          <Button
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :label="'Show ' + type + ' toast'"
            @click="showToast(type, icon)"
          />
        </div>
      </div>
    </div>
  `,
});

export const CustomContainer = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    const inlineMessages = ref([
      {
        severity: 'info',
        icon: 'ti ti-info-circle',
        summary: 'Message',
        detail: 'caption',
        id: 1,
      },
      {
        severity: 'success',
        icon: 'ti ti-circle-check',
        summary: 'Message',
        detail: 'caption',
        id: 2,
      },
      {
        severity: 'warn',
        icon: 'ti ti-alert-triangle',
        summary: 'Message',
        detail: 'caption',
        id: 3,
      },
      {
        severity: 'error',
        icon: 'ti ti-bell',
        summary: 'Message',
        detail: 'caption',
        id: 4,
      },
    ]);

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
      inlineMessages,
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
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Inline Preview</h3>
        <div class="flex flex-col gap-4">
          <div
            v-for="message in inlineMessages"
            :key="message.id"
            :class="'p-toast-message p-toast-message-' + message.severity"
            style="width: 280px; border-width: 1px; border-radius: 10.5px; box-shadow: 0 3.5px 7px rgba(24, 26, 31, 0.2); position: relative;"
          >
            <div class="p-toast-message-content" style="padding: 14px; gap: 14px; display: flex; align-items: flex-start;">
              <div class="p-toast-accent-line"></div>
              <i :class="message.icon + ' p-toast-message-icon'" style="font-size: 31.5px;"></i>
              <div class="p-toast-message-text" style="flex: 1; display: flex; flex-direction: column; gap: 3.5px;">
                <span class="p-toast-summary" style="font-weight: 700; font-size: 14px;">{{ message.summary }}</span>
                <div class="p-toast-message-caption">{{ message.detail }}</div>
              </div>
              <Button
                class="p-toast-close-button"
                icon="ti ti-x"
                variant="text"
                rounded
                style="width: 28px; height: 28px;"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Interactive Toasts</h3>
        <div class="flex flex-col gap-4">
          <Button
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :label="'Show ' + type + ' toast with custom container'"
            @click="showCustomToast(type, icon)"
          />
        </div>
      </div>
    </div>
  `,
});

export const WithContent = (args) => ({
  components: { Toast, Button },
  setup() {
    const toast = useToast();
    const inlineMessages = ref([
      {
        severity: 'info',
        icon: 'ti ti-info-circle',
        summary: 'Message',
        detail: 'caption',
        id: 1,
      },
      {
        severity: 'success',
        icon: 'ti ti-circle-check',
        summary: 'Message',
        detail: 'caption',
        id: 2,
      },
      {
        severity: 'warn',
        icon: 'ti ti-alert-triangle',
        summary: 'Message',
        detail: 'caption',
        id: 3,
      },
      {
        severity: 'error',
        icon: 'ti ti-bell',
        summary: 'Message',
        detail: 'caption',
        id: 4,
      },
    ]);

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
      inlineMessages,
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
      
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Inline Preview</h3>
        <div class="flex flex-col gap-4">
          <div
            v-for="message in inlineMessages"
            :key="message.id"
            :class="'p-toast-message p-toast-message-' + message.severity"
            style="width: 280px; border-width: 1px; border-radius: 10.5px; box-shadow: 0 3.5px 7px rgba(24, 26, 31, 0.2); position: relative;"
          >
            <div class="p-toast-message-content" style="padding: 14px; gap: 14px; display: flex; align-items: flex-start;">
              <div class="p-toast-accent-line"></div>
              <i :class="message.icon + ' p-toast-message-icon'" style="font-size: 31.5px;"></i>
              <div class="p-toast-message-text" style="flex: 1; display: flex; flex-direction: column; gap: 3.5px;">
                <span class="p-toast-summary" style="font-weight: 700; font-size: 14px;">{{ message.summary }}</span>
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
                style="width: 28px; height: 28px;"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4">Interactive Toasts</h3>
        <div class="flex flex-col gap-4">
          <Button
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :label="'Show ' + type + ' toast with content'"
            @click="showToastWithContent(type, icon)"
          />
        </div>
      </div>
    </div>
  `,
});
