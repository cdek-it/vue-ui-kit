const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовые стили для DataTable */
.p-datatable .p-datatable-thead > tr > th {
  font-weight: ${dt('datatable.columnTitle.fontWeight')};
}

/* Стили для footer */
.p-datatable .p-datatable-tfoot > tr > td {
  font-weight: ${dt('datatable.columnFooter.fontWeight')};
}

/* Стили для sort icon */
.p-datatable .p-datatable-sort-icon {
  width: ${dt('datatable.sortIcon.size')};
  height: ${dt('datatable.sortIcon.size')};
}

/* Стили для loading icon */
.p-datatable .p-datatable-loading-icon {
  width: ${dt('datatable.loadingIcon.size')};
  height: ${dt('datatable.loadingIcon.size')};
}

/* Стили для row toggle button */
.p-datatable .p-datatable-row-toggle-button {
  width: ${dt('datatable.rowToggleButton.size')};
  height: ${dt('datatable.rowToggleButton.size')};
}
`;

export default css;
