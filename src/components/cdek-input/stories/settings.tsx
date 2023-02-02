import { ref } from 'vue';
import CdekInput from '../CdekInput.vue';
import SearchIcon from '../svg/search.svg?component';
import EyeIcon from '../svg/eye.svg?component';

import './CdekInput.stories.scss';


export default {
  title: 'Ui kit/CdekInput',
  component: CdekInput,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=1998%3A4714&t=G78h9IqBm7eEp4F9-4)',
      },
    },
  },
  argTypes: {
    story: {
      table: {
        disable: true,
      },
    },
    tipColor: {
      options: ['tertiary', 'attention', 'error', 'success'],
      type: 'select',
    },
    tipIcon: {
      options: ['info', 'alert', 'ban', 'circle'],
      type: 'select',
    },
  },
};

export const Template = (args) => ({
  components: { CdekInput, SearchIcon, EyeIcon },
  setup() {
    const inputVal = ref(
      ['LabelFilled', 'RightIconDisabled'].includes(args.story)
        ? '34 45 – 987 123'
        : ''
    );

    return { args, inputVal };
  },
  template: `
    <div class="input-story">
      <CdekInput v-bind="args" v-model="inputVal">
        <template #tip="{ alert, info, ban, circle }">
          <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
          <span :class="args.tipColor">{{ args.tip }}</span>
        </template>

        <template #icons-left v-if="args.story === 'LeftIcon'">
          <SearchIcon />
        </template>

        <template #icons-right v-if="['RightIconDisabled', 'RightIcon'].includes(args.story)">
          <button @click="test"><EyeIcon /></button>
        </template>
      </CdekInput>
    </div>
  `,
});
