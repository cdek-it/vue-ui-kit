export default {
  title: 'PRIMEUIX/Button/ButtonGroup',
  parameters: {
    docs: {
      description: {
        component: `Multiple buttons are grouped when wrapped inside an element with ButtonGroup component.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Buttongroup>
          <Button label="Save" icon="pi pi-check" />
          <Button label="Delete" icon="pi pi-trash" />
          <Button label="Cancel" icon="pi pi-times" />
      </ButtonGroup>
    </div>
  `
});
