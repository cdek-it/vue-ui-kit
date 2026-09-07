import SelectButton from 'primevue/selectbutton';
import { ref, computed, watch } from 'vue';

const textOptions = [
  { name: 'Option 1', value: '1' },
  { name: 'Option 2', value: '2' },
  { name: 'Option 3', value: '3' },
];

const iconOptions = [
  { name: 'Left', value: 'left', icon: 'ti ti-align-left' },
  { name: 'Center', value: 'center', icon: 'ti ti-align-center' },
  { name: 'Right', value: 'right', icon: 'ti ti-align-right' },
];

const semiDisabledText = [
  { name: 'Option 1', value: '1', disabled: false },
  { name: 'Option 2', value: '2', disabled: true },
  { name: 'Option 3', value: '3', disabled: false },
];

const semiDisabledIcons = [
  { name: 'Left', value: 'left', icon: 'ti ti-align-left', disabled: false },
  {
    name: 'Center',
    value: 'center',
    icon: 'ti ti-align-center',
    disabled: true,
  },
  { name: 'Right', value: 'right', icon: 'ti ti-align-right', disabled: false },
];

export const TemplateDefault = (args) => ({
  components: { SelectButton },
  setup() {
    const value = ref('1');
    const options = computed(() =>
      args.withIcons ? iconOptions : textOptions
    );
    watch(
      () => args.withIcons,
      (v) => {
        value.value = v ? 'left' : '1';
      }
    );
    return { args, value, options };
  },
  template: `
    <SelectButton :class="args.sizeClass" v-model="value" :options="options" optionLabel="name" optionValue="value" v-bind="args">
      <template v-if="args.withIcons" #option="{ option }">
        <i :class="option.icon" /><span>{{ option.name }}</span>
      </template>
    </SelectButton>
  `,
});

export const TemplateSelected = (args) => ({
  components: { SelectButton },
  setup() {
    const value = ref('2');
    const options = computed(() =>
      args.withIcons ? iconOptions : textOptions
    );
    watch(
      () => args.withIcons,
      (v) => {
        value.value = v ? 'center' : '2';
      }
    );
    return { args, value, options };
  },
  template: `
    <SelectButton :class="args.sizeClass" v-model="value" :options="options" optionLabel="name" optionValue="value" v-bind="args">
      <template v-if="args.withIcons" #option="{ option }">
        <i :class="option.icon" /><span>{{ option.name }}</span>
      </template>
    </SelectButton>
  `,
});

export const TemplateDisabled = (args) => ({
  components: { SelectButton },
  setup() {
    const value = ref('1');
    const options = computed(() =>
      args.withIcons ? iconOptions : textOptions
    );
    watch(
      () => args.withIcons,
      (v) => {
        value.value = v ? 'left' : '1';
      }
    );
    return { args, value, options };
  },
  template: `
    <SelectButton :class="args.sizeClass" v-model="value" :options="options" optionLabel="name" optionValue="value" disabled v-bind="args">
      <template v-if="args.withIcons" #option="{ option }">
        <i :class="option.icon" /><span>{{ option.name }}</span>
      </template>
    </SelectButton>
  `,
});

export const TemplateSemiDisabled = (args) => ({
  components: { SelectButton },
  setup() {
    const value = ref('1');
    const options = computed(() =>
      args.withIcons ? semiDisabledIcons : semiDisabledText
    );
    watch(
      () => args.withIcons,
      (v) => {
        value.value = v ? 'left' : '1';
      }
    );
    return { args, value, options };
  },
  template: `
    <SelectButton :class="args.sizeClass" v-model="value" :options="options" optionLabel="name" optionValue="value" :optionDisabled="(o) => o.disabled" v-bind="args">
      <template v-if="args.withIcons" #option="{ option }">
        <i :class="option.icon" /><span>{{ option.name }}</span>
      </template>
    </SelectButton>
  `,
});
