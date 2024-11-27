import { useTestService } from '@/services/stories/TestService';

const Template = (args) => ({
  setup() {
    const testService = useTestService();

    return { args, testService };
  },
  template: `
    <div>
      <button @click="testService.getThis">Нажми на меня</button>
      <div>checkInstance: {{ testService.checkInstance }}</div>
      <div>completeName: {{ testService.completeName }} </div>
    </div>
  `,
});
export default {
  title: 'Services/ServiceFactory',
  argTypes: {},
};

export const This = Template.bind({});
