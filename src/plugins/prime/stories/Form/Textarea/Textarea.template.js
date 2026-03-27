import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';
import { ref, computed } from 'vue';

export const Template = (args) => {
  return {
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <Textarea 
        v-model="value"
        v-bind="args"
        style="width: 100%"
        :class="{ 'p-textarea-xlg': args.size === 'xlarge' }" 
        :size="args.size === 'xlarge' || args.size === 'medium' ? null : args.size"
      />
    `,
  };
};

export const TemplateFloatLabel = (args) => ({
  components: { Textarea, FloatLabel },
  setup() {
    const value = ref('');
    const inputProps = computed(() => {
      const rest = { ...args };
      delete rest.label;
      delete rest.showClear;
      return rest;
    });

    return { args, value, inputProps };
  },
  template: `
    <FloatLabel variant="in">
        <Textarea 
          id="in_label" 
          v-model="value" 
          v-bind="inputProps" 
          style="width: 100%; resize: none" 
          rows="5"
          cols="30"
        />
        <label for="in_label">{{ args.label || 'In Label' }}</label>
    </FloatLabel>
`,
});
