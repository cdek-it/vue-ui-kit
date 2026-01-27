import ToggleSwitch from 'primevue/toggleswitch';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    const unchecked = ref(false);
    const checked = ref(true);
    const uncheckedInvalid = ref(false);
    const checkedInvalid = ref(true);
    const uncheckedDisabled = ref(false);
    const checkedDisabled = ref(true);

    return {
      args,
      unchecked,
      checked,
      uncheckedInvalid,
      checkedInvalid,
      uncheckedDisabled,
      checkedDisabled,
    };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'start' }">
  <span></span>
  <span><strong>Default</strong></span>
  <span><strong>Invalid</strong></span>
  <span><strong>Disabled</strong></span>

  <span :style="{ justifySelf: 'flex-start' }"><strong>Unchecked</strong></span>
  <ToggleSwitch v-model="unchecked" v-bind="args" />
  <ToggleSwitch v-model="uncheckedInvalid" invalid v-bind="args" />
  <ToggleSwitch v-model="uncheckedDisabled" disabled v-bind="args" />

  <span :style="{ justifySelf: 'flex-start' }"><strong>Checked</strong></span>
  <ToggleSwitch v-model="checked" v-bind="args" />
  <ToggleSwitch v-model="checkedInvalid" invalid v-bind="args" />
  <ToggleSwitch v-model="checkedDisabled" disabled v-bind="args" />
</div>

<div :style="{ marginTop: '40px' }">
  <h3>Состояния с фокусом</h3>
  <p :style="{ color: '#666', fontSize: '14px', marginBottom: '20px' }">Кликните на переключатель, чтобы увидеть кольцо фокуса</p>
  
  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'start' }">
    <span></span>
    <span><strong>Default (зеленое кольцо)</strong></span>
    
    <span :style="{ justifySelf: 'flex-start' }"><strong>Unchecked</strong></span>
    <ToggleSwitch v-model="unchecked" v-bind="args" />
    
    <span :style="{ justifySelf: 'flex-start' }"><strong>Checked</strong></span>
    <ToggleSwitch v-model="checked" v-bind="args" />
  </div>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'start', marginTop: '20px' }">
    <span></span>
    <span><strong>Invalid (красное кольцо)</strong></span>
    
    <span :style="{ justifySelf: 'flex-start' }"><strong>Unchecked</strong></span>
    <ToggleSwitch v-model="uncheckedInvalid" invalid v-bind="args" />
    
    <span :style="{ justifySelf: 'flex-start' }"><strong>Checked</strong></span>
    <ToggleSwitch v-model="checkedInvalid" invalid v-bind="args" />
  </div>
</div>
`,
});
