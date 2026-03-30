import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { InputNumber },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `
    <InputNumber
      v-model="value"
      v-bind="args"
    >
      <template #incrementbuttonicon>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
      </template>
      <template #decrementbuttonicon>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
      </template>
    </InputNumber>
  `,
});

export const TemplateFloatLabel = (args) => ({
  components: { InputNumber, FloatLabel },
  setup() {
    const value = ref(null);
    return { args, value };
  },
  template: `
    <FloatLabel variant="in">
      <InputNumber id="number" v-model="value" showButtons buttonLayout="horizontal" v-bind="args">
        <template #incrementbuttonicon>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        </template>
        <template #decrementbuttonicon>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        </template>
      </InputNumber>
      <label for="number">{{ args.label }}</label>
    </FloatLabel>
  `,
});
