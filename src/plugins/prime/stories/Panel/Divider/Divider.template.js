import Divider from 'primevue/divider';

export const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <Divider v-bind="args" />
  `,
});

export const ContentTemplate = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: `
    <Divider v-bind="args">
      <div>
        <i class="ti ti-info-circle mr-2"></i>
        Content
      </div>
    </Divider>
  `,
});
