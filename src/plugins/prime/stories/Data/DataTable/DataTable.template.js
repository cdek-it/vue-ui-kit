import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export const Template = (args) => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      {
        id: 1,
        code: 'P001',
        name: 'Ноутбук',
        category: 'Электроника',
        quantity: 15,
        price: 75000,
      },
      {
        id: 2,
        code: 'P002',
        name: 'Смартфон',
        category: 'Электроника',
        quantity: 32,
        price: 45000,
      },
      {
        id: 3,
        code: 'P003',
        name: 'Клавиатура',
        category: 'Аксессуары',
        quantity: 48,
        price: 3500,
      },
      {
        id: 4,
        code: 'P004',
        name: 'Мышь',
        category: 'Аксессуары',
        quantity: 67,
        price: 1200,
      },
      {
        id: 5,
        code: 'P005',
        name: 'Монитор',
        category: 'Электроника',
        quantity: 21,
        price: 25000,
      },
      {
        id: 6,
        code: 'P006',
        name: 'Наушники',
        category: 'Аксессуары',
        quantity: 89,
        price: 5500,
      },
      {
        id: 7,
        code: 'P007',
        name: 'Веб-камера',
        category: 'Аксессуары',
        quantity: 12,
        price: 4200,
      },
      {
        id: 8,
        code: 'P008',
        name: 'Планшет',
        category: 'Электроника',
        quantity: 18,
        price: 35000,
      },
    ]);

    return { args, products };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Базовая таблица с данными о продуктах
  </div>

  <DataTable :value="products" v-bind="args">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable>
      <template #body="slotProps">
        {{ slotProps.data.price.toLocaleString('ru-RU') }} ₽
      </template>
    </Column>
  </DataTable>
</div>
`,
});

export const TemplateStriped = (args) => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      {
        id: 1,
        code: 'P001',
        name: 'Ноутбук',
        category: 'Электроника',
        quantity: 15,
        price: 75000,
      },
      {
        id: 2,
        code: 'P002',
        name: 'Смартфон',
        category: 'Электроника',
        quantity: 32,
        price: 45000,
      },
      {
        id: 3,
        code: 'P003',
        name: 'Клавиатура',
        category: 'Аксессуары',
        quantity: 48,
        price: 3500,
      },
      {
        id: 4,
        code: 'P004',
        name: 'Мышь',
        category: 'Аксессуары',
        quantity: 67,
        price: 1200,
      },
      {
        id: 5,
        code: 'P005',
        name: 'Монитор',
        category: 'Электроника',
        quantity: 21,
        price: 25000,
      },
      {
        id: 6,
        code: 'P006',
        name: 'Наушники',
        category: 'Аксессуары',
        quantity: 89,
        price: 5500,
      },
      {
        id: 7,
        code: 'P007',
        name: 'Веб-камера',
        category: 'Аксессуары',
        quantity: 12,
        price: 4200,
      },
      {
        id: 8,
        code: 'P008',
        name: 'Планшет',
        category: 'Электроника',
        quantity: 18,
        price: 35000,
      },
    ]);

    return { args, products };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Таблица с чередующимися строками (stripedRows)
  </div>

  <DataTable :value="products" stripedRows v-bind="args">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable>
      <template #body="slotProps">
        {{ slotProps.data.price.toLocaleString('ru-RU') }} ₽
      </template>
    </Column>
  </DataTable>
</div>
`,
});

export const TemplateSelectable = (args) => ({
  components: { DataTable, Column },
  setup() {
    const products = ref([
      {
        id: 1,
        code: 'P001',
        name: 'Ноутбук',
        category: 'Электроника',
        quantity: 15,
        price: 75000,
      },
      {
        id: 2,
        code: 'P002',
        name: 'Смартфон',
        category: 'Электроника',
        quantity: 32,
        price: 45000,
      },
      {
        id: 3,
        code: 'P003',
        name: 'Клавиатура',
        category: 'Аксессуары',
        quantity: 48,
        price: 3500,
      },
      {
        id: 4,
        code: 'P004',
        name: 'Мышь',
        category: 'Аксессуары',
        quantity: 67,
        price: 1200,
      },
      {
        id: 5,
        code: 'P005',
        name: 'Монитор',
        category: 'Электроника',
        quantity: 21,
        price: 25000,
      },
      {
        id: 6,
        code: 'P006',
        name: 'Наушники',
        category: 'Аксессуары',
        quantity: 89,
        price: 5500,
      },
      {
        id: 7,
        code: 'P007',
        name: 'Веб-камера',
        category: 'Аксессуары',
        quantity: 12,
        price: 4200,
      },
      {
        id: 8,
        code: 'P008',
        name: 'Планшет',
        category: 'Электроника',
        quantity: 18,
        price: 35000,
      },
    ]);

    const selectedProduct = ref();

    return { args, products, selectedProduct };
  },
  template: `
<div :style="{ display: 'flex', flexDirection: 'column', gap: '30px' }">
  <div :style="{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }">
    💡 <strong>Подсказка:</strong> Таблица с возможностью выбора строк (selectionMode="single")
  </div>

  <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" dataKey="id" v-bind="args">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable>
      <template #body="slotProps">
        {{ slotProps.data.price.toLocaleString('ru-RU') }} ₽
      </template>
    </Column>
  </DataTable>
</div>
`,
});
