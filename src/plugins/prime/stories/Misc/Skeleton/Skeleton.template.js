import Skeleton from 'primevue/skeleton';

export const Template = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
    <Skeleton v-bind="args" />
  `,
});

export const ComprehensiveTemplate = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '40px' }">
  <!-- Базовые формы -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Базовые формы</h3>
    <div :style="{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="10rem" height="4rem" />
        <span :style="{ fontSize: '14px', color: '#666' }">Rectangle</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton shape="circle" size="4rem" />
        <span :style="{ fontSize: '14px', color: '#666' }">Circle</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="10rem" height="4rem" borderRadius="16px" />
        <span :style="{ fontSize: '14px', color: '#666' }">Rounded</span>
      </div>
    </div>
  </div>

  <!-- Размеры -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Размеры</h3>
    <div :style="{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="5rem" height="2rem" />
        <span :style="{ fontSize: '14px', color: '#666' }">Small</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="10rem" height="3rem" />
        <span :style="{ fontSize: '14px', color: '#666' }">Medium</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="15rem" height="4rem" />
        <span :style="{ fontSize: '14px', color: '#666' }">Large</span>
      </div>
    </div>
  </div>

  <!-- Анимация -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Анимация</h3>
    <div :style="{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="10rem" height="4rem" animation="wave" />
        <span :style="{ fontSize: '14px', color: '#666' }">Wave (default)</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }">
        <Skeleton width="10rem" height="4rem" animation="none" />
        <span :style="{ fontSize: '14px', color: '#666' }">None</span>
      </div>
    </div>
  </div>

  <!-- Карточка с контентом -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Карточка профиля</h3>
    <div :style="{ 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px', 
      padding: '20px',
      maxWidth: '400px',
      background: '#fff'
    }">
      <div :style="{ display: 'flex', gap: '15px', marginBottom: '20px' }">
        <Skeleton shape="circle" size="4rem" />
        <div :style="{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }">
          <Skeleton width="70%" height="1.5rem" />
          <Skeleton width="50%" height="1rem" />
        </div>
      </div>
      <Skeleton width="100%" height="1rem" :style="{ marginBottom: '8px' }" />
      <Skeleton width="100%" height="1rem" :style="{ marginBottom: '8px' }" />
      <Skeleton width="80%" height="1rem" />
    </div>
  </div>

  <!-- Список -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Список элементов</h3>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px' }">
      <div v-for="i in 3" :key="i" :style="{ 
        display: 'flex', 
        gap: '15px', 
        padding: '15px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        background: '#fff'
      }">
        <Skeleton width="60px" height="60px" />
        <div :style="{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }">
          <Skeleton width="60%" height="1.2rem" />
          <Skeleton width="100%" height="0.9rem" />
          <Skeleton width="40%" height="0.9rem" />
        </div>
      </div>
    </div>
  </div>

  <!-- Таблица -->
  <div>
    <h3 :style="{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }">Таблица</h3>
    <div :style="{ 
      border: '1px solid #e2e8f0', 
      borderRadius: '8px', 
      overflow: 'hidden',
      maxWidth: '600px'
    }">
      <div :style="{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 2fr 1fr', 
        gap: '15px',
        padding: '15px',
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0'
      }">
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="1.2rem" />
      </div>
      <div v-for="i in 4" :key="i" :style="{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 2fr 1fr', 
        gap: '15px',
        padding: '15px',
        borderBottom: i < 4 ? '1px solid #e2e8f0' : 'none'
      }">
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" />
      </div>
    </div>
  </div>
</div>
`,
});
