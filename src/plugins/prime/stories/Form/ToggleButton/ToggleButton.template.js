import { ExtraToggleButton } from '@/primeBlocks';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { ExtraToggleButton },
  setup() {
    const checked = ref(true);

    const label = 'ExtraToggleButton';

    const icon = 'ti ti-arrow-down-right';

    return { args, checked, label, icon };
  },
  template: `
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(6, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
      <span></span>
      <span></span>
      <span><code>checked</code></span>
      <span><code>icon</code></span>
      <span><code>disabled</code></span>
      <span><code>disabled icon</code></span>

      <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
      <ExtraToggleButton size="large" v-bind="args" :off-label="label" :on-label="label"/>
      <ExtraToggleButton size="large" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton size="large" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton size="large" disabled v-bind="args" :off-label="label" :on-label="label"/>
      <ExtraToggleButton :off-icon="icon" :on-icon="icon" disabled size="large" variant="text" v-bind="args" :off-label="label" :on-label="label" />

      <span></span>
      <ExtraToggleButton v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton disabled v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton disabled :off-icon="icon" :on-icon="icon" iconPos="right" v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>size="small"</code></span>
      <ExtraToggleButton size="small" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton size="small" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton size="small" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args"  :off-label="label" :on-label="label"/>
      <ExtraToggleButton size="small" disabled v-bind="args" :off-label="label" :on-label="label" />
      <ExtraToggleButton size="small" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />
    </div>
`,
});

export const Slots = (args) => ({
  components: { ExtraToggleButton },
  setup() {
    return { args };
  },
  template: `
  <div>
    <ExtraToggleButton v-bind="args">
      <template #icon>
        <i v-if="args.name === 'icon'" class="ti ti-ban"/>
      </template>
      <div v-if="args.name === 'default'"><i class="ti ti-arrow-down-right"></i> Дефолтный слот</div>
    </ExtraToggleButton>
  </div>
`,
});
