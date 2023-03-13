import CdekAutocomplete from './CdekAutocomplete.vue';
import { ref } from 'vue';

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
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
  { value: 4, title: 'Box m, 35×25×15cm, up to 5kg' },
];

const Template = (args) => ({
  components: { CdekAutocomplete },
  setup() {
    const selectValue = ref(args.value);
    return { args, items: args.items, selectValue };
  },
  template: `
    <CdekAutocomplete v-bind="args" :items="items" v-model="selectValue"/>
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


export const FetchItems = Template.bind({});
FetchItems.args = {
  placeholder: 'Начните вводить',
  fetchItems: (query) => Promise.resolve(items.filter(item => item.title.toLowerCase().includes(query.toLowerCase())))
};
FetchItems.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  fetchItems="(query) => fetch('/search-items?query=\${query}').then(response => response.data.items)" 
/>
`,
    },
  },
};

export const MinLength = Template.bind({});
MinLength.args = {
  placeholder: 'Начните вводить',
  minLength:1,
  items,
};
MinLength.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  minLength: 1
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

export const Multiple = Template.bind({});
Multiple.args = {
  placeholder: 'Начните вводить',
  label: 'Размер конверта',
  multiple: true,
  value: [],
  items,
};
Multiple.parameters = {
  docs: {
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  multiple
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
