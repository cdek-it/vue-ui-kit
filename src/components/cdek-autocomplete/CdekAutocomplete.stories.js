import CdekAutocomplete from './CdekAutocomplete.vue';
import { ref } from 'vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekAutocomplete',
  component: CdekAutocomplete,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2004%3A6818&t=IdwqUA5XOx2JLChP-4)',
      },
    },
    version: getVersion('0.1.0'),
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
  { value: 4, title: 'Box m, 35×25×15cm, up to 5kg' },
];

const Template = (args) => ({
  components: { CdekAutocomplete },
  setup() {
    const selectValue = ref(args.initValue || '');

    const selectArg = ref();

    const onSelect = (val) => (selectArg.value = val);

    return { args, selectValue, onSelect, selectArg };
  },
  template: `
    <CdekAutocomplete v-bind="args" v-model="selectValue" @select="onSelect">
      <template #not-found>
        Ничего не нашлось
      </template>
      <template #tip="{ alert, info, ban, circle }">
        <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
        <span :class="args.tipColor">{{ args.tip }}</span>
      </template>
    </CdekAutocomplete>

    <p>items => {{ args.items }}</p>
    <p>v-model => <code>{{ selectValue }}</code></p>
    <p>@select => <code>{{ selectArg }}</code></p>
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
  version: getVersion('0.1.0'),
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
  version: getVersion('0.1.0'),
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
