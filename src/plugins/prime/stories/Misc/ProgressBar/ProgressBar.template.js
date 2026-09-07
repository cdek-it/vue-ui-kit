import ProgressBar from 'primevue/progressbar';

export const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: `
    <div class="card">
        <ProgressBar v-bind="args" />
    </div>
  `,
});

export const TemplateValues = () => ({
  components: { ProgressBar },
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-gray-500">25%</span>
        <ProgressBar :value="25" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-gray-500">50%</span>
        <ProgressBar :value="50" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-gray-500">75%</span>
        <ProgressBar :value="75" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-gray-500">100%</span>
        <ProgressBar :value="100" />
      </div>
    </div>
  `,
});
