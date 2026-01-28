import Paginator from 'primevue/paginator';
import { ref } from 'vue';

export const BasicTemplate = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const totalRecords = ref(120);

    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };

    return {
      args,
      first,
      rows,
      totalRecords,
      onPageChange,
    };
  },
  template: `
    <Paginator 
      :first="first" 
      :rows="rows" 
      :totalRecords="totalRecords" 
      @page="onPageChange"
      v-bind="args"
    />
  `,
});

export const TemplateTemplate = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const totalRecords = ref(120);

    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };

    return {
      args,
      first,
      rows,
      totalRecords,
      onPageChange,
    };
  },
  template: `
    <Paginator 
      :first="first" 
      :rows="rows" 
      :totalRecords="totalRecords" 
      @page="onPageChange"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="({currentPage} из {totalPages})"
      v-bind="args"
    />
  `,
});

export const CustomTemplate = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const totalRecords = ref(120);

    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };

    return {
      args,
      first,
      rows,
      totalRecords,
      onPageChange,
    };
  },
  template: `
    <Paginator 
      :first="first" 
      :rows="rows" 
      :totalRecords="totalRecords" 
      @page="onPageChange"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput"
      :rowsPerPageOptions="[10, 20, 30]"
      v-bind="args"
    />
  `,
});
