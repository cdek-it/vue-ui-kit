import MeterGroup from 'primevue/metergroup';

// colorScheme.light: success.500 → green.500, info.400 → blue.400, warn.400 → yellow.400, error.400 → red.400
const value = [
  { label: 'Apps', color: '#44e858', value: 40 },
  { label: 'Messages', color: '#77baf4', value: 25 },
  { label: 'Media', color: '#facb75', value: 20 },
  { label: 'System', color: '#f47f77', value: 15 },
];

const valueWithIcons = [
  { label: 'Apps', color: '#44e858', value: 40, icon: 'ti ti-device-desktop' },
  { label: 'Messages', color: '#77baf4', value: 25, icon: 'ti ti-mail' },
  { label: 'Media', color: '#facb75', value: 20, icon: 'ti ti-photo' },
  { label: 'System', color: '#f47f77', value: 15, icon: 'ti ti-settings' },
];

const wrapperStyle = (args) =>
  args.orientation === 'vertical' ? 'height: 300px; display: flex;' : '';

const meterStyle = (args) =>
  args.orientation === 'vertical' ? 'height: 100%; flex: 1;' : '';

export const BasicTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    const singleValue = [{ label: 'Space used', color: '#44e858', value: 15 }];
    return { args, singleValue, wrapperStyle, meterStyle };
  },
  template: `
    <div :style="wrapperStyle(args)">
      <MeterGroup :value="singleValue" v-bind="args" :style="meterStyle(args)" />
    </div>
  `,
});

export const HorizontalTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args, value, wrapperStyle, meterStyle };
  },
  template: `
    <div :style="wrapperStyle(args)">
      <MeterGroup :value="value" v-bind="args" :style="meterStyle(args)" />
    </div>
  `,
});

export const VerticalTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args, value };
  },
  template: `
    <div style="height: 300px; display: flex;">
      <MeterGroup :value="value" v-bind="args" style="height: 100%; flex: 1;" />
    </div>
  `,
});

export const LabelStartTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args, value, wrapperStyle, meterStyle };
  },
  template: `
    <div :style="wrapperStyle(args)">
      <MeterGroup :value="value" v-bind="args" :style="meterStyle(args)" />
    </div>
  `,
});

export const LabelVerticalTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args, value, wrapperStyle, meterStyle };
  },
  template: `
    <div :style="wrapperStyle(args)">
      <MeterGroup :value="value" v-bind="args" :style="meterStyle(args)" />
    </div>
  `,
});

export const IconTemplate = (args) => ({
  components: { MeterGroup },
  setup() {
    return { args, valueWithIcons, wrapperStyle, meterStyle };
  },
  template: `
    <div :style="wrapperStyle(args)">
      <MeterGroup :value="valueWithIcons" v-bind="args" :style="meterStyle(args)" />
    </div>
  `,
});
