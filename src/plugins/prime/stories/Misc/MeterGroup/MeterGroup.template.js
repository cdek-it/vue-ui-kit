import MeterGroup from 'primevue/metergroup';

export const Template = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args };
  },
  template: `
    <MeterGroup v-bind="args" />
  `,
});
