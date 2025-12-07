import Tree from 'primevue/tree';
import { ref } from 'vue';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Tree },
  setup() {
    const nodes = ref([
      {
        key: '0',
        label: 'Документы',
        icon: 'pi pi-folder',
        children: [
          {
            key: '0-0',
            label: 'Работа',
            icon: 'pi pi-folder',
            children: [
              { key: '0-0-0', label: 'Отчет.doc', icon: 'pi pi-file' },
              { key: '0-0-1', label: 'Презентация.ppt', icon: 'pi pi-file' }
            ]
          },
          {
            key: '0-1',
            label: 'Личное',
            icon: 'pi pi-folder',
            children: [
              { key: '0-1-0', label: 'Фото.jpg', icon: 'pi pi-image' }
            ]
          }
        ]
      },
      {
        key: '1',
        label: 'Загрузки',
        icon: 'pi pi-folder',
        children: [
          { key: '1-0', label: 'Файл1.pdf', icon: 'pi pi-file' },
          { key: '1-1', label: 'Файл2.zip', icon: 'pi pi-file' }
        ]
      }
    ]);
    
    return { nodes };
  },
  template: `
    <div class="flex justify-center p-4">
      <Tree :value="nodes" class="w-full md:w-96" />
    </div>
  `
});

// Выбор
export const SelectionTemplate = () => ({
  components: { Tree },
  setup() {
    const nodes = ref([
      {
        key: '0',
        label: 'Документы',
        icon: 'pi pi-folder',
        children: [
          { key: '0-0', label: 'Работа', icon: 'pi pi-folder' },
          { key: '0-1', label: 'Личное', icon: 'pi pi-folder' }
        ]
      },
      {
        key: '1',
        label: 'Загрузки',
        icon: 'pi pi-folder'
      }
    ]);
    
    const selectedKey = ref();
    
    return { nodes, selectedKey };
  },
  template: `
    <div class="flex justify-center p-4">
      <div class="w-full md:w-96">
        <Tree :value="nodes" v-model:selectionKeys="selectedKey" selectionMode="single" />
        <div v-if="selectedKey" class="mt-4 p-4 bg-surface-50 rounded">
          Выбран: {{ Object.keys(selectedKey)[0] }}
        </div>
      </div>
    </div>
  `
});

// Множественный выбор
export const MultipleSelectionTemplate = () => ({
  components: { Tree },
  setup() {
    const nodes = ref([
      {
        key: '0',
        label: 'Документы',
        icon: 'pi pi-folder',
        children: [
          { key: '0-0', label: 'Работа', icon: 'pi pi-folder' },
          { key: '0-1', label: 'Личное', icon: 'pi pi-folder' }
        ]
      },
      {
        key: '1',
        label: 'Загрузки',
        icon: 'pi pi-folder',
        children: [
          { key: '1-0', label: 'Файл1.pdf', icon: 'pi pi-file' },
          { key: '1-1', label: 'Файл2.zip', icon: 'pi pi-file' }
        ]
      }
    ]);
    
    const selectedKeys = ref();
    
    return { nodes, selectedKeys };
  },
  template: `
    <div class="flex justify-center p-4">
      <Tree :value="nodes" v-model:selectionKeys="selectedKeys" selectionMode="multiple" class="w-full md:w-96" />
    </div>
  `
});

// Checkbox
export const CheckboxTemplate = () => ({
  components: { Tree },
  setup() {
    const nodes = ref([
      {
        key: '0',
        label: 'Документы',
        icon: 'pi pi-folder',
        children: [
          {
            key: '0-0',
            label: 'Работа',
            icon: 'pi pi-folder',
            children: [
              { key: '0-0-0', label: 'Отчет.doc', icon: 'pi pi-file' },
              { key: '0-0-1', label: 'Презентация.ppt', icon: 'pi pi-file' }
            ]
          },
          { key: '0-1', label: 'Личное', icon: 'pi pi-folder' }
        ]
      }
    ]);
    
    const selectedKeys = ref();
    
    return { nodes, selectedKeys };
  },
  template: `
    <div class="flex justify-center p-4">
      <Tree :value="nodes" v-model:selectionKeys="selectedKeys" selectionMode="checkbox" class="w-full md:w-96" />
    </div>
  `
});

// Фильтр
export const FilterTemplate = () => ({
  components: { Tree },
  setup() {
    const nodes = ref([
      {
        key: '0',
        label: 'Документы',
        icon: 'pi pi-folder',
        children: [
          {
            key: '0-0',
            label: 'Работа',
            icon: 'pi pi-folder',
            children: [
              { key: '0-0-0', label: 'Отчет.doc', icon: 'pi pi-file' },
              { key: '0-0-1', label: 'Презентация.ppt', icon: 'pi pi-file' }
            ]
          },
          {
            key: '0-1',
            label: 'Личное',
            icon: 'pi pi-folder',
            children: [
              { key: '0-1-0', label: 'Фото.jpg', icon: 'pi pi-image' }
            ]
          }
        ]
      }
    ]);
    
    return { nodes };
  },
  template: `
    <div class="flex justify-center p-4">
      <Tree :value="nodes" filter filterMode="strict" class="w-full md:w-96" />
    </div>
  `
});

