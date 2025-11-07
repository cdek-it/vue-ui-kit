import { ref } from 'vue';
import BaseInput from '../BaseInput.vue';
import SearchIcon from '../svg/search.svg?component';
import EyeIcon from '../svg/eye.svg?component';

import './BaseInput.stories.scss';

export const Template = (args: any) => ({
  components: { BaseInput, SearchIcon, EyeIcon },
  setup() {
    const inputVal = ref(
      ['LabelFilled', 'RightIconDisabled', 'ClearableFocus'].includes(
        args.story
      )
        ? '345'
        : ''
    );

    const cn =
      args.small && !['RightIcon', 'LeftIcon'].includes(args.story)
        ? 'input-small-story'
        : 'input-story';

    const validRes = ref(args.validRes);

    const toggleValidRes = () => {
      validRes.value = validRes.value === 'Ошибка' ? '' : 'Ошибка';
    };

    return { args, inputVal, cn, validRes, toggleValidRes };
  },
  template: `
    <div :class="cn">
      <BaseInput v-bind="args" v-model="inputVal" :valid-res="validRes">
        <template #tip="{ alert, info, ban, circle }" v-if="args.tip">
          <component v-if="args.story === 'TipIcon'" :is="${args.tipIcon}" />
          <span :class="args.tipColor">{{ args.tip }}</span>
        </template>

        <template #icons-left v-if="args.story === 'LeftIcon'">
          <SearchIcon />
        </template>

        <template #icons-right v-if="['RightIconDisabled', 'RightIcon'].includes(args.story)">
          <button @click="test"><EyeIcon /></button>
        </template>
      </BaseInput>
      <p v-if="args.story === 'ShowErrorIfExists'">
        <button @click="toggleValidRes">Переключить ошибку</button>
      </p>
      <p :style="{ margin: '0' }" v-else>Контент после input</p>
    </div>
  `,
});
