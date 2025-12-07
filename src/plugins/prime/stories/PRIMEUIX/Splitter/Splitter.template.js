import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

// Базовый пример
export const BasicTemplate = () => ({
  components: { Splitter, SplitterPanel },
  template: `
    <div class="flex justify-center p-4">
      <Splitter style="height: 300px" class="w-full md:w-[800px]">
        <SplitterPanel class="flex items-center justify-center">
          Панель 1
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center">
          Панель 2
        </SplitterPanel>
      </Splitter>
    </div>
  `
});

// Размеры панелей
export const SizesTemplate = () => ({
  components: { Splitter, SplitterPanel },
  template: `
    <div class="flex justify-center p-4">
      <Splitter style="height: 300px" class="w-full md:w-[800px]">
        <SplitterPanel :size="20" class="flex items-center justify-center">
          Панель 1 (20%)
        </SplitterPanel>
        <SplitterPanel :size="80" class="flex items-center justify-center">
          Панель 2 (80%)
        </SplitterPanel>
      </Splitter>
    </div>
  `
});

// Вложенный
export const NestedTemplate = () => ({
  components: { Splitter, SplitterPanel },
  template: `
    <div class="flex justify-center p-4">
      <Splitter style="height: 300px" class="w-full md:w-[800px]">
        <SplitterPanel :size="30" class="flex items-center justify-center">
          Панель 1
        </SplitterPanel>
        <SplitterPanel :size="70">
          <Splitter layout="vertical">
            <SplitterPanel class="flex items-center justify-center" :size="50">
              Панель 2
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center" :size="50">
              Панель 3
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  `
});

// Вертикальный
export const VerticalTemplate = () => ({
  components: { Splitter, SplitterPanel },
  template: `
    <div class="flex justify-center p-4">
      <Splitter layout="vertical" style="height: 300px" class="w-full md:w-[600px]">
        <SplitterPanel class="flex items-center justify-center">
          Панель 1
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center">
          Панель 2
        </SplitterPanel>
      </Splitter>
    </div>
  `
});

