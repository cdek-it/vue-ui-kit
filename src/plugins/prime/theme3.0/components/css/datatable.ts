export default ({ dt }: { dt: (token: string) => string }) => `
.p-datatable .p-datatable-thead > tr > th {
  font-weight: ${dt('datatable.columnTitle.fontWeight')};
}

.p-datatable .p-datatable-tfoot > tr > td {
  font-weight: ${dt('datatable.columnFooter.fontWeight')};
}

.p-datatable .p-datatable-sort-icon {
  width: ${dt('datatable.sortIcon.size')};
  height: ${dt('datatable.sortIcon.size')};
}

.p-datatable .p-datatable-loading-icon {
  width: ${dt('datatable.loadingIcon.size')};
  height: ${dt('datatable.loadingIcon.size')};
}

.p-datatable .p-datatable-row-toggle-button {
  width: ${dt('datatable.rowToggleButton.size')};
  height: ${dt('datatable.rowToggleButton.size')};
}

.p-datatable .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
  color: ${dt('datatable.headerCell.hoverColor')};
}
`;
