import Tag from 'primevue/tag';

export const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: '<Tag v-bind="args" />',
});

export const TemplateSeverities = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <Tag value="Primary" severity="primary" />
      <Tag value="Secondary" severity="secondary" />
      <Tag value="Success" severity="success" />
      <Tag value="Info" severity="info" />
      <Tag value="Warn" severity="warn" />
      <Tag value="Danger" severity="danger" />
    </div>
  `,
});
