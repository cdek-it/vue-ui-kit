import Chip from 'primevue/chip';

export const Template = (args) => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: `
    <Chip v-bind="args" class="w-fit" />
  `,
});

export const AllStatesTemplate = (args) => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <h3 class="font-semibold">Default</h3>
        <div class="flex gap-3 flex-wrap">
          <Chip label="Chip" />
          <Chip label="Chip" icon="ti ti-check" />
          <Chip label="Chip" removable />
          <Chip label="Chip" icon="ti ti-check" removable />
        </div>
      </div>
      
      <div class="flex flex-col gap-3">
        <h3 class="font-semibold">Focus (добавьте tabindex для тестирования)</h3>
        <div class="flex gap-3 flex-wrap">
          <Chip label="Chip" :pt="{removeIcon: {tabindex: '0'}}" removable />
          <Chip label="Chip" icon="ti ti-check" :pt="{removeIcon: {tabindex: '0'}}" removable />
        </div>
      </div>
      
      <div class="flex flex-col gap-3">
        <h3 class="font-semibold">Disabled</h3>
        <div class="flex gap-3 flex-wrap">
          <Chip label="Chip" disabled />
          <Chip label="Chip" icon="ti ti-check" disabled />
          <Chip label="Chip" removable disabled />
          <Chip label="Chip" icon="ti ti-check" removable disabled />
        </div>
      </div>
    </div>
  `,
});
