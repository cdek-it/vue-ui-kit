import CdekSelect from './CdekSelect.vue';
import TrashIcon from '../base-dropdown/svg/trash.svg?component';
import { ref } from 'vue';
import getVersion from '@/test/getVersion';
import './CdekSelect.stories.css';

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
    version: getVersion('0.0.1'),
  },
};

const items = [
  { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true },
  { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' },
  { value: 3, title: 'Box S, 23×19×10cm, up to 2kg' },
  { value: 4, title: 'Box m, 35×25×15cm, up to 5kg' },
];

const Template = (args) => ({
  components: { CdekSelect },
  setup() {
    const selectValue = ref(args.value);

    const selectArg = ref();

    const onSelect = (val) => (selectArg.value = val);

    return { args, items: args.items, selectValue, selectArg, onSelect };
  },
  template: `
<CdekSelect v-bind="args" :items="items" v-model="selectValue" @select="onSelect">
  <template 
      v-if="args.story === 'ScopedSlotSelectedOption' 
      || args.story === 'ScopedSlotsSelectedOptionAndCustomOption'" #selectedOption="{ value }">
    <div v-if="value?.title"> Вы выбрали: {{ value?.title }}</div>
  </template>

  <template v-if="args.story === 'ScopedSlotsSelectedOptionAndCustomOption'" #selectedOption="{ value }">
    <div v-if="value?.value"> Вы выбрали: {{ value?.value }}</div>
  </template>

  <template 
      v-if="args.story === 'ScopedSlotOption' 
      || args.story === 'ScopedSlotsSelectedOptionAndCustomOption'" #option="{ option }">
    <div class="some-class" :class="{disabled: option.disabled}">{{ option?.value }}</div>
  </template>
  
  <template #tip="{ alert, info, ban, circle }">
    <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
    <span :class="args.tipColor">{{ args.tip }}</span>
  </template>
</CdekSelect>


<div v-if="args.story === 'GetValue' || args.story === 'GetTitle'">
  <p>items => {{ args.items }}</p>
  <p>v-model => <code>{{ selectValue }}</code></p>
  <p>@select => <code>{{ selectArg }}</code></p>
</div>

  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Вариант действия',
  items,
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
/>
`,
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Вариант действия',
  multiple: true,
  value: [],
  items,
};
Multiple.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  multiple 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
/>
`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Вариант действия',
  disabled: true,
  items,
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  disabled 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
/>
`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Вариант действия',
  small: true,
  items,
};
Small.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  small 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
/>
`,
    },
  },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Вариант действия',
  readonly: true,
  value: 1,
  items,
};
ReadOnly.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  readonly 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
/>
`,
    },
  },
};

export const OptionWithIcon = Template.bind({});
const OptionWithIconItems = [...items];
OptionWithIconItems.push({
  value: 'del',
  title: 'Удалить',
  color: 'red',
  icon: TrashIcon,
});
OptionWithIcon.args = {
  label: 'Вариант действия',
  items: OptionWithIconItems,
};
OptionWithIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  multiple 
  v-model="selectVal" 
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg',  }, 
    .. 
    { value: 'del', title: 'Удалить', color: 'red', icon: TrashIcon  },
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
  label: 'Вариант действия',
  story: 'TipIcon',
  tipIcon: 'info',
  tip: 'Пояснение или помощь',
  items,
};
WithTip.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect label="Вариант действия" :items="items" v-model="selectVal">
  <template #tip="{ info }">
    <component :is="info" />
    <span>Пояснение или помощь</span>
  </template>        
</CdekSelect>`,
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Вариант действия',
  validRes: 'Ошибка',
  items,
};
WithError.parameters = {
  version: getVersion('0.1.0'),
  docs: {
    source: {
      code: `
<CdekSelect label="Вариант действия" :items="items" v-model="selectVal" valid-res="Ошибка" />
`,
    },
  },
};

export const WithErrorHiddenMessage = Template.bind({});
WithErrorHiddenMessage.args = {
  label: 'Вариант действия',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  items,
};
WithErrorHiddenMessage.parameters = {
  version: getVersion('0.1.0'),
  docs: {
    source: {
      code: `
<CdekSelect
  label="Вариант действия"
  :items="items"
  v-model="selectVal"
  valid-res="Ошибка"
  hide-error-message
/>
`,
    },
  },
};

export const ScopedSlotOption = Template.bind({});
ScopedSlotOption.args = {
  label: 'Вариант действия',
  items,
  story: 'ScopedSlotOption',
};
ScopedSlotOption.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  v-model="selectVal"
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
  >
  <template #option="{ option }">
    <div class="some-class" :class="{disabled: option.disabled"}>{{ option.value }}</div>
  </template>
</CdekSelect>
`,
    },
  },
};

export const ScopedSlotSelectedOption = Template.bind({});
ScopedSlotSelectedOption.args = {
  label: 'Вариант действия',
  items,
  story: 'ScopedSlotSelectedOption',
  value: 1,
};
ScopedSlotSelectedOption.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  v-model="selectVal"
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
  >
  <template #selectedOption="{ value }">
    <div v-if="value?.title"> Вы выбрали: {{ value?.title }}</div>
  </template>

</CdekSelect>
`,
    },
  },
};

export const ScopedSlotsSelectedOptionAndCustomOption = Template.bind({});
ScopedSlotsSelectedOptionAndCustomOption.args = {
  label: 'Вариант действия',
  items,
  story: 'ScopedSlotsSelectedOptionAndCustomOption',
  value: 1,
};
ScopedSlotsSelectedOptionAndCustomOption.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect 
  v-model="selectVal"
  label="Вариант действия" 
  :items="[ 
    { value: 1, title: 'Envelope, 42×5×5сm, up to 2kg', disabled: true }, 
    { value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg' }, 
    .. 
  ]" 
  >
  <template #selectedOption="{ value }">
    <div v-if="value?.value"> Вы выбрали: {{ value?.value}}</div>
  </template>
  
  <template #option="{ option }">
    <div class="some-class" :class="{disabled: option.disabled"}>{{ option.value }}</div>
  </template>
</CdekSelect>
`,
    },
  },
};

const customValuesItems = [
  {
    valueData: {
      value: 1,
    },
    title: 'Envelope, 42×5×5сm, up to 2kg',
  },
  {
    valueData: {
      value: 2,
    },
    title: 'Box XS, 17×12×9cm, up to 0,5kg',
  },
  {
    valueData: {
      value: 3,
    },
    title: 'Box S, 23×19×10cm, up to 2kg',
  },
  {
    valueData: {
      value: 4,
    },
    title: 'Box m, 35×25×15cm, up to 5kg',
  },
];

const getValueHandler = (item) => {
  return item.valueData.value;
};

export const GetValue = Template.bind({});
GetValue.args = {
  label: 'Вариант действия',
  story: 'GetValue',
  items: customValuesItems,
  getValue: getValueHandler,
};
GetValue.parameters = {
  version: getVersion('0.1.0'),
  docs: {
    source: {
      code: `
<CdekSelect
  label="Вариант действия"
  :items="items"
  v-model="selectVal"
  get-value="(item) => item..."
/>
`,
    },
  },
};

const customTitlesItems = [
  {
    value: 1,
    titleData: {
      title: 'Envelope, 42×5×5сm, up to 2kg',
    },
  },
  {
    value: 2,
    titleData: {
      title: 'Box XS, 17×12×9cm, up to 0,5kg',
    },
  },
  {
    value: 3,
    titleData: {
      title: 'Box S, 23×19×10cm, up to 2kg',
    },
  },
  {
    value: 4,
    titleData: {
      title: 'Box m, 35×25×15cm, up to 5kg',
    },
  },
];

const getTitleHandler = (item) => {
  return item.titleData.title;
};
export const GetTitle = Template.bind({});
GetTitle.args = {
  label: 'Вариант действия',
  story: 'GetTitle',
  items: customTitlesItems,
  getTitle: getTitleHandler,
};
GetTitle.parameters = {
  version: getVersion('0.1.0'),
  docs: {
    source: {
      code: `
<CdekSelect
  label="Вариант действия"
  :items="items"
  v-model="selectVal"
  get-title="(item) => item..."
/>
`,
    },
  },
};
