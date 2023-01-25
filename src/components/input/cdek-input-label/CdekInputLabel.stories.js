import CdekInputLabel from './CdekInputLabel.vue';
import './CdekInputLabel.stories.scss';

export default {
  title: 'Input/CdekInputLabel',
  component: CdekInputLabel,
};

const Template = (args) => ({
  components: { CdekInputLabel },
  setup() {
    return { args };
  },
  template: `
    <CdekInputLabel v-bind="args">
      <div>
        <input />
      </div>
    </CdekInputLabel>
  `,
});

// Label встает посередине div, а в active состоянии уезжает чуть наверх
export const Primary = Template.bind({});

// Label встанет посередине инпута, а в active состоянии уедет за инпут и чуть влево
export const Behind = Template.bind({});

// Label находится в active состоянии всегда, и по позиции встает сверху блока
export const Readonly = Template.bind({});
