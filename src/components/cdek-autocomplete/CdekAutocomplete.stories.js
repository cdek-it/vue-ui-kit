import CdekAutocomplete from './CdekAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'CdekAutocomplete',
  component: CdekAutocomplete,
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
  label: 'Вариант действия',
  value: items[0],
  items,
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekAutocomplete />',
    },
  },
};
