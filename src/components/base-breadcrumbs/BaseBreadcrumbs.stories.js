import BaseBreadcrumbs from './BaseBreadcrumbs.vue';

export default {
  title: 'Ui kit/CdekBreadcrumbs',
  component: BaseBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          '[Figma](https://www.figma.com/file/ZIhkqRfKAFAf3w06aqfWzz/CDEK-Web-Library?node-id=2447%3A16174&mode=dev)',
      },
    },
  },
};

const PrimaryTemplate = (args) => ({
  components: { BaseBreadcrumbs },
  setup() {
    return { args };
  },
  template: `
    <BaseBreadcrumbs v-bind="args" >
      <a href="#" @click.prevent>Служба поддержки</a>
      <a href="#" @click.prevent>Нарушение сроков доставки</a>
      <a href="#" @click.prevent>Посылка не движется</a>
    </BaseBreadcrumbs>
  `,
});

export const Primary = PrimaryTemplate.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: `
<CdekBreadcrumbs>
  <a>Служба поддержки</a>
  <a>Нарушение сроков доставки</a>
  <a>Посылка не движется</a>
</CdekBreadcrumbs>`,
    },
  },
};

const ElementsTemplate = (args) => ({
  components: { BaseBreadcrumbs },
  setup() {
    return { args };
  },
  template: `
    <BaseBreadcrumbs v-bind="args" >
      <a href="#" @click.prevent>Ссылка</a>
      <button>Кнопка, как ссылка</button>
      <span>Просто текст</span>
    </BaseBreadcrumbs>
  `,
});

export const DifferentElements = ElementsTemplate.bind({});
DifferentElements.parameters = {
  docs: {
    source: {
      code: `
<CdekBreadcrumbs>
  <a>Ссылка</a>
  <button>Кнопка, как ссылка</button>
  <span>Просто текст</span>
</CdekBreadcrumbs>`,
    },
  },
};
