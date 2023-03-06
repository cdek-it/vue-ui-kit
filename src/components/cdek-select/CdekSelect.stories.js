import CdekSelect from './CdekSelect.vue';
import TrashIcon from '../cdek-dropdown/svg/trash.svg?component'
import { ref } from "vue";

export default {
  title: 'Ui kit/CdekSelect',
  component: CdekSelect,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2002%3A5618&t=1hSFwpuIzTDSax1g-4)',
      },
    },
  },
};

const items = [
  {value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true},
  {value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg'},
  {value: 3, title: 'Box S, 23×19×10cm, up to 2kg'},
  {value: 4, title: 'Box m, 35×25×15cm, up to 5kg'},
]

const Template = (args) => ({
  components: { CdekSelect },
  setup() {
    const selectValue = ref(args.value);
    return { args, items: args.items, selectValue };
  },
  template: `
    <CdekSelect v-bind="args" :items="items" v-model="selectValue" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Вариант действия',
  items
};
Primary.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" :items="items" v-model="selectVal" />`,
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Вариант действия',
  multiple: true,
  value: [],
  items
};
Multiple.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" multiple :items="items" v-model="selectVal" />`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Вариант действия',
  disabled: true,
  items
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" disabled :items="items" v-model="selectVal" />`,
    },
  },
};

export const WithIcon = Template.bind({});
const WithIconItems = [...items];
WithIconItems.push({
  value: 'del',
  title: 'Удалить',
  color: 'red',
  icon: TrashIcon,
});
WithIcon.args = {
  label: 'Вариант действия',
  items: WithIconItems
};
WithIcon.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" v-model="selectVal" />`,
    },
  },
};

/*
export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Вариант действия',
  options,
  value: 1
};
WithValue.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" v-model="selectVal">
          <CdekListItem
            v-for="option in options"
            @select="args.onSelect"
            :checked="option.value === selectValue.value"
            :disabled="option.disabled"
            :value="option"
            :color="option.color"
            :key="option.value"
          >
            {{ option.title }}
          </CdekListItem>
        </CdekSelect>`,
    },
  },
};

export const WithDisabledOption = Template.bind({});
const WithDisabledOptionOptions = [...options];
WithDisabledOptionOptions[2].disabled = true;
WithDisabledOption.args = {
  label: 'Вариант действия',
  value: 1,
  options: WithDisabledOptionOptions
};
WithDisabledOption.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" v-model="selectVal">
          <CdekListItem
            v-for="option in options"
            @select="args.onSelect"
            :checked="option.value === selectValue.value"
            :disabled="option.disabled"
            :value="option"
            :color="option.color"
            :key="option.value"
          >
            {{ option.title }}
          </CdekListItem>
        </CdekSelect>`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Вариант действия',
  value: 1,
  options,
  small: true
};
Small.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" small v-model="selectVal">
          <CdekListItem
            v-for="option in options"
            @select="args.onSelect"
            :checked="option.value === selectValue.value"
            :disabled="option.disabled"
            :value="option"
            :color="option.color"
            :key="option.value"
          >
            {{ option.title }}
          </CdekListItem>
        </CdekSelect>`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Вариант действия',
  value: 1,
  options,
  disabled: true
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
        <CdekSelect label="Вариант действия" disabled v-model="selectVal">
          <CdekListItem
            v-for="option in options"
            @select="args.onSelect"
            :checked="option.value === selectValue.value"
            :disabled="option.disabled"
            :value="option"
            :color="option.color"
            :key="option.value"
          >
            {{ option.title }}
          </CdekListItem>
        </CdekSelect>`,
    },
  },
};


*/
