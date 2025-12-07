export default {
  title: 'PRIMEUIX/Button/Link',
  parameters: {
    docs: {
      description: {
        component: `A button can be rendered as a link when link property is present, while the pButton directive can be applied on an anchor element to style the link as a button.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Link" link />
      <a href="https://angular.dev/" pButton target="_blank" rel="noopener noreferrer">
          <span pButtonLabel>Angular Website</span>
      </a>
      <a routerLink="/" pButton>
          <span pButtonLabel>Router Link</span>
      </a>
    </div>
  `
});
