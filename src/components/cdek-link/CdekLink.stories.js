import CdekLink from './CdekLink.vue';

export default {
  title: 'Ui kit/CdekLink',
  component: CdekLink,
  parameters: {
    version: {
      major: '0',
      minor: '0',
      patch: '1',
    },
  },
};

const Template = (args) => ({
  components: { CdekLink },
  setup() {
    return { args };
  },
  template: `
    <CdekLink v-bind="args">
      <a href="#" v-if="args.story === 'Primary'" @click.prevent>Ссылка</a>
      <button v-else-if="args.story === 'Button'">Кнопка, как ссылка</button>
    </CdekLink>
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
      code: '<CdekLink><button>Ссылка</button></CdekLink>',
    },
  },
};
