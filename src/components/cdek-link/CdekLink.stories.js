import BaseLink from './BaseLink.vue';
import getVersion from '@/test/getVersion';

export default {
  title: 'Ui kit/CdekLink',
  component: BaseLink,
  parameters: {
    version: getVersion('0.0.1'),
  },
};

const Template = (args) => ({
  components: { BaseLink },
  setup() {
    return { args };
  },
  template: `
    <BaseLink v-bind="args">
      <a href="#" v-if="args.story === 'Primary'" @click.prevent>Ссылка</a>
      <button v-else-if="args.story === 'Button'">Кнопка, как ссылка</button>
      <template v-else-if="args.story === 'Text'">Просто текст</template>
    </BaseLink>
  `,
});

export const Link = Template.bind({});
Link.args = {
  story: 'Primary',
};
Link.parameters = {
  docs: {
    source: {
      code: '<BaseLink><a href="#">Ссылка</a></BaseLink>',
    },
  },
};

export const Button = Template.bind({});
Button.args = {
  story: 'Button',
};
Button.parameters = {
  docs: {
    source: {
      code: '<BaseLink><button>Кнопка, как ссылка</button></BaseLink>',
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  story: 'Text',
};
Text.parameters = {
  docs: {
    source: {
      code: '<BaseLink>Просто текст</BaseLink>',
    },
  },
};

export const Mobile = Template.bind({});
Mobile.args = {
  story: 'Primary',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  docs: {
    source: {
      code: `<BaseLink><a href="#">Ссылка</a></BaseLink>`,
    },
  },
};
