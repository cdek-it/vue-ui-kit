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

    const containerStyles = {
      display: 'grid',
      gridTemplateColumns: '110px 1fr 1fr 1fr',
      gap: '25px',
      alignItems: 'center',
      justifyItems: 'center',
    };

    const fullWidthStyles = {
      width: '100%',
    };

    return {
      args,
      options,
      semiDisabledOption,
      containerStyles,
      fullWidthStyles,
    };
  },
  template: `
<div>
  <div :style="containerStyles">
    <div></div>
    <div></div>
    <div><span><code>fluid</code></span></div>
    <div><span><code>disabled</code></span></div>
    
    <div :style="fullWidthStyles">
      <span><code>size="small"</code></span>
    </div>
    <SelectButton size="small" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
    <div :style="fullWidthStyles">
      <SelectButton  size="small" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" class="fluid" />
    </div>
    <SelectButton size="small"  :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />
  
    <div :style="fullWidthStyles"><span>default size</span></div>
    <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
    <div :style="fullWidthStyles">
      <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" class="fluid" />
    </div>
    <SelectButton :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />
  
    <div :style="fullWidthStyles">
      <span><code>size="large"</code></span>
    </div>
    <SelectButton size="large" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" />
    <div :style="fullWidthStyles">
      <SelectButton size="large" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" class="fluid" />
    </div>
    <SelectButton size="large" :options="options" optionLabel="name" optionValue="value" :default-value="options[0].value" disabled v-bind="args" />
    
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    
    <div :style="fullWidthStyles">
      <span><code>semi-disabled</code></span>
    </div>
    <SelectButton :options="semiDisabledOption" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" :optionDisabled="(e) => e.disabled"/>
    <div :style="fullWidthStyles">
      <SelectButton :options="semiDisabledOption" optionLabel="name" optionValue="value" :default-value="options[0].value" v-bind="args" :optionDisabled="(e) => e.disabled" class="fluid" />
    </div>
    <div></div>
  </div>
  <br>
  <br>
  <div>
    <p>Об опции <b>fluid</b></p>
    <p>Для применения к компоненту, необходимо добавить класс <u><code>class="fluid"</code></u>.</p>
    <p>Опция совместима с опцией <b>disabled</b>.</p>
  </div>
</div>
`,
});
