import useToast from './useToast';

export default {
  title: 'Plugins/Toastification',
};

const Template = (args) => ({
  setup() {
    const toast = useToast();

    const showToast = () => {
      toast('Какой-то текст');
    };

    return { args, toast, showToast };
  },
  template: `
    <button @click="showToast">Показать toast</button>
  `,
});

export const Primary = Template.bind({});
