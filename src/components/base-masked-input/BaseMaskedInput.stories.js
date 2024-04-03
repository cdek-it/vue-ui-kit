import { ref } from 'vue';
import BaseMaskedInput from './BaseMaskedInput.vue';

export default {
  title: 'Ui kit/CdekMaskedInput',
  component: BaseMaskedInput,
};

const Template = (args) => ({
  components: { BaseMaskedInput },
  setup() {
    const value = ref('');
    const unmaskedValue = ref('');
    return { args, value, unmaskedValue };
  },
  template: `
    <div>
      <BaseMaskedInput v-model="value" v-model:unmasked="unmaskedValue" v-bind="args" />
      <hr />
      <p>v-model => <code>{{ value }}</code></p>
      <p>v-model:unmasked => <code>{{ unmaskedValue }}</code></p>
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
      code: '<CdekMaskedInput v-model="value" v-model:unmasked="unmaskedValue" mask="+7 ### ###-##-##" />',
    },
  },
};
