import BaseAutocomplete from './BaseAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'Ui kit/CdekAutocomplete',
  component: BaseAutocomplete,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2004%3A6818&t=IdwqUA5XOx2JLChP-4)',
      },
    },
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
  { value: 4, title: 'Box m, 35×25×15cm, up to 5kg' },
  { value: 5, title: 'Envelope, 420×5×5сm, up to 20kg', disabled: true },
  { value: 6, title: 'Envelope, 410×5×5сm, up to 18kg' },
];

const promiseResolve = (query) =>
  Promise.resolve(
    items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  );

const Template = (args) => ({
  components: { BaseAutocomplete },
  setup() {
    const selectValue = ref(args.initValue || '');

    const selectArg = ref();

    const onSelect = (val) => (selectArg.value = val);

    return { args, selectValue, onSelect, selectArg };
  },
  template: `
    <BaseAutocomplete v-bind="args" v-model="selectValue" @select="onSelect">
      <template #not-found>
        Ничего не нашлось
      </template>
      <template #tip="{ alert, info, ban, circle }">
        <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
        <span :class="args.tipColor">{{ args.tip }}</span>
      </template>
    </BaseAutocomplete>

    <details>
      <summary>items</summary>
      <pre><code>{{ JSON.stringify(args.items, null, 2) }}</code></pre>
    </details>

    <p>v-model => <code>{{ selectValue }}</code></p>
    <p>@select => <code>{{ selectArg }}</code></p>
  `,
});

const twoBaseAutocompletesTemplate = (args) => ({
  components: { BaseAutocomplete },
  setup() {
    const selectFirstValue = ref(args.firstAutocomplete.initValue || '');

    const selectSecondValue = ref(args.secondAutocomplete.initValue || '');

    const selectFirstArg = ref();

    const selectSecondArg = ref();

    const onSelectFirstAutocomplete = (val) => (selectFirstArg.value = val);

    const onSelectSecondAutocomplete = (val) => (selectSecondArg.value = val);

    return {
      args,
      selectFirstValue,
      selectSecondValue,
      onSelectFirstAutocomplete,
      onSelectSecondAutocomplete,
      selectFirstArg,
      selectSecondArg,
    };
  },
  template: `
    <BaseAutocomplete
        v-bind="args.firstAutocomplete"
        v-model="selectFirstValue"
        @select="onSelectFirstAutocomplete"
    >
      <template #not-found>
        Ничего не нашлось
      </template>
    </BaseAutocomplete>
    
    <BaseAutocomplete
        v-bind="args.secondAutocomplete"
        v-model="selectSecondValue"
        @select="onSelectSecondAutocomplete"
    >
      <template #not-found>
        Ничего не нашлось
      </template>
    </BaseAutocomplete>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Начните вводить',
  items,
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Размер',
  items,
};
WithLabel.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер" 
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Размер коробки',
  initValue: 1,
  disabled: true,
  items,
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  disabled
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Размер коробки',
  initValue: 1,
  small: true,
  items,
};
Small.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  small
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Размер коробки',
  initValue: 1,
  readonly: true,
  items,
};
ReadOnly.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  readonly
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const FetchItems = Template.bind({});
FetchItems.args = {
  placeholder: 'Начните вводить',
  fetchItems: (query) =>
    Promise.resolve(
      items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    ),
};
FetchItems.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  fetchItems="(query) => fetch('/search-items?query=\${query}').then(response => response.data.items)" 
/>
`,
    },
  },
};

export const MinLength = Template.bind({});
MinLength.args = {
  placeholder: 'Начните вводить',
  minLength: 1,
  items,
};
MinLength.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :minLength="1"
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Размер коробки',
  validRes: 'Ошибка',
  items,
};
WithError.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  valid-res="Ошибка"
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const WithErrorHiddenMessage = Template.bind({});
WithErrorHiddenMessage.args = {
  label: 'Размер коробки',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  items,
};
WithErrorHiddenMessage.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  valid-res="Ошибка"
  hide-error-message
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const WithTip = Template.bind({});
WithTip.argTypes = {
  tipIcon: {
    options: ['info', 'alert', 'ban', 'circle'],
    type: 'select',
  },
};
WithTip.args = {
  label: 'Размер коробки',
  story: 'TipIcon',
  tipIcon: 'info',
  tip: 'Пояснение или помощь',
  items,
};
WithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки"
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
>
  <template #tip="{ info }">
    <component :is="info" />
    <span>Пояснение или помощь</span>
  </template>  
</CdekAutocomplete>>
`,
    },
  },
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  placeholder: 'Начните вводить "наз"',
  items: [
    {
      customValue: 1,
      customTitle: 'Название 1',
    },
    {
      customValue: 2,
      customTitle: 'Название 2',
    },
  ],
  getValue: (item) => item.customValue,
  getTitle: (item) => item.customTitle,
};
CustomItems.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete
  :items="[{..}, {..}]"
  :get-value="(item) => item.customValue"
  :get-title="(item) => item.customTitle"
/>
`,
    },
  },
};

export const TwoAutocompletes = twoBaseAutocompletesTemplate.bind({});

const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

TwoAutocompletes.args = {
  firstAutocomplete: {
    placeholder: 'Размер коробки (fetch с задержкой)',
    fetchItems: async (query) => {
      await delay(1000);
      return promiseResolve(query);
    },
  },
  secondAutocomplete: {
    placeholder: 'Размер коробки',
    fetchItems: (query) => promiseResolve(query),
  },
};
TwoAutocompletes.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки (fetch с задержкой)" 
  fetchItems="(query) => fetch('/search-items?query=\${query}').then(response => response.data.items)" 
/>
<CdekAutocomplete 
  label="Размер коробки" 
  fetchItems="(query) => fetch('/search-items?query=\${query}').then(response => response.data.items)" 
/>
`,
    },
  },
};

export const SelectFirstOnEnter = Template.bind({});
SelectFirstOnEnter.args = {
  placeholder: 'Начните вводить env и нажмите Enter',
  items,
};
SelectFirstOnEnter.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    ...
  ]" 
/>
`,
    },
  },
};

export const EnabledAccentQuery = Template.bind({});
EnabledAccentQuery.args = {
  placeholder: 'Начните вводить',
  enabledAccentQuery: true,
  items,
};
EnabledAccentQuery.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  enabled-accent-query
  :items="[
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
    { value: 3, title: 'Envelope, 10×10×10сm, up to 1kg' },
    ...
  ]" 
/>
`,
    },
  },
};
