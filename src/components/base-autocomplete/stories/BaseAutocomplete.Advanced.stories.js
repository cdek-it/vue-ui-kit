import BaseAutocomplete from '../BaseAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Autocomplete/Advanced',
  component: BaseAutocomplete,
  parameters: {
    docs: {
      description: {
        component: 'Продвинутые возможности Autocomplete: асинхронная загрузка, кастомные поля, настройки поведения.',
      },
    },
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg' },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
  { value: 4, title: 'Box m, 35×25×15cm, up to 5kg' },
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
      <template #tip="{ info }" v-if="args.tip">
        <component :is="info" />
        <span>{{ args.tip }}</span>
      </template>
    </BaseAutocomplete>
    <p>v-model => <code>{{ selectValue }}</code></p>
  `,
});

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
    description: {
      story: 'Асинхронная загрузка элементов через функцию fetchItems.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :fetchItems="(query) => fetch('/api/search?q=' + query)" 
/>`,
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
    description: {
      story: 'Минимальная длина запроса для начала поиска.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  :minLength="1"
  :items="items" 
/>`,
    },
  },
};

export const WithTip = Template.bind({});
WithTip.args = {
  label: 'Размер коробки',
  tip: 'Пояснение или помощь',
  items,
};
WithTip.parameters = {
  docs: {
    description: {
      story: 'Автокомплит с подсказкой через слот tip.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки"
  :items="items" 
>
  <template #tip="{ info }">
    <component :is="info" />
    <span>Пояснение или помощь</span>
  </template>  
</CdekAutocomplete>`,
    },
  },
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  placeholder: 'Начните вводить "наз"',
  items: [
    { customValue: 1, customTitle: 'Название 1' },
    { customValue: 2, customTitle: 'Название 2' },
  ],
  getValue: (item) => item.customValue,
  getTitle: (item) => item.customTitle,
};
CustomItems.parameters = {
  docs: {
    description: {
      story: 'Использование кастомных полей для value и title через функции getValue и getTitle.',
    },
    source: {
      code: `
<CdekAutocomplete
  :items="customItems"
  :get-value="(item) => item.customValue"
  :get-title="(item) => item.customTitle"
/>`,
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
    description: {
      story: 'Подсветка совпадений в результатах поиска.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  enabled-accent-query
  :items="items" 
/>`,
    },
  },
};

export const ShowAllOnFocus = Template.bind({});
ShowAllOnFocus.args = {
  placeholder: 'Начните вводить',
  showAllOnFocus: true,
  items,
};
ShowAllOnFocus.parameters = {
  docs: {
    description: {
      story: 'Показывать все элементы при фокусе на поле ввода.',
    },
    source: {
      code: `
<CdekAutocomplete 
  placeholder="Начните вводить" 
  show-all-on-focus
  :items="items" 
/>`,
    },
  },
};
