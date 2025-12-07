export default {
  title: 'PRIMEUIX/Button/Sizes',
  parameters: {
    docs: {
      description: {
        component: `Button provides small and large sizes as alternatives to the standard.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Small" icon="pi pi-check" size="small" />
      <Button label="Normal" icon="pi pi-check" />
      <Button label="Large" icon="pi pi-check" size="large" />
    </div>
  `
});
