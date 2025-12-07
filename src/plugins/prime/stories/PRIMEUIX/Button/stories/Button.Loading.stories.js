export default {
  title: 'PRIMEUIX/Button/Loading',
  parameters: {
    docs: {
      description: {
        component: `Busy state is controlled with the loading property.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Search" icon="pi pi-check" [loading]="loading" @click="load()" />
    </div>
  `
});
