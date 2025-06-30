import { ToggleButton } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(true);

    const label = 'ToggleButton';

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
      <ToggleButton size="large" v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton size="large" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton size="large" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton size="large" disabled v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton :off-icon="icon" :on-icon="icon" disabled size="large" variant="text" v-bind="args" :off-label="label" :on-label="label" />

      <span></span>
      <ToggleButton v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton disabled v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton disabled :off-icon="icon" :on-icon="icon" iconPos="right" v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>size="small"</code></span>
      <ToggleButton size="small" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton size="small" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton size="small" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args"  :off-label="label" :on-label="label"/>
      <ToggleButton size="small" disabled v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton size="small" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />
    </div>
`,
});

export const Slots = (args) => ({
  components: { ToggleButton },
  setup() {
    return { args };
  },
  template: `
  <div>
    <ToggleButton v-bind="args">
      <template #icon>
        <i v-if="args.name === 'icon'" class="ti ti-ban"/>
      </template>
      <div v-if="args.name === 'default'"><i class="ti ti-arrow-down-right"></i> Дефолтный слот</div>
    </ToggleButton>
  </div>
`,
});
