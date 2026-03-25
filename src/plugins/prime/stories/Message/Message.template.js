import Message from 'primevue/message';
import Button from 'primevue/button';

const SEVERITIES = [
  { type: 'info', icon: 'ti ti-info-circle' },
  { type: 'success', icon: 'ti ti-circle-check' },
  { type: 'warn', icon: 'ti ti-alert-triangle' },
  { type: 'error', icon: 'ti ti-alert-circle' },
];

export const Template = (args) => ({
  components: { Message, Button },
  setup() {
    return { args };
  },
  template: `
    <Message :severity="args.severity" :icon="args.icon" :closable="args.closable">
      <template #container="{ closeCallback }">
        <div class="p-message-content">
          <div class="p-message-accent-line"></div>
          <i :class="(args.icon || 'ti ti-info-circle') + ' p-message-icon'"></i>
          <div class="p-message-text">
            <span class="p-message-summary">Message</span>
            <div class="p-message-detail">caption</div>
          </div>
          <Button
            v-if="args.closable"
            class="p-message-close-button"
            icon="ti ti-x"
            variant="text"
            @click="closeCallback"
          />
        </div>
      </template>
    </Message>
  `,
});

export const TemplateSeverities = () => ({
  components: { Message },
  setup() {
    return { severities: SEVERITIES };
  },
  template: `
    <div class="flex flex-col gap-4">
      <Message
        v-for="({ type, icon }, index) in severities"
        :key="index"
        :severity="type"
      >
        <template #container>
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
  `,
});

export const TemplateWithCloseButton = () => ({
  components: { Message, Button },
  setup() {
    return { severities: SEVERITIES };
  },
  template: `
    <div class="flex flex-col gap-4">
      <Message
        v-for="({ type, icon }, index) in severities"
        :key="index"
        :severity="type"
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
  `,
});

export const TemplateWithContent = () => ({
  components: { Message, Button },
  setup() {
    return { severities: SEVERITIES };
  },
  template: `
    <div class="flex flex-col gap-4">
      <Message
        v-for="({ type, icon }, index) in severities"
        :key="index"
        :severity="type"
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
  `,
});
