import SelectButton from 'primevue/selectbutton';

export const Template = (args) => ({
  components: { SelectButton },
  setup() {
    const options = [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
    ];

    return { args, options };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>disabled</code></span>

  <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
  <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />
</div>
`,
});
