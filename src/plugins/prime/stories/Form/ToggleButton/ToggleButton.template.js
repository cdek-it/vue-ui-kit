import ToggleButton from 'primevue/togglebutton';
import { ref, computed } from 'vue';

const sizeClassMap = {
  small: 'p-togglebutton-sm',
  base: '',
  large: 'p-togglebutton-lg',
  xlarge: 'p-togglebutton-xlg',
};

export const Template = (args) => ({
  components: { ToggleButton },
  setup() {
    const checked = ref(args.checked ?? false);
    const sizeClass = computed(() => sizeClassMap[args.size] ?? '');
    const iconOnlyClass = computed(() =>
      args.iconOnly ? 'p-togglebutton-icon-only' : ''
    );
    return { args, checked, sizeClass, iconOnlyClass };
  },
  template: `
    <ToggleButton
      v-model="checked"
      :class="[sizeClass, iconOnlyClass]"
      :off-label="args.offLabel"
      :on-label="args.onLabel"
      :off-icon="args.offIcon"
      :on-icon="args.onIcon"
      :disabled="args.disabled"
      :invalid="args.invalid"
      v-bind="args"
    />
  `,
});
