import CdekSelect from './CdekSelect.vue';
import CdekListItem from '../cdek-list-item/CdekListItem.vue';
import TrashIcon from '../cdek-list-item/svg/trash.svg?component'

export default {
  title: 'CdekSelect',
  component: CdekSelect,
};

const options = [
  {value: 1, title: 'Envelope, 42×5×5сm, up to 2kg'},
  {value: 2, title: 'Box XS, 17×12×9cm, up to 0,5kg', disabled: true},
  {value: 3, title: 'Box S, 23×19×10cm, up to 2kg'},
  {value: 4, title: 'Box m, 35×25×15cm, up to 5kg', color: 'red'},
]

const Template = (args) => ({
  components: { CdekSelect, CdekListItem, TrashIcon },
  setup() {
    const selectValue = options[0];
    args.onSelect = (va) => {console.log('Template', 'onSelect', va);}
    return { args, options, selectValue };
  },
  template: `
    <CdekSelect v-bind="args" v-model="selectValue">        
       <CdekListItem 
         v-for="option in options"
         @select="args.onSelect"
         :checked="option.value === selectValue.value"
         :disabled="option.disabled"
         :value="option"
         :key="option.value" 
       >
         {{ option.title }}
       </CdekListItem>
      <CdekListItem
        color="red"
        disabled
      >
        <template #icon-left>
          <TrashIcon />
        </template>
        Удалить
      </CdekListItem>
    </CdekSelect>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Вариант действия',
  modelValue: '1'
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekSelect label="Вариант действия" v-model="selectVal">
    <CdekListItem>123123</CdekListItem>
    <CdekListItem>213213213</CdekListItem>
</CdekSelect>`,
    },
  },
};
