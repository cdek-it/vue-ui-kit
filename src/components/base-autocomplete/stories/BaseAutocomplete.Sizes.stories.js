import BaseAutocomplete from '../BaseAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Autocomplete/Sizes',
  component: BaseAutocomplete,
  parameters: {
    docs: {
      description: {
        component: 'Autocomplete предоставляет различные размеры для адаптации к разным контекстам использования.',
      },
    },
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
];

const Template = (args) => ({
  components: { BaseAutocomplete },
  setup() {
    const selectValue = ref(args.initValue || '');
    return { args, selectValue };
  },
  template: `
    <BaseAutocomplete v-bind="args" v-model="selectValue">
      <template #not-found>Ничего не нашлось</template>
    </BaseAutocomplete>
  `,
});

export const Small = Template.bind({});
Small.args = {
  label: 'Размер коробки',
  initValue: 1,
  small: true,
  items,
};
Small.parameters = {
  docs: {
    description: {
      story: 'Маленький размер автокомплита для компактных интерфейсов.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  small
  :items="items" 
/>`,
    },
  },
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Размер коробки',
  initValue: 1,
  items,
};
Normal.parameters = {
  docs: {
    description: {
      story: 'Стандартный размер автокомплита.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  :items="items" 
/>`,
    },
  },
};
