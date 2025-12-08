import { ref } from 'vue';
import BaseInput from '../BaseInput.vue';
import './BaseInput.stories.scss';

export default {
  title: 'Components/Input/Basic',
  component: BaseInput,
  parameters: {
    docs: {
      description: {
        component: 'Базовое использование компонента Input для ввода текстовых данных.',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref(args.initValue || '');
    return { args, inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-bind="args" v-model="inputVal" />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  docs: {
    description: {
      story: 'Базовый инпут без дополнительных настроек.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" />',
    },
  },
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Поиск',
};
WithPlaceholder.parameters = {
  docs: {
    description: {
      story: 'Инпут с placeholder текстом.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" placeholder="Поиск" />',
    },
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Серия и номер паспорта',
};
WithLabel.parameters = {
  docs: {
    description: {
      story: 'Инпут с лейблом над полем ввода.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" />',
    },
  },
};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: 'Серия и номер паспорта',
  placeholder: '00 00 – 000 000',
};
WithLabelAndPlaceholder.parameters = {
  docs: {
    description: {
      story: 'Инпут с лейблом и placeholder.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" placeholder="00 00 – 000 000" />',
    },
  },
};

export const Filled = () => ({
  components: { BaseInput },
  setup() {
    const inputVal = ref('345');
    return { inputVal };
  },
  template: `
    <div class="input-story">
      <BaseInput v-model="inputVal" label="Серия и номер паспорта" />
      <p style="margin: 0">Контент после input</p>
    </div>
  `,
});
Filled.parameters = {
  docs: {
    description: {
      story: 'Инпут с заполненным значением.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" />',
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Серия и номер паспорта',
  clearable: true,
};
Clearable.parameters = {
  docs: {
    description: {
      story: 'Инпут с кнопкой очистки значения.',
    },
    source: {
      code: '<CdekInput v-model="inputVal" label="Серия и номер паспорта" clearable />',
    },
  },
};
