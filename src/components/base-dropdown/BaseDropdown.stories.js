import BaseDropdownItem from './BaseDropdownItem.vue';
import BaseDropdownBox from './BaseDropdownBox.vue';
import FileDescriptionIcon from './svg/file-description.svg?component';

export default {
  title: 'Ui kit/CdekDropdown',
  component: BaseDropdownItem,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2004%3A6818&t=NSOzy8XiKkWZ9xTg-4)',
      },
    },
  },
};

const Template = (args) => ({
  components: { BaseDropdownItem, BaseDropdownBox, FileDescriptionIcon },
  setup() {
    return { args };
  },
  template: `
<BaseDropdownBox>
  <BaseDropdownItem v-bind="args">
    ${args.default}
  </BaseDropdownItem>
</BaseDropdownBox>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  value: {
    value: 1,
    title: 'Envelope, 42×5×5сm, up to 2kg',
  },
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekDropdownItem>Envelope, 42×5×5сm, up to 2kg</CdekDropdownItem>',
    },
  },
};

export const Selected = Template.bind({});
Selected.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  value: {
    value: 1,
    title: 'Envelope, 42×5×5сm, up to 2kg',
  },
  selected: true,
};
Selected.parameters = {
  docs: {
    source: {
      code: '<CdekDropdownItem selected>Envelope, 42×5×5сm, up to 2kg</CdekDropdownItem>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  value: {
    value: 1,
    title: 'Envelope, 42×5×5сm, up to 2kg',
    disabled: true,
  },
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekDropdownItem>Envelope, 42×5×5сm, up to 2kg</CdekDropdownItem>',
    },
  },
};

export const Colored = Template.bind({});
Colored.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  value: {
    value: 1,
    title: 'Envelope, 42×5×5сm, up to 2kg',
    color: 'red',
  },
};
Colored.parameters = {
  docs: {
    source: {
      code: '<CdekDropdownItem>Envelope, 42×5×5сm, up to 2kg</CdekDropdownItem>',
    },
  },
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  value: {
    value: 1,
    title: 'Envelope, 42×5×5сm, up to 2kg',
    icon: FileDescriptionIcon,
  },
};
LeftIcon.parameters = {
  docs: {
    source: {
      code: `<CdekDropdownItem>Envelope, 42×5×5сm, up to 2kg</CdekDropdownItem>`,
    },
  },
};
