import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Badge from 'primevue/badge';

export const Template = (args) => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  setup() {
    const tabs = ref([
      {
        title: 'Tab 1',
        content: 'Tab 1 Content',
        value: '0',
        icon: 'ti ti-user',
      },
      {
        title: 'Tab 2',
        content: 'Tab 2 Content',
        value: '1',
        icon: 'ti ti-settings',
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 Content',
        value: '2',
        icon: 'ti ti-bell',
      },
    ]);
    return { args, tabs };
  },
  template: `
    <Tabs value="0" v-bind="args">
      <TabList>
        <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">
          <i class="text-xl" :class="tab.icon" />
          <span>{{ tab.title }}</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
          <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  `,
});

export const TemplateBadge = (args) => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel, Badge },
  setup() {
    const tabs = ref([
      {
        title: 'Tab 1',
        content: 'Tab 1 Content',
        value: '0',
        icon: 'ti ti-user',
        badge: '99+',
      },
      {
        title: 'Tab 2',
        content: 'Tab 2 Content',
        value: '1',
        icon: 'ti ti-settings',
        badge: '5',
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 Content',
        value: '2',
        icon: 'ti ti-bell',
        badge: '2',
      },
    ]);
    return { args, tabs };
  },
  template: `
    <Tabs value="0" v-bind="args">
      <TabList>
        <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">
          <i class="text-xl" :class="tab.icon" />
          <span>{{ tab.title }}</span>
          <Badge :value="tab.badge" severity="success" />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
          <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  `,
});

export const TemplateDisabled = (args) => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  setup() {
    const tabs = ref([
      {
        title: 'Active Tab',
        content: 'Active Tab Content',
        value: '0',
        icon: 'ti ti-user',
        disabled: false,
      },
      {
        title: 'Default Tab',
        content: 'Default Tab Content',
        value: '1',
        icon: 'ti ti-settings',
        disabled: false,
      },
      {
        title: 'Disabled Tab',
        content: 'Disabled Tab Content',
        value: '2',
        icon: 'ti ti-bell',
        disabled: true,
      },
    ]);
    return { args, tabs };
  },
  template: `
    <Tabs value="0" v-bind="args">
      <TabList>
        <Tab
          v-for="tab in tabs"
          :key="tab.title"
          :value="tab.value"
          :disabled="tab.disabled"
        >
          <i class="text-xl" :class="tab.icon" />
          <span>{{ tab.title }}</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
          <p class="m-0">{{ tab.content }}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  `,
});
