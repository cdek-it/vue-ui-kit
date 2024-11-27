import Button from 'primevue/button';

export default {
  title: 'Prime/Button',
};

const Template = () => ({
  components: {
    Button,
  },
  setup() {
    return {};
  },
  template: `
    <Button label="Submit" />
  `,
});

export const Primary = Template.bind({});
