import BaseAutocomplete from '../BaseAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Autocomplete/Basic',
  component: BaseAutocomplete,
  parameters: {
    docs: {
      description: {
        component: 'Базовое использование компонента Autocomplete для автодополнения с поиском по списку элементов.',
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
      <template #not-found>Ничего не нашлось</template>
    </BaseAutocomplete>
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
    description: {
      story: 'Базовый автокомплит с placeholder и списком элементов.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :items="items" 
/>`,
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
    description: {
      story: 'Автокомплит с лейблом над полем ввода.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер" 
  :items="items" 
/>`,
    },
  },
};

export const NotFound = Template.bind({});
NotFound.args = {
  placeholder: 'Начните вводить',
  items: [],
};
NotFound.parameters = {
  docs: {
    description: {
      story: 'Отображение сообщения когда ничего не найдено.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :items="[]" 
>
  <template #not-found>
    Ничего не нашлось
  </template>
</CdekAutocomplete>`,
    },
  },
};
