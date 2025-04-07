import SelectButton from 'primevue/selectbutton';

export const Template = (args) => ({
  components: { SelectButton },
  setup() {
    const options = [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
    ];

    const semiDisabledOption = [
      { name: 'Option 1', value: '1', disabled: false },
      { name: 'Option 2', value: '2', disabled: true },
      { name: 'Option 3', value: '3', disabled: true },
    ];
    return { args, options, semiDisabledOption };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>

  <span></span>
  <span><code>disabled</code></span>
  <span><code>size="small"</code></span>

  <SelectButton size="small" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
  <SelectButton size="small"  :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />

  <span></span>
  <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
  <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />

  <span><code>size="large"</code></span>
  <SelectButton size="large" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
  <SelectButton size="large" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />
  
  <span>
    <code>
      semi-disabled
    </code>
  </span>

  <SelectButton size="large" :options="semiDisabledOption" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" :optionDisabled="(e) => e.disabled"/>
</div>
`,
});
