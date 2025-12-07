export default {
  title: 'PRIMEUIX/Button/Template',
  parameters: {
    docs: {
      description: {
        component: `Custom content inside a button is defined as children.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button :outlined="true">
          <svg width="35" height="40" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
              <path d="..." fill="var(--primary-color)" />
          </svg>
      </Button>
    </div>
  `
});
