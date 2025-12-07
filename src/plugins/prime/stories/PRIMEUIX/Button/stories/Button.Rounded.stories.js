export default {
  title: 'PRIMEUIX/Button/Rounded',
  parameters: {
    docs: {
      description: {
        component: `Rounded buttons have a circular border radius.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Primary" :rounded="true" />
      <Button label="Secondary" :rounded="true" severity="secondary" />
      <Button label="Success" :rounded="true" severity="success" />
      <Button label="Info" :rounded="true" severity="info" />
      <Button label="Warn" :rounded="true" severity="warn" />
      <Button label="Help" :rounded="true" severity="help" />
      <Button label="Danger" :rounded="true" severity="danger" />
      <Button label="Contrast" :rounded="true" severity="contrast" />
    </div>
  `
});
