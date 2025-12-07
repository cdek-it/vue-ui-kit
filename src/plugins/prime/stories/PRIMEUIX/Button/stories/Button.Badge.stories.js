export default {
  title: 'PRIMEUIX/Button/Badge',
  parameters: {
    docs: {
      description: {
        component: `Buttons have built-in badge support with badge and badgeClass properties.`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-wrap justify-center gap-3 p-4">
      <Button label="Emails" badge="2" styleClass="m-0" />
      <Button label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" styleClass="m-0" :outlined="true" />
    </div>
  `
});
