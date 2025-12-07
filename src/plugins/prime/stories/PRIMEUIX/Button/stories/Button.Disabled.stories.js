export default {
  title: 'PRIMEUIX/Button/Disabled',
  parameters: {
    docs: {
      description: {
        component: `When disabled is present, the element cannot be edited and focused.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Submit" disabled />
    </div>
  `
});
