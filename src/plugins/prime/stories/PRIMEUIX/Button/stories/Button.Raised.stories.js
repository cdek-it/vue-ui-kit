export default {
  title: 'PRIMEUIX/Button/Raised',
  parameters: {
    docs: {
      description: {
        component: `Raised buttons display a shadow to indicate elevation.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Primary" :raised="true" />
      <Button label="Secondary" :raised="true" severity="secondary" />
      <Button label="Success" :raised="true" severity="success" />
      <Button label="Info" :raised="true" severity="info" />
      <Button label="Warn" :raised="true" severity="warn" />
      <Button label="Help" :raised="true" severity="help" />
      <Button label="Danger" :raised="true" severity="danger" />
      <Button label="Contrast" :raised="true" severity="contrast" />
    </div>
  `
});
