import ScrollPanel from 'primevue/scrollpanel';

export const Template = (args) => ({
  components: { ScrollPanel },
  setup() {
    return { args };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <!-- Вертикальный скролл -->
  <div>
    <h3 :style="{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }">Вертикальный скролл</h3>
    <ScrollPanel :style="{ width: '100%', height: '200px' }" v-bind="args">
      <div :style="{ padding: '1rem', lineHeight: '1.5' }">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </ScrollPanel>
  </div>

  <!-- Горизонтальный скролл -->
  <div>
    <h3 :style="{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }">Горизонтальный скролл</h3>
    <ScrollPanel :style="{ width: '100%', height: '100px' }" v-bind="args">
      <div :style="{ padding: '1rem', width: '1200px', display: 'flex', gap: '1rem' }">
        <div v-for="i in 10" :key="i" :style="{ 
          minWidth: '100px', 
          height: '60px', 
          background: '#e2e8f0', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600'
        }">
          Item {{ i }}
        </div>
      </div>
    </ScrollPanel>
  </div>

  <!-- Оба направления -->
  <div>
    <h3 :style="{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }">Вертикальный и горизонтальный скролл</h3>
    <ScrollPanel :style="{ width: '100%', height: '200px' }" v-bind="args">
      <div :style="{ padding: '1rem', width: '1200px' }">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div :style="{ display: 'flex', gap: '1rem', marginTop: '1rem' }">
          <div v-for="i in 10" :key="i" :style="{ 
            minWidth: '100px', 
            height: '60px', 
            background: '#e2e8f0', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '600'
          }">
            Item {{ i }}
          </div>
        </div>
        <p :style="{ marginTop: '1rem' }">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </ScrollPanel>
  </div>

  <!-- С кастомным контентом -->
  <div>
    <h3 :style="{ marginBottom: '15px', fontSize: '18px', fontWeight: '600' }">С карточками</h3>
    <ScrollPanel :style="{ width: '100%', height: '250px' }" v-bind="args">
      <div :style="{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }">
        <div v-for="i in 8" :key="i" :style="{ 
          padding: '1rem', 
          background: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }">
          <h4 :style="{ marginBottom: '0.5rem', fontWeight: '600' }">Карточка {{ i }}</h4>
          <p :style="{ color: '#64748b', fontSize: '14px' }">
            Описание карточки с некоторым текстом для демонстрации контента.
          </p>
        </div>
      </div>
    </ScrollPanel>
  </div>
</div>
`,
});
