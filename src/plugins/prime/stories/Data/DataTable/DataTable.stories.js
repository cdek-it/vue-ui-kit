import DataTable from 'primevue/datatable';
import {
  Template,
  TemplateStriped,
  TemplateSelectable,
  TemplateGridlines,
  TemplatePagination,
  TemplateFilter,
  TemplateSelectionRadio,
  TemplateSelectionCheckbox,
  TemplateEditCell,
  TemplateEditRow,
  TemplateScrollVertical,
  TemplateScrollHorizontal,
} from './DataTable.template';

const meta = {
  title: 'Prime/Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `DataTable отображает данные в табличном формате с поддержкой сортировки, фильтрации и выбора строк. \n\n \`\`\`js \n import DataTable from 'primevue/datatable'; \n import Column from 'primevue/column'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-datatable' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large', null],
      description: 'Размер таблицы',
      table: {
        category: 'Props',
        defaultValue: { summary: 'null (normal)' },
        type: { summary: "'small' | 'large'" },
      },
    },
    stripedRows: {
      control: 'boolean',
      description: 'Чередование цвета строк',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showGridlines: {
      control: 'boolean',
      description: 'Отображение сетки между ячейками',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    scrollable: {
      control: 'boolean',
      description: 'Включает прокрутку таблицы',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Отображает индикатор загрузки',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const DataTableDefault = {
  name: 'DataTable',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref([
  { code: 'P001', name: 'Ноутбук', category: 'Электроника', quantity: 15, price: 75000 },
  { code: 'P002', name: 'Смартфон', category: 'Электроника', quantity: 32, price: 45000 },
]);
</script>

<template>
  <DataTable :value="products">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable></Column>
  </DataTable>
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const StripedRows = {
  render: TemplateStriped,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <DataTable :value="products" stripedRows>
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable></Column>
  </DataTable>
</template>
        `,
      },
    },
  },
};

export const Selectable = {
  render: TemplateSelectable,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const selectedProduct = ref(null);
</script>

<template>
  <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" dataKey="id">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable></Column>
  </DataTable>
</template>
        `,
      },
    },
  },
};

export const GridLines = {
  render: TemplateGridlines,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <DataTable :value="products" showGridlines>
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable></Column>
  </DataTable>
</template>
        `,
      },
    },
  },
};

export const Pagination = {
  render: TemplatePagination,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <DataTable :value="products" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20]">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
    <Column field="price" header="Цена" sortable></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};

export const Filter = {
  render: TemplateFilter,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  category: { value: null, matchMode: FilterMatchMode.EQUALS },
});
</script>

<template>
  <DataTable :value="products" v-model:filters="filters" filterDisplay="row">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable :showFilterMenu="false">
      <template #filter="{ filterModel, filterCallback }">
        <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Поиск по названию" />
      </template>
    </Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};

export const SelectionRadio = {
  render: TemplateSelectionRadio,
  name: 'Row Selection: RadioButton',
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const selectedProduct = ref(null);
</script>

<template>
  <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" dataKey="id">
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};

export const SelectionCheckbox = {
  render: TemplateSelectionCheckbox,
  name: 'Row Selection: Checkbox',
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const selectedProducts = ref([]);
</script>

<template>
  <DataTable :value="products" v-model:selection="selectedProducts" selectionMode="multiple" dataKey="id">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};

export const EditCell = {
  render: TemplateEditCell,
  name: 'Edit: Cell',
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const products = ref([
  { id: 1, code: 'P001', name: 'Ноутбук', category: 'Электроника', price: 75000 },
  { id: 2, code: 'P002', name: 'Смартфон', category: 'Электроника', price: 45000 },
]);

const onCellEditComplete = (event) => {
  const { data, newValue, field } = event;
  data[field] = newValue;
};
</script>

<template>
  <DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete">
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
</template>
        `.trim(),
      },
    },
  },
};

export const EditRow = {
  render: TemplateEditRow,
  name: 'Edit: Row',
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const products = ref([
  { id: 1, code: 'P001', name: 'Ноутбук', price: 75000 },
  { id: 2, code: 'P002', name: 'Смартфон', price: 45000 },
]);

const editingRows = ref([]);

const onRowEditSave = (event) => {
  const { newData, index } = event;
  products.value[index] = newData;
};
</script>

<template>
  <DataTable
    :value="products"
    editMode="row"
    v-model:editingRows="editingRows"
    @row-edit-save="onRowEditSave"
    dataKey="id"
  >
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
</template>
        `.trim(),
      },
    },
  },
};

export const ScrollVertical = {
  render: TemplateScrollVertical,
  name: 'Scroll: Vertical',
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <DataTable :value="products" scrollable scrollHeight="400px">
    <Column field="code" header="Код" sortable></Column>
    <Column field="name" header="Название" sortable></Column>
    <Column field="category" header="Категория" sortable></Column>
    <Column field="quantity" header="Количество" sortable></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};

export const ScrollHorizontal = {
  render: TemplateScrollHorizontal,
  name: 'Scroll: Horizontal',
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <DataTable :value="products" scrollable>
    <Column field="code" header="Код" sortable style="min-width: 200px"></Column>
    <Column field="name" header="Название" sortable style="min-width: 200px"></Column>
    <Column field="category" header="Категория" sortable style="min-width: 200px"></Column>
    <Column field="quantity" header="Количество" sortable style="min-width: 200px"></Column>
    <Column field="price" header="Цена" sortable style="min-width: 200px"></Column>
    <Column field="id" header="ID" sortable style="min-width: 200px"></Column>
  </DataTable>
</template>
        `.trim(),
      },
    },
  },
};
