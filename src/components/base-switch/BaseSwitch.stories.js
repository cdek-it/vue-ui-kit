import { ref } from 'vue';
import BaseSwitch from './BaseSwitch.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekSwitch',
  component: BaseSwitch,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2050-6123&t=wfKjh1NP9rExUFRb-0)',
      },
    },
    version: getVersion('0.0.1'),
  },
};

const Template = (args) => ({
  components: { BaseSwitch },
  setup() {
    const val = ref(args.modelValue || false);

    return { args, val };
  },
  template: `
    <BaseSwitch v-bind="args" v-model="val">
      <template v-if=args.slot>
        <a href="/offer">test</a> 
      </template>
    </BaseSwitch>
  `,
});

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekSwitch />',
    },
  },
};

export const Model = Template.bind({});
Model.args = {
  modelValue: true,
};
Model.parameters = {
  docs: {
    source: {
      code: `
const swtch = ref(true);

...

<CdekSwitch v-model="swtch" />
`,
    },
  },
};

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  disabled: true,
};
DisabledOff.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch disabled />`,
    },
  },
};

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  modelValue: true,
  disabled: true,
};
DisabledOn.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch :modelValue="true" disabled />`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch small />`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'Enable notifications',
};
Label.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch label="Enable notifications" />`,
    },
  },
};

export const SlotLabel = Template.bind({});
SlotLabel.args = {
  slot: '<a href="/offer">test</a>',
};
SlotLabel.parameters = {
  docs: {
    source: {
      code: `
        <CdekSwitch>
          <a href="/offer">test</a> 
        </CdekSwitch>
        `,
    },
  },
};

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  label: 'Enable notifications',
  small: true,
};
LabelSmall.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch label="Enable notifications" small />`,
    },
  },
};

export const LabelWithTip = Template.bind({});
LabelWithTip.args = {
  label: 'Enable notifications',
  tip: 'Пояснение',
};
LabelWithTip.parameters = {
  docs: {
    source: {
      code: `<CdekSwitch label="Enable notifications" tip="Пояснение" />`,
    },
  },
};
