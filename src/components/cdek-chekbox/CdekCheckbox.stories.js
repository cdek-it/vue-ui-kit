import CdekCheckbox from './CdekCheckbox.vue';
import getVersion from '@/test/getVersion';
import { ref } from 'vue';
export default {
  title: 'Ui kit/CdekChekbox',
  component: CdekCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?type=design&node-id=2009-8577&mode=design&t=zACUd2FgFw8akMc3-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
};

const Template = (args) => ({
  components: { CdekCheckbox },
  setup() {
    const val = ref(false);

    return { args, val };
  },
  template: `
    <CdekCheckbox v-bind="args" v-model="val">
    </CdekCheckbox>
    <p>{{val}}</p>
  `,
});

export const Default = Template.bind({});

Default.args = {
  label: 'Пункт первый из группы',
};
Default.parameters = {
  docs: {
    source: {
      code: '<CdekCheckbox label="Пункт первый из группы"></CdekCheckbox>',
    },
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Пункт первый из группы',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekCheckbox label="Пункт первый из группы" disabled></CdekCheckbox>',
    },
  },
};

export const Small = Template.bind({});

Small.args = {
  label: 'Пункт первый из группы',
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: '<CdekCheckbox label="Пункт первый из группы" small></CdekCheckbox>',
    },
  },
};
