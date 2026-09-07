import { ref } from 'vue';
import Slider from 'primevue/slider';

export const Template = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    return { args, value };
  },
  template: `
    <div :class="args.orientation === 'vertical' ? 'flex items-end gap-4' : 'flex items-center gap-4'" :style="args.orientation === 'vertical' ? 'height: 220px' : ''">
      <Slider v-model="value" :style="args.orientation === 'vertical' ? 'height: 200px' : 'width: 300px'" v-bind="args" />
      <span class="text-sm font-semibold">{{ value }}</span>
    </div>
  `,
});

export const TemplateRange = (args) => ({
  components: { Slider },
  setup() {
    const value = ref([20, 80]);
    return { args, value };
  },
  template: `
    <div :class="args.orientation === 'vertical' ? 'flex items-end gap-4' : 'flex items-center gap-4'" :style="args.orientation === 'vertical' ? 'height: 220px' : ''">
      <Slider v-model="value" range :style="args.orientation === 'vertical' ? 'height: 200px' : 'width: 300px'" v-bind="args" />
      <span class="text-sm font-semibold">{{ value[0] }} — {{ value[1] }}</span>
    </div>
  `,
});

export const TemplateStep = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    return { args, value };
  },
  template: `
    <div :class="args.orientation === 'vertical' ? 'flex items-end gap-4' : 'flex items-center gap-4'" :style="args.orientation === 'vertical' ? 'height: 220px' : ''">
      <Slider v-model="value" :step="10" :style="args.orientation === 'vertical' ? 'height: 200px' : 'width: 300px'" v-bind="args" />
      <span class="text-sm font-semibold">{{ value }}</span>
    </div>
  `,
});

export const TemplateVertical = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(50);
    return { args, value };
  },
  template: `
    <div class="flex items-end gap-4" style="height: 220px">
      <Slider v-model="value" orientation="vertical" style="height: 200px" v-bind="args" />
      <span class="text-sm font-semibold">{{ value }}</span>
    </div>
  `,
});

export const TemplateDisabled = (args) => ({
  components: { Slider },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <Slider :model-value="50" disabled style="width: 300px" v-bind="args" />
        <span class="text-sm font-semibold">50</span>
      </div>
      <div class="flex items-center gap-4">
        <Slider :model-value="[20, 80]" range disabled style="width: 300px" v-bind="args" />
        <span class="text-sm font-semibold">20 — 80</span>
      </div>
    </div>
  `,
});
