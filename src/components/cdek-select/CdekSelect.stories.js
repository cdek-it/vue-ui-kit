import CdekSelect from './CdekSelect.vue';
import CdekListItem from '../cdek-list-item/CdekListItem.vue';
import TrashIcon from '../cdek-list-item/svg/trash.svg?component'

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

const options = [
  {value: 1, title: 'Envelope, 42×5×5сm, up to 2kg'},
  {value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg'},
  {value: 3, title: 'Box S, 23×19×10cm, up to 2kg'},
  {value: 4, title: 'Box m, 35×25×15cm, up to 5kg'},
]

const Template = (args) => ({
  components: { CdekSelect, CdekListItem, TrashIcon },
  setup() {
    const selectValue = args.options.find(option => option.value === args.value) || {};
    return { args, options: args.options, selectValue };
  },
  template: `
    <CdekSelect v-bind="args" v-model="selectValue">        
       <CdekListItem 
         v-for="option in options"
         :checked="option.value === selectValue.value"
         :disabled="option.disabled"
         :value="option"
         :color="option.color"
         :key="option.value" 
       >
        <template #icon-left v-if="option.icon">
          <TrashIcon />
        </template>
        {{ option.title }}
       </CdekListItem>
    </CdekSelect>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Вариант действия',
  options
};
Primary.parameters = {
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
