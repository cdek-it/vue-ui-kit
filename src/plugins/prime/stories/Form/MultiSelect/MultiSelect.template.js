import MultiSelect from 'primevue/multiselect';

export const Template = (args) => ({
  components: { MultiSelect },
  setup() {
    const options = [
      { name: 'Option 1', code: 'O1' },
      { name: 'Option 2', code: 'O2' },
      { name: 'Option 3', code: 'O3' },
      { name: 'Option 4', code: 'O4' },
      { name: 'Option 5', code: 'O5' },
    ];

    const defaultValue = [options[0], options[1]];
    const manySelected = [
      options[0],
      options[1],
      options[2],
      options[3],
      options[4],
    ];

    return { args, options, defaultValue, manySelected };
  },
  template: `
<div style="display: grid; grid-template-columns: repeat(3, max-content); gap: 1.0714285714285714rem; align-items: center; justify-items: center;">
  <span></span>
  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Empty</span>
  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Filled</span>

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Default</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" showClear filter :pt="{ pcFilter: { root: { class: 'p-inputtext-sm p-inputfield-sm' } } }" v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :model-value="defaultValue" showClear filter :pt="{ pcFilter: { root: { class: 'p-inputtext-sm p-inputfield-sm' } } }" v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Max Labels (3)</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :maxSelectedLabels="3" showClear v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :model-value="manySelected" :maxSelectedLabels="3" selectedItemsLabel="{0} айтемов выбрано" showClear v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Small</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-sm" showClear v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-sm" :model-value="defaultValue" showClear v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Large</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-lg" showClear v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-lg" :model-value="defaultValue" showClear v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">XLarge</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-xlg" showClear v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" class="p-multiselect-xlg" :model-value="defaultValue" showClear v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Loading</span>
  <MultiSelect :options="options" optionLabel="name" loading placeholder="MultiSelect" v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" loading placeholder="MultiSelect" :model-value="defaultValue" v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Invalid</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" invalid v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :model-value="defaultValue" invalid v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Readonly</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" readonly v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :model-value="defaultValue" readonly display="chip" v-bind="args" />

  <span style="justify-self: flex-start; font-size: 0.875rem; color: #64748b;">Disabled</span>
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" disabled v-bind="args" />
  <MultiSelect :options="options" optionLabel="name" placeholder="MultiSelect" :model-value="defaultValue" disabled v-bind="args" />
</div>
`,
});
