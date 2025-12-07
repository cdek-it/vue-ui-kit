import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  template: `
    <div class="flex justify-center p-4">
      <Tabs value="0" class="w-full md:w-[600px]">
        <TabList>
          <Tab value="0">Заголовок I</Tab>
          <Tab value="1">Заголовок II</Tab>
          <Tab value="2">Заголовок III</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  `
});

// С иконками
export const IconsTemplate = () => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  template: `
    <div class="flex justify-center p-4">
      <Tabs value="0" class="w-full md:w-[600px]">
        <TabList>
          <Tab value="0">
            <i class="pi pi-home mr-2"></i>
            Главная
          </Tab>
          <Tab value="1">
            <i class="pi pi-calendar mr-2"></i>
            Календарь
          </Tab>
          <Tab value="2">
            <i class="pi pi-cog mr-2"></i>
            Настройки
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">Содержимое главной страницы</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">Содержимое календаря</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">Содержимое настроек</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  `
});

// Управляемый
export const ControlledTemplate = () => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  setup() {
    const { ref } = require('vue');
    const activeTab = ref('0');
    
    return { activeTab };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-[600px]">
        <div class="mb-4">
          <p class="text-sm">Активная вкладка: {{ activeTab }}</p>
        </div>
        <Tabs v-model="activeTab">
          <TabList>
            <Tab value="0">Заголовок I</Tab>
            <Tab value="1">Заголовок II</Tab>
            <Tab value="2">Заголовок III</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0">Содержимое панели I</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">Содержимое панели II</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0">Содержимое панели III</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  `
});

// Отключенные
export const DisabledTemplate = () => ({
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  template: `
    <div class="flex justify-center p-4">
      <Tabs value="0" class="w-full md:w-[600px]">
        <TabList>
          <Tab value="0">Заголовок I</Tab>
          <Tab value="1" disabled>Заголовок II (отключен)</Tab>
          <Tab value="2">Заголовок III</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">Содержимое панели I</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">Содержимое панели II</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">Содержимое панели III</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  `
});

