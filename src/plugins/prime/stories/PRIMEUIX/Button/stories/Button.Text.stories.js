export default {
  title: 'PRIMEUIX/Button/Text',
  parameters: {
    docs: {
      description: {
        component: `Text buttons can be displayed as raised for elevation.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Primary" variant="text" :raised="true" />
      <Button label="Secondary" variant="text" :raised="true" severity="secondary" />
      <Button label="Success" variant="text" :raised="true" severity="success" />
      <Button label="Info" variant="text" :raised="true" severity="info" />
      <Button label="Warn" variant="text" :raised="true" severity="warn" />
      <Button label="Help" variant="text" :raised="true" severity="help" />
      <Button label="Danger" variant="text" :raised="true" severity="danger" />
      <Button label="Plain" variant="text" :raised="true" />
    </div>
  `
});
