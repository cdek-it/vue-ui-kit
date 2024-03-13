import BaseBadge from './BaseBadge.vue';
import EyeIcon from './svg/eye.svg?component';

export default {
  title: 'Ui kit/CdekBadge',
  component: BaseBadge,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2132%3A6679&t=x0GiAkgTtqGBzfut-0)',
      },
    },
  },
  argTypes: {
    type: {
      options: [
        'positive',
        'negative',
        'process',
        'info',
        'deactive',
        'neutral',
      ],
    },
    variant: {
      options: ['light', 'dark'],
    },
  },
};

const Template = (args) => ({
  components: { BaseBadge, EyeIcon },
  setup() {
    return { args };
  },
  template: `
    <BaseBadge v-bind="args">
      <span v-if="args.story === 'Slot'">Status</span>
      <EyeIcon v-if="args.story === 'IconSlot'"/>
    </BaseBadge>
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Status',
};
Default.parameters = {
  docs: {
    source: {
      code: '<CdekBadge />',
    },
  },
};

export const PositiveLight = Template.bind({});
PositiveLight.args = {
  text: 'Status',
  type: 'positive',
};
PositiveLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="positive" />',
    },
  },
};

export const NegativeLight = Template.bind({});
NegativeLight.args = {
  text: 'Status',
  type: 'negative',
};
NegativeLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="negative" />',
    },
  },
};

export const ProcessLight = Template.bind({});
ProcessLight.args = {
  text: 'Status',
  type: 'process',
};
ProcessLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="process" />',
    },
  },
};

export const InfoLight = Template.bind({});
InfoLight.args = {
  text: 'Status',
  type: 'info',
};
InfoLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="info" />',
    },
  },
};

export const DeactiveLight = Template.bind({});
DeactiveLight.args = {
  text: 'Status',
  type: 'deactive',
};
DeactiveLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="deactive" />',
    },
  },
};

export const NeutralLight = Template.bind({});
NeutralLight.args = {
  text: 'Status',
  type: 'neutral',
};
NeutralLight.parameters = {
  docs: {
    source: {
      code: '<CdekBadge type="neutral" />',
    },
  },
};

export const NegativeDark = Template.bind({});
NegativeDark.args = {
  text: 'Status',
  variant: 'dark',
  type: 'negative',
};
NegativeDark.parameters = {
  docs: {
    source: {
      code: '<CdekBadge variant="dark" type="negative" />',
    },
  },
};

export const Slot = Template.bind({});
Slot.args = {
  story: 'Slot',
};
Slot.parameters = {
  docs: {
    source: {
      code: `
<CdekBadge>
    <span>Status</span>
</CdekBadge>`,
    },
  },
};

export const IconSlot = Template.bind({});
IconSlot.args = {
  story: 'IconSlot',
};
IconSlot.parameters = {
  docs: {
    source: {
      code: `
<CdekBadge>
    <EyeIcon/> 
</CdekBadge>`,
    },
  },
};
