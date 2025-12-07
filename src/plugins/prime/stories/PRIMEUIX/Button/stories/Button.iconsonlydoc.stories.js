export default {
  title: 'PRIMEUIX/Button/iconsonlydoc',
  parameters: {
    docs: {
      description: {
        component: `Buttons can have icons without labels.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button icon="pi pi-check" />
      <Button icon="pi pi-bookmark" severity="secondary" />
      <Button icon="pi pi-search" severity="success" />
      <Button icon="pi pi-user" severity="info" />
      <Button icon="pi pi-bell" severity="warn" />
      <Button icon="pi pi-heart" severity="help" />
      <Button icon="pi pi-times" severity="danger" />
      
      <Button icon="pi pi-check" :rounded="true" />
      <Button icon="pi pi-bookmark" :rounded="true" severity="secondary" />
      <Button icon="pi pi-search" :rounded="true" severity="success" />
      <Button icon="pi pi-user" :rounded="true" severity="info" />
      <Button icon="pi pi-bell" :rounded="true" severity="warn" />
      <Button icon="pi pi-heart" :rounded="true" severity="help" />
      <Button icon="pi pi-times" :rounded="true" severity="danger" />
      
      <Button icon="pi pi-check" :rounded="true" :outlined="true" />
      <Button icon="pi pi-bookmark" :rounded="true" severity="secondary" :outlined="true" />
      <Button icon="pi pi-search" :rounded="true" severity="success" :outlined="true" />
      <Button icon="pi pi-user" :rounded="true" severity="info" :outlined="true" />
      <Button icon="pi pi-bell" :rounded="true" severity="warn" :outlined="true" />
      <Button icon="pi pi-heart" :rounded="true" severity="help" :outlined="true" />
      <Button icon="pi pi-times" :rounded="true" severity="danger" :outlined="true" />
      
      <Button icon="pi pi-check" :rounded="true" :text="true" :raised="true" />
      <Button icon="pi pi-bookmark" :rounded="true" :text="true" :raised="true" severity="secondary" />
      <Button icon="pi pi-search" :rounded="true" :text="true" :raised="true" severity="success" />
      <Button icon="pi pi-user" :rounded="true" :text="true" :raised="true" severity="info" />
      <Button icon="pi pi-bell" :rounded="true" :text="true" :raised="true" severity="warn" />
      <Button icon="pi pi-heart" :rounded="true" :text="true" :raised="true" severity="help" />
      <Button icon="pi pi-times" :rounded="true" :text="true" :raised="true" severity="danger" />
      
      <Button icon="pi pi-check" :rounded="true" :text="true" />
      <Button icon="pi pi-bookmark" :rounded="true" :text="true" severity="secondary" />
      <Button icon="pi pi-search" :rounded="true" :text="true" severity="success" />
      <Button icon="pi pi-user" :rounded="true" :text="true" severity="info" />
      <Button icon="pi pi-bell" :rounded="true" :text="true" severity="warn" />
      <Button icon="pi pi-heart" :rounded="true" :text="true" severity="help" />
      <Button icon="pi pi-times" :rounded="true" :text="true" severity="danger" />
    </div>
  `
});
