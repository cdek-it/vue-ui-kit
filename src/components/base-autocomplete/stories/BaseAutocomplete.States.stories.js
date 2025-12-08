import BaseAutocomplete from '../BaseAutocomplete.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Autocomplete/States',
  component: BaseAutocomplete,
  parameters: {
    docs: {
      description: {
        component: 'Различные состояния компонента Autocomplete: отключенный, только для чтения, с ошибкой.',
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

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Размер коробки',
  initValue: 1,
  disabled: true,
  items,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Отключенное состояние - компонент не доступен для взаимодействия.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  disabled
  :items="items" 
/>`,
    },
  },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Размер коробки',
  initValue: 1,
  readonly: true,
  items,
};
ReadOnly.parameters = {
  docs: {
    description: {
      story: 'Режим только для чтения - значение отображается, но не может быть изменено.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  readonly
  :items="items" 
/>`,
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Размер коробки',
  validRes: 'Ошибка',
  items,
};
WithError.parameters = {
  docs: {
    description: {
      story: 'Состояние с ошибкой валидации.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  valid-res="Ошибка"
  :items="items" 
/>`,
    },
  },
};

export const WithErrorHiddenMessage = Template.bind({});
WithErrorHiddenMessage.args = {
  label: 'Размер коробки',
  validRes: 'Ошибка',
  hideErrorMessage: true,
  showErrorIfExists: false,
  items,
};
WithErrorHiddenMessage.parameters = {
  docs: {
    description: {
      story: 'Состояние с ошибкой, но без отображения сообщения об ошибке.',
    },
    source: {
      code: `
<CdekAutocomplete 
  label="Размер коробки" 
  valid-res="Ошибка"
  hide-error-message
  :items="items" 
/>`,
    },
  },
};
