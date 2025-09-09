import { ref } from 'vue';
import { Breadcrumb } from 'primevue';

export const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    const home = ref({
      icon: 'ti ti-home',
    });
    const items = ref([
      { label: 'Electronics', icon: 'ti ti-user' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ]);

    return { args, items, home };
  },
  template: `
    <div>
      <Breadcrumb :home="home" :model="items"/>
    </div>
`,
});
