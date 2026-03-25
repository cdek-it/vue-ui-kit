import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from '@primevue/core/api';

const products = [
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
];

export const Template = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    return { args, data };
  },
  template: `
<DataTable :value="data" v-bind="args">
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
`,
});

export const TemplateStriped = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    return { args, data };
  },
  template: `
<DataTable :value="data" stripedRows v-bind="args">
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
`,
});

export const TemplateSelectable = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    const selectedProduct = ref(null);
    return { args, data, selectedProduct };
  },
  template: `
<DataTable :value="data" v-model:selection="selectedProduct" selectionMode="single" dataKey="id" v-bind="args">
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
`,
});

export const TemplateGridlines = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    return { args, data };
  },
  template: `
<DataTable :value="data" showGridlines v-bind="args">
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
`,
});

export const TemplatePagination = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    return { args, data };
  },
  template: `
<DataTable :value="data" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]" v-bind="args">
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
`,
});

export const TemplateFilter = (args) => ({
  components: { DataTable, Column, InputText },
  setup() {
    const data = ref(products);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      category: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    return { args, data, filters };
  },
  template: `
<DataTable :value="data" v-model:filters="filters" filterDisplay="row" v-bind="args">
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable :showFilterMenu="false">
    <template #filter="{ filterModel, filterCallback }">
      <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Поиск по названию" />
    </template>
  </Column>
  <Column field="category" header="Категория" sortable></Column>
  <Column field="quantity" header="Количество" sortable></Column>
</DataTable>
`,
});

export const TemplateSelectionRadio = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    const selectedProduct = ref(null);
    return { args, data, selectedProduct };
  },
  template: `
<DataTable :value="data" v-model:selection="selectedProduct" selectionMode="single" dataKey="id" v-bind="args">
  <Column selectionMode="single" headerStyle="width: 3rem"></Column>
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable></Column>
  <Column field="category" header="Категория" sortable></Column>
</DataTable>
`,
});

export const TemplateSelectionCheckbox = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    const selectedProducts = ref(null);
    return { args, data, selectedProducts };
  },
  template: `
<DataTable :value="data" v-model:selection="selectedProducts" selectionMode="multiple" dataKey="id" v-bind="args">
  <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable></Column>
  <Column field="category" header="Категория" sortable></Column>
</DataTable>
`,
});

export const TemplateEditCell = (args) => ({
  components: { DataTable, Column, InputText },
  setup() {
    const data = ref(JSON.parse(JSON.stringify(products)));
    const onCellEditComplete = (event) => {
      const { data: rowData, newValue, field } = event;
      rowData[field] = newValue;
    };
    return { args, data, onCellEditComplete };
  },
  template: `
<DataTable :value="data" editMode="cell" @cell-edit-complete="onCellEditComplete" v-bind="args">
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable>
    <template #editor="{ data, field }">
      <InputText v-model="data[field]" autofocus />
    </template>
  </Column>
  <Column field="category" header="Категория" sortable></Column>
  <Column field="price" header="Цена" sortable>
     <template #editor="{ data, field }">
      <InputText v-model="data[field]" />
    </template>
  </Column>
</DataTable>
`,
});

export const TemplateEditRow = (args) => ({
  components: { DataTable, Column, InputText },
  setup() {
    const data = ref(JSON.parse(JSON.stringify(products)));
    const editingRows = ref([]);
    const onRowEditSave = (event) => {
      const { newData, index } = event;
      data.value[index] = newData;
    };
    return { args, data, editingRows, onRowEditSave };
  },
  template: `
<DataTable :value="data" editMode="row" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" dataKey="id" v-bind="args">
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable>
    <template #editor="{ data, field }">
      <InputText v-model="data[field]" />
    </template>
  </Column>
  <Column field="price" header="Цена" sortable>
     <template #editor="{ data, field }">
      <InputText v-model="data[field]" />
    </template>
  </Column>
  <Column :rowEditor="true" headerStyle="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
</DataTable>
`,
});

export const TemplateScrollVertical = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref([...products, ...products, ...products, ...products]);
    return { args, data };
  },
  template: `
<DataTable :value="data" scrollable scrollHeight="400px" v-bind="args">
  <Column field="code" header="Код" sortable></Column>
  <Column field="name" header="Название" sortable></Column>
  <Column field="category" header="Категория" sortable></Column>
  <Column field="quantity" header="Количество" sortable></Column>
</DataTable>
`,
});

export const TemplateScrollHorizontal = (args) => ({
  components: { DataTable, Column },
  setup() {
    const data = ref(products);
    return { args, data };
  },
  template: `
<DataTable :value="data" scrollable v-bind="args">
  <Column field="code" header="Код" sortable style="min-width: 200px"></Column>
  <Column field="name" header="Название" sortable style="min-width: 200px"></Column>
  <Column field="category" header="Категория" sortable style="min-width: 200px"></Column>
  <Column field="quantity" header="Количество" sortable style="min-width: 200px"></Column>
  <Column field="price" header="Цена" sortable style="min-width: 200px"></Column>
  <Column field="id" header="ID" sortable style="min-width: 200px"></Column>
</DataTable>
`,
});
