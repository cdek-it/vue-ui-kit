import MeterGroup from 'primevue/metergroup';

export const BasicTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    const value = [
      { label: 'Legend({value}%)', color: '#44e858', value: 25 },
      { label: 'Legend({value}%)', color: '#77baf4', value: 20 },
      { label: 'Legend({value}%)', color: '#facb75', value: 30 },
      { label: 'Legend({value}%)', color: '#f47f77', value: 15 },
    ];
    return {
      args,
      value,
    };
  },
  template: `
    <MeterGroup :value="value" v-bind="args" />
  `,
});

export const VerticalTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    const value = [
      { label: 'Legend({value}%)', color: '#44e858', value: 25 },
      { label: 'Legend({value}%)', color: '#77baf4', value: 20 },
      { label: 'Legend({value}%)', color: '#facb75', value: 30 },
      { label: 'Legend({value}%)', color: '#f47f77', value: 15 },
    ];
    return {
      args,
      value,
    };
  },
  template: `
    <MeterGroup :value="value" labelOrientation="vertical" v-bind="args" />
  `,
});

export const MinimalTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    const value = [
      { color: '#44e858', value: 25 },
      { color: '#77baf4', value: 20 },
      { color: '#facb75', value: 30 },
    ];
    return {
      args,
      value,
    };
  },
  template: `
    <MeterGroup :value="value" v-bind="args" />
  `,
});
