import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      { code: 'P001', name: 'Продукт 1', category: 'Электроника', quantity: 10, price: 100 },
      { code: 'P002', name: 'Продукт 2', category: 'Одежда', quantity: 25, price: 50 },
      { code: 'P003', name: 'Продукт 3', category: 'Электроника', quantity: 5, price: 200 },
      { code: 'P004', name: 'Продукт 4', category: 'Мебель', quantity: 15, price: 300 },
      { code: 'P005', name: 'Продукт 5', category: 'Одежда', quantity: 30, price: 75 }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataTable :value="products" class="w-full">
        <Column field="code" header="Код"></Column>
        <Column field="name" header="Название"></Column>
        <Column field="category" header="Категория"></Column>
        <Column field="quantity" header="Количество"></Column>
        <Column field="price" header="Цена"></Column>
      </DataTable>
    </div>
  `
});

// Сортировка
export const SortTemplate = () => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      { code: 'P001', name: 'Продукт 1', category: 'Электроника', quantity: 10, price: 100 },
      { code: 'P002', name: 'Продукт 2', category: 'Одежда', quantity: 25, price: 50 },
      { code: 'P003', name: 'Продукт 3', category: 'Электроника', quantity: 5, price: 200 },
      { code: 'P004', name: 'Продукт 4', category: 'Мебель', quantity: 15, price: 300 },
      { code: 'P005', name: 'Продукт 5', category: 'Одежда', quantity: 30, price: 75 }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataTable :value="products" sortMode="multiple" class="w-full">
        <Column field="code" header="Код" sortable></Column>
        <Column field="name" header="Название" sortable></Column>
        <Column field="category" header="Категория" sortable></Column>
        <Column field="quantity" header="Количество" sortable></Column>
        <Column field="price" header="Цена" sortable></Column>
      </DataTable>
    </div>
  `
});

// Фильтрация
export const FilterTemplate = () => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      { code: 'P001', name: 'Продукт 1', category: 'Электроника', quantity: 10, price: 100 },
      { code: 'P002', name: 'Продукт 2', category: 'Одежда', quantity: 25, price: 50 },
      { code: 'P003', name: 'Продукт 3', category: 'Электроника', quantity: 5, price: 200 },
      { code: 'P004', name: 'Продукт 4', category: 'Мебель', quantity: 15, price: 300 },
      { code: 'P005', name: 'Продукт 5', category: 'Одежда', quantity: 30, price: 75 }
    ]);
    
    const filters = ref({
      global: { value: null, matchMode: 'contains' }
    });
    
    return { products, filters };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataTable :value="products" :filters="filters" filterDisplay="row" class="w-full">
        <Column field="code" header="Код" :showFilterMenu="false">
          <template #filter="{ filterModel, filterCallback }">
            <input 
              type="text" 
              v-model="filterModel.value" 
              @input="filterCallback()" 
              class="p-2 border border-surface-200 rounded w-full"
            />
          </template>
        </Column>
        <Column field="name" header="Название"></Column>
        <Column field="category" header="Категория"></Column>
        <Column field="quantity" header="Количество"></Column>
        <Column field="price" header="Цена"></Column>
      </DataTable>
    </div>
  `
});

// Выбор
export const SelectionTemplate = () => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      { code: 'P001', name: 'Продукт 1', category: 'Электроника', quantity: 10, price: 100 },
      { code: 'P002', name: 'Продукт 2', category: 'Одежда', quantity: 25, price: 50 },
      { code: 'P003', name: 'Продукт 3', category: 'Электроника', quantity: 5, price: 200 }
    ]);
    
    const selectedProducts = ref();
    
    return { products, selectedProducts };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataTable :value="products" v-model:selection="selectedProducts" dataKey="code" class="w-full">
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="code" header="Код"></Column>
        <Column field="name" header="Название"></Column>
        <Column field="category" header="Категория"></Column>
        <Column field="quantity" header="Количество"></Column>
        <Column field="price" header="Цена"></Column>
      </DataTable>
    </div>
  `
});

// Пагинация
export const PaginationTemplate = () => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      { code: 'P001', name: 'Продукт 1', category: 'Электроника', quantity: 10, price: 100 },
      { code: 'P002', name: 'Продукт 2', category: 'Одежда', quantity: 25, price: 50 },
      { code: 'P003', name: 'Продукт 3', category: 'Электроника', quantity: 5, price: 200 },
      { code: 'P004', name: 'Продукт 4', category: 'Мебель', quantity: 15, price: 300 },
      { code: 'P005', name: 'Продукт 5', category: 'Одежда', quantity: 30, price: 75 },
      { code: 'P006', name: 'Продукт 6', category: 'Электроника', quantity: 20, price: 150 },
      { code: 'P007', name: 'Продукт 7', category: 'Мебель', quantity: 8, price: 400 }
    ]);
    
    return { products };
  },
  template: `
    <div class="flex justify-center p-4">
      <DataTable :value="products" paginator :rows="5" class="w-full">
        <Column field="code" header="Код"></Column>
        <Column field="name" header="Название"></Column>
        <Column field="category" header="Категория"></Column>
        <Column field="quantity" header="Количество"></Column>
        <Column field="price" header="Цена"></Column>
      </DataTable>
    </div>
  `
});

