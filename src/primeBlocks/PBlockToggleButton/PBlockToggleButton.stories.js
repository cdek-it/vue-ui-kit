import PBlockToggleButton from './PBlockToggleButton.vue';
import { ref } from 'vue';

export default {
  title: 'Prime Blocks/PBlockToggleButton',
  component: PBlockToggleButton,
  parameters: {
    docs: {
      description: {
        component:
          '<a href="../?path=/docs/prime-form-togglebutton--primary">ToggleButton</a>',
      },
    },
  },
};

const label = 'ToggleButton';

const icon = 'ti ti-arrow-down-right';

const Template = (args) => ({
  components: { PBlockToggleButton },
  setup() {
    const isChecked = ref(args.modelValue);

    const emitsList = ref([]);

    const onEmit = (e, name) => {
      emitsList.value.push({ name, event: JSON.stringify(e) });
    };

    return { args, isChecked, emitsList, onEmit };
  },
  template: `
    <div v-if="args.story === 'vModel'">isChecked:  {{ isChecked }} </div>
    <PBlockToggleButton 
        v-bind="args" 
        v-model="isChecked" 
        @focus="(e) => onEmit(e, 'focus')" 
        @value-change="(e) => onEmit(e, 'value-change')" 
        @blur="(e) => onEmit(e, 'blur')"
        @change="(e) => onEmit(e, 'change')"
        @update:modelValue="onEmit(e, 'update:modelValue')"
    >
      <div v-if="args.story === 'DefaultSlot'">Дефолтный слот</div>
      <template #icon>
        <i v-if="args.story === 'IconSlot'" class="ti ti-ban"/>
      </template>
    </PBlockToggleButton>
    
    
    <div v-if="args.story === 'emits'">
      emits: 
      <div v-for="emit in emitsList">
        <span>{{ emit.name }}: {{ emit.event }}</span>
      </div>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  baseLabel: label,
  baseIcon: icon,
};

Primary.parameters = {
  docs: {
    source: {
      code: '<PBlockToggleButton :base-icon="icon" :base-label="label"  />',
    },
  },
};

export const MergeProps = Template.bind({});

MergeProps.args = {
  baseLabel: label,
  baseIcon: icon,
  onLabel: 'Выбрано',
  offIcon: 'ti ti-x',
};

MergeProps.parameters = {
  docs: {
    source: {
      code: `
<PBlockToggleButton 
    base-icon="ti ti-arrow-down-right"
    base-label="ToggleButton" 
    on-label="Выбрано" 
    off-icon="ti ti-x"
/>`,
    },
  },
};

export const VModel = Template.bind({});

VModel.args = {
  baseLabel: label,
  baseIcon: icon,
  onLabel: 'Выбрано',
  offIcon: 'ti ti-x',
  story: 'vModel',
  modelValue: true,
};

VModel.parameters = {
  docs: {
    source: {
      code: `
<PBlockToggleButton v-model="modelValue"/>`,
    },
  },
};

export const DefaultSlot = Template.bind({});

DefaultSlot.args = {
  story: 'DefaultSlot',
};

DefaultSlot.parameters = {
  docs: {
    source: {
      code: `
<PBlockToggleButton>
    <div>Дефолтный слот</div>
</PBlockToggleButton>`,
    },
  },
};

export const IconSlot = Template.bind({});

IconSlot.args = {
  story: 'IconSlot',
};

IconSlot.parameters = {
  docs: {
    source: {
      code: `
<PBlockToggleButton>
    <template #icon>
        <i class="ti ti-ban"/>
    </template>
</PBlockToggleButton>`,
    },
  },
};

export const Emits = Template.bind({});

Emits.args = {
  story: 'emits',
};

Emits.parameters = {
  docs: {
    source: {
      code: `
<PBlockToggleButton v-model="modelValue" />`,
    },
  },
};
