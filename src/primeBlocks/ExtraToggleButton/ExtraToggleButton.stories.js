import ExtraToggleButton from './ExtraToggleButton.vue';
import { ref } from 'vue';
import { extraToggleButtonSpec } from './spec';
import { buildStoryParameters } from '../storybook/storyMeta';
import { getToggleVisualCases } from '../storybook/visualAudit';

const meta = {
  title: 'Prime Blocks/ExtraToggleButton',
  component: ExtraToggleButton,
  tags: ['autodocs'],
  parameters: buildStoryParameters(extraToggleButtonSpec),
};

export default meta;

export const VisualAudit = {
  render: () => ({
    components: { ExtraToggleButton },
    setup: () => ({ cases: getToggleVisualCases() }),
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr)); gap: 24px;">
        <section v-for="item in cases" :key="item.id" :data-visual-case="item.id" :data-visual-state="item.state">
          <p>{{ item.id }}</p>
          <ExtraToggleButton
            :size="item.size"
            :model-value="item.checked"
            :disabled="item.disabled"
            :base-label="item.label"
            :base-icon="item.icon"
            :icon-only="item.iconOnly"
            aria-label="ButtonToggle"
            :icon-pos="item.iconPosition === 'right' ? 'right' : 'left'"
          />
        </section>
      </div>
    `,
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Матрица всех четырёх размеров, checked, состояний и вариантов иконок по спецификации.',
      },
    },
  },
};

const label = 'ToggleButton';

const icon = 'ti ti-arrow-down-right';

const Template = (args) => ({
  components: { ExtraToggleButton },
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
    <ExtraToggleButton 
        v-bind="args" 
        v-model="isChecked" 
        @focus="(e) => onEmit(e, 'focus')" 
        @value-change="(e) => onEmit(e, 'value-change')" 
        @blur="(e) => onEmit(e, 'blur')"
        @change="(e) => onEmit(e, 'change')"
        @update:modelValue="onEmit($event, 'update:modelValue')"
    >
      <div v-if="args.story === 'DefaultSlot'">Дефолтный слот</div>
      <template #icon>
        <i v-if="args.story === 'IconSlot'" class="ti ti-ban"/>
      </template>
    </ExtraToggleButton>
    
    
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
      code: '<ExtraToggleButton :base-icon="icon" :base-label="label"  />',
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
<ExtraToggleButton 
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
<ExtraToggleButton v-model="modelValue"/>`,
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
<ExtraToggleButton>
    <div>Дефолтный слот</div>
</ExtraToggleButton>`,
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
<ExtraToggleButton>
    <template #icon>
        <i class="ti ti-ban"/>
    </template>
</ExtraToggleButton>`,
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
<ExtraToggleButton v-model="modelValue" />`,
    },
  },
};

export const Sizes = {
  render: (args) => ({
    components: { ExtraToggleButton },
    setup() {
      const checked = ref(true);
      const label = 'ExtraToggleButton';
      const icon = 'ti ti-arrow-down-right';
      return { args, checked, label, icon };
    },
    template: `
      <div style="max-width: 100%; overflow-x: auto;">
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(6, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
        <span></span>
        <span></span>
        <span><code>checked</code></span>
        <span><code>icon</code></span>
        <span><code>disabled</code></span>
        <span><code>disabled icon</code></span>

        <span :style="{ justifySelf: 'flex-start' }"><code>size="large"</code></span>
        <ExtraToggleButton size="large" v-bind="args" :off-label="label" :on-label="label"/>
        <ExtraToggleButton size="large" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton size="large" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton size="large" disabled v-bind="args" :off-label="label" :on-label="label"/>
        <ExtraToggleButton :off-icon="icon" :on-icon="icon" disabled size="large" variant="text" v-bind="args" :off-label="label" :on-label="label" />

        <span></span>
        <ExtraToggleButton v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton disabled v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton disabled :off-icon="icon" :on-icon="icon" iconPos="right" v-bind="args" :off-label="label" :on-label="label" />

        <span :style="{ justifySelf: 'flex-start' }"><code>size="small"</code></span>
        <ExtraToggleButton size="small" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton size="small" v-model="checked" v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton size="small" v-model="checked" :off-icon="icon" :on-icon="icon" v-bind="args"  :off-label="label" :on-label="label"/>
        <ExtraToggleButton size="small" disabled v-bind="args" :off-label="label" :on-label="label" />
        <ExtraToggleButton size="small" :off-icon="icon" :on-icon="icon" disabled v-bind="args" :off-label="label" :on-label="label" />
      </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Сетка размеров кнопки — large/medium/small в состояниях checked, icon, disabled и disabled icon.',
      },
      source: {
        code: `
<ExtraToggleButton size="large" :off-label="label" :on-label="label" />
<ExtraToggleButton size="small" :off-label="label" :on-label="label" />`,
      },
    },
  },
};
