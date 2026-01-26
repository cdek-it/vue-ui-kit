import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

export const Template = (args) => ({
  components: { RadioButton },
  setup() {
    const value1 = ref('2');
    const value2 = ref('2');
    const value3 = ref('2');
    return { args, value1, value2, value3 };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '40px' }">
  <!-- Основная таблица состояний -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Основные состояния</h3>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'center' }">
      <span></span>
      <span :style="{ fontWeight: '500' }">Default</span>
      <span :style="{ fontWeight: '500' }">Invalid</span>
      <span :style="{ fontWeight: '500' }">Disabled</span>

      <span :style="{ justifySelf: 'flex-start', fontWeight: '500' }">Unchecked</span>
      <RadioButton v-model="value1" name="group1" value="1" v-bind="args" />
      <RadioButton v-model="value2" name="group2" value="1" invalid v-bind="args" />
      <RadioButton v-model="value3" name="group3" value="1" disabled v-bind="args" />

      <span :style="{ justifySelf: 'flex-start', fontWeight: '500' }">Checked</span>
      <RadioButton v-model="value1" name="group1" value="2" v-bind="args" />
      <RadioButton v-model="value2" name="group2" value="2" invalid v-bind="args" />
      <RadioButton v-model="value3" name="group3" value="2" disabled v-bind="args" />
    </div>
  </div>

  <!-- Размеры -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Размеры</h3>
    <div :style="{ display: 'flex', gap: '30px', alignItems: 'center' }">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <span :style="{ fontSize: '14px', color: '#666' }">Small</span>
        <RadioButton v-model="value1" name="size-group-sm" value="sm" class="p-radiobutton-sm" />
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <span :style="{ fontSize: '14px', color: '#666' }">Medium (default)</span>
        <RadioButton v-model="value1" name="size-group-md" value="md" />
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <span :style="{ fontSize: '14px', color: '#666' }">Large</span>
        <RadioButton v-model="value1" name="size-group-lg" value="lg" class="p-radiobutton-lg" />
      </div>
    </div>
  </div>

  <!-- Пример использования с лейблами -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">С лейблами</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '15px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '10px' }">
        <RadioButton v-model="value1" name="label-group" value="option1" inputId="option1" />
        <label for="option1" :style="{ cursor: 'pointer' }">Вариант 1</label>
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', gap: '10px' }">
        <RadioButton v-model="value1" name="label-group" value="option2" inputId="option2" />
        <label for="option2" :style="{ cursor: 'pointer' }">Вариант 2</label>
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', gap: '10px' }">
        <RadioButton v-model="value1" name="label-group" value="option3" inputId="option3" />
        <label for="option3" :style="{ cursor: 'pointer' }">Вариант 3</label>
      </div>
    </div>
  </div>
</div>
`,
});
