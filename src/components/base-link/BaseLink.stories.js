import BaseLink from './BaseLink.vue';

export default {
  title: 'Ui kit/CdekLink',
  component: BaseLink,
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
      code: '<CdekLink><a href="#">Ссылка</a></CdekLink>',
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
      code: '<CdekLink><button>Кнопка, как ссылка</button></CdekLink>',
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
      code: '<CdekLink>Просто текст</CdekLink>',
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
      code: `<CdekLink><a href="#">Ссылка</a></CdekLink>`,
    },
  },
};
