export default {
  title: 'PRIMEUIX/Button/Outlined',
  parameters: {
    docs: {
      description: {
        component: `Outlined buttons display a border without a background initially.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Primary" variant="outlined" />
      <Button label="Secondary" variant="outlined" severity="secondary" />
      <Button label="Success" variant="outlined" severity="success" />
      <Button label="Info" variant="outlined" severity="info" />
      <Button label="Warn" variant="outlined" severity="warn" />
      <Button label="Help" variant="outlined" severity="help" />
      <Button label="Danger" variant="outlined" severity="danger" />
      <Button label="Contrast" variant="outlined" severity="contrast" />
    </div>
  `
});
