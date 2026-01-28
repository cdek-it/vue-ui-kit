import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Badge from 'primevue/badge';

import { ref } from 'vue';

export const Template = (args) => ({
  components: { Tab, Tabs, TabPanels, TabList, TabPanel },
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
        icon: 'ti ti-user',
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 Content',
        value: '2',
        icon: 'ti ti-user',
      },
    ]);

    return { args, tabs };
  },
  template: `
    <div class="card">
      <Tabs value="0">
        <TabList>
          <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">
            <i class="text-xl" :class="tab.icon"/>
            <span>{{ tab.title }}</span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
            <p class="m-0">{{ tab.content }}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  `,
});

export const WithBadges = (args) => ({
  components: { Tab, Tabs, TabPanels, TabList, TabPanel, Badge },
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
        icon: 'ti ti-user',
        badge: '5',
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 Content',
        value: '2',
        icon: 'ti ti-user',
        badge: '2',
      },
    ]);

    return { args, tabs };
  },
  template: `
    <div class="card">
      <Tabs value="0">
        <TabList>
          <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">
            <i class="text-xl" :class="tab.icon"/>
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
    </div>
  `,
});

export const WithDisabled = (args) => ({
  components: { Tab, Tabs, TabPanels, TabList, TabPanel, Badge },
  setup() {
    const tabs = ref([
      {
        title: 'Active Tab',
        content: 'Active Tab Content',
        value: '0',
        icon: 'ti ti-user',
        badge: '99+',
        disabled: false,
      },
      {
        title: 'Default Tab',
        content: 'Default Tab Content',
        value: '1',
        icon: 'ti ti-user',
        badge: '99+',
        disabled: false,
      },
      {
        title: 'Disabled Tab',
        content: 'Disabled Tab Content',
        value: '2',
        icon: 'ti ti-user',
        badge: '99+',
        disabled: true,
      },
    ]);

    return { args, tabs };
  },
  template: `
    <div class="card">
      <Tabs value="0">
        <TabList>
          <Tab 
            v-for="tab in tabs" 
            :key="tab.title" 
            :value="tab.value"
            :disabled="tab.disabled"
          >
            <i class="text-xl" :class="tab.icon"/>
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
    </div>
  `,
});
