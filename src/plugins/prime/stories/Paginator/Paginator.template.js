import { ref } from 'vue';
import Paginator from 'primevue/paginator';

export const Template = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };
    return { args, first, rows, onPageChange };
  },
  template: `
    <Paginator
      :first="first"
      :rows="rows"
      :totalRecords="120"
      @page="onPageChange"
      v-bind="args"
    />
  `,
});

export const TemplateCurrentPageReport = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };
    return { args, first, rows, onPageChange };
  },
  template: `
    <Paginator
      :first="first"
      :rows="rows"
      :totalRecords="120"
      @page="onPageChange"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{currentPage} из {totalPages}"
      v-bind="args"
    />
  `,
});

export const TemplateRowsPerPage = (args) => ({
  components: { Paginator },
  setup() {
    const first = ref(0);
    const rows = ref(10);
    const onPageChange = (event) => {
      first.value = event.first;
      rows.value = event.rows;
    };
    return { args, first, rows, onPageChange };
  },
  template: `
    <Paginator
      :first="first"
      :rows="rows"
      :totalRecords="120"
      @page="onPageChange"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput"
      :rowsPerPageOptions="[10, 20, 30]"
      v-bind="args"
    />
  `,
});
