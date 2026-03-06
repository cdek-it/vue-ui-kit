import { ref } from 'vue';
import { Breadcrumb } from 'primevue';

export const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    const home = ref({
      icon: 'ti ti-home',
    });
    const items = ref([
      { label: 'Breadcrumb', icon: 'ti ti-user' },
      { label: 'Breadcrumb', icon: 'ti ti-user' },
      { label: 'Breadcrumb' },
    ]);

    return { args, items, home };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <Breadcrumb :home="home" :model="items"/>
      
      <Breadcrumb :model="[
        { label: 'Breadcrumb', icon: 'ti ti-user' },
        { label: 'Breadcrumb', icon: 'ti ti-user' },
        { label: 'Breadcrumb' }
      ]"/>
    </div>
`,
});
