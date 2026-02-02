import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

export const Template = (args) => ({
  components: { InputText, InputGroup, InputGroupAddon },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" v-bind="args" />
  </InputGroup>

  <InputGroup>
    <InputText placeholder="Placeholder" v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>

  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
</div>
`,
});

export const TemplateStates = (args) => ({
  components: { InputText, InputGroup, InputGroupAddon },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>invalid</code></span>
  <span><code>disabled</code></span>
  <span><code>readonly</code></span>

  <span :style="{ justifySelf: 'flex-start' }">Left addon</span>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" invalid v-bind="args" />
  </InputGroup>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" disabled v-bind="args" />
  </InputGroup>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" readonly v-bind="args" />
  </InputGroup>

  <span :style="{ justifySelf: 'flex-start' }">Right addon</span>
  <InputGroup>
    <InputText placeholder="Placeholder" invalid v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
  <InputGroup>
    <InputText placeholder="Placeholder" disabled v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
  <InputGroup>
    <InputText placeholder="Placeholder" readonly v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>

  <span :style="{ justifySelf: 'flex-start' }">Both addons</span>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" invalid v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" disabled v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" readonly v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
  </InputGroup>
</div>
`,
});

export const TemplateWithText = (args) => ({
  components: { InputText, InputGroup, InputGroupAddon },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputGroup>
    <InputGroupAddon>@</InputGroupAddon>
    <InputText placeholder="Username" v-bind="args" />
  </InputGroup>

  <InputGroup>
    <InputText placeholder="Price" v-bind="args" />
    <InputGroupAddon>$</InputGroupAddon>
  </InputGroup>

  <InputGroup>
    <InputGroupAddon>https://</InputGroupAddon>
    <InputText placeholder="example.com" v-bind="args" />
    <InputGroupAddon>.com</InputGroupAddon>
  </InputGroup>
</div>
`,
});

export const TemplateMultiple = (args) => ({
  components: { InputText, InputGroup, InputGroupAddon },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }">
  <InputGroup>
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputGroupAddon>
      <i class="ti ti-mail"></i>
    </InputGroupAddon>
    <InputText placeholder="Placeholder" v-bind="args" />
  </InputGroup>

  <InputGroup>
    <InputText placeholder="Placeholder" v-bind="args" />
    <InputGroupAddon>
      <i class="ti ti-user"></i>
    </InputGroupAddon>
    <InputGroupAddon>
      <i class="ti ti-mail"></i>
    </InputGroupAddon>
  </InputGroup>
</div>
`,
});
