import Message from 'primevue/message';
import Button from 'primevue/button';

export const Template = (args) => ({
  components: { Message },
  setup() {
    const severity = [
      { type: 'success', icon: 'ti ti-circle-check' },
      { type: 'info', icon: 'ti ti-info-circle' },
      { type: 'warn', icon: 'ti ti-alert-triangle' },
      { type: 'error', icon: 'ti ti-bell' },
    ];
    return {
      args,
      severity,
    };
  },
  template: `
    <div class="grid grid-cols-2 gap-4">
      <template v-for="({type, icon}, index) in severity" :key="index">
        <span>
        {{ type }}
        </span>

        <Message :icon="icon" :severity="type" v-bind="args">
          <div class="flex flex-col">
            <div class="flex flex-col gap-1">
              <div class="body-bold-base">Message</div>
              <div class="caption-secondary">caption</div>
            </div>
          </div>
        </Message>
      </template>
    </div>
  `,
});

export const CustomContainer = (args) => ({
  components: { Message, Button },
  setup() {
    return {
      args,
    };
  },
  template: `
    <Message v-bind="args">
      <template #container="{closeCallback}">
        <div class="flex flex-col p-4 gap-4">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <i class="ti ti-info-circle text-4xl"/>
              <div class="flex flex-col gap-1">
                <div class="body-bold-base">Message</div>
                <div class="caption-secondary">caption</div>
              </div>
            </div>
            <Button variant="outlined" icon="ti ti-x" severity="info" @click="closeCallback"/>
          </div>
          <div>CONTENT</div>
          <div class="flex gap-2">
            <div>cell 1</div>
            <div>cell 2</div>
          </div>
        </div>
      </template>
    </Message>
  `,
});
