export default {
  title: 'PRIMEUIX/Button/Directive',
  parameters: {
    docs: {
      description: {
        component: `Button can also be used as directive using pButton along with pButtonLabel and pButtonIcon helper directives.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <button pButton>
          <i class="pi pi-check" pButtonIcon></i>
          <span pButtonLabel>Save</span>
      </button>
    </div>
  `
});
