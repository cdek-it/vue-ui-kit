import Message from 'primevue/message';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Message, Button },
  setup() {
    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-alert-circle' },
    ];

    return {
      args,
      severities,
    };
  },
  template: `
    <div>
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">Basic Messages</h3>
        <div class="flex flex-col gap-4">
          <Message
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :severity="type"
            :icon="icon"
          >
            <template #container="{ closeCallback }">
              <div class="p-message-content">
                <div class="p-message-accent-line"></div>
                <i :class="icon + ' p-message-icon'"></i>
                <div class="p-message-text">
                  <span class="p-message-summary">Message</span>
                  <div class="p-message-detail">caption</div>
                </div>
              </div>
            </template>
          </Message>
        </div>
      </div>
    </div>
  `,
});

export const WithCloseButton = (args) => ({
  components: { Message, Button },
  setup() {
    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-alert-circle' },
    ];

    return {
      args,
      severities,
    };
  },
  template: `
    <div>
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">With Close Button</h3>
        <div class="flex flex-col gap-4">
          <Message
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :severity="type"
            :icon="icon"
            :closable="true"
          >
            <template #container="{ closeCallback }">
              <div class="p-message-content">
                <div class="p-message-accent-line"></div>
                <i :class="icon + ' p-message-icon'"></i>
                <div class="p-message-text">
                  <span class="p-message-summary">Message</span>
                  <div class="p-message-detail">caption</div>
                </div>
                <Button
                  class="p-message-close-button"
                  icon="ti ti-x"
                  variant="text"
                  
                  @click="closeCallback"
                />
              </div>
            </template>
          </Message>
        </div>
      </div>
    </div>
  `,
});

export const WithContent = (args) => ({
  components: { Message, Button },
  setup() {
    const severities = [
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-alert-circle' },
    ];

    return {
      args,
      severities,
    };
  },
  template: `
    <div>
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">With Additional Content</h3>
        <div class="flex flex-col gap-4">
          <Message
            v-for="({ type, icon }, index) in severities"
            :key="index"
            :severity="type"
            :icon="icon"
            :closable="true"
          >
            <template #container="{ closeCallback }">
              <div class="p-message-content">
                <div class="p-message-accent-line"></div>
                <i :class="icon + ' p-message-icon'"></i>
                <div class="p-message-text">
                  <span class="p-message-summary">Message</span>
                  <div class="p-message-detail">caption</div>
                  <div class="mt-4">
                    <div class="text-sm">CONTENT</div>
                  </div>
                  <div class="flex gap-2 mt-2">
                    <div class="text-sm">Cell 1</div>
                    <div class="text-sm">Cell 2</div>
                  </div>
                </div>
                <Button
                  class="p-message-close-button"
                  icon="ti ti-x"
                  variant="text"
                  
                  @click="closeCallback"
                />
              </div>
            </template>
          </Message>
        </div>
      </div>
    </div>
  `,
});
