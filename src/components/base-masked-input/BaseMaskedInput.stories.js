import { ref } from 'vue';
import BaseMaskedInput from './BaseMaskedInput.vue';

export default {
  title: 'Ui kit/CdekMaskedInput',
  component: BaseMaskedInput,
};

const Template = (args) => ({
  components: { BaseMaskedInput },
  setup() {
    const value = ref(args.modelValue || '');
    delete args.modelValue;
    return { args, value };
  },
  template: `
    <div>
      <BaseMaskedInput v-model="value" v-bind="args" />
      <hr />
      <p>v-model => <code>{{ value }}</code></p>
    </div>
  `,
});

export const Phone = Template.bind({});
Phone.args = {
  label: 'Телефон',
  mask: '+7 ### ###-##-##',
};
Phone.parameters = {
  docs: {
    source: {
      code: '<CdekMaskedInput v-model="value" mask="+7 ### ###-##-##" />',
    },
  },
};
