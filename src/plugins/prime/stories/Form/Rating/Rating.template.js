import { ref } from 'vue';
import Rating from 'primevue/rating';

export const Template = (args) => ({
  components: { Rating },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="3"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <Rating v-bind="args" />
  <Rating default-value="3" v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <Rating disabled v-bind="args" />
  <Rating :default-value="3" disabled v-bind="args" />
</div>
`,
});

export const TemplateClear = (args) => ({
  components: { Rating },
  setup() {
    const value1 = ref(0);
    const value2 = ref(3);
    const value3 = ref(0);
    const value4 = ref(3);
    return { args, value1, value2, value3, value4 };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span></span>
  <span><code>v-model="3"</code></span>

  <span :style="{ justifySelf: 'flex-start' }"></span>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
    <i class="ti ti-ban" style="cursor: pointer" @click="value1 = 0" />
    <Rating v-model="value1" v-bind="args" />
  </div>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
    <i class="ti ti-ban" style="cursor: pointer" @click="value2 = 0" />
    <Rating v-model="value2" v-bind="args" />
  </div>

  <span :style="{ justifySelf: 'flex-start' }"><code>disabled</code></span>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
    <i class="ti ti-ban" style="cursor: not-allowed; opacity: 0.6" />
    <Rating v-model="value3" disabled v-bind="args" />
  </div>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '0.5rem' }">
    <i class="ti ti-ban" style="cursor: not-allowed; opacity: 0.6" />
    <Rating v-model="value4" disabled v-bind="args" />
  </div>
</div>
`,
});
