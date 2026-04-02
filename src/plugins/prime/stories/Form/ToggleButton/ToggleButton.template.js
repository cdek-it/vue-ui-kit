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

      <span :style="{ justifySelf: 'flex-start' }"><code>class="p-togglebutton-xlg"</code></span>
      <ToggleButton class="p-togglebutton-xlg" v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton class="p-togglebutton-xlg" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-xlg" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-xlg" disabled v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton class="p-togglebutton-xlg" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>class="p-togglebutton-lg"</code></span>
      <ToggleButton class="p-togglebutton-lg" v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton class="p-togglebutton-lg" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-lg" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-lg" disabled v-bind="args" :off-label="label" :on-label="label"/>
      <ToggleButton class="p-togglebutton-lg" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>Base</code></span>
      <ToggleButton v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton disabled v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton disabled :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>class="p-togglebutton-sm"</code></span>
      <ToggleButton class="p-togglebutton-sm" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-sm" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-sm" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args"  :off-label="label" :on-label="label"/>
      <ToggleButton class="p-togglebutton-sm" disabled v-bind="args" :off-label="label" :on-label="label" />
      <ToggleButton class="p-togglebutton-sm" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />

      <span :style="{ justifySelf: 'flex-start' }"><code>Icon Only</code></span>
      <ToggleButton class="p-togglebutton-icon-only p-togglebutton-xlg" v-model="checked" :off-icon="icon" :on-icon="icon" off-label="" on-label="" />
      <ToggleButton class="p-togglebutton-icon-only p-togglebutton-lg" v-model="checked" :off-icon="icon" :on-icon="icon" off-label="" on-label="" />
      <ToggleButton class="p-togglebutton-icon-only" v-model="checked" :off-icon="icon" :on-icon="icon" off-label="" on-label="" />
      <ToggleButton class="p-togglebutton-icon-only p-togglebutton-sm" v-model="checked" :off-icon="icon" :on-icon="icon" off-label="" on-label="" />
      <span></span>
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
