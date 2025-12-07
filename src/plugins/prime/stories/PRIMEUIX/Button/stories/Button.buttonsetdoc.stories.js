export default {
  title: 'PRIMEUIX/Button/buttonsetdoc',
  parameters: {
    docs: {
      description: {
        component: `Multiple buttons are grouped when wrapped inside an element with p-buttonset class.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <span class="p-buttonset">
          <button pButton pRipple label="Save" icon="pi pi-check"></button>
          <button pButton pRipple label="Delete" icon="pi pi-trash"></button>
          <button pButton pRipple label="Cancel" icon="pi pi-times"></button>
      </span>
    </div>
  `
});
