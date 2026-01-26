import { ref } from 'vue';
import Slider from 'primevue/slider';

export const Template = (args) => ({
  components: { Slider },
  setup() {
    const value = ref(args.defaultValue || 50);

    return { args, value };
  },
  template: `
<div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '15px', alignItems: 'center', justifyItems: 'center' }">
  <span></span>
  <span><code>disabled</code></span>

  <Slider v-model="value" style="width: 200px" v-bind="args" />
  <Slider v-model="value" style="width: 200px" disabled v-bind="args" />
</div>
`,
});

export const ComprehensiveTemplate = (args) => ({
  components: { Slider },
  setup() {
    const basicValue = ref(50);
    const rangeValue = ref([20, 80]);
    const stepValue = ref(50);
    const verticalValue = ref(50);
    const minMaxValue = ref(50);

    return {
      args,
      basicValue,
      rangeValue,
      stepValue,
      verticalValue,
      minMaxValue,
    };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '40px' }">
  <!-- Базовый слайдер -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Базовый слайдер</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
        <Slider v-model="basicValue" :style="{ width: '300px' }" />
        <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ basicValue }}</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666' }">
        Значение: от 0 до 100
      </div>
    </div>
  </div>

  <!-- Range слайдер -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Range слайдер (диапазон)</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
        <Slider v-model="rangeValue" range :style="{ width: '300px' }" />
        <span :style="{ minWidth: '80px', fontWeight: '600', fontSize: '16px' }">{{ rangeValue[0] }} - {{ rangeValue[1] }}</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666' }">
        Выбор диапазона значений
      </div>
    </div>
  </div>

  <!-- Слайдер с шагом -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Слайдер с шагом</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
        <Slider v-model="stepValue" :step="10" :style="{ width: '300px' }" />
        <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ stepValue }}</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666' }">
        Шаг: 10 (значения: 0, 10, 20, 30...)
      </div>
    </div>
  </div>

  <!-- Слайдер с min/max -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Слайдер с min/max</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
        <Slider v-model="minMaxValue" :min="20" :max="80" :style="{ width: '300px' }" />
        <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px' }">{{ minMaxValue }}</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666' }">
        Диапазон: от 20 до 80
      </div>
    </div>
  </div>

  <!-- Вертикальный слайдер -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Вертикальный слайдер</h3>
    <div :style="{ display: 'flex', alignItems: 'center', gap: '30px' }">
      <Slider v-model="verticalValue" orientation="vertical" :style="{ height: '200px' }" />
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px' }">
        <span :style="{ fontWeight: '600', fontSize: '16px' }">Значение: {{ verticalValue }}</span>
        <span :style="{ fontSize: '14px', color: '#666' }">Вертикальная ориентация</span>
      </div>
    </div>
  </div>

  <!-- Disabled состояние -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Disabled состояние</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '20px' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px' }">
        <Slider :model-value="50" disabled :style="{ width: '300px' }" />
        <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '16px', color: '#999' }">50</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666' }">
        Неактивное состояние
      </div>
    </div>
  </div>

  <!-- Практический пример: Громкость -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Практический пример: Регулятор громкости</h3>
    <div :style="{ 
      padding: '30px', 
      background: '#f8fafc', 
      borderRadius: '12px',
      maxWidth: '400px'
    }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }">
        <span :style="{ fontSize: '24px' }">🔊</span>
        <Slider v-model="basicValue" :style="{ flex: 1 }" />
        <span :style="{ minWidth: '50px', fontWeight: '600', fontSize: '18px' }">{{ basicValue }}%</span>
      </div>
      <div :style="{ fontSize: '14px', color: '#666', textAlign: 'center' }">
        Перетащите ползунок для изменения громкости
      </div>
    </div>
  </div>

  <!-- Практический пример: Фильтр цен -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Практический пример: Фильтр цен</h3>
    <div :style="{ 
      padding: '30px', 
      background: '#f8fafc', 
      borderRadius: '12px',
      maxWidth: '400px'
    }">
      <div :style="{ marginBottom: '20px' }">
        <div :style="{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }">Диапазон цен</div>
        <div :style="{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }">
          <span :style="{ fontSize: '18px', fontWeight: '600', color: '#44e858' }">{{ rangeValue[0] * 100 }} ₽</span>
          <span :style="{ fontSize: '18px', fontWeight: '600', color: '#44e858' }">{{ rangeValue[1] * 100 }} ₽</span>
        </div>
        <Slider v-model="rangeValue" range :min="0" :max="100" />
      </div>
      <div :style="{ fontSize: '14px', color: '#666', textAlign: 'center' }">
        Выберите диапазон цен для фильтрации товаров
      </div>
    </div>
  </div>
</div>
`,
});
