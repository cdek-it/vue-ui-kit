import { ref } from 'vue';
import Slider from 'primevue/slider';

export const BasicTemplate = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    return { args, value };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
  <Slider v-model="value" :style="{ width: '300px' }" v-bind="args" />
  <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ value }}</span>
</div>
`,
});

export const RangeTemplate = (args) => ({
  components: { Slider },
  setup() {
    const rangeValue = ref([20, 80]);
    return { args, rangeValue };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
  <Slider v-model="rangeValue" range :style="{ width: '300px' }" v-bind="args" />
  <span :style="{ minWidth: '80px', fontWeight: '600', fontSize: '16px' }">{{ rangeValue[0] }} - {{ rangeValue[1] }}</span>
</div>
`,
});

export const StepTemplate = (args) => ({
  components: { Slider },
  setup() {
    const stepValue = ref(50);
    return { args, stepValue };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
  <Slider v-model="stepValue" :step="10" :style="{ width: '300px' }" v-bind="args" />
  <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ stepValue }}</span>
</div>
`,
});

export const MinMaxTemplate = (args) => ({
  components: { Slider },
  setup() {
    const minMaxValue = ref(50);
    return { args, minMaxValue };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
  <Slider v-model="minMaxValue" :min="20" :max="80" :style="{ width: '300px' }" v-bind="args" />
  <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ minMaxValue }}</span>
</div>
`,
});

export const VerticalTemplate = (args) => ({
  components: { Slider },
  setup() {
    const verticalValue = ref(50);
    return { args, verticalValue };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '30px' }">
  <Slider v-model="verticalValue" orientation="vertical" :style="{ height: '200px' }" v-bind="args" />
  <span :style="{ fontWeight: '600', fontSize: '16px' }">{{ verticalValue }}</span>
</div>
`,
});

export const DisabledTemplate = (args) => ({
  components: { Slider },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
  <Slider :model-value="50" disabled :style="{ width: '300px' }" v-bind="args" />
  <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px', color: '#999' }">50</span>
</div>
`,
});
