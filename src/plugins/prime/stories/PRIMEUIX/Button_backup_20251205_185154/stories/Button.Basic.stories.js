export default {
  title: 'PRIMEUIX/Button/Basic',
  parameters: {
    docs: {
      description: {
        component: `
Text to display on a button is defined with the label property.
        `.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
<Button label="Submit" />
    </div>
  `
});
