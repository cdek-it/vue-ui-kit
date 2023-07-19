import CdekChip from './CdekChip.vue';
import getVersion from '@/test/getVersion';
import Clock from './svg/clock.svg?component';
import { ref } from 'vue';

export default {
  title: 'Ui kit/CdekChip',
  component: CdekChip,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?type=design&node-id=2385-14194&mode=dev)',
      },
    },
    version: getVersion('0.1.0'),
  },
};

const Template = (args) => ({
  components: { CdekChip, Clock },
  setup() {
    const isSelected = ref(args.value);
    return { args, isSelected };
  },
  template: `
  <CdekChip v-bind="args" v-model="isSelected">
    <template v-slot:icon v-if="args.story === 'Icon' ||  args.story === 'IconAndAmount'">
      <Clock/>
    </template>  
  </CdekChip>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Chip',
};
Default.parameters = {
  docs: {
    source: {
      code: '<CdekChip label="Chip"/>',
    },
  },
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Chip',
  value: true,
};
Selected.parameters = {
  docs: {
    source: {
      code: '<CdekChip label="Chip" v-model="true"/>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Chip',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekChip label="Chip" disabled/>',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  label: 'Chip',
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: '<CdekChip label="Chip" small/>',
    },
  },
};

export const Amount = Template.bind({});
Amount.args = {
  label: 'Chip',
  amount: 99,
};
Amount.parameters = {
  docs: {
    source: {
      code: '<CdekChip label="Chip" :amount="99"/>',
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Chip',
  story: 'Icon',
};
Icon.parameters = {
  docs: {
    source: {
      code: `
<CdekChip label="Chip">
    <template v-slot:icon>
      <Clock/>
    </template>
</CdekChip>
`,
    },
  },
};

export const IconAndAmount = Template.bind({});
IconAndAmount.args = {
  label: 'Chip',
  story: 'IconAndAmount',
  amount: 99,
};
IconAndAmount.parameters = {
  docs: {
    source: {
      code: `
<CdekChip label="Chip" :amount="99">
    <template v-slot:icon>
      <Clock/>
    </template>
</CdekChip>
`,
    },
  },
};

export const SmallWithIconAndAmount = Template.bind({});
SmallWithIconAndAmount.args = {
  label: 'Chip',
  story: 'IconAndAmount',
  amount: 99,
  small: true,
};
SmallWithIconAndAmount.parameters = {
  docs: {
    source: {
      code: `
<CdekChip label="Chip" :amount="99" small>
    <template v-slot:icon>
      <Clock/>
    </template>
</CdekChip>
`,
    },
  },
};
