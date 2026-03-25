import Paginator from 'primevue/paginator';
import {
  Template,
  TemplateCurrentPageReport,
  TemplateRowsPerPage,
} from './Paginator.template';

const meta = {
  title: 'Prime/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Отображает навигацию по страницам для больших наборов данных. \n\n \`\`\`js \n import Paginator from 'primevue/paginator'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-paginator' },
  },
  argTypes: {
    totalRecords: {
      control: 'number',
      description: 'Общее количество записей',
      table: {
        category: 'Props',
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    rows: {
      control: 'number',
      description: 'Количество строк на странице',
      table: {
        category: 'Props',
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    rowsPerPageOptions: {
      control: 'object',
      description: 'Варианты количества строк на странице',
      table: {
        category: 'Props',
        type: { summary: 'number[]' },
      },
    },
    template: {
      control: 'text',
      description: 'Шаблон элементов пагинатора',
      table: {
        category: 'Props',
        defaultValue: {
          summary:
            'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        },
        type: { summary: 'string | object' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const PaginatorDefault = {
  name: 'Paginator',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const first = ref(0);
const rows = ref(10);
const onPageChange = (event) => {
  first.value = event.first;
  rows.value = event.rows;
};
</script>

<template>
  <Paginator
    :first="first"
    :rows="rows"
    :totalRecords="120"
    @page="onPageChange"
  />
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const CurrentPageReport = {
  render: TemplateCurrentPageReport,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Paginator
    :first="first"
    :rows="rows"
    :totalRecords="120"
    @page="onPageChange"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{currentPage} из {totalPages}"
  />
</template>
        `,
      },
    },
  },
};

export const RowsPerPage = {
  render: TemplateRowsPerPage,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Paginator
    :first="first"
    :rows="rows"
    :totalRecords="120"
    @page="onPageChange"
    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageInput"
    :rowsPerPageOptions="[10, 20, 30]"
  />
</template>
        `,
      },
    },
  },
};
