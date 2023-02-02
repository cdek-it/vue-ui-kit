import { ref } from 'vue';
import CdekInput from '../CdekInput.vue';
import SearchIcon from '../svg/search.svg?component';
import EyeIcon from '../svg/eye.svg?component';

import './CdekInput.stories.scss';

export const Template = (args: any) => ({
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
