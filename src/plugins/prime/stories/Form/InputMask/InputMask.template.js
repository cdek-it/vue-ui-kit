import { ref, computed } from 'vue';
import InputMask from 'primevue/inputmask';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

export const BasicTemplate = (args) => ({
  components: { InputMask, IconField, InputIcon },
  setup() {
    const value = ref(null);
    const onClickClear = () => {
      value.value = '';
    };

    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.showClear;
      delete rest.label;
      rest.autoClear = false;
      return rest;
    });

    return { args, value, onClickClear, inputProps };
  },
  template: `
    <IconField v-if="args.showClear" style="width: 100%">
      <InputMask 
        :key="args.unmask"
        v-model="value" 
        v-bind="inputProps" 
        style="width: 100%"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
      />
      <InputIcon v-if="value" @click="onClickClear" style="cursor: pointer; z-index: 1">
        <i class="ti ti-x" />
      </InputIcon>
    </IconField>
    <InputMask 
      v-else
      :key="args.unmask"
      v-model="value" 
      v-bind="inputProps" 
      style="width: 100%"
      :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }" 
      :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
    />
  `,
});

export const FloatLabelTemplate = (args) => ({
  components: { InputMask, FloatLabel, IconField, InputIcon },
  setup() {
    const value = ref(null);
    const onClickClear = () => {
      value.value = '';
    };

    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.label;
      delete rest.showClear;
      rest.autoClear = false;
      return rest;
    });

    return { args, value, onClickClear, inputProps };
  },
  template: `
    <FloatLabel variant="in">
      <IconField v-if="args.showClear" style="width: 100%">
        <InputMask 
          :key="args.unmask"
          id="mask_label" 
          v-model="value" 
          v-bind="inputProps" 
          variant="filled"
          style="width: 100%"
          :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
          :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
        />
        <InputIcon v-if="value" @click.stop="onClickClear" style="cursor: pointer; z-index: 1">
          <i class="ti ti-x" />
        </InputIcon>
      </IconField>
      <InputMask 
        v-else
        :key="args.unmask"
        id="mask_label" 
        v-model="value" 
        v-bind="inputProps" 
        variant="filled"
        style="width: 100%"
        :class="{ 'p-inputtext-xlg': args.size === 'xlarge' }"
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
      />
      <label for="mask_label">{{ args.label || 'Mask Label' }}</label>
    </FloatLabel>
  `,
});
