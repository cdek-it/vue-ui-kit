import CdekListItem from './CdekListItem.vue';
import FileDescriptionIcon from './svg/file-description.svg?component'

import './CdekListItem.stories.scss';

export default {
  title: 'Ui kit/CdekListItem',
  component: CdekListItem,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2004%3A6818&t=NSOzy8XiKkWZ9xTg-4)',
      },
    },
  }
};

const Template = (args) => ({
  components: { CdekListItem, FileDescriptionIcon },
  setup() {
    return { args };
  },
  template: `
<div class="list-item-story">
  <CdekListItem v-bind="args">
    ${args.default} 
    <template #icon-left v-if="args.story === 'LeftIcon'">
      <FileDescriptionIcon />
    </template>
  </CdekListItem>
</div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<CdekListItem>Envelope, 42×5×5сm, up to 2kg</CdekListItem>',
    },
  },
};

export const Selected = Template.bind({});
Selected.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  selected: true
};
Selected.parameters = {
  docs: {
    source: {
      code: '<CdekListItem selected>Envelope, 42×5×5сm, up to 2kg</CdekListItem>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  disabled: true
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<CdekListItem disabled>Envelope, 42×5×5сm, up to 2kg</CdekListItem>',
    },
  },
};

export const Colored = Template.bind({});
Colored.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  color: 'red'
};
Colored.parameters = {
  docs: {
    source: {
      code: '<CdekListItem color="red">Envelope, 42×5×5сm, up to 2kg</CdekListItem>',
    },
  },
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  default: 'Envelope, 42×5×5сm, up to 2kg',
  story: 'LeftIcon'
};
LeftIcon.parameters = {
  docs: {
    source: {
      code: `
<CdekListItem>
  <template #icon-left>
    <FileDescriptionIcon />
  </template>
  Envelope, 42×5×5сm, up to 2kg
</CdekListItem>`,
    },
  },
};
