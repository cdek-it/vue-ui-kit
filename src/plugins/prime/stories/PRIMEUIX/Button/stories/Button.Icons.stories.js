export default {
  title: 'PRIMEUIX/Button/Icons',
  parameters: {
    docs: {
      description: {
        component: `Icon of a button is specified with icon property and position is configured using iconPos attribute.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button icon="pi pi-home" aria-label="Save" />
      <Button label="Profile" icon="pi pi-user" />
      <Button label="Save" icon="pi pi-check" iconPos="right" />
      <Button label="Search" icon="pi pi-search" iconPos="top" />
      <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
    </div>
  `
});
