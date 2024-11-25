import Button from 'primevue/button';

export default {
  title: 'Plugins/Prime',
};

const Template = () => ({
  components: { Button },
  setup() {
    return {};
  },
  template: `
    <Button label="Submit" />
  `,
});

export const Primary = Template.bind({});
