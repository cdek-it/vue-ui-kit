import { PanelMenu } from 'primevue';
import CodeSnippet from '@/plugins/prime/stories/_common/CodeSnippet.vue';
import { useMenu } from '@/plugins/prime/stories/Menu/_common/composables/useMenu';

export const Template = (args) => ({
  components: { PanelMenu, CodeSnippet },
  setup() {
    const { items } = useMenu();

    return { args, items };
  },
  template: `
    <div>
      <PanelMenu :model="items" multiple/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
`,
});

export const IconItemsTemplate = (args) => ({
  components: { PanelMenu, CodeSnippet },
  setup() {
    const { items } = useMenu();

    // Добавляем иконки напрямую к реактивным items
    const iconMapping = [
      {
        icon: 'ti ti-layout-dashboard',
        childIcons: [
          'ti ti-chart-line',
          'ti ti-file-analytics',
          'ti ti-chart-bar',
          'ti ti-chart-pie',
        ],
      },
      { icon: 'ti ti-settings' },
      {
        icon: 'ti ti-folder',
        childIcons: [
          'ti ti-file-text',
          'ti ti-photo',
          'ti ti-chart-bar',
          'ti ti-video',
        ],
      },
      {
        icon: 'ti ti-user',
        childIcons: [
          'ti ti-file-text',
          'ti ti-photo',
          'ti ti-chart-bar',
          'ti ti-video',
        ],
      },
    ];

    // Добавляем иконки к существующим items
    items.value.forEach((item, index) => {
      if (iconMapping[index]) {
        item.icon = iconMapping[index].icon;
        if (item.items && iconMapping[index].childIcons) {
          item.items.forEach((childItem, childIndex) => {
            if (iconMapping[index].childIcons[childIndex]) {
              childItem.icon = iconMapping[index].childIcons[childIndex];
            }
          });
        }
      }
    });

    return { args, items };
  },
  template: `
    <div>
      <PanelMenu :model="items" multiple/>
      <br>
      <CodeSnippet :code="items"/>
    </div>
`,
});
