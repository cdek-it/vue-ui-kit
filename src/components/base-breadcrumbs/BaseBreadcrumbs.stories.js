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
  argTypes: {
    default: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  components: { BaseBreadcrumbs },
  template: `
    <BaseBreadcrumbs>
      ${args.default}
    </BaseBreadcrumbs>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  default:
    '<a>Служба поддержки</a> <a>Нарушение сроков доставки</a> <a>Посылка не движется</a>',
};
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

export const DifferentElements = Template.bind({});
DifferentElements.args = {
  default:
    '<a>Ссылка</a> <button>Кнопка, как ссылка</button> <span>Просто текст</span>',
};
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
