import Tabs from 'primevue/tabs';
import { Template, TemplateBadge, TemplateDisabled } from './Tabs.template';

const meta = {
  title: 'Prime/Menu/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Организует контент по вкладкам с возможностью переключения между ними. \n\n \`\`\`js \n import Tabs from 'primevue/tabs'; \n import TabList from 'primevue/tablist'; \n import Tab from 'primevue/tab'; \n import TabPanels from 'primevue/tabpanels'; \n import TabPanel from 'primevue/tabpanel'; \n \`\`\` `,
      },
    },
    designToken: { disable: false },
    designTokens: { prefix: '--p-tabs' },
  },
  argTypes: {
    scrollable: {
      control: 'boolean',
      description: 'Включает горизонтальную прокрутку списка вкладок',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    lazy: {
      control: 'boolean',
      description:
        'Ленивая инициализация панелей — содержимое рендерится только при первом открытии',
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;

// ── Default ───────────────────────────────────────────────────────────────────

export const TabsDefault = {
  name: 'Tabs',
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const tabs = ref([
  { title: 'Tab 1', content: 'Tab 1 Content', value: '0', icon: 'ti ti-user' },
  { title: 'Tab 2', content: 'Tab 2 Content', value: '1', icon: 'ti ti-settings' },
  { title: 'Tab 3', content: 'Tab 3 Content', value: '2', icon: 'ti ti-bell' },
]);
</script>

<template>
  <Tabs value="0">
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
</template>
        `,
      },
    },
  },
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const WithBadge = {
  render: TemplateBadge,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Tabs value="0">
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
</template>
        `,
      },
    },
  },
};

export const WithDisabled = {
  render: TemplateDisabled,
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Tabs value="0">
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
</template>
        `,
      },
    },
  },
};
