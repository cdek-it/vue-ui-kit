import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { IconField, InputIcon } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputText, IconField, InputIcon },
  setup() {
    const value = ref('');

    const onClickClear = () => {
      value.value = '';
    };

    return { args, value, onClickClear };
  },
  template: `
    <IconField v-if="args.showClear" style="width: 100%">
      <InputText 
        v-model="value"
        v-bind="args"
        style="width: 100%"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
      />
      <InputIcon @click="onClickClear" style="cursor: pointer">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
    <InputText 
      v-else
      v-model="value"
      v-bind="args"
      style="width: 100%"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputText, FloatLabel, IconField, InputIcon },
  setup() {
    const value = ref('');
    const onClickClear = () => {
      value.value = '';
    };
    return { args, value, onClickClear };
  },
  template: `
    <FloatLabel variant="in">
        <IconField v-if="args.showClear" style="width: 100%">
            <InputText id="username" v-model="value" style="width: 100%" v-bind="args" />
            <InputIcon @click="onClickClear" style="cursor: pointer">
                <i class="ti ti-x" />
            </InputIcon>
        </IconField>
        <InputText v-else id="username" v-model="value" style="width: 100%" v-bind="args" />
        <label for="username">Username</label>
    </FloatLabel>
`,
});
