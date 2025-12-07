import Paginator from 'primevue/paginator';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    
    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };
    
    return { first, rows, onPageChange };
  },
  template: `
    <div class="flex justify-center p-4">
      <Paginator 
        :first="first" 
        :rows="rows" 
        :totalRecords="120" 
        @page="onPageChange"
        class="w-full"
      />
    </div>
  `
});

// Шаблон
export const TemplateCustomTemplate = () => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    
    return { first, rows };
  },
  template: `
    <div class="flex justify-center p-4">
      <Paginator 
        :first="first" 
        :rows="rows" 
        :totalRecords="120"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        class="w-full"
      >
        <template #start>
          <span class="text-sm">Всего записей: 120</span>
        </template>
        <template #end>
          <span class="text-sm">Страница {{ Math.floor(first / rows) + 1 }}</span>
        </template>
      </Paginator>
    </div>
  `
});

// Строки на странице
export const RowsPerPageTemplate = () => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    
    return { first, rows };
  },
  template: `
    <div class="flex justify-center p-4">
      <Paginator 
        v-model:first="first" 
        v-model:rows="rows" 
        :totalRecords="120" 
        :rowsPerPageOptions="[10, 20, 30]"
        class="w-full"
      />
    </div>
  `
});

