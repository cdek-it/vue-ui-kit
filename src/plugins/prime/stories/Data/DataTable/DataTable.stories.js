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
};

export const Filter = {
  render: TemplateFilter,
};

export const SelectionRadio = {
  render: TemplateSelectionRadio,
  name: 'Row Selection: RadioButton',
};

export const SelectionCheckbox = {
  render: TemplateSelectionCheckbox,
  name: 'Row Selection: Checkbox',
};

export const EditCell = {
  render: TemplateEditCell,
  name: 'Edit: Cell',
};

export const EditRow = {
  render: TemplateEditRow,
  name: 'Edit: Row',
};

export const ScrollVertical = {
  render: TemplateScrollVertical,
  name: 'Scroll: Vertical',
};

export const ScrollHorizontal = {
  render: TemplateScrollHorizontal,
  name: 'Scroll: Horizontal',
};
